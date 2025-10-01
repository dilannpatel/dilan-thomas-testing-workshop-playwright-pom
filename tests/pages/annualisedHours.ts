import { Page } from 'playwright';
import {expect} from "@playwright/test";
import annualisedHours_content from "../content/annualisedHours_content";

class AnnualisedHours {
    private readonly caption: string;
    private readonly questionTitle: string;
    private readonly liText1: string;
    private readonly liText2: string;
    private readonly liText3: string;
    private readonly liText4: string;
    private readonly continueButton: string;


    // private readonly day = '23';
    // private readonly month = '08';
    // private readonly year = '2003';

    constructor() {
        this.caption = `.govuk-caption-l`
        this.questionTitle = `.govuk-fieldset__legend`
        this.liText1 = 'label[for="response-0"]'
        this.liText2 = 'label[for="response-1"]'
        this.liText3 = 'label[for="response-2"]'
        this.liText4 = 'label[for="response-3"]'
        this.continueButton = `.gem-c-button--bottom-margin`
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2001-01-01/annualised-hours');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.caption)).toHaveText(annualisedHours_content.caption),
            expect(page.locator(this.questionTitle)).toContainText(annualisedHours_content.questionTitle),
            expect(page.locator(this.liText1)).toContainText(annualisedHours_content.liText1),
            expect(page.locator(this.liText2)).toContainText(annualisedHours_content.liText2),
            expect(page.locator(this.liText3)).toContainText(annualisedHours_content.liText3),
            expect(page.locator(this.liText4)).toContainText(annualisedHours_content.liText4),

        ]);
    }

async answerQuestion(page: Page): Promise<void> {
        const label1 = page.locator('label[for="response-0"]');
        await label1.check();
    }




    async checkSummaryLists(page: Page): Promise<void> {
        const summaryList = page.locator('.govuk-summary-list');
        
    }


    async continueOn(page : Page): Promise<void> {
        expect(page.locator(this.continueButton)).toHaveText(annualisedHours_content.continueButton);
        const previousPageURL = page.url();
        await page.locator(this.continueButton).click();
        // await expect(page).toHaveURL(previousPageURL + '/' + this.year + '-' + this.month + '-' + this.day);
    }
}

export default AnnualisedHours;
