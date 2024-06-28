import { Grid,Card,
  TextField,
  Button,
  Typography,
  Box,
  FormHelperText,
  Select,
  MenuItem,
  CardContent,
  FormControl
} from '@mui/material';
import { useState, useEffect } from 'react';
import { PAYMEMPLOYEE, PAYMLOAN, LOANENTRY } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';



export default function LoanEntForm() {
const navigate=useNavigate();
const [employee,setEmployee]=useState([])

const [pnCompanyId, setpnCompanyId] = useState("");
  const [pnBranchId, setpnBranchId] = useState("");
const [pnEmployeeId,setEmployeeId]=useState("")
const [employeeCode,setEmployeeCode]=useState("")
const [employeeName,setEmployeeName]=useState("")
const [paymLoan,setPaymLoan]=useState([])
const [fnLoanId,setFnLoanId]=useState("")
const [sanDate,setSanDate]=useState("")
const [dEffdate,setDeffDate]=useState("")
const [loanAmt,setLoanAmt]= useState("")
const [instalmentAmt,setInstalmentAmt]=useState("")
const [instalmentcount,setInstalmentCount]=useState("")
const [balanceAmt,setBalanceAmt]=useState("")
const [cStatus,setCstatus]=useState("")
const [vLoanName,setVLoanName]=useState("")
const [loanProcess,setLoanProcess]=useState("")
const [loanCalculation,setLoanCalculation]=useState("")
const [comments,setComments]=useState("")
const [loanAppid,setLoanAppId]=useState("")
const [interest,setInterest]=useState("")
const [totInterestAmt,setTotInterestAmt]=useState("")
const [loanStatus,setLoanStatus]=useState("")
const [lasttransactionFrom,setLastTransactionFrom]=useState("")
const [lasttransactionTo,setLastTransactionTo]=useState("")
const[LoanAutoID,setLoanAutoId]=useState("")


const [employeeError,setEmployeeError]=useState("")
const [employeeCodeError,setEmployeeCodeError]=useState("")
const [employeeNameError,setEmployeeNameError]=useState("")
const [LoanError,setLoanError]=useState("")
const [fnLoanIdError,setFnLoanIdError]=useState("")
const [sanDateError,setSanDateError]=useState("")
const [dEffdateError,setDeffDateError]=useState("")
const [loanAmtError,setLoanAmtError]= useState("")
const [instalmentAmtError,setInstalmentAmtError]=useState("")
const [instalmentcountError,setInstalmentCountError]=useState("")
const [balanceAmtError,setBalanceAmtError]=useState("")
const [cStatusError,setCstatusError]=useState("")
const [vLoanNameError,setVLoanNameError]=useState("")
const [loanProcessError,setLoanProcessError]=useState("")
const [loanCalculationError,setLoanCalculationError]=useState("")
const [commentsError,setCommentsError]=useState("")
const [loanAppidError,setLoanAppIdError]=useState("")
const [interestError,setInterestError]=useState("")
const [totInterestAmtError,setTotInterestAmtError]=useState("")
const [loanStatusError,setLoanStatusError]=useState("")
const [lasttransactionFromError,setLastTransactionFromError]=useState("")
const [lasttransactionToError,setLastTransactionToError]=useState("")
const[LoanAutoIDError,setLoanAutoIdError]=useState("")




useEffect(() => {
async function getData() {
  const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
  setEmployee(data.data);
  const paymleave=await getRequest(ServerConfig.url,PAYMLOAN)
    setPaymLoan(paymleave.data)
}
getData();
}, []);  // Function to format the time in HH:mm:ss format
const formatTime = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:00`;
};


// Handler for changing the date in the time picker
const handleDateChange = (date, setter) => {
  const formattedTime = formatTime(date);
   console.log(formattedTime)
   console.log(date)
  setter(formattedTime);
};



const handleChange = (e) => {
  const { name, value } = e.target;

  switch (name) {
    case 'pnCompanyId':
      setpnCompanyId(value);
      setEmployeeError(false);
      break;
    case 'pnBranchId':
      setpnBranchId(value);
      setEmployeeError(false);
      break;
      case 'pnEmployeeId: ':
        setEmployeeId(value);
        setEmployeeError(false);
        break;
        
      case 'empCode':
        const selectedEmployee = employee.find(emp => emp.empCode === value);
        if (selectedEmployee) {
          setEmployeeId(selectedEmployee.empId);  // Set empId from selected employee
          setEmployeeCode(selectedEmployee.empCode);
          setEmployeeName(selectedEmployee.empName); // Set empName here
          setEmployeeCodeError(false);
        } else {
          setEmployeeId("");
          setEmployeeCode(value);
          setEmployeeName(""); // Clear empName if no employee found
          setEmployeeCodeError(true);
        }
        break;
    case 'loanAutoId':
      setLoanAutoId(value);
      setLoanAutoIdError(/^[A-Za-z0-9\s]{1,20}$/.test(value));
      break;
    case 'fnLoanId':
      setFnLoanId(value);
      setFnLoanIdError(!/^\d+$/.test(value));
      break;
   
    case 'sanDate':
      setSanDate(value);
      setSanDateError(false);
      break;
    case 'dEffdate':
      setDeffDate(value);
      setDeffDateError(!value);
      break;
    case 'loanAmt':
      setLoanAmt(value);
      setLoanAmtError(!/^\d+(\.\d{1,2})?$/.test(value) );
      break;
    case 'instalmentAmt':
      setInstalmentAmt(value);
      setInstalmentAmtError(!/^\d+(\.\d{1,2})?$/.test(value) );
      break;
    case 'instalmentcount':
      setInstalmentCount(value);
      setInstalmentCountError(!/^\d+$/.test(value));
      break;
    case 'balanceAmt: ':
      setBalanceAmt(value);
      setBalanceAmtError(!/^\d+(\.\d{1,2})?$/.test(value) );
      break;
    case 'cStatus ':
      setCstatus(value);
      setCstatusError(!/^[A-Za-z\s]{1}$/.test(value));
      break;
    case 'loanName':
      setVLoanName(value);
      setVLoanNameError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
      break;
    case 'loanProcess':
      setLoanProcess(value);
      setLoanProcessError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
      break;
    case 'loanCalculation':
      setLoanCalculation(value);
      setLoanCalculationError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
      break;
        case 'comments':
        setComments(value);
        setCommentsError(!/^[A-Za-z0-9\s]{1,50}$/.test(value));
        break;
        case 'loanAppid':
        setLoanAppId(value);
        setLoanAppIdError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
        break;
        case 'interest':
        setInterest(value);
        setInterestError(!/^\d+$/.test(value));
        break;
        case 'totInterestAmt':
        setTotInterestAmt(value);
        setTotInterestAmtError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
        case 'loanStatus':
        setLoanStatus(value);
        setLoanStatusError(!/^[A-Za-z\s]{20}$/.test(value));
        break;
        case 'lasttransactionFrom':
        setLastTransactionFrom(value);
        setLastTransactionFromError(!value);
        break;
        case 'lasttransactionTo':
        setLastTransactionTo(value);
        setLastTransactionToError(!value);
        break;
    default:
      break;
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();

  setEmployeeError(!pnCompanyId);
  setEmployeeError(!pnBranchId);
  setEmployeeError(!pnEmployeeId);
  setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,5}$/.test(employeeCode));
  setEmployeeNameError(!/^[A-Za-z0-9\s]{1,30}$/.test(employeeName));  
  setLoanError(!fnLoanId);
  setSanDateError(!sanDate);
  setDeffDateError(!dEffdate);
  setInstalmentAmtError(!/^\d+(\.\d{1,2})?$/.test(instalmentAmt))
setInstalmentCountError(!/^\d+$/.test(instalmentAmt))
setBalanceAmtError(!/^\d+(\.\d{1,2})?$/.test(instalmentcount))
setCstatusError(!/^[A-Za-z\s]{1}$/.test(cStatus))
setVLoanName(!/^[A-Za-z0-9\s]{1,20}$/.test(vLoanName))
setLoanProcessError(!/^[A-Za-z0-9\s]{1,20}$/.test(loanProcess))
setLoanCalculationError(!/^[A-Za-z0-9\s]{1,20}$/.test(loanCalculation))
setTotInterestAmtError(!/^\d+(\.\d{1,2})?$/.test(totInterestAmt))
setLoanStatusError(!/^[A-Za-z\s]{20}$/.test(loanStatus))
setLastTransactionFromError(!lasttransactionFrom)
setLastTransactionToError(!lasttransactionTo)
  
setCommentsError(!/^[A-Za-z0-9\s]{1,50}$/.test(comments))
setInterestError(!/^\d+$/.test(interest))
setLoanAppIdError(!/^[A-Za-z0-9\s]{1,20}$/.test(loanAppid))

  if (
    employeeError ||
    LoanError ||
    LoanAutoIDError ||
    interestError ||
    loanAmtError ||
    fnLoanIdError ||
    loanAppidError ||
    sanDateError ||
    dEffdateError ||
    instalmentAmtError ||
    instalmentcountError ||
    balanceAmtError ||
    commentsError ||
    cStatusError ||
    loanCalculationError ||
    loanProcessError ||
    vLoanNameError ||
    totInterestAmtError ||
    loanStatusError ||
    lasttransactionFromError ||
    lasttransactionToError 
  ) {
    return;
  }


  const formData = {
    pnCompanyId: pnCompanyId,
    pnBranchId: pnBranchId,
    pnEmployeeId: pnEmployeeId,
    loanAutoId:LoanAutoID,
    fnLoanId: parseInt(fnLoanId),
    sanDate: sanDate, //sanDate,
    dEffdate: dEffdate,//dEffdate,
    loanAmt: loanAmt,
    instalmentAmt: instalmentAmt,
    instalmentcount: parseInt(instalmentcount),
    balanceAmt: balanceAmt,
    cStatus : cStatus,
    loanName: vLoanName,
    loanProcess: loanProcess,
    loanCalculation: loanCalculation,
    comments: comments,
    loanAppid: loanAppid,
    interest: interest,
    
    totInterestAmt: totInterestAmt,
    empName: employeeName,
    loanStatus: loanStatus,
    lasttransactionFrom: lasttransactionFrom,
    lasttransactionTo:lasttransactionTo 
  };
  try {
    const response = await postRequest(ServerConfig.url, LOANENTRY, formData);
    console.log(response);
    navigate('/LoanEntryTable');
  } catch (error) {
    console.error('Error saving Loan Entry :', error);
  }
};




  const margin={margin:"0 5px"}
  
  return (
    <div>
      <Grid style ={{ padding: "80px 5px0 5px" }}>
      <Card style = {{maxWidth: 600, margin: "0 auto"}}>
      <CardContent>
      <Typography variant='h5' color='S- Light' align='center'>Loan Entry</Typography>
     <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>CompanyId</InputLabel>
                    <Select
                      value={pnCompanyId}
                      onChange={handleChange}
                      name="pnCompanyId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {employee.map((e) => (
                        <MenuItem key={e.pnCompanyId} value={e.pnCompanyId}>
                          {e.pnCompanyId}
                        </MenuItem>
                      ))}
                    </Select>
                    {employeeError && (
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
                      value={pnBranchId}
                      onChange={handleChange}
                      name="pnBranchId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {employee.map((e) => (
                        <MenuItem key={e.pnBranchId} value={e.pnBranchId}>{e.pnBranchId}</MenuItem>
                      ))}
                    </Select>
                    {employeeError && <FormHelperText sx={{ color: 'red' }}>Please Select a BranchId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
         <FormControl fullWidth>
           <InputLabel shrink>Employee Code</InputLabel>
        <select
          name="empCode"
          onChange={(e) => {
        var v = e.currentTarget.value;
        var empname = employee.filter((e) => e.employeeCode == v);
        setEmployeeCode(v);
        setEmployeeName(empname[0].employeeFullName);
      }}
      style={{ height: '50px' }}
    >
      <option value="">Select</option>
      {employee
        .filter((e) => e.pnCompanyId == pnCompanyId && e.pnBranchId == pnBranchId)
        .map((e) => (
          <option key={e.employeeCode} value={e.employeeCode}>
            {e.employeeCode}
          </option>
        ))}
    </select>
  </FormControl>
</Grid>

<Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <TextField
      name="empName"
      label="Employee Name"
      variant="outlined"
      fullWidth
      required
      value={employeeName}  // Display the selected employee's name
      onChange={handleChange}
      InputLabelProps={{ shrink: true }}
      disabled
    />
  </FormControl>
</Grid>

<Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel shrink>Employee ID</InputLabel>
    <Select
      value={pnEmployeeId}
      onChange={handleChange}
      name="pnEmployeeId"
      displayEmpty
      style={{ height: '50px' }}
    >
      <MenuItem value="">
        <em>Select</em>
      </MenuItem>
      {employee.map((emp) => (
        <MenuItem key={emp.empId} value={emp.empId}>
          {emp.pnEmployeeId}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</Grid>



                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Fn loan ID</InputLabel>
                    <Select
                      value={fnLoanId}
                      onChange={handleChange}
                      name="fnLoanId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {paymLoan.map((e) => (
                        <MenuItem key={e.fnLoanId} value={e.fnLoanId}>{e.fnLoanId}</MenuItem>
                      ))}
                    </Select>
                    {LoanError && <FormHelperText sx={{ color: 'red' }}>Please Select a loan ID</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={vLoanNameError}>
                    <TextField
                      name="vLoanName"
                      label="V Loan Name "
                      variant="outlined"
                      fullWidth
                      required
                      value={vLoanName}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {vLoanNameError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid loan Name (alphanumeric characters, max length 100)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={sanDateError}>
                    <TextField
                      name="sanDate"
                      label="San Date"
                      variant="outlined"
                      type='date'
                      fullWidth
                      required
                      value={sanDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                  
                    />
                    {sanDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a  SanDate 
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={dEffdateError}>
                    <TextField
                      name="dEffdate"
                      label="dEffdate"
                      variant="outlined"
                      type='date'
                      fullWidth
                      required
                      value={dEffdate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                  
                    />
                    {dEffdateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a valid Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanAmtError}>
                    <TextField
                      name="loanAmt"
                      label="Loan Amt"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanAmt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                  
                    />
                    {loanAmtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Loan Amount only decimal values
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={instalmentAmtError}>
                    <TextField
                      name="instalmentAmt"
                      label="instalment Amt"
                      variant="outlined"
                      fullWidth
                      required
                      value={instalmentAmt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      
                    />
                    {instalmentAmtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Installment Amount  only decimal values
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={instalmentcountError}>
                    <TextField
                      name="instalmentcount"
                      label="Instalment Count"
                      variant="outlined"
                      fullWidth
                      required
                      value={instalmentcount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />

                    {instalmentcountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Instalment Count only integer value 
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={balanceAmtError}>
                    <TextField
                      name="balanceAmt"
                      label="Balance Amt"
                      variant="outlined"
                      fullWidth
                      required
                      value={balanceAmt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {balanceAmtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Balance Amt only decimal values
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cStatusError}>
                    <TextField
                      name="cStatus"
                      label="cStatus"
                      variant="outlined"
                      fullWidth
                      required
                      value={cStatus}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cStatusError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid C Status (alphabetic characters, max length 1)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanProcessError}>
                    <TextField
                      name="loanProcess"
                      label="loanProcess"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanProcess}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {loanProcessError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Loan Process (alphanumeric characters, max length 20)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanCalculationError}>
                    <TextField
                      name="loanCalculation"
                      label="Loan Calculation"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanCalculation}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {loanCalculationError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Year End (alphanumeric  characters, max length 20)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={commentsError}>
                    <TextField
                      name="comments"
                      label="comments"
                      variant="outlined"
                      fullWidth
                      required
                      value={comments}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {commentsError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid number of comments (alphanumeric characters, max length 50)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanAppidError}>
                    <TextField
                      name="loanAppid"
                      label="Loan App Id"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanAppid}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {loanAppidError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Loan App Id  (alphanumeric characters, max length 20)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={interestError}>
                    <TextField
                      name="interest"
                      label="interest"
                      variant="outlined"
                      fullWidth
                      required
                      value={interest}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {interestError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  Interest only the decimal value
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={totInterestAmtError}>
                    <TextField
                      name="totInterestAmt"
                      label="totInterestAmt"
                      variant="outlined"
                      fullWidth
                      required
                      value={totInterestAmt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {totInterestAmtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  totInterestAmt only decimal value
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanStatusError}>
                    <TextField
                      name="loanStatus"
                      label="loanStatus"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanStatus}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {loanStatusError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Loan Status (alphabetic characters, max length 1)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={lasttransactionFromError}>
                    <TextField
                      name="lasttransactionFrom"
                      label="Last Transaction From"
                      variant="outlined"
                      type='date'
                      fullWidth
                      required
                      value={lasttransactionFrom}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {lasttransactionFromError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select A valid Last Transaction From Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={lasttransactionToError}>
                    <TextField
                      name="lasttransactionTo"
                      label="Last Transaction To"
                      variant="outlined"
                      type="date"
                      fullWidth
                      required
                      value={lasttransactionTo}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {lasttransactionToError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a valid Last Transaction To Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="right">
                <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
             <Button type="submit" variant="contained" color="primary">
                     SAVE
                   </Button>
                
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
