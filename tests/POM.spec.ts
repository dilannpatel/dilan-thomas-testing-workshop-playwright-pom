import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import IrregularHoursAndPartYearPage from "./pages/irregularHoursAndPartYearPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.answerQuestion(page);
    await irregularHoursPage.continueOn(page);

    const irregularHoursAndPartYearPage: IrregularHoursAndPartYearPage = new IrregularHoursAndPartYearPage();
    await irregularHoursAndPartYearPage.checkPageLoads(page);
    await irregularHoursAndPartYearPage.answerQuestion(page);
    await irregularHoursAndPartYearPage.continueOn(page);
});


