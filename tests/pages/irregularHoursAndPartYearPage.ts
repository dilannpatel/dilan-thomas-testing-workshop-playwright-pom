import { Page } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursAndPartYearPage_content from "../content/irregularHoursAndPartYearPage_content";

class IrregularHoursAndPartYearPage {
    private readonly caption: string;
    private readonly questionTitle: string;
    private readonly hintText: string;
    private readonly continueButton: string;

    private readonly day = '23';
    private readonly month = '08';
    private readonly year = '2003';

    constructor() {
        this.caption = `.govuk-caption-l`
        this.questionTitle = `.govuk-fieldset__legend`
        this.hintText = `.govuk-hint`
        this.continueButton = `.gem-c-button--bottom-margin`
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.caption)).toHaveText(irregularHoursAndPartYearPage_content.caption),
            expect(page.locator(this.questionTitle)).toContainText(irregularHoursAndPartYearPage_content.questionTitle),
            expect(page.locator(this.hintText)).toContainText(irregularHoursAndPartYearPage_content.hintText),

        ]);
    }

    async answerQuestion(page: Page): Promise<void> {
        const dayBox = page.locator('label[for="response-0"]');
        await dayBox.fill(this.day);

        const monthBox = page.locator('label[for="response-1"]');
        await monthBox.fill(this.month);

        const yearBox = page.locator('label[for="response-2"]');
        await yearBox.fill(this.year);
    }

    async checkSummaryLists(page: Page): Promise<void> {
        const summaryList = page.locator('.govuk-summary-list');
        
    }


    async continueOn(page : Page): Promise<void> {
        expect(page.locator(this.continueButton)).toHaveText(irregularHoursAndPartYearPage_content.continueButton);
        const previousPageURL = page.url();
        await page.locator(this.continueButton).click();
        await expect(page).toHaveURL(previousPageURL + '/' + this.year + '-' + this.month + '-' + this.day);
    }
}

export default IrregularHoursAndPartYearPage;
