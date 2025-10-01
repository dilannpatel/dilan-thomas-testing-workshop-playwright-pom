import { Page } from 'playwright';
import {expect} from "@playwright/test";
import questionFormatStyling_content from "../content/questionFormatStyling_content";
import daysWorkedPerWeekPage_content from "../content/daysWorkedPerWeekPage_content";


class daysWorkedPerWeekPage {

    private readonly NumberOfDaysWorkedPerWeek = '5.0';

    constructor() {
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2003-05-15/days-worked-per-week/full-year');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(questionFormatStyling_content.caption)).toHaveText(questionFormatStyling_content.captionText),
            expect(page.locator('.govuk-label-wrapper')).toContainText(daysWorkedPerWeekPage_content.questionTitle),
            expect(page.locator(questionFormatStyling_content.hintText)).toContainText(daysWorkedPerWeekPage_content.hintText),

        ]);

    }

    async answerQuestion(page: Page): Promise<void> {
        const textBox = page.locator('input#response');
        textBox.fill(this.NumberOfDaysWorkedPerWeek);

    }


    async continueOn(page : Page): Promise<void> { 
        expect(page.locator(questionFormatStyling_content.continueButton)).toHaveText(questionFormatStyling_content.continueButtonText);
        const previousPageURL = page.url();
        await page.locator(questionFormatStyling_content.continueButton).click();
        await expect(page).toHaveURL(previousPageURL + '/' + this.NumberOfDaysWorkedPerWeek);
    }
}

export default daysWorkedPerWeekPage;
