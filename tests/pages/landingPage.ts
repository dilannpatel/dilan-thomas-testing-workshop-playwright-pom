import { Page } from 'playwright';
import {expect} from "@playwright/test";
import landingPage_content from "../content/landingPage_content";

class LandingPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-heading-xl`
        this.text = '.govuk-govspeak'
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(landingPage_content.pageTitle),
            // expect(page.locator(this.text)).toHaveText(landingPage_content.pText1),
            await expect(page.locator(this.text)).toContainText([
            landingPage_content.pText1,
            landingPage_content.liText1,
            landingPage_content.liText2,
            landingPage_content.pText2])         
// expect(page.locator('ul > li')).toHaveText([landingPage_content.liText1, landingPage_content.liText2])
        ]);
    }

    async continueOn(page: Page): Promise<void> {
        // Click the continue button

    }
}

export default LandingPage;
