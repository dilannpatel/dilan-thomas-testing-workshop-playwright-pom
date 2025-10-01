import { Page } from 'playwright';
import {expect} from "@playwright/test";
import landingPage_content from "../content/landingPage_content";
import questionFormatStyling_content from "../content/questionFormatStyling_content";


class LandingPage {
    private readonly title: string;
    private readonly text: string;
    private readonly startButton: string;

    

    constructor() {
        this.title = `.govuk-heading-xl`
        this.text = '.govuk-govspeak'
        this.startButton = '.govuk-button--start'
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(questionFormatStyling_content.captionText),
            expect(page.locator(this.text)).toContainText(landingPage_content.pText1),
            expect(page.locator(this.text)).toContainText(landingPage_content.liText1),
            expect(page.locator(this.text)).toContainText(landingPage_content.liText2),
            expect(page.locator(this.text)).toContainText(landingPage_content.pText2)

        ]);
    }

    async continueOn(page: Page): Promise<void> {
        expect(page.locator(this.startButton)).toHaveText(landingPage_content.button);
        await page.locator(this.startButton).click();
        await expect(page).toHaveURL('/calculate-your-holiday-entitlement/y');
    }
}

export default LandingPage;
