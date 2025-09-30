import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.answerQuestion(page);
    await irregularHoursPage.continueOn(page);
});


