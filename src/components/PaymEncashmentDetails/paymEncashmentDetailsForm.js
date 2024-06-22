import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Card,
  Typography,
  Box,
  Grid,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMEMPLOYEE, PAYMEMPLOYEELEAVE, PAYMENCASHMENTDETAILS } from '../../serverconfiguration/controllers';
import { useNavigate } from 'react-router-dom';

export default function EncashmentDetailsForm() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState([]);
  const [leave, setLeave] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState('');
  const [pnBranchId, setPnBranchId] = useState('');
  const [pnEmployeeId, setPnEmployeeId] = useState('');
  const [pnLeaveId, setPnLeaveId] = useState('');
  const [allowDays, setAllowDays] = useState('');
  const [takenDays, setTakenDays] = useState('');
  const [maxDays, setMaxDays] = useState('');
  const [balDays, setBalDays] = useState('');
  const [basicPerDay, setBasicPerDay] = useState('');
  const [totalAmt, setTotalAmt] = useState('');
  const [date, setDate] = useState('');
  const [yearEnd, setYearEnd] = useState('');

  const [employeeError, setEmployeeError] = useState('');
  const [leaveError, setLeaveError] = useState('');
  const [allowDaysError, setAllowDaysError] = useState('');
  const [takenDaysError, setTakenDaysError] = useState('');
  const [maxDaysError, setMaxDaysError] = useState('');
  const [balDaysError, setBalDaysError] = useState('');
  const [basicPerDayError, setBasicPerDayError] = useState('');
  const [totalAmtError, setTotalAmtError] = useState('');
  const [dateError, setDateError] = useState('');
  const [yearEndError, setYearEndError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const empData = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
        setEmployee(empData.data);

        const leaveData = await getRequest(ServerConfig.url, PAYMEMPLOYEELEAVE);
        setLeave(leaveData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'pnCompanyId':
        setPnCompanyId(value);
        setEmployeeError('');
        break;
      case 'pnBranchId':
        setPnBranchId(value);
        setEmployeeError('');
        break;
      case 'pnEmployeeId':
        setPnEmployeeId(value);
        setEmployeeError('');
        break;
      case 'pnLeaveId':
        setPnLeaveId(value);
        setLeaveError('');
        break;
      case 'allowDays':
        setAllowDays(value);
        setAllowDaysError(!/^\d+(\.\d{1,2})?$/.test(value) ? 'Allow Days must be a valid decimal number only' : '');
        break;
      case 'takenDays':
        setTakenDays(value);
        setTakenDaysError(!/^\d+(\.\d{1,2})?$/.test(value) ? 'Taken Days must be a valid decimal number only' : '');
        break;
      case 'maxDays':
        setMaxDays(value);
        setMaxDaysError(!/^\d+(\.\d{1,2})?$/.test(value) ? 'Max Days must be a valid decimal number only' : '');
        break;
      case 'balDays':
        setBalDays(value);
        setBalDaysError(!/^\d+(\.\d{1,2})?$/.test(value) ? 'Bal Days must be a valid decimal number only' : '');
        break;
      case 'basicPerDay':
        setBasicPerDay(value);
        setBasicPerDayError(!/^\d+(\.\d{1,2})?$/.test(value) ? 'Basic Per Day must be a valid decimal number only' : '');
        break;
      case 'totalAmt':
        setTotalAmt(value);
        setTotalAmtError(!/^\d+(\.\d{1,2})?$/.test(value) ? 'Total Amount must be a valid decimal number only' : '');
        break;
      case 'date':
        setDate(value);
        setDateError(!value ? 'Date is required' : '');
        break;
      case 'yearEnd':
        setYearEnd(value);
        setYearEndError(!/^[A-Za-z0-9\s]{1,50}$/.test(value) ? 'Year End must be alphanumeric and up to 50 characters' : '');
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    setEmployeeError(!pnCompanyId ? 'Company Id is required' : '');
    setEmployeeError(!pnBranchId ? 'Branch Id is required' : '');
    setEmployeeError(!pnEmployeeId ? 'Employee Id is required' : '');
    setLeaveError(!pnLeaveId ? 'Leave Id is required' : '');
    setAllowDaysError(!/^\d+(\.\d{1,2})?$/.test(allowDays) ? 'Allow Days must be a valid decimal number only' : '');
    setTakenDaysError(!/^\d+(\.\d{1,2})?$/.test(takenDays) ? 'Taken Days must be a valid decimal number only' : '');
    setMaxDaysError(!/^\d+(\.\d{1,2})?$/.test(maxDays) ? 'Max Days must be a valid decimal number only' : '');
    setBalDaysError(!/^\d+(\.\d{1,2})?$/.test(balDays) ? 'Bal Days must be a valid decimal number only' : '');
    setBasicPerDayError(!/^\d+(\.\d{1,2})?$/.test(basicPerDay) ? 'Basic Per Day must be a valid decimal number only' : '');
    setTotalAmtError(!/^\d+(\.\d{1,2})?$/.test(totalAmt) ? 'Total Amount must be a valid decimal number only' : '');
    setDateError(!date ? 'Date is required' : '');
    setYearEndError(!/^[A-Za-z0-9\s]{1,50}$/.test(yearEnd) ? 'Year End must be alphanumeric and up to 50 characters' : '');

    // If there are any errors, prevent form submission
    if (
      employeeError ||
      leaveError ||
      allowDaysError ||
      takenDaysError ||
      maxDaysError ||
      balDaysError ||
      basicPerDayError ||
      totalAmtError ||
      dateError ||
      yearEndError
    ) {
      return;
    }

    // Prepare formData object for submission
    const formData = {
      pnCompanyId: pnCompanyId,
      pnBranchId: pnBranchId,
      pnEmployeeId: pnEmployeeId,
      pnLeaveId: pnLeaveId,
      allowDays: allowDays,
      takenDays: takenDays,
      maxDays: maxDays,
      balDays: balDays,
      basicPerDay: basicPerDay,
      totalAmt: totalAmt,
      date: date,
      yearEnd: yearEnd,
    };

    try {
      // Make API call to save form data
      const response = await postRequest(ServerConfig.url, PAYMENCASHMENTDETAILS, formData);
      console.log('Response:', response);
      navigate('/PaymEncashmentDetailsTables'); // Navigate to success page or list page
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const margin = { margin: '0 5px' };

  return (
    <div className="App">
      <Card style={{ maxWidth: 600, margin: '0 auto', font: 'initial' }}>
        <CardContent>
          <Typography sx={{ mt: 3 }} align="center" color="dark" variant="h5">
          Paym Encashment Details
          </Typography>

          <Typography variant="subtitle1" color="textSecondary" paddingBottom={'20px'}>
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
                    {employee.map((emp) => (
                      <MenuItem key={emp.pnCompanyId} value={emp.pnCompanyId}>
                        {emp.pnCompanyId}
                      </MenuItem>
                    ))}
                  </Select>
                  {employeeError && <FormHelperText sx={{ color: 'red' }}>{employeeError}</FormHelperText>}
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
                    {employee.map((emp) => (
                      <MenuItem key={emp.pnBranchId} value={emp.pnBranchId}>
                        {emp.pnBranchId}
                      </MenuItem>
                    ))}
                  </Select>
                  {employeeError && <FormHelperText sx={{ color: 'red' }}>{employeeError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel shrink>EmployeeId</InputLabel>
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
                      <MenuItem key={emp.pnEmployeeId} value={emp.pnEmployeeId}>
                        {emp.pnEmployeeId}
                      </MenuItem>
                    ))}
                  </Select>
                  {employeeError && <FormHelperText sx={{ color: 'red' }}>{employeeError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel shrink>LeaveId</InputLabel>
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
                    {leave.map((emp) => (
                      <MenuItem key={emp.pnLeaveId} value={emp.pnLeaveId}>
                        {emp.pnLeaveId}
                      </MenuItem>
                    ))}
                  </Select>
                  {leaveError && <FormHelperText sx={{ color: 'red' }}>{leaveError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={allowDaysError}>
                  <TextField
                    name="allowDays"
                    label="Allow Days"
                    variant="outlined"
                    fullWidth
                    required
                    value={allowDays}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  {allowDaysError && <FormHelperText sx={{ color: 'red' }}>{allowDaysError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={takenDaysError}>
                  <TextField
                    name="takenDays"
                    label="Taken Days"
                    variant="outlined"
                    fullWidth
                    required
                    value={takenDays}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  {takenDaysError && <FormHelperText sx={{ color: 'red' }}>{takenDaysError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={maxDaysError}>
                  <TextField
                    name="maxDays"
                    label="Max Days"
                    variant="outlined"
                    fullWidth
                    required
                    value={maxDays}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  {maxDaysError && <FormHelperText sx={{ color: 'red' }}>{maxDaysError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={balDaysError}>
                  <TextField
                    name="balDays"
                    label="Bal Days"
                    variant="outlined"
                    fullWidth
                    required
                    value={balDays}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  {balDaysError && <FormHelperText sx={{ color: 'red' }}>{balDaysError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={basicPerDayError}>
                  <TextField
                    name="basicPerDay"
                    label="Basic Per Day"
                    variant="outlined"
                    fullWidth
                    required
                    value={basicPerDay}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  {basicPerDayError && <FormHelperText sx={{ color: 'red' }}>{basicPerDayError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={totalAmtError}>
                  <TextField
                    name="totalAmt"
                    label="Total Amount"
                    variant="outlined"
                    fullWidth
                    required
                    value={totalAmt}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  {totalAmtError && <FormHelperText sx={{ color: 'red' }}>{totalAmtError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={dateError}>
                  <TextField
                    name="date"
                    label="Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    required
                    value={date}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  {dateError && <FormHelperText sx={{ color: 'red' }}>{dateError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={yearEndError}>
                  <TextField
                    name="yearEnd"
                    label="Year End"
                    variant="outlined"
                    fullWidth
                    required
                    value={yearEnd}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  {yearEndError && <FormHelperText sx={{ color: 'red' }}>{yearEndError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid container spacing={1} paddingTop={'10px'}>
                <Grid item xs={12} align="right">
                  <Button style={margin} type="reset" variant="outlined" color="primary">
                    RESET
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    SAVE
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
