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
import { PAYMEMPLOYEE, LOANENTRY, LOANPOST } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';



export default function LoanPostForm() {
  const navigate = useNavigate();

const [employee,setEmployee]=useState([])
const [pnCompanyId, setpnCompanyId] = useState("");
  const [pnBranchId, setpnBranchId] = useState("");
  const [employeeid,setEmployeeId]=useState("")
const [employeeCode,setEmployeeCode]=useState("")
const [employeeName,setEmployeeName]=useState("")
const [LoanEntry,setLoanEntry]=useState([])
const [loanAppid,setLoanAppId]=useState("")
const [loanReqno,setLoanReqno]=useState("")
const [reqDate,setReqDate]=useState("")
const [loanType,setLoanType]=useState("")  
const [loanName,setLoanName]=useState("")
const [loanAmount,setLoanAmount]=useState("")
const [monthToPosted,setMonthToPosted]=useState("")
const [monthPostedOn,setMonthPostedOn]=useState("")
const [remMonth,setRemMonth]=useState("")
const [postedamt,setPostedamt]=useState("")
const [balanceAmt,setBalanceAmt]=useState("")
const [approveBy,setApproveBy]=useState("")


const [employeeError,setEmployeeError]=useState("")

const [employeeCodeError,setEmployeeCodeError]=useState("")
const [employeeNameError,setEmployeeNameError]=useState("")
const [LoanEntryError,setLoanEntryError]=useState([])
const [loanAppidError,setLoanAppIdError]=useState("")
const [loanReqnoError,setLoanReqnoError]=useState("")
const [reqDateError,setReqDateError]=useState("")
const [loanTypeError,setLoanTypeError]=useState("")  
const [loanNameError,setLoanNameError]=useState("")
const [loanAmountError,setLoanAmountError]=useState("")
const [monthToPostedError,setMonthToPostedError]=useState("")
const [monthPostedOnError,setMonthPostedOnError]=useState("")
const [remMonthError,setRemMonthError]=useState("")
const [postedamtError,setPostedamtError]=useState("")
const [balanceAmtError,setBalanceAmtError]=useState("")
const [approveByError,setApproveByError]=useState("")




useEffect(() => {
async function getData() {
  const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
  setEmployee(data.data);
  const LoanEntry=await getRequest(ServerConfig.url,LOANENTRY)
    setLoanEntry(LoanEntry.data)
}
getData();
}, []);

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
      case 'employeeid':
        setEmployeeId(value);
        setEmployeeError(false);
          break;
          case 'empCode':
            const selectedEmployee = employee.find(emp => emp.empCode === value);
            if (selectedEmployee) {
              setEmployeeId(selectedEmployee.employeeid);  // Set empId from selected employee
              setEmployeeCode(selectedEmployee.empcode);
              setEmployeeName(selectedEmployee.employeeName); // Set empName here
              setEmployeeCodeError(false);
            } else {
              setEmployeeId("");
              setEmployeeCode(value);
              setEmployeeName(""); // Clear empName if no employee found
              setEmployeeCodeError(true);
            }
            break;
          case 'loanAppid':
            setLoanAppId(value);
            setLoanEntryError(/^[A-Za-z0-9\s]{1,20}$/.test(value));
              break;
              case 'loanReqno':
                setLoanReqno(value);
                setLoanReqnoError(/^[A-Za-z0-9\s]{1,20}$/.test(value));
                  break;
              case 'reqDate':
                setReqDate(value);
                setReqDateError(!value);
                  break;
    case 'loanType':
      setLoanType(value);
      setLoanTypeError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
      break;
    
      case 'loanName':
        setLoanName(value);
        setLoanNameError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
        break;
        case 'loanAmount':
          setLoanAmount(value);
          setLoanAmountError(!/^\d+(\.\d{1,2})?$/.test(value));
          break;
          case 'monthToPosted':
            setMonthToPosted(value);
            setMonthToPostedError(!value);
              break;
              case 'monthPostedOn':
                setMonthPostedOn(value);
                setMonthPostedOnError(!value);
                  break;
    case 'remMonth':
      setRemMonth(value);
      setRemMonthError(!/^\d+$/.test(value));
      break;
      case 'postedamt':
        setPostedamt(value);
        setPostedamtError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
        case 'balanceAmt':
          setBalanceAmt(value);
          setBalanceAmtError(!/^\d+(\.\d{1,2})?$/.test(value));
          break;
          case 'approveBy':
            setApproveBy(value);
            setApproveByError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
            break;
    default:
      break;
     

  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setEmployeeError(!pnCompanyId);
  setEmployeeError(!pnBranchId);
  setEmployeeError(!employeeid);
  setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,20}$/.test(employeeCode))
  setEmployeeNameError(!/^[A-Za-z0-9\s]{1,20}$/.test(employeeName))
setLoanReqnoError(!/^[A-Za-z0-9\s]{1,20}$/.test(loanReqno))
  setLoanAppIdError(!/^[A-Za-z0-9\s]{1,20}$/.test(loanAppid));
  setReqDateError(!reqDate)
  setLoanTypeError(!/^[A-Za-z0-9\s]{1,20}$/.test(loanType))
  setLoanNameError(!/^[A-Za-z0-9\s]{1,20}$/.test(loanName))
  setLoanAmountError(!/^\d+(\.\d{1,2})?$/.test(loanAmount))
  setMonthToPostedError(!monthToPosted);
  setMonthPostedOnError(!monthPostedOn);
  setRemMonthError(!/^\d+$/.test(remMonth));
  setPostedamtError(!/^\d+(\.\d{1,2})?$/.test(postedamt));
  setBalanceAmtError(!/^\d+(\.\d{1,2})?$/.test(balanceAmt));
  setApproveByError(!/^[A-Za-z0-9\s]{1,20}$/.test(approveBy));
  if (
    employeeError ||
    employeeCodeError ||
    employeeNameError ||
    loanReqnoError ||
    reqDateError ||
    loanAppidError ||
    loanTypeError ||
    loanNameError ||
    loanAmountError ||
    monthToPostedError ||
    monthPostedOnError ||
    remMonthError ||
    postedamtError ||
    balanceAmtError ||
    approveByError
  ) {
    return;
  }

  const formData = {
    pnCompanyId: pnCompanyId,
    pnBranchId: pnBranchId,
    employeeid: parseInt(employeeid),
    empcode: employeeCode,
    employeename: employeeName,
    loanReqno: loanReqno,
    reqDate: reqDate,
    loanAppid: loanAppid,
    loanType:   loanType,
    loanName: loanName,
    loanAmount: loanAmount,
    monthToPosted: monthToPosted,
    monthPostedOn: monthPostedOn,
    remMonth: parseInt(remMonth) ,
    postedamt:  postedamt,
    balanceAmt:  balanceAmt,
    approveBy: approveBy

};
try {
    const response = await postRequest(ServerConfig.url, LOANPOST, formData);
    console.log(response);
    navigate('/LoanPostTable');
  } catch (error) {
    console.error('Error saving loan post:', error);
  }
};


  const margin={margin:"0 5px"}
  return (
    <div>
      <Grid style ={{ padding: "80px 5px0 5px" }}>
      <Card style = {{maxWidth: 600, margin: "0 auto"}}>
      <CardContent>
      <Typography variant='h5' color='S- Light' align='center'>Loan Post</Typography>
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
          name="empcode"
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
          <option key={e.empcode} value={e.empcode}>
            {e.employeeCode}
          </option>
        ))}
    </select>
  </FormControl>
</Grid>

<Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <TextField
      name="employeeName"
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
      value={employeeid}
      onChange={handleChange}
      name="employeeid"
      displayEmpty
      style={{ height: '50px' }}
    >
      <MenuItem value="">
        <em>Select</em>
      </MenuItem>
      {employee.map((emp) => (
        <MenuItem key={emp.employeeid} value={emp.employeeid}>
          {emp.pnEmployeeId}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</Grid>



                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Loan App Id</InputLabel>
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
                      {LoanEntry.map((e) => (
                        <MenuItem key={e.loanAppid} value={e.loanAppid}>{e.loanAppid}</MenuItem>
                      ))}
                    </Select>
                    {LoanEntryError && <FormHelperText sx={{ color: 'red' }}>Please Select a loan App ID</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanNameError}>
                    <TextField
                      name="loanName"
                      label="Loan Name "
                      variant="outlined"
                      fullWidth
                      required
                      value={loanName}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {loanNameError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid loan Name (alphanumeric characters, max length 20)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanReqnoError}>
                    <TextField
                      name="loanReqno"
                      label="Loan Req No"
                      variant="outlined"
                     
                      fullWidth
                      required
                      value={loanReqno}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                  
                    />
                    {loanReqnoError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a  loan request No (alphanumeric characters, max length 20)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={reqDateError}>
                    <TextField
                      name="req Date"
                      label="req Date"
                      variant="outlined"
                      type='date'
                      fullWidth
                      required
                      value={reqDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                  
                    />
                    {reqDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a  Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanTypeError}>
                    <TextField
                      name="loanType"
                      label="Loan Type"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanType}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                  
                    />
                    {loanTypeError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Loan type (alphanumeric characters, max length 20)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanAmountError}>
                    <TextField
                      name="loanAmount"
                      label="Loan Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanAmount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      
                    />
                    {loanAmountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Loan Amount is only decimal values
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={monthToPostedError}>
                    <TextField
                      name="monthToPosted"
                      label="Month To Posted"
                      variant="outlined"
                      type='date'
                      fullWidth
                      required
                      value={monthToPosted}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />

                    {monthToPostedError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={monthPostedOnError}>
                    <TextField
                      name="monthPostedOn"
                      label="monthPostedOn"
                      variant="outlined"
                      type='date'
                      fullWidth
                      required
                      value={monthPostedOn}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {monthPostedOnError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={remMonthError}>
                    <TextField
                      name="remMonth"
                      label="remMonth"
                      variant="outlined"
                      
                      fullWidth
                      required
                      value={remMonth}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {remMonthError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Rem Month only integer values
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={postedamtError}>
                    <TextField
                      name="postedamt"
                      label="Posted Amt"
                      variant="outlined"
                      fullWidth
                      required
                      value={postedamt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {postedamtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Posted Amt only decimal values
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
                        Please enter a valid Balance Amount only decimal values
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={approveByError}>
                    <TextField
                      name="approveBy"
                      label="Approve By"
                      variant="outlined"
                      fullWidth
                      required
                      value={approveBy}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {approveByError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid approveBy (alphanumeric characters, max length 20)
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
