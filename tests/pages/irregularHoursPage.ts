import { Page } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursPage_content from "../content/irregularHoursPage_content";

class IrregularHoursPage {
    private readonly caption: string;
    private readonly questionTitle: string;
    private readonly hintText: string;
    private readonly continueButton: string;


    constructor() {
        this.caption = `.govuk-caption-l`
        this.questionTitle = `.govuk-fieldset__legend`
        this.hintText = `.govuk-hint`
        this.continueButton = `.gem-c-button--bottom-margin`

    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('/calculate-your-holiday-entitlement/y');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.caption)).toHaveText(irregularHoursPage_content.caption),
            expect(page.locator(this.questionTitle)).toContainText(irregularHoursPage_content.questionTitle),
            expect(page.locator(this.hintText)).toContainText(irregularHoursPage_content.hintText),

        ]);
    }

    async answerQuestion(page: Page): Promise<void> {
        const yesLabel = page.locator('label[for="response-0"]');
        await expect(yesLabel).toHaveText('Yes');
        await yesLabel.check();
    }

    async continueOn(page: Page): Promise<void> {
        expect(page.locator(this.continueButton)).toHaveText(irregularHoursPage_content.continueButton);
        const previousPageURL = page.url();
        await page.locator(this.continueButton).click();
        await expect(page).toHaveURL(previousPageURL + '/irregular-hours-and-part-year');
    }
}

export default IrregularHoursPage;
