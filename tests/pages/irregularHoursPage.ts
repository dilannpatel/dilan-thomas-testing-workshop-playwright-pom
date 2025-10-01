import { Page } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursPage_content from "../content/irregularHoursPage_content";
import questionFormatStyling_content from "../content/questionFormatStyling_content";


class IrregularHoursPage {


    constructor() {
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('/calculate-your-holiday-entitlement/y');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(questionFormatStyling_content.caption)).toHaveText(questionFormatStyling_content.captionText),
            expect(page.locator(questionFormatStyling_content.questionTitle)).toContainText(irregularHoursPage_content.questionTitle),
            expect(page.locator(questionFormatStyling_content.hintText)).toContainText(irregularHoursPage_content.hintText),

        ]);
    }

    async answerQuestion(page: Page): Promise<void> {
        const yesLabel = page.locator('label[for="response-0"]');
        await expect(yesLabel).toHaveText(irregularHoursPage_content.label1);

        const noLabel = page.locator('label[for="response-1"]');
        await expect(noLabel).toHaveText(irregularHoursPage_content.label2);

        
        await yesLabel.check();
    }

    async continueOn(page: Page): Promise<void> {
        expect(page.locator(questionFormatStyling_content.continueButton)).toHaveText(questionFormatStyling_content.continueButtonText);
        const previousPageURL = page.url();
        await page.locator(questionFormatStyling_content.continueButton).click();
        await expect(page).toHaveURL(previousPageURL + '/irregular-hours-and-part-year');
    }
}

export default IrregularHoursPage;
