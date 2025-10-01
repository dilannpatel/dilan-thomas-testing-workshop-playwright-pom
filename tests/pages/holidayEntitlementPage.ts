import { Page } from 'playwright';
import {expect} from "@playwright/test";
import questionFormatStyling_content from "../content/questionFormatStyling_content";
import holidayEntitlementPage_content from "../content/holidayEntitlementPage_content";


class holidayEntitlementPage {

    private readonly day = '23';
    private readonly month = '08';
    private readonly year = '2003';

    constructor() {
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2003-05-15');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(questionFormatStyling_content.caption)).toHaveText(questionFormatStyling_content.captionText),
            expect(page.locator(questionFormatStyling_content.questionTitle)).toContainText(holidayEntitlementPage_content.questionTitle),
            expect(page.locator(questionFormatStyling_content.hintText)).toContainText(holidayEntitlementPage_content.hintText),

        ]);

    }

    async answerQuestion(page: Page): Promise<void> {
        const label1 = page.locator('label[for="response-0"]');
        await expect(label1).toHaveText(holidayEntitlementPage_content.label1);

        const label2 = page.locator('label[for="response-1"]');
        await expect(label2).toHaveText(holidayEntitlementPage_content.label2);

        const label3 = page.locator('label[for="response-2"]');
        await expect(label3).toHaveText(holidayEntitlementPage_content.label3);

        const label4 = page.locator('label[for="response-3"]');
        await expect(label4).toHaveText(holidayEntitlementPage_content.label4);

        const label5 = page.locator('label[for="response-4"]');
        await expect(label5).toHaveText(holidayEntitlementPage_content.label5);


        await label1.check();
    }


    async continueOn(page : Page): Promise<void> {
        expect(page.locator(questionFormatStyling_content.continueButton)).toHaveText(questionFormatStyling_content.continueButtonText);
        const previousPageURL = page.url();
        await page.locator(questionFormatStyling_content.continueButton).click();
        await expect(page).toHaveURL(previousPageURL + '/' + holidayEntitlementPage_content.label1.replace(/ /g, '-'));
    }
}

export default holidayEntitlementPage;
