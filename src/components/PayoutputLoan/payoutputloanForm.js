import {
  Grid,
  Card,
  TextField,
  Button,
  Typography,
  Box,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';
import { useState, useEffect } from 'react';
import { PAYMEMPLOYEE, PAYMPAYOUTPUTLOAN, PAYMLOAN, LOANENTRY } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';

export default function ApproveManagerForm() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [pnCompanyid, setPnCompanyId] = useState("");

  const [pnBranchid, setPnBranchId] = useState("");

  const [pnEmployeeid, setEmployeeId] = useState("");
  const [empcode, setEmployeeCode] = useState("");
  const [empName, setEmployeeName] = useState("");
  const [paymLoan, setPaymLoan] = useState([]);
  const [pnLoanid, setLoanId] = useState("");
  const [loanEntry, setLoanEntry] = useState([]);
  const [loanAppid, setLoanAppId] = useState("");
  const [dDate, setDdate] = useState("");
  const [dFromDate, setDfromDate] = useState("");
  const [dToDate, setDtoDate] = useState("");
  const [amount, setAmount] = useState("");
  const [countInstallement, setCountInstallement] = useState("");
  const [installementCount, setInstallementCount] = useState("");
  const [instalAmt, setInstalAmt] = useState("");
  const [balanceAmt, setBalanceAmt] = useState("");
  const [loanStatus, setLoanStatus] = useState("");
  const [employeeError, setEmployeeError] = useState([]);
  const [companyError, setCompanyError] = useState([]);
  const [branchError, setBranchError] = useState([]);
  const [pnEmployeeIdError, setEmployeeIdError] = useState("");
  const [employeeCodeError, setEmployeeCodeError] = useState("");
  const [employeeNameError, setEmployeeNameError] = useState("");
  const [pnLoanidError, setLoanIdError] = useState("");
  const [loanEntryError, setLoanEntryError] = useState([]);
  const [loanAppidError, setLoanAppIdError] = useState([]);
  const [dDateError, setDdateError] = useState("");
  const [dFromDateError, setDfromDateError] = useState("");
  const [dToDateError, setDtoDateError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [countInstallementError, setCountInstallementError] = useState("");
  const [installementCountError, setInstallementCountError] = useState("");
  const [instalAmtError, setInstalAmtError] = useState("");
  const [balanceAmtError, setBalanceAmtError] = useState("");
  const [loanStatusError, setLoanStatusError] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
      setEmployee(data.data);
      const paymloan = await getRequest(ServerConfig.url, PAYMLOAN);
      setPaymLoan(paymloan.data);
      const loanEntry = await getRequest(ServerConfig.url, LOANENTRY);
      setLoanEntry(loanEntry.data);
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case 'pnCompanyid':
        setPnCompanyId(value);
        setCompanyError(false);
        break;
      case 'pnBranchid':
        setPnBranchId(value);
        setBranchError(false);
        break;
      case 'pnEmployeeid':
        setEmployeeId(value);
        setEmployeeError(false);
        break;
      case 'empcode':
        // Find the corresponding employee based on empcode
        const selectedEmployee = employee.find(emp => emp.empcode === value);
        if (selectedEmployee) {
          setEmployeeCode(value);
          setEmployeeName(selectedEmployee.empName); // Set empName based on empcode selection
          setEmployeeCodeError(false);
          setEmployeeNameError(false);
        } else {
          setEmployeeCode(value);
          setEmployeeName(''); // Reset empName if empcode is not found
          setEmployeeCodeError(true); // Optionally handle error state if empcode is not found
          setEmployeeNameError(true);
        }
        break;
      case 'empName':
        setEmployeeName(value);
        setEmployeeNameError(false);
        break;
      case 'pnLoanid':
        setLoanId(value);
        setLoanIdError(false);
        break;
      case 'loanAppid':
        setLoanAppId(value);
        setLoanAppIdError(false);
        break;
      case 'dDate':
        setDdate(value);
        setDdateError(!value);
        break;
      case 'dFromDate':
        setDfromDate(value);
        setDfromDateError(!value);
        break;
      case 'dToDate':
        setDtoDate(value);
        setDtoDateError(!value);
        break;
      case 'amount':
        setAmount(value);
        setAmountError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'countInstallement':
        setCountInstallement(value);
        setCountInstallementError(!/^\d+$/.test(value));
        break;
      case 'installementCount':
        setInstallementCount(value);
        setInstallementCountError(!/^\d+$/.test(value));
        break;
      case 'instalAmt':
        setInstalAmt(value);
        setInstalAmtError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'balanceAmt':
        setBalanceAmt(value);
        setBalanceAmtError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'loanStatus':
        setLoanStatus(value.toUpperCase());
        setLoanStatusError(!/^[A-Za-z0-9\s]{1,30}$/.test(value));
        break;
  
      default:
        break;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const companyError = !pnCompanyid;
    const branchError = !pnBranchid;
    const pnEmployeeIdError = !pnEmployeeid;
    const employeeCodeError = !empcode;
    const employeeNameError = !empName;
    const pnLoanidError = !pnLoanid;
    const loanAppidError = !loanAppid;
    const dDateError = !dDate;
    const dFromDateError = !dFromDate;
    const dToDateError = !dToDate;
    const amountError = !/^\d+(\.\d{1,2})?$/.test(amount);
    const countInstallementError = !/^\d+$/.test(countInstallement);
    const installementCountError = !/^\d+$/.test(installementCount);
    const instalAmtError = !/^\d+(\.\d{1,2})?$/.test(instalAmt);
    const balanceAmtError = !/^\d+(\.\d{1,2})?$/.test(balanceAmt);
    const loanStatusError = !/^[A-Za-z0-9\s]{1,30}$/.test(loanStatus);

    setCompanyError(companyError);
    setBranchError(branchError);
    setEmployeeIdError(pnEmployeeIdError);
    setEmployeeCodeError(employeeCodeError);
    setEmployeeNameError(employeeNameError);
    setLoanIdError(pnLoanidError);
    setLoanAppIdError(loanAppidError);
    setDdateError(dDateError);
    setDfromDateError(dFromDateError);
    setDtoDateError(dToDateError);
    setAmountError(amountError);
    setCountInstallementError(countInstallementError);
    setInstallementCountError(installementCountError);
    setInstalAmtError(instalAmtError);
    setBalanceAmtError(balanceAmtError);
    setLoanStatusError(loanStatusError);

    if (
      companyError ||
      branchError ||
      pnEmployeeIdError ||
      employeeCodeError ||
      employeeNameError ||
      pnLoanidError ||
      loanAppidError ||
      dDateError ||
      dFromDateError ||
      dToDateError ||
      amountError ||
      countInstallementError ||
      installementCountError ||
      instalAmtError ||
      balanceAmtError ||
      loanStatusError
    ) {
      return;
    }

    const formData = {
      pnCompanyid: pnCompanyid,
      pnBranchid: pnBranchid,
      pnEmployeeid: pnEmployeeid,
      pnLoanid: pnLoanid,
      loanAppid: loanAppid,
      dDate: dDate,
      dFromDate: dFromDate,
      dToDate: dToDate,
      amount: amount,
      countInstallement: countInstallement,
      installementCount: installementCount,
      instalAmt: instalAmt,
      balanceAmt: balanceAmt,
      loanStatus: loanStatus
    };

    try {
      const response = await postRequest(ServerConfig.url, PAYMPAYOUTPUTLOAN, formData);
      console.log(response);
      navigate('/PaympayoutputloanTable');
    } catch (error) {
      console.error('Error saving output:', error);
    }
  };

  const margin = { margin: "0 5px" };
  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='dark' align='center'>Paym Output Loans</Typography>
            <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>

              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>CompanyId</InputLabel>
                    <Select
                      value={pnCompanyid}
                      onChange={handleChange}
                      name="pnCompanyid"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {employee.map((e) => (
                        <MenuItem key={e.pnCompanyid} value={e.pnCompanyid}>
                          {e.pnCompanyId}
                        </MenuItem>
                      ))}
                    </Select>
                    {companyError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a CompanyId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>BranchId</InputLabel>
                    <Select
                      value={pnBranchid}
                      onChange={handleChange}
                      name="pnBranchid"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {employee.map((e) => (
                        <MenuItem key={e.pnBranchid} value={e.pnBranchid}>{e.pnBranchId}</MenuItem>
                      ))}
                    </Select>
                    {branchError && <FormHelperText sx={{ color: 'red' }}>Please Select a BranchId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={employeeCodeError}>
  <InputLabel shrink>Employee Code</InputLabel>
  <Select
    value={empcode}
    onChange={handleChange}
    name="empcode"
    displayEmpty
    style={{ height: '50px' }}
  >
    <MenuItem value="">
      <em>Select</em>
    </MenuItem>
    {employee.map((e) => (
      <MenuItem key={e.empcode} value={e.empcode}>
        {e.employe}
      </MenuItem>
    ))}
  </Select>
  {employeeCodeError && (
    <FormHelperText sx={{ color: 'red' }}>
      Please select a valid Employee Code
    </FormHelperText>
  )}
</FormControl>

                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={employeeNameError}>
  <TextField
    name="empName"
    label="Employee Name"
    variant="outlined"
    fullWidth
    required
    value={empName}
    onChange={handleChange}
    InputLabelProps={{ shrink: true }}
  />
  {employeeNameError && (
    <FormHelperText sx={{ color: 'red' }}>
      Please enter a valid Employee Name
    </FormHelperText>
  )}
</FormControl>

                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Loan ID</InputLabel>
                    <Select
                      value={pnLoanid}
                      onChange={handleChange}
                      name="pnLoanid"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {paymLoan.map((e) => (
                        <MenuItem key={e.pnLoanid} value={e.pnLoanid}>
                          {e.pnLoanid}
                        </MenuItem>
                      ))}
                    </Select>
                    {pnLoanidError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a Loan ID
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Loan App ID</InputLabel>
                    <Select
                      value={loanAppid}
                      onChange={handleChange}
                      name="loanAppid"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {loanEntry.map((e) => (
                        <MenuItem key={e.loanAppid} value={e.loanAppid}>
                          {e.loanAppid}
                        </MenuItem>
                      ))}
                    </Select>
                    {loanAppidError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a Loan App ID
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={dDateError}>
                    <TextField
                      name="dDate"
                      label="Date"
                      variant="outlined"
                      fullWidth
                      required
                      type="date"
                      value={dDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {dDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={dFromDateError}>
                    <TextField
                      name="dFromDate"
                      label="From Date"
                      variant="outlined"
                      fullWidth
                      required
                      type="date"
                      value={dFromDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {dFromDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid from date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={dToDateError}>
                    <TextField
                      name="dToDate"
                      label="To Date"
                      variant="outlined"
                      fullWidth
                      required
                      type="date"
                      value={dToDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {dToDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid to date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={amountError}>
                    <TextField
                      name="amount"
                      label="Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={amount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {amountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid amount
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={countInstallementError}>
                    <TextField
                      name="countInstallement"
                      label="Count Installement"
                      variant="outlined"
                      fullWidth
                      required
                      value={countInstallement}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {countInstallementError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid count installement
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={installementCountError}>
                    <TextField
                      name="installementCount"
                      label="Installement Count"
                      variant="outlined"
                      fullWidth
                      required
                      value={installementCount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {installementCountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid installement count
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={instalAmtError}>
                    <TextField
                      name="instalAmt"
                      label="Installement Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={instalAmt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {instalAmtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid installement amount
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={balanceAmtError}>
                    <TextField
                      name="balanceAmt"
                      label="Balance Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={balanceAmt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {balanceAmtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid balance amount
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanStatusError}>
                    <TextField
                      name="loanStatus"
                      label="Loan Status"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanStatus}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {loanStatusError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid loan status
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid container spacing={1} paddingTop={'10px'}>

                  <Grid item xs={12} align="right" >
                    <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
                    <Button type="submit" variant="contained" color="primary">
                      SAVE
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
