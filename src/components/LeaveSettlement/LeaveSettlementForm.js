import { Grid,Card,
  TextField,
  Button,
  Typography,
  Box,
  FormHelperText,
  MenuItem,
  Select,
  CardContent,
  FormControl
} from '@mui/material';
import { useState, useEffect } from 'react';
import {  LEAVESETTLEMENT, PAYMEMPLOYEE, PAYMLEAVE } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';

import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';



export default function LeaveSettleForm() {
 const navigate = useNavigate();
const [employee,setEmployee]=useState([])

const [pnCompanyId, setpnCompanyId] = useState("");
  const [pnBranchId, setpnBranchId] = useState("");
const [pnEmployeeId,setEmployeeId]=useState("")
const [empCode,setEmployeeCode]=useState("")
const [empName,setEmployeeName]=useState("")
const [paymLeave,setPaymLeave]=useState([])
const [pnLeaveId,setLeaveId]=useState("")
const [vLeaveName,setLeaveName]=useState("")
const [pnLeaveCode,setLeaveCode]=useState("")
const [daysAllowed,setDaysAllowed]=useState("")
const [daysTaken,setDaysTaken]=useState("")
const [daysBalance,setDaysBalance]=useState("")
const [ec,setEc]=useState("")
const [cf,setCf]=useState("")
const [maxDays,setMaxDays]=useState("")
const [flag,setFlag]=useState("")
const [calendarYear,setCalenderYear]=useState("")


const [employeeError,setEmployeeError]=useState("")
const [employeeCodeError,setEmployeeCodeError]=useState("")
const [employeeNameError,setEmployeeNameError]=useState("")
const [LeaveError,setLeaveError]=useState("")
const [vLeaveNameError,setLeaveNameError]=useState("")
const [pnLeaveCodeError,setLeaveCodeError]=useState("")
const [daysAllowedError,setDaysAllowedError]=useState("")
const [daysTakenError,setDaysTakenError]=useState("")
const [daysBalanceError,setDaysBalanceError]=useState("")
const [ecError,setEcError]=useState("")
const [cfError,setCfError]=useState("")
const [maxDaysError,setMaxDaysError]=useState("")
const [flagError,setFlagError]=useState("")
const [calendarYearError,setCalenderYearError]=useState("")



useEffect(() => {
async function getData() {
  const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
  setEmployee(data.data);
  const paymleave=await getRequest(ServerConfig.url,PAYMLEAVE)
    setPaymLeave(paymleave.data)
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
      case 'pnEmployeeId':
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
    
    case 'pnLeaveId':
      setLeaveId(value);
      setLeaveError(false);
      break;
    case 'pnLeavename':
      setLeaveName(value);
      setLeaveError(!/^[A-Za-z0-9\s]{1,100}$/.test(value));
      break;
    case 'pnLeavecode':
      setLeaveCode(value);
      setLeaveError(!/^[A-Za-z0-9\s]{1,5}$/.test(value));
      break;
   
    case 'daysAllowed':
      setDaysAllowed(value);
      setDaysAllowedError(!/^\d+$/.test(value));
      break;
    case 'daysTaken':
      setDaysTaken(value);
      setDaysTakenError(!/^\d+$/.test(value));
      break;
    case 'daysBalance':
      setDaysBalance(value);
      setDaysBalanceError(!/^\d+$/.test(value));
      break;
    case 'ec':
      setEc(value);
      setEcError(!/^[A-Za-z\s]{1}$/.test(value));
      break;
    case 'cf':
      setCf(value);
      setCfError(!/^[A-Za-z\s]{1}$/.test(value));
      break;
    case 'maxDays':
      setMaxDays(value);
      setMaxDaysError(!/^\d+$/.test(value));
      break;
    case 'flag':
      setFlag(value);
      setFlagError(!/^[A-Za-z\s]{1}$/.test(value));
      break;
    case 'calendarYear':
      setCalenderYear(value);
      setCalenderYearError(!/^[A-Za-z0-9\s]{1,12}$/.test(value));
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
  setLeaveError(!pnLeaveId);
  setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,50}$/.test(empCode));
  setEmployeeNameError(!/^[A-Za-z0-9\s]{1,100}$/.test(empName));
  setLeaveCodeError(!/^[A-Za-z0-9\s]{1,5}$/.test(pnLeaveCode));
  setLeaveNameError(!/^[A-Za-z0-9\s]{1,100}$/.test(vLeaveName));
  setDaysAllowedError(!/^\d+$/.test(daysAllowed));
  setDaysTakenError(!/^\d+$/.test(daysTaken));
  setDaysBalanceError(!/^\d+$/.test(daysBalance));
  setCfError(!/^[A-Za-z\s]{1}$/.test(cf));
  setEcError(!/^[A-Za-z\s]{1}$/.test(ec));
  setMaxDaysError(!/^\d+$/.test(maxDays));
  setFlagError(!/^[A-Za-z\s]{1}$/.test(flag));
  setCalenderYearError(!/^[A-Za-z0-9\s]{1,12}$/.test(calendarYear));

  if (
    employeeError ||
    LeaveError ||
    employeeCodeError ||
    employeeNameError ||
    vLeaveNameError ||
    pnLeaveCodeError ||
    daysAllowedError ||
    daysTakenError ||
    daysBalanceError ||
    ecError ||
    cfError ||
    maxDaysError ||
    flagError ||
    calendarYearError
  ) {
    return;
  }

  const formData = {
    pnCompanyId: pnCompanyId,
    pnBranchId: pnBranchId,
    pnEmployeeId: pnEmployeeId,
    empCode: empCode,
    empName: empName,
    pnLeaveId: pnLeaveId,
    pnLeavename: vLeaveName,
    pnLeavecode: pnLeaveCode,
    daysAllowed:  parseInt(daysAllowed),
    daysTaken:  parseInt(daysTaken),
    daysBalance: parseInt(daysBalance),
    ec: ec,
    cf:  cf,
    maxDays: parseInt(maxDays),
    flag:flag,
    calendarYear: calendarYear
  };
  try {
    const response = await postRequest(ServerConfig.url, LEAVESETTLEMENT, formData);
    console.log(response);
    navigate('/LeaveSettlementTable');
  } catch (error) {
    console.error('Error saving Leave Settlement :', error);
  }
};


  const margin={margin:"0 5px"}
  return (
    <div>
      <Grid style ={{ padding: "80px 5px0 5px" }}>
      <Card style = {{maxWidth: 600, margin: "0 auto"}}>
      <CardContent>
      <Typography variant='h5' color='S- Light' align='center'>Leave Settlement</Typography>
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
      value={empName}  // Display the selected employee's name
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
                    <InputLabel shrink>Leave ID</InputLabel>
                    <Select
                      value={pnLeaveId}
                      onChange={handleChange}
                      name="pnLeaveId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {paymLeave.map((e) => (
                        <MenuItem key={e.pnLeaveId} value={e.pnLeaveId}>{e.pnLeaveId}</MenuItem>
                      ))}
                    </Select>
                    {LeaveError && <FormHelperText sx={{ color: 'red' }}>Please Select a Leave ID</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={vLeaveNameError}>
                    <TextField
                      name="pnLeavename"
                      label="Leave Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={vLeaveName}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {vLeaveNameError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Leave Name (alphanumeric characters, max length 100)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={pnLeaveCodeError}>
                    <TextField
                      name="pnLeavecode"
                      label="Leave Code"
                      variant="outlined"
                      fullWidth
                      required
                      value={pnLeaveCode}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {pnLeaveCodeError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Leave Code (alphanumeric characters, max length 50)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={daysAllowedError}>
                    <TextField
                      name="daysAllowed"
                      label=" Days Allowed"
                      variant="outlined"
                      fullWidth
                      required
                      value={daysAllowed}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                  
                    />
                    {daysAllowedError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Days Allowed its only the integer value
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={daysTakenError}>
                    <TextField
                      name="daysTaken"
                      label=" Days Taken"
                      variant="outlined"
                      fullWidth
                      required
                      value={daysTaken}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      
                    />
                    {daysTakenError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Days Taken its only integer value
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={daysBalanceError}>
                    <TextField
                      name="daysBalance"
                      label=" days Balance"
                      variant="outlined"
                      fullWidth
                      required
                      value={daysBalance}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                   
                    />
                    {daysBalanceError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Days Balance only the integer value
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cfError}>
                    <TextField
                      name="cf"
                      label="CF"
                      variant="outlined"
                      fullWidth
                      required
                      value={cf}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cfError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid CF (alphabatic characters, max length 1)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={ecError}>
                    <TextField
                      name="ec"
                      label="EC"
                      variant="outlined"
                      fullWidth
                      required
                      value={ec}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {ecError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid EC (alphabetic characters, max length 1)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={maxDaysError}>
                    <TextField
                      name="maxDays"
                      label="max Days"
                      variant="outlined"
                      fullWidth
                      required
                      value={maxDays}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {maxDaysError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Max Days its only the integer value
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={flagError}>
                    <TextField
                      name="flag"
                      label="flag"
                      variant="outlined"
                      fullWidth
                      required
                      value={flag}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {flagError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Year End (alphabetic characters, max length 1)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={calendarYearError}>
                    <TextField
                      name="calendarYear"
                      label="Calendar Year"
                      variant="outlined"
                      fullWidth
                      required
                      value={calendarYear}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {calendarYearError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid number of Calendar Year (alphanumeric characters, max length 12)
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
