import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import IrregularHoursAndPartYearPage from "./pages/irregularHoursAndPartYearPage";
import HolidayEntitlementPage from "./pages/holidayEntitlementPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import DaysWorkedPerWeekPage from "./pages/daysWorkedPerWeekPage";



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

    const holidayEntitlementPage: HolidayEntitlementPage = new HolidayEntitlementPage();
    await holidayEntitlementPage.checkPageLoads(page);
    await holidayEntitlementPage.answerQuestion(page);
    await holidayEntitlementPage.continueOn(page);

    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkPageLoads(page);
    await workOutHolidayPage.answerQuestion(page);
    await workOutHolidayPage.continueOn(page);

    const daysWorkedPerWeekPage: DaysWorkedPerWeekPage = new DaysWorkedPerWeekPage();
    await daysWorkedPerWeekPage.checkPageLoads(page);
    await daysWorkedPerWeekPage.answerQuestion(page);
    await daysWorkedPerWeekPage.continueOn(page);
    
});


