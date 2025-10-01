import { Page } from 'playwright';
import {expect} from "@playwright/test";
import questionFormatStyling_content from "../content/questionFormatStyling_content";
import workOutHolidayPage_content from "../content/workOutHolidayPage_content";


class holidayEntitlementPage {

    constructor() {
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2003-05-15/days-worked-per-week');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(questionFormatStyling_content.caption)).toHaveText(questionFormatStyling_content.captionText),
            expect(page.locator(questionFormatStyling_content.questionTitle)).toContainText(workOutHolidayPage_content.questionTitle)
        ]);

    }

    async answerQuestion(page: Page): Promise<void> {
        const label1 = page.locator('label[for="response-0"]');
        await expect(label1).toHaveText(workOutHolidayPage_content.label1);

        const label2 = page.locator('label[for="response-1"]');
        await expect(label2).toHaveText(workOutHolidayPage_content.label2);

        const label3 = page.locator('label[for="response-2"]');
        await expect(label3).toHaveText(workOutHolidayPage_content.label3);

        const label4 = page.locator('label[for="response-3"]');
        await expect(label4).toHaveText(workOutHolidayPage_content.label4);

        await label1.check();
    }


    async continueOn(page : Page): Promise<void> {
        expect(page.locator(questionFormatStyling_content.continueButton)).toHaveText(questionFormatStyling_content.continueButtonText);
        const previousPageURL = page.url();
        await page.locator(questionFormatStyling_content.continueButton).click();
        await expect(page).toHaveURL(previousPageURL + '/' + 'full-year');
    }
}

export default holidayEntitlementPage;
