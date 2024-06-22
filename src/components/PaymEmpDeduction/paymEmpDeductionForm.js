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
import { PAYMEMPDEDUCTION, PAYMEMPLOYEE,PAYMDEDUCTION } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';
import { inputpaymEmpDeductionForm } from './paymEmpDeduction';

  

  export default function EmpDeductionForm() {

const navigate = useNavigate();
const [employee,setEmployee]=useState([])
const [company,setCompany]=useState([])
const [branch,setBranch]=useState([])
const [deduction,setDeduction]=useState([])
const [empdeduction,setEmpdeduction]=useState([])
const[pnBranchId,setPnBranchId]=useState("")

const[pnCompanyId,setPnCompanyId]=useState("")
const [pnEmployeeId,setEmployeeId]=useState("")
const [pnDeductionId,setPnDeductionId]=useState("")
const [nAmount,setNAmount]=useState("")
const [dDate,setDDate]=useState("")
const [cEligible,setCEligible]=useState("")
const [fromDate,setFromDate]=useState("")
const [toDate,setToDate]=useState("")
const [periodCode,setPeriodCode]=useState("")


const [employeeError, setEmployeeError] = useState(false);
const [pnDeductionIdError, setpnDeductionIdError] = useState(false);
const [nAmountError, setNAmountError] = useState(false);
const [dDateError, setDDateError] = useState(false);
const [cEligibleError, setCEligibleError] = useState(false);
const [fromDateError, setFromDateError] = useState(false);
const [toDateError, setToDateError] = useState(false);
const [periodCodeError, setperiodCodeError] = useState(false);


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


useEffect(() => {
  async function getData() {
    const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
    setEmployee(data.data);
    const data2 = await getRequest(ServerConfig.url,PAYMDEDUCTION);
    setDeduction(data2.data)
    const data1=await getRequest(ServerConfig.url,PAYMEMPDEDUCTION)
      setEmpdeduction(data1.data)
  }
  getData();
}, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  setEmployeeError(!pnCompanyId);
  setEmployeeError(!pnBranchId);
  setEmployeeError(!pnEmployeeId)
  setpnDeductionIdError(!pnDeductionId);
  setNAmountError(!/^\d+$/.test(nAmount));
  setDDateError(!dDate);
  setCEligibleError(!/^[A-Za-z0-9\s]{1,40}$/.test(cEligible));
  setFromDateError(!fromDate);
  setToDateError(!toDate);
  setperiodCodeError(!/^[A-Za-z0-9]{1,10}$/.test(periodCode));
  

  // If any field has error, prevent form submission
  if (
    employeeError ||
    pnDeductionIdError ||
   
    nAmountError ||
    dDateError ||
    cEligibleError ||
    fromDateError ||
    toDateError ||
    periodCodeError
  
  ) {
    return;
  }

  // Prepare data for POST request
  const formData = {
    pnCompanyId,
    pnBranchId,
    pnEmployeeId,
    pnDeductionId,
   
    nAmount,
    dDate,
    cEligible,
    fromDate,
    toDate,
    periodCode
    
  };

  try {
    // Send POST request
    const response = await postRequest(ServerConfig.url, PAYMEMPDEDUCTION, formData);
    console.log('Response:', response);
    navigate('/PaymEmpDeductionTable'); // Navigate to another page after successful submission
  } catch (error) {
    console.error('Error saving Employee Deduction:', error);
  }
};

// Handle form input changes
const handleChange = (e) => {
  const { name, value } = e.target;

  switch (name) {
    case 'pnCompanyId':
      setPnCompanyId(value);
      setEmployeeError(false);
      break;
    case 'pnBranchId':
      setPnBranchId(value);
      setEmployeeError(false)
      break;
    case 'pnEmployeeId':
      setEmployeeId(value);
      setEmployeeError(false);
      break;
    case 'pnDeductionId':
      setPnDeductionId(value);
      setpnDeductionIdError(false);
      break;
   
    case 'nAmount':
      setNAmount(value);
      setNAmountError(!/^\d+$/.test(value));
      break;
    case 'dDate':
      setDDate(value);
      setDDateError(!value);
      break;
    case 'cEligible':
      setCEligible(value);
      setCEligibleError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
      break;
    case 'fromDate':
      setFromDate(value);
      setFromDateError(!value);
      break;
    case 'toDate':
      setToDate(value);
      setToDateError(!value);
      break;
    case 'periodCode':
      setPeriodCode(value);
      setperiodCodeError(!/^[A-Za-z0-9]{1,10}$/.test(value));
      break;
   
    default:
      break;
  }
};



    const margin={margin:"0 5px"}
    return (
      <div>
        <Grid style ={{ padding: "80px 5px0 5px" }}>
        <Card style = {{maxWidth: 600, margin: "0 auto"}}>
        <CardContent>
        <Typography variant='h5' color='dark' align='center'>
              Employee Deduction Form
            </Typography>
            <Typography variant='subtitle1' color='textSecondary' paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Company ID</InputLabel>
                    <Select
                      value={pnCompanyId}
                      onChange={handleChange}
                      name='pnCompanyId'
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value=''>
                        <em>Select</em>
                      </MenuItem>
                      {employee.map((emp) => (
                        <MenuItem key={emp.pnCompanyId} value={emp.pnCompanyId}>
                          {emp.pnCompanyId}
                        </MenuItem>
                      ))}
                    </Select>
                    {employeeError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a Company ID
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Branch ID</InputLabel>
                    <Select
                      value={pnBranchId}
                      onChange={handleChange}
                      name='pnBranchId'
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value=''>
                        <em>Select</em>
                      </MenuItem>
                      {employee.map((emp) => (
                        <MenuItem key={emp.pnBranchId} value={emp.pnBranchId}>
                          {emp.pnBranchId}
                        </MenuItem>
                      ))}
                    </Select>
                    {employeeError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a Branch ID
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Employee ID</InputLabel>
                    <Select
                      value={pnEmployeeId}
                      onChange={handleChange}
                      name='pnEmployeeId'
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value=''>
                        <em>Select</em>
                      </MenuItem>
                      {employee.map((emp) => (
                        <MenuItem key={emp.pnEmployeeId} value={emp.pnEmployeeId}>
                          {emp.pnEmployeeId}
                        </MenuItem>
                      ))}
                    </Select>
                    {employeeError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select an Employee ID
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Deduction ID</InputLabel>
                    <Select
                      value={pnDeductionId}
                      onChange={handleChange}
                      name='pnDeductionId'
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value=''>
                        <em>Select</em>
                      </MenuItem>
                      {deduction.map((earn) => (
                        <MenuItem key={earn.pnDeductionId} value={earn.pnDeductionId}>
                          {earn.pnDeductionId}
                        </MenuItem>
                      ))}
                    </Select>
                    {pnDeductionIdError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select an Deduction ID
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
               
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={nAmountError}>
                    <TextField
                      name='nAmount'
                      label='Amount'
                      variant='outlined'
                      fullWidth
                      required
                      value={nAmount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {nAmountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Amount (only digits)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={dDateError}>
                    <TextField
                      name='dDate'
                      label='Date'
                      variant='outlined'
                      fullWidth
                      type='datetime-local'
                      required
                      value={dDate}
                      onChange={(e) => handleChange({ target: { name: 'dDate', value: e.target.value } })}
                      InputLabelProps={{ shrink: true }}
                    />
                    {dDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cEligibleError}>
                    <TextField
                      name='cEligible'
                      label='Eligibility'
                      variant='outlined'
                      fullWidth
                      required
                      value={cEligible}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cEligibleError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Eligibility (alphanumeric characters, max length 40)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={fromDateError}>
                    <TextField
                      name='fromDate'
                      label='From Date'
                      variant='outlined'
                      fullWidth
                      type='date'
                      required
                      value={fromDate}
                      onChange={(e) => handleChange({ target: { name: 'fromDate', value: e.target.value } })}
                      InputLabelProps={{ shrink: true }}
                    />
                    {fromDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a From Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={toDateError}>
                    <TextField
                      name='toDate'
                      label='To Date'
                      variant='outlined'
                      fullWidth
                      type='date'
                      required
                      value={toDate}
                      onChange={(e) => handleChange({ target: { name: 'toDate', value: e.target.value } })}
                      InputLabelProps={{ shrink: true }}
                    />
                    {toDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a To Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={periodCodeError}>
                    <TextField
                      name='periodCode'
                      label='Period Code'
                      variant='outlined'
                      fullWidth
                      required
                      value={periodCode}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {periodCodeError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Period Code (only alphanumeric characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                
                <Grid container spacing={1} paddingTop={'10px'}>
                  <Grid item xs={12} align='right'>
                    <Button style={margin} type='reset' variant='outlined' color='primary'>
                      RESET
                    </Button>
                    <Button type='submit' variant='contained' color='primary'>
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
