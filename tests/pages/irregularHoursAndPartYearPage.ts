import { Page } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursAndPartYearPage_content from "../content/irregularHoursAndPartYearPage_content";
import questionFormatStyling_content from "../content/questionFormatStyling_content";

class IrregularHoursAndPartYearPage {

    private readonly day = '23';
    private readonly month = '08';
    private readonly year = '2003';

    constructor() {
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(questionFormatStyling_content.caption)).toHaveText(questionFormatStyling_content.captionText),
            expect(page.locator(questionFormatStyling_content.questionTitle)).toContainText(irregularHoursAndPartYearPage_content.questionTitle),
            expect(page.locator(questionFormatStyling_content.hintText)).toContainText(irregularHoursAndPartYearPage_content.hintText),

        ]);

    }

    async answerQuestion(page: Page): Promise<void> {
        const dayBox = page.locator('label[for="response-0"]');
        expect(dayBox).toHaveText(irregularHoursAndPartYearPage_content.dayBoxText);
        await dayBox.fill(this.day);

        const monthBox = page.locator('label[for="response-1"]');
        expect(monthBox).toHaveText(irregularHoursAndPartYearPage_content.monthBoxText);
        await monthBox.fill(this.month);

        const yearBox = page.locator('label[for="response-2"]');
        expect(yearBox).toHaveText(irregularHoursAndPartYearPage_content.yearBoxText);
        await yearBox.fill(this.year);
    }


    async continueOn(page : Page): Promise<void> {
        expect(page.locator(questionFormatStyling_content.continueButton)).toHaveText(questionFormatStyling_content.continueButtonText);
        const previousPageURL = page.url();
        await page.locator(questionFormatStyling_content.continueButton).click();
        await expect(page).toHaveURL(previousPageURL + '/' + this.year + '-' + this.month + '-' + this.day);
    }
}

export default IrregularHoursAndPartYearPage;
