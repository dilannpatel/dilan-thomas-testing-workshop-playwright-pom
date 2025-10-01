import { Page } from 'playwright';
import {expect} from "@playwright/test";
import questionFormatStyling_content from "../content/questionFormatStyling_content";
import irregularHoursPage_content from "../content/irregularHoursPage_content";
import irregularHoursAndPartYearPage_content from "../content/irregularHoursAndPartYearPage_content";
import holidayEntitlementPage_content from "../content/holidayEntitlementPage_content";
import workOutHolidayPage_content from "../content/workOutHolidayPage_content";
import daysWorkedPerWeekPage_content from "../content/daysWorkedPerWeekPage_content";
import infomationBasedOnAnswersPage_content from "../content/infomationBasedOnAnswersPage_content";
import { text } from 'stream/consumers';


class infomationBasedOnAnswersPage {

    private readonly NumberOfDaysWorkedPerWeek = '5.0';

    constructor() {
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2003-05-15/days-worked-per-week/full-year/5.0');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(questionFormatStyling_content.captionXL)).toHaveText(questionFormatStyling_content.captionText+':'),
            expect(page.locator('.govuk-heading-xl')).toContainText(infomationBasedOnAnswersPage_content.questionTitle),

        ]);

    }

    async displayInformation(page: Page): Promise<void> {
        const textBox = page.locator('.gem-c-govspeak');

        const summaryDiv = textBox.locator('.summary');
        await expect(summaryDiv).toHaveText(infomationBasedOnAnswersPage_content.summaryText);

        await expect(textBox).toContainText(infomationBasedOnAnswersPage_content.pText1);
        await expect(textBox).toContainText(infomationBasedOnAnswersPage_content.pText2);
        await expect(textBox).toContainText(infomationBasedOnAnswersPage_content.li1);
        await expect(textBox).toContainText(infomationBasedOnAnswersPage_content.li2);
        await expect(textBox).toContainText(infomationBasedOnAnswersPage_content.li3);
        await expect(textBox).toContainText(infomationBasedOnAnswersPage_content.li4);
        await expect(textBox).toContainText(infomationBasedOnAnswersPage_content.pText3);
    }


    async checkYourAnswers(page: Page): Promise<void> {
        const summaryList = page.locator('.govuk-summary-list');
        await expect(summaryList.locator('.govuk-summary-list__row')).toHaveCount(5);

        const firstQuestion = summaryList.locator('.govuk-summary-list__row').nth(0);
        await expect(firstQuestion.locator('.govuk-summary-list__key')).toHaveText(irregularHoursPage_content.questionTitle);
        await expect(firstQuestion.locator('.govuk-summary-list__value')).toHaveText(irregularHoursPage_content.label1);

        const secondQuestion = summaryList.locator('.govuk-summary-list__row').nth(1);
        await expect(secondQuestion.locator('.govuk-summary-list__key')).toHaveText(irregularHoursAndPartYearPage_content.questionTitle);
        await expect(secondQuestion.locator('.govuk-summary-list__value')).toHaveText("15 May 2003");

        const thirdQuestion = summaryList.locator('.govuk-summary-list__row').nth(2);
        await expect(thirdQuestion.locator('.govuk-summary-list__key')).toHaveText(holidayEntitlementPage_content.questionTitle);
        await expect(thirdQuestion.locator('.govuk-summary-list__value')).toHaveText(holidayEntitlementPage_content.label1);

        const fourthQuestion = summaryList.locator('.govuk-summary-list__row').nth(3);
        await expect(fourthQuestion.locator('.govuk-summary-list__key')).toHaveText(workOutHolidayPage_content.questionTitle);
        await expect(fourthQuestion.locator('.govuk-summary-list__value')).toHaveText(workOutHolidayPage_content.label1);

        const fifthQuestion = summaryList.locator('.govuk-summary-list__row').nth(4);
        await expect(fifthQuestion.locator('.govuk-summary-list__key')).toHaveText(daysWorkedPerWeekPage_content.questionTitle);
        await expect(fifthQuestion.locator('.govuk-summary-list__value')).toHaveText(this.NumberOfDaysWorkedPerWeek);
    }


    // async continueOn(page : Page): Promise<void> { 
    //     expect(page.locator(questionFormatStyling_content.continueButton)).toHaveText(questionFormatStyling_content.continueButtonText);
    //     const previousPageURL = page.url();
    //     await page.locator(questionFormatStyling_content.continueButton).click();
    //     await expect(page).toHaveURL(previousPageURL + '/' + this.NumberOfDaysWorkedPerWeek);
    // }
}

export default infomationBasedOnAnswersPage;
