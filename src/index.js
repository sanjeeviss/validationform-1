import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Outlet,Route,Routes } from 'react-router-dom';
import ServiceCard from './components/servicecard';
import Layoutcomp from './components/layoutcomp'
import DailyTimeCardForm from './components/DailyTimeCard/DailyTimeCardForm';
import DailyTimeCardTables from './components/DailyTimeCard/DailyTimeCardTables';
import AttendenceForm from './components/AttendeceCeiling/attendenceform';
import AttendenceTable from './components/AttendeceCeiling/AttendenceTable';
import AssetsTable from './components/Assets/AssetsTable';
import SampleForm from './components/Assets/sampleform';
import EarnDeductTable from './components/Earn Deduct/EarnDeductTable';
import EarnDeductForm from './components/Earn Deduct/EarnDeductForm';
import Form7table from './components/Form7/Form7table';
import SampleForm7 from './components/Form7/form7form';
import HrAuthForm from './components/hrauthentication/HrAuthenticationForm';
import HrAuthenticationTable from './components/hrauthentication/HrAuthenticationTable';
import Hrmcoursetable from './components/hrmcourse/hrmcoursetable';
import CourseForm from './components/hrmcourse/HrmmCourseForm';
import Hrmskillmastertable from './components/hrmskillmaster/Hrmskillmastertable';
import SkillsMasterForm from './components/hrmskillmaster/HrmmSkillsMasterForm';
import HrmmSpecializationtable from './components/hrmSpecilization/HrmmSpecializationtable';
import SpecializationForm from './components/hrmSpecilization/HrmmSpecializationForm';
import PaymJobStatusTable from './components/JobStatus/paymJobStatusTables';
import JobStatusForm from './components/JobStatus/paymJobStatusForm';
import LeaveAllocationMasterTable from './components/LeaveAllocationMaster/LeaveAllocationMasterTable';
import LeaveAllocationForm from './components/LeaveAllocationMaster/LeaveAllocationMasterForm';
import LeaveApplyTable from './components/LeaveApply/LeaveApplyTable';
import LeaveAppForm from './components/LeaveApply/LeaveApplyForm';
import ApprovehrForm from './components/LeaveApproveHr/LeaveApproveHrForm';
import LeaveApproveHrTable from './components/LeaveApproveHr/LeaveApproveHrTable';
import ApproveManagerForm from './components/LeaveApproveManager/LeaveApproveManagerForm';
import LeaveApproveManagerTable from './components/LeaveApproveManager/LeaveApproveManagerTable';
import LeaveSettleForm from './components/LeaveSettlement/LeaveSettlementForm';
import LeaveSettlementTable from './components/LeaveSettlement/LeaveSettlementTable';
import LoanEntForm from './components/LoanEntry/LoanEntryForm';
import LoanEntryTable from './components/LoanEntry/LoanEntryTable';
import LoanPostForm from './components/LoanPost/LoanPostForm';
import LoanPostTable from './components/LoanPost/LoanPostTable';
import LoanPreclosForm from './components/LoanPreCloser/LoanPreclosureForm';
import LoanPreCloserTable from './components/LoanPreCloser/LoanPreCloserTable';
import OndutyForm from './components/OnDuty/ondutyForm';
import OnDutyTable from './components/OnDuty/OnDutyTable';
import OTSlabForm from './components/OtsLabs/OTSLabForm';
import OtsLabTable from './components/OtsLabs/OtsLabTable';
import PayInputTable from './components/payinputs/payInputTable';
import PayinputForm from './components/payinputs/PayInputForm';
import PaymAttBonusTable from './components/PaymAttBonus/PaymAttBonusTable';
import PaymattbonusForm from './components/PaymAttBonus/PaymAttBonusForm';
import PaymBankTable from './components/PaymBank/paymbankTables';
import PaybankForm from './components/PaymBank/paymbankForm';
import PayBranchForm from './components/PaymBranch/PaymBranchForm';
import PaymcarryForwardTable from './components/paymcarryForward/PaymcarryForwardTable';
import PaymCarrForwardForm from './components/paymcarryForward/paymCarryForwardForm';
import Paymcategoryform from './components/PaymCategory/PaymCategoryForm';
import PaymCategoryTable from './components/PaymCategory/PaymCategoryTable';
import PaycompanyTable from './components/paymCompany/PaycompanyTable';
import CompanyForm from './components/paymCompany/paymCompanyForm';
import ComputationForm from './components/PaymComputation/paymComputationForm';
import PaymComputationtables from './components/PaymComputation/PaymComputationtables';
import PaymDeductionTable from './components/PaymDeduction/paymDeductionTable';
import DeductionForm from './components/PaymDeduction/paymDeductionForm';
import PaymDesignationTable from './components/paymDesignation/PaymDesignationTable';
import DesignationForm from './components/paymDesignation/PaymDesignationForm';
import PaymDIvisionTable from './components/paymDivision/PaymDivisionTable';
import DivisionForm from './components/paymDivision/paymDivisionForm';
import PaymEarningsTable from './components/PaymEarnings/PaymEarningTable';
import EarningsForm from './components/PaymEarnings/paymEarningsForm';
import PaymEmpDeductionTable from './components/PaymEmpDeduction/PaymEmpDeductionTable';
import EmpDeductionForm from './components/PaymEmpDeduction/paymEmpDeductionForm';
import PaymEmployeeLeaveTable from './components/PaymEmpEarning/PaymEmpEarningTable';
import EmpEarningsForm from './components/PaymEmpEarning/paymEmpEarningsForm';
import PaymEmpTable from './components/paymEmployee/PaymEmpTable';
import EmployeeForm from './components/paymEmployee/paymEmployeeForm';
import PaymEmployeeForm from './components/paymEmployee/paymEmployeeForm';
import EmployeeLeaveForm from './components/PaymEmployeeLeave/paymEmployeeLeaveForm';
import PaymEmployeeProfile1Tables from './components/paymEmployeeProfile/paymEmployeeProfileTables';
import EmployeeProfile1Form from './components/paymEmployeeProfile/paymEmployeeProfile1Form';
import PaymEmployeeWorkDetailTables from './components/PaymEmployeeWorkDetails/paymEmployeeWorkDetailsTable';
import EmployeeWorkDetailsForm from './components/PaymEmployeeWorkDetails/paymEmployeeWorkDetailsForm';
import PaymEncashmentDetailsTables from './components/PaymEncashmentDetails/paymEncashmentDetailsTable';
import EncashmentDetailsForm from './components/PaymEncashmentDetails/paymEncashmentDetailsForm';
import PaymgradeTables from './components/PaymGrade/PaymGradeTables';
import GradeForm from './components/PaymGrade/paymGradeForm';
import PaymHolidayTables from './components/PaymHolidays/PaymHolidaysTables';
import HolidayForm from './components/PaymHolidays/paymHolidaysForm';
import PaymleaveTables from './components/PaymLeave/paymleaveTable';
import LeaveForm from './components/PaymLeave/paymleaveForm';
import Paymleaveallocation1Tables from './components/PaymLeaveAllocation1/paymLeaveAllocation1table';
import LeaveAllocation1Form from './components/PaymLeaveAllocation1/paymleaveAllocation1Form';
import PaymlevelTables from './components/PaymLevel/paymLevelTables';
import LevelForm from './components/PaymLevel/paymLevelForm';
import PaymLoanTable from './components/PaymLoan/PaymLoanTable';
import Sample28 from './components/PaymLoan/PayLoanForm';
import PayLoanForm from './components/PaymLoan/PayLoanForm';
import PaymLoanDiminishingTable from './components/PaymloanDiminshing/paymloandiminshingTable';
import Sample27 from './components/PaymloanDiminshing/paymloandiminishingForm';
import Sample26 from './components/PaymOverHeadingCost/paymoverheadingCostForm';
import PaymOverHeadingcostTable from './components/PaymOverHeadingCost/paymoverheadingcostTable';
import PaympfTable from './components/PaymPaybill/paympaybillTables';
import Sample25 from './components/PaymPaybill/paympaybillForm';
import PaymPaybillTable from './components/PaymPf/paympfTable';
import Sample24 from './components/PaymPf/paymPfForm';
import PaymshiftTable from './components/PaymShift/paymshiftTable';
import Sample23 from './components/PaymShift/paymshiftform';
import PaympayoutputloanTable from './components/PayoutputLoan/payoutputloanTable';
import Sample22 from './components/PayoutputLoan/payoutputloanForm';
import PayrollFinalSettlemetTable from './components/Payrollfinalsettlement/payrollfinalsettlementTables';
import Sample21 from './components/Payrollfinalsettlement/payrollfinalsettlementForm';
import PfepTable from './components/PfEp/pfepTable';
import Sample20 from './components/PfEp/pfepform';
import PfepfTable from './components/PfEPF/pfepfTable';
import Sample19 from './components/PfEPF/pfEpfForm';
import PunchdetailsTable from './components/PunchDetails/punchdetailsTables';
import Sample18 from './components/PunchDetails/punchdetailform';
import SalaryPeriodTable from './components/SalaryPeriod/salaryperiodTable';
import Sample17 from './components/SalaryPeriod/salaryperiodform';
import Sample16 from './components/SalaryStructure/salarystructureform';
import SalaryStructureTable from './components/SalaryStructure/salarystructureTable';
import ShiftBalanceTable from './components/ShiftBalance/shiftbalanceTable';
import Sample15 from './components/ShiftBalance/shiftbalanceform';
import ShiftDetailsTable from './components/ShiftDetails/shiftdetailsTables';
import DetailsForm from './components/ShiftDetails/shiftdetailform';
import ShiftMonthTable from './components/ShiftMonth/shiftmonthTable';
import Sample13 from './components/ShiftMonth/shiftmonthform';
import ShiftPatternTable from './components/ShiftPattern/shiftpatternTable';
import Sample12 from './components/ShiftPattern/shiftpatternform';
import TempshiftdetailsTables from './components/TempShiftDetails/tempshiftdetailsTable';
import YearEndTable from './components/Yearend/yearendTable';
import Sample1 from './components/Yearend/yearendform';
import TempShiftDetailsForm from './components/TempShiftDetails/tempshiftdetailsForm';
import PaymEmployeeEarningsTable from './components/PaymEmpEarning/PaymEmpEarningTable';
import PaymEmployeeLeaveForm from './components/PaymEmployeeLeave/paymEmployeeLeaveForm';
import PaymEmpLeaveTable from './components/PaymEmployeeLeave/PaymEmployeeLeaveTable';
import PaymEmpLeaveForm from './components/PaymEmployeeLeave/paymEmployeeLeaveForm';
import PaymEmpEarningsTable from './components/PaymEmpEarning/PaymEmpEarningTable';
import PaymEmpEarningsForm from './components/PaymEmpEarning/paymEmpEarningsForm';
import PaymEarnTable from './components/PaymEarnings/PaymEarningTable';
import PaymEarnForm from './components/PaymEarnings/paymEarningsForm';
import LoginForm from './components/Authentication/Login';
import Paycalc from './components/payslips/Payslips';
import TimesheetManage from './components/Timesheet/TimeSheetManger';
import TimesheetManager from './components/Timesheet/TimeSheetManger';
import PaymDepartmentTable from './components/paymDepartment/paymDepartmentTable';
import DepartmentForm from './components/paymDepartment/paymDepartmentForm';
import PaymBranchtable from './components/PaymBranch/PaymBranchTablenew';
import Mrgabs from './components/ReportFormates/AttendanceD2';
import ButtonEsi from './components/ReportFormates/AttendanceD2Button';
import ButtonEsi2 from './components/ReportFormates/OTHoursReportsButtonPrint';
import ButtonEsi3 from './components/ReportFormates/OTSummaryButton';
import ButtonEsi4 from './components/ReportFormates/WorkDetailsButtonPrint';
import ButtonEsi5 from './components/ReportFormates/AttedanceDetailsButton';
import ButtonEsi6 from './components/ReportFormates/AbsentDetailsButton';
import ButtonEsi7 from './components/ReportFormates/AdvanceReportButton';
import ButtonEsi8 from './components/ReportFormates/TAandDButton';
import MasterrollButton from './components/ReportFormates/masterrollButton';
import ButtonEsi18 from './components/ReportFormates/AttendanceD2Button';
import MasterrollButton360 from './components/ReportFormates/OTHoursReportsButtonPrint';
import Masterroll07 from './components/ViewEmployeeProfile';
import Sanjeevi from './components/ViewEmployeeProfile';
import EmployeeProfileForm from './components/ViewEmployeeProfile';
import EmployeeImageForm from './components/EmployeeImage';
import ProfileCard008 from './components/ViewBranchDetails';
import Leaveapprovenew from './components/ApprovalForm';
import AbsentAtt from './components/ReportFormates/AbsentAttReports';
import Bankreg from './components/ReportFormates/BankRegButton';
import BANKREGISTER from './components/ReportFormates/BankRegButton';
import DashBoard from './components/dashboared/dashboared';
import PaymPfTable from './components/PaymPf/paympfTable';
import Chatbot from './components/Chatbot/chatbot';
import SplitButton from './components/Chatbot/chatbots';
import DropdownButton from './components/Chatbot/chatbots';
import DrawerExample from './components/Chatbot/chatbots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
 
   <Routes>
     <Route path="/" element={<App/>}>
     <Route path="/layout" element={<Layoutcomp/>}/>  
     <Route path='/home' element={<ServiceCard/>}></Route> 
     <Route path='/hr' element={<DashBoard/>}></Route>
     <Route path='/AssetsTable' element={<AssetsTable/>}></Route>
     <Route path='/SampleForm' element={<SampleForm/>}></Route>


      <Route path="/dailytimecardtable" element={<DailyTimeCardTables/>}></Route>
     <Route path="/dailytimecardform" element={<DailyTimeCardForm/>}></Route> 

     <Route path='/AttendenceTable' element={<AttendenceTable/>}></Route>
     <Route path='/AttendenceForm' element={<AttendenceForm/>}></Route>

     <Route path='/EarnDeductTable' element={<EarnDeductTable/>}></Route>
     <Route path='/EarnDeductForm' element={<EarnDeductForm/>}></Route>

     <Route path='/Form7table' element={<Form7table/>}></Route>
     <Route path='/SampleForm7' element={<SampleForm7/>}></Route>

     <Route path='/HrAuthenticationTable' element={<HrAuthenticationTable/>}></Route>
     <Route path='/HrAuthForm' element={<HrAuthForm/>}></Route>

      <Route path='/Hrmcoursetable' element={<Hrmcoursetable/>}></Route>
     <Route path='/CourseForm' element={<CourseForm/>}></Route>

     <Route path='/Hrmskillmastertable' element={<Hrmskillmastertable/>}></Route>
     <Route path='/SkillsMasterForm' element={<SkillsMasterForm/>}></Route>

     <Route path='/HrmmSpecializationtable' element={<HrmmSpecializationtable/>}></Route>
     <Route path='/SpecializationForm' element={<SpecializationForm/>}></Route>

    <Route path='/PaymJobStatusTable' element={<PaymJobStatusTable/>}></Route>
     <Route path='/JobStatusForm' element={<JobStatusForm/>}></Route>

     <Route path='/LeaveAllocationMasterTable' element={<LeaveAllocationMasterTable/>}></Route>
     <Route path='/LeaveAllocationForm' element={<LeaveAllocationForm/>}></Route> 

     <Route path='/LeaveApplyTable' element={<LeaveApplyTable/>}></Route>
     <Route path='/LeaveAppForm' element={<LeaveAppForm/>}></Route> 

     <Route path='/LeaveApproveHrTable' element={<LeaveApproveHrTable/>}></Route>
     <Route path='/ApprovehrForm' element={<ApprovehrForm/>}></Route> 

     <Route path='/LeaveApproveManagerTable' element={<LeaveApproveManagerTable/>}></Route>
     <Route path='/ApproveManagerForm' element={<ApproveManagerForm/>}></Route> 

     <Route path='/LeaveSettlementTable' element={<LeaveSettlementTable/>}></Route>
     <Route path='/LeaveSettleForm' element={<LeaveSettleForm/>}></Route> 

     <Route path='/LoanEntryTable' element={<LoanEntryTable/>}></Route>
     <Route path='/LoanEntForm' element={<LoanEntForm/>}></Route> 

     <Route path='/LoanPostTable' element={<LoanPostTable/>}></Route>
     <Route path='/LoanPostForm' element={<LoanPostForm/>}></Route> 

     <Route path='/LoanPreCloserTable' element={<LoanPreCloserTable/>}></Route>
     <Route path='/LoanPreclosForm' element={<LoanPreclosForm/>}></Route>

     <Route path='/OnDutyTable' element={<OnDutyTable/>}></Route>
     <Route path='/OndutyForm' element={<OndutyForm/>}></Route> 

     <Route path='/OtsLabTable' element={<OtsLabTable/>}></Route>
     <Route path='/OTSlabForm' element={<OTSlabForm/>}></Route> 

     <Route path='/PayInputTable' element={<PayInputTable/>}></Route>
     <Route path='/PayinputForm' element={<PayinputForm/>}></Route> 

     <Route path='/PaymAttBonusTable' element={<PaymAttBonusTable/>}></Route>
     <Route path='/PaymattbonusForm' element={<PaymattbonusForm/>}></Route> 

     <Route path='/PaymBankTable' element={<PaymBankTable/>}></Route>
     <Route path='/PaybankForm' element={<PaybankForm/>}></Route> 

     <Route path='/PaymBranchtable' element={<PaymBranchtable/>}></Route>
     <Route path='/PayBranchForm' element={<PayBranchForm/>}></Route> 

     <Route path='/PaymcarryForwardTable' element={<PaymcarryForwardTable/>}></Route>
     <Route path='/PaymCarrForwardForm' element={<PaymCarrForwardForm/>}></Route> 

     <Route path='/PaymCategoryTable' element={<PaymCategoryTable/>}></Route>
     <Route path='/Paymcategoryform' element={<Paymcategoryform/>}></Route> 

     <Route path='/PaycompanyTable' element={<PaycompanyTable/>}></Route>
     <Route path='/CompanyForm' element={<CompanyForm/>}></Route> 

     <Route path='/PaymComputationtables' element={<PaymComputationtables/>}></Route>
     <Route path='/ComputationForm' element={<ComputationForm/>}></Route> 

     <Route path='/PaymEarnTable' element={<PaymEarnTable/>}></Route>
     <Route path='/PaymEarnForm' element={<PaymEarnForm/>}></Route> 

     

     <Route path='/PaymDeductionTable' element={<PaymDeductionTable/>}></Route>
     <Route path='/DeductionForm' element={<DeductionForm/>}></Route> 
     
     <Route path='/PaymDepartmentTable' element={<PaymDepartmentTable/>}></Route>
     <Route path='/DepartmentForm' element={<DepartmentForm/>}></Route> 

     <Route path='/PaymDesignationTable' element={<PaymDesignationTable/>}></Route>
     <Route path='/DesignationForm' element={<DesignationForm/>}></Route> 

     <Route path='/PaymDIvisionTable' element={<PaymDIvisionTable/>}></Route>
     <Route path='/DivisionForm' element={<DivisionForm/>}></Route> 

     <Route path='/PaymEmpEarningsTable' element={<PaymEmpEarningsTable/>}></Route>
     <Route path='/PaymEmpEarningsForm' element={<PaymEmpEarningsForm/>}></Route> 

     <Route path='/PaymEmpDeductionTable' element={<PaymEmpDeductionTable/>}></Route>
     <Route path='/EmpDeductionForm' element={<EmpDeductionForm/>}></Route> 

    
     <Route path='/PaymEmpTable' element={<PaymEmpTable/>}></Route>
     <Route path='/PaymEmployeeForm' element={<PaymEmployeeForm/>}></Route>

     <Route path='/PaymEmpLeaveTable' element={<PaymEmpLeaveTable/>}></Route>
     <Route path='/PaymEmpLeaveForm' element={<PaymEmpLeaveForm/>}></Route> 

     <Route path='/PaymEmployeeProfile1Tables' element={<PaymEmployeeProfile1Tables/>}></Route>
     <Route path='/EmployeeProfile1Form' element={<EmployeeProfile1Form/>}></Route> 

     <Route path='/PaymEmployeeWorkDetailTables' element={<PaymEmployeeWorkDetailTables/>}></Route>
     <Route path='/EmployeeWorkDetailsForm' element={<EmployeeWorkDetailsForm/>}></Route> 

     <Route path='/PaymEncashmentDetailsTables' element={<PaymEncashmentDetailsTables/>}></Route>
     <Route path='/EncashmentDetailsForm' element={<EncashmentDetailsForm/>}></Route> 

     <Route path='/PaymgradeTables' element={<PaymgradeTables/>}></Route>
     <Route path='/GradeForm' element={<GradeForm/>}></Route> 

     <Route path='/PaymHolidayTables' element={<PaymHolidayTables/>}></Route>
     <Route path='/HolidayForm' element={<HolidayForm/>}></Route> 

     <Route path='/PaymleaveTables' element={<PaymleaveTables/>}></Route>
     <Route path='/LeaveForm' element={<LeaveForm/>}></Route> 

     <Route path='/Paymleaveallocation1Tables' element={<Paymleaveallocation1Tables/>}></Route>
     <Route path='/LeaveAllocation1Form' element={<LeaveAllocation1Form/>}></Route> 

     <Route path='/PaymlevelTables' element={<PaymlevelTables/>}></Route>
     <Route path='/LevelForm' element={<LevelForm/>}></Route> 

     <Route path='/PaymLoanTable' element={<PaymLoanTable/>}></Route>
     <Route path='/PayLoanForm' element={<PayLoanForm/>}></Route> 

     <Route path='/PaymLoanDiminishingTable' element={<PaymLoanDiminishingTable/>}></Route>
     <Route path='/Sample27' element={<Sample27/>}></Route> 

     <Route path='/PaymOverHeadingcostTable' element={<PaymOverHeadingcostTable/>}></Route>
     <Route path='/Sample26' element={<Sample26/>}></Route> 

     <Route path='/paympfTable' element={<PaymPfTable/>}></Route>
     <Route path='/Sample25' element={<Sample25/>}></Route> 

     <Route path='/paympaybillTable' element={<PaymPaybillTable/>}></Route>
     <Route path='/Sample24' element={<Sample24/>}></Route> 

     <Route path='/PaymshiftTable' element={<PaymshiftTable/>}></Route>
     <Route path='/Sample23' element={<Sample23/>}></Route> 

     <Route path='/PaympayoutputloanTable' element={<PaympayoutputloanTable/>}></Route>
     <Route path='/Sample22' element={<Sample22/>}></Route>

     <Route path='/PayrollFinalSettlemetTable' element={<PayrollFinalSettlemetTable/>}></Route>
     <Route path='/Sample21' element={<Sample21/>}></Route> 

     <Route path='/PfepTable' element={<PfepTable/>}></Route>
     <Route path='/Sample20' element={<Sample20/>}></Route> 

     <Route path='/PfepfTable' element={<PfepfTable/>}></Route>
     <Route path='/Sample19' element={<Sample19/>}></Route> 

     <Route path='/PunchdetailsTable' element={<PunchdetailsTable/>}></Route>
     <Route path='/Sample18' element={<Sample18/>}></Route> 

     <Route path='/SalaryPeriodTable' element={<SalaryPeriodTable/>}></Route>
     <Route path='/Sample17' element={<Sample17/>}></Route> 

     <Route path='/SalaryStructureTable' element={<SalaryStructureTable/>}></Route>
     <Route path='/Sample16' element={<Sample16/>}></Route> 

     <Route path='/ShiftBalanceTable' element={<ShiftBalanceTable/>}></Route>
     <Route path='/Sample15' element={<Sample15/>}></Route> 

     <Route path='/ShiftDetailsTable' element={<ShiftDetailsTable/>}></Route>
     <Route path='/DetailsForm' element={<DetailsForm/>}></Route> 

     <Route path='/ShiftMonthTable' element={<ShiftMonthTable/>}></Route>
     <Route path='/Sample13' element={<Sample13/>}></Route> 

     <Route path='/ShiftPatternTable' element={<ShiftPatternTable/>}></Route>
     <Route path='/Sample12' element={<Sample12/>}></Route> 
    
     <Route path='/YearEndTable' element={<YearEndTable/>}></Route>
     <Route path='/Sample1' element={<Sample1/>}></Route> 

     <Route path='/TempshiftdetailsTables' element={<TempshiftdetailsTables/>}></Route>
     <Route path='/TempShiftDetailsForm' element={<TempShiftDetailsForm/>}></Route> 

     <Route path='/Paycalc' element={<Paycalc/>}></Route>

  <Route path='/TimesheetManager' element={<TimesheetManager/>}></Route>

  <Route path='/AttendenceDetails' element={<ButtonEsi5/>}></Route>

  <Route path='/OTSummary' element={<ButtonEsi3/>}></Route>

  <Route path='/WorkDetails' element={<ButtonEsi4/>}></Route>

  

  <Route path='/AbsentDetails' element={<ButtonEsi6/>}></Route>

  <Route path='/AdvanceReports' element={<ButtonEsi7/>}></Route>

  <Route path='/TAandDReports' element={<ButtonEsi8/>}></Route>

  <Route path='/AttendanceD2' element={<ButtonEsi18/>}></Route>
  <Route path='/OTHoursReports' element={<MasterrollButton360/>}></Route>


<Route path='/Masterroll' element={<MasterrollButton/>}></Route>

<Route path='/sanjeevi' element={<EmployeeProfileForm/>}></Route>


<Route path='/employeeimage' element={<EmployeeImageForm/>}></Route>

<Route path='/branch07' element={<ProfileCard008/>}></Route>

<Route path='/Leaveapprovenew' element={<Leaveapprovenew/>}></Route>

<Route path='/AbsentattReport' element={<AbsentAtt/>}></Route>


<Route path='/AttReports' element={<attReports/>}></Route>

<Route path='/BANKREGISTER' element={<BANKREGISTER/>}></Route>
<Route path='/DashBoard' element= {<DashBoard/>}></Route> 
<Route path='/Chatbot' element={<Chatbot/>}></Route>
<Route path='/SplitButton' element={<DrawerExample/>}></Route>
</Route>
   </Routes> 
    </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
