import { Page } from 'playwright';
import {expect} from "@playwright/test";
import landingPage_content from "../content/landingPage_content";

class LandingPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-heading-xl`
        // this.text =
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(landingPage_content.pageTitle),
            // Continue checking the elements after adding them to the content file!
        ]);
    }

    async continueOn(page: Page): Promise<void> {
        // Click the continue button
        // change to landingpage

    }
}

export default LandingPage;
