import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  TextField,
  Button,
  Typography,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText
} from '@mui/material';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';

import { PAYMEMPLOYEE, PAYMEARNING, PAYMEMPEARNING } from '../../serverconfiguration/controllers';

export default function PaymEmpEarningsForm() {
  const navigate = useNavigate();

  // State variables
  const [employee, setEmployee] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState('');
  const [pnBranchId, setPnBranchId] = useState('');
  const [pnEmployeeId, setPnEmployeeId] = useState('');
  const [pnEarningsId, setPnEarningsId] = useState('');

 
  const [nAmount, setNAmount] = useState('');
  const [dDate, setDDate] = useState('');
  const [cEligible, setCEligible] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [flag, setFlag] = useState('');
  const [pid, setPid] = useState('');

  // Error states
  const [employeeError, setEmployeeError] = useState(false);
  const [earningsError, setEarningsError] = useState(false);
  const [nAmountError, setNAmountError] = useState(false);
  const [dDateError, setDDateError] = useState(false);
  const [cEligibleError, setCEligibleError] = useState(false);
  const [fromDateError, setFromDateError] = useState(false);
  const [toDateError, setToDateError] = useState(false);
  const [flagError, setFlagError] = useState(false);
  const [pidError, setPidError] = useState(false);

  // Function to format date and time
  const formatTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:00`;
  };

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const empData = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
        setEmployee(empData.data);
        const earnData = await getRequest(ServerConfig.url, PAYMEARNING);
        setEarnings(earnData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    setEmployeeError(!pnCompanyId);
    setEmployeeError(!pnBranchId);
    setEmployeeError(!pnEmployeeId)
    setEarningsError(!pnEarningsId);
    setNAmountError(!/^\d+$/.test(nAmount));
    setDDateError(!dDate);
    setCEligibleError(!/^[A-Za-z0-9\s]{1,40}$/.test(cEligible));
    setFromDateError(!fromDate);
    setToDateError(!toDate);
    setFlagError(!/^[A-Za-z]{1}$/.test(flag));
    setPidError(!/^[A-Za-z]{1}$/.test(pid));

    // If any field has error, prevent form submission
    if (
      employeeError ||
      earningsError ||
     
      nAmountError ||
      dDateError ||
      cEligibleError ||
      fromDateError ||
      toDateError ||
      flagError ||
      pidError
    ) {
      return;
    }

    // Prepare data for POST request
    const formData = {
      pnCompanyId,
      pnBranchId,
      pnEmployeeId,
      pnEarningsId,
     
      nAmount,
      dDate,
      cEligible,
      fromDate,
      toDate,
      flag,
      pid
    };

    try {
      // Send POST request
      const response = await postRequest(ServerConfig.url, PAYMEMPEARNING, formData);
      console.log('Response:', response);
      navigate('/PaymEmpEarningsTable'); // Navigate to another page after successful submission
    } catch (error) {
      console.error('Error saving Employee Earnings:', error);
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
        setEmployeeError(false);
        break;
      case 'pnEmployeeId':
        setPnEmployeeId(value);
        setEmployeeError(false);
        break;
      case 'pnEarningsId':
        setPnEarningsId(value);
        setEarningsError(false);
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
      case 'flag':
        setFlag(value);
        setFlagError(!/^[A-Za-z]{1}$/.test(value));
        break;
      case 'pid':
        setPid(value);
        setPidError(!/^[A-Za-z]{1}$/.test(value));
        break;
      default:
        break;
    }
  };

  const margin = { margin: '0 5px' };

  return (
    <div>
      <Grid style={{ padding: '80px 5px 0 5px' }}>
        <Card style={{ maxWidth: 600, margin: '0 auto' }}>
          <CardContent>
            <Typography variant='h5' color='dark' align='center'>
              EMPLOYEE EARNINGS FORM
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
                    <InputLabel shrink>Earnings ID</InputLabel>
                    <Select
                      value={pnEarningsId}
                      onChange={handleChange}
                      name='pnEarningsId'
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value=''>
                        <em>Select</em>
                      </MenuItem>
                      {earnings.map((earn) => (
                        <MenuItem key={earn.pnEarningsId} value={earn.pnEarningsId}>
                          {earn.pnEarningsId}
                        </MenuItem>
                      ))}
                    </Select>
                    {earningsError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select an Earnings ID
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
                  <FormControl fullWidth error={flagError}>
                    <TextField
                      name='flag'
                      label='Flag'
                      variant='outlined'
                      fullWidth
                      required
                      value={flag}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {flagError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Flag (only alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={pidError}>
                    <TextField
                      name='pid'
                      label='PID'
                      variant='outlined'
                      fullWidth
                      required
                      value={pid}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {pidError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid PID (only alphabetic characters)
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
