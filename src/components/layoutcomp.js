// Layoutcomp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ServiceCard from './servicecard.js';
import SearchFilter from './searchfilter.js';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import  att from '../images/attendance-icon.png';


function Layoutcomp() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Sample data for cards
  const cardsData = [
    { title: 'Daily Timecard', icon: <AccountBoxIcon width={30} height={30} /> , onClick: () => navigate("/dailytimecardtable") },
    { title: 'Attendance Ceilling', icon: <img src={att} width={30} height={30}/>, onClick: () => navigate("/AttendenceTable") },
    {title: 'Asset', icon: <AddBusinessIcon/>, onClick: () => navigate("/AssetsTable")},
    {title: 'Earn Deduct', icon: <PersonRemoveIcon/>, onClick: () => navigate("/EarnDeductTable")},
    {title: 'Form7', icon: <PersonRemoveIcon/>, onClick: () => navigate("/Form7table")},
    {title: 'HR Authentication', icon: <PersonRemoveIcon/>, onClick: () => navigate("/HrAuthenticationTable")},
    {title: 'HRMM Course', icon: <PersonRemoveIcon/>, onClick: () => navigate("/Hrmcoursetable")},
    {title: 'HRMM Skill Master', icon: <PersonRemoveIcon/>, onClick: () => navigate("/Hrmskillmastertable")},
    {title: 'HRMM Specialization', icon: <PersonRemoveIcon/>, onClick: () => navigate("/HrmmSpecializationtable")},
    {title: 'Job Status', icon: <PersonRemoveIcon/>, onClick: () => navigate("/PaymJobStatusTable")},
    {title: 'Leave Allocation', icon: <PersonRemoveIcon/>, onClick: () => navigate("/LeaveAllocationMasterTable")},
    {title: 'Leave Apply', icon: <PersonRemoveIcon/>, onClick: () => navigate("/LeaveApplyTable")},
    {title: 'Leave Approve Hr', icon: <PersonRemoveIcon/>, onClick: () => navigate("/LeaveApproveHrTable")},
    {title: 'Leave Approve Manager', icon: <PersonRemoveIcon/>, onClick: () => navigate("/LeaveApproveHrTable")},
    {title: 'Leave Settlement', icon: <PersonRemoveIcon/>, onClick: () => navigate("/LeaveSettlementTable")},
    {title: 'Loan Entry', icon: <PersonRemoveIcon/>, onClick: () => navigate("/LoanEntryTable")},
    {title: 'Loan Post', icon: <PersonRemoveIcon/>, onClick: () => navigate("/LoanPostTable")},
    {title: 'Loan PreCloser', icon: <PersonRemoveIcon/>, onClick: () => navigate("/LoanPreCloserTable")},
    
    {title: 'On Duty', icon: <AddBusinessIcon/>, onClick: () => navigate("/OnDutyTable")},

    {title: 'OTS Lab', icon: <AddBusinessIcon/>, onClick: () => navigate("/OtsLabTable")},
    {title: 'Pay Input', icon: <AddBusinessIcon/>, onClick: () => navigate("/payInputTable")},
    {title: 'Paym Att Bonus', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymAttBonusTable")},
    {title: 'Paym Bank', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymBankTable")},
    {title: 'Paym Branch', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymBranchtablenew")},
    {title: 'Paym Carry Forward', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymcarryForwardTable")},

    {title: 'PaymCategoryTable', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymCategoryTable")},
    {title: 'Paym Company', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaycompanyTable")},
    {title: 'Paym Computation', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymComputationtables")},
    {title: 'Paym Department', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymDeductionTable")},
    {title: 'Paym Designation', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymDesignationTable")},
    {title: 'Paym Division', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymDIvisionTable")},
    {title: 'Paym Earning', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymEarningsTable")},
    {title: 'Paym Emp Deduction', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymEmpDeductionTable")},
    {title: 'Paym Emp Earning', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymEmployeeLeaveTable")},
    {title: 'Paym Emp Earning', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymEmployeeLeaveTable")},
    {title: 'Paym Employee', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymEmpTable")},
    {title: 'Paym EmpLeeave', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymEmployeeLeaveTable")},
    {title: 'Paym emp profile', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymEmployeeProfile1Tables")},
    {title: 'Paym empwork Details', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymEmployeeWorkDetailTables")},
    {title: 'Paym Encashment Details ', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymEncashmentDetailsTables")},
    {title: 'Paym Grade ', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymgradeTables")},
    {title: 'Paym holiday ', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymHolidayTables")},
    {title: 'Paym leave ', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymleaveTables")},
    {title: 'Paym leave Allocation ', icon: <AddBusinessIcon/>, onClick: () => navigate("/Paymleaveallocation1Tables")},
    {title: 'Paym level ', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymlevelTables")},
    {title: 'Paym Loan ', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymLoanTable")},
    {title: 'Paym Loan Diminshing', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymLoanDiminishingTable")},
    {title: 'Paym Over Heading cost', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymOverHeadingcostTable")},
    {title: 'Paym Pay Bill', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaympfTable")},
    {title: 'Paym Pf', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymPaybillTable")},
    {title: 'Paym Shift', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaymshiftTable")},
    {title: 'Paym Output Loan', icon: <AddBusinessIcon/>, onClick: () => navigate("/PaympayoutputloanTable")},
    {title: 'Paym Final Settlement', icon: <AddBusinessIcon/>, onClick: () => navigate("/PayrollFinalSettlemetTable")},
    {title: 'PFEp', icon: <AddBusinessIcon/>, onClick: () => navigate("/PfepTable")},
    {title: 'PFEPF', icon: <AddBusinessIcon/>, onClick: () => navigate("/PfepfTable")},
    {title: 'Punch Detail', icon: <AddBusinessIcon/>, onClick: () => navigate("/PunchdetailsTable")},
    {title: 'Salary Period', icon: <AddBusinessIcon/>, onClick: () => navigate("/SalaryPeriodTable")},
    {title: 'Salary Structure', icon: <AddBusinessIcon/>, onClick: () => navigate("/SalaryStructureTable")},
    {title: 'Shift Balance', icon: <AddBusinessIcon/>, onClick: () => navigate("/ShiftBalanceTable")},
    {title: 'Shift Details', icon: <AddBusinessIcon/>, onClick: () => navigate("/ShiftDetailsTable")},
    {title: 'Shift Month', icon: <AddBusinessIcon/>, onClick: () => navigate("/ShiftMonthTable")},
    {title: 'Shift Pattern', icon: <AddBusinessIcon/>, onClick: () => navigate("/ShiftPatternTable")},
    {title: 'Temp shift Details', icon: <AddBusinessIcon/>, onClick: () => navigate("/TempshiftdetailsTables")},
    {title: 'Year End', icon: <AddBusinessIcon/>, onClick: () => navigate("/YearEndTable")},

  ];

  // Filtering function
  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <SearchFilter value={searchQuery} onChange={handleSearch} />
      <br />
      <Grid container justifyContent="center" alignItems="center" textAlign="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={5} lg={2} marginLeft={2} key={index}>
            <ServiceCard
              title={card.title}
              icon={card.icon}
              onClick={card.onClick}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


export default Layoutcomp;
