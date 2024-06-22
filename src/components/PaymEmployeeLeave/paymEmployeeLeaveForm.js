import { useState, useEffect } from 'react';
import { TextField, Button, Card, Typography, Box, Grid, CardContent, FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMEMPLOYEE, PAYMEMPLOYEELEAVE } from '../../serverconfiguration/controllers';
import { useNavigate } from 'react-router-dom';

export default function PaymEmpLeaveForm() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState("");
  const [pnBranchId, setPnBranchId] = useState("");
  const [pnEmployeeId, setPnEmployeeID] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromStatus, setFromStatus] = useState("");
  const [toStatus, setToStatus] = useState("");
  const [leaveCount, setLeaveCount] = useState("");
  const [pnLeaveId, setPnLeaveID] = useState("");
  const [leaveError, setLeaveError] = useState([]); // Change here
  const [employeeError, setEmployeeError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [fromDateError, setFromDateError] = useState(false);
  const [toDateError, setToDateError] = useState(false);
  const [fromStatusError, setFromStatusError] = useState(false);
  const [toStatusError, setToStatusError] = useState(false);
  const [leaveCountError, setLeaveCountError] = useState(false);
  const [pnLeaveIdError, setPnLeaveIDError] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
      setEmployee(data.data);
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'pnCompanyId':
        setPnCompanyId(value);
        setCompanyError(false);
        break;
      case 'pnBranchId':
        setPnBranchId(value);
        setBranchError(false);
        break;
      case 'pnEmployeeId':
        setPnEmployeeID(value);
        setEmployeeError(false);
        break;
      case 'pnLeaveId':
        setPnLeaveID(value);
        setLeaveError(false);
        break;
      case 'fromDate':
        setFromDate(value);
        setFromDateError(!value);
        break;
      case 'toDate':
        setToDate(value);
        setToDateError(!value);
        break;
      case 'fromStatus':
        setFromStatus(value);
        setFromStatusError(!/^[A-Za-z0-9\s]{1,5}$/.test(value));
        break;
      case 'toStatus':
        setToStatus(value);
        setToStatusError(!/^[A-Za-z0-9\s]{1,5}$/.test(value));
        break;
      case 'leaveCount':
        setLeaveCount(value);
        setLeaveCountError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!pnCompanyId);
    setBranchError(!pnBranchId);
    setEmployeeError(!pnEmployeeId);
    setPnLeaveIDError(!pnLeaveId);
    setFromDateError(!fromDate);
    setToDateError(!toDate);
    setFromStatusError(!/^[A-Za-z0-9\s]{1,5}$/.test(fromStatus));
    setToStatusError(!/^[A-Za-z0-9\s]{1,5}$/.test(toStatus));
    setLeaveCountError(!/^\d+(\.\d+)?$/.test(leaveCount) || !leaveCount);

    if (
      companyError ||
      branchError ||
      employeeError ||
      pnLeaveIdError ||
      fromDateError ||
      toDateError ||
      fromStatusError ||
      toStatusError ||
      leaveCountError
    ) {
      return;
    }

    const formData = {
      pnCompanyId,
      pnBranchId,
      pnEmployeeId,
      fromDate,
      toDate,
      fromStatus,
      toStatus,
      leaveCount,
      pnLeaveId
    };

    try {
      const response = await postRequest(ServerConfig.url, PAYMEMPLOYEELEAVE, formData);
      console.log(response);
      navigate('/PaymEmpLeaveTable');
    } catch (error) {
      console.error('Error saving Emp Leave:', error);
    }
  };

  const margin = { margin: "0 5px" };
  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>Paym Employee Leave</Typography>
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
                        <MenuItem key={e.pnBranchId} value={e.pnBranchId}>
                          {e.pnBranchId}
                        </MenuItem>
                      ))}
                    </Select>
                    {branchError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a BranchId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={employeeError}>
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
                      {employee.map((e) => (
                        <MenuItem key={e.pnEmployeeId} value={e.pnEmployeeId}>
                          {e.pnEmployeeId}
                        </MenuItem>
                      ))}
                    </Select>
                    {employeeError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select an EmployeeId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={employeeError}>
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
                      {leaveError.map((e) => ( // Corrected here
                        <MenuItem key={e.pnLeaveId} value={e.pnLeaveId}>
                          {e.pnLeaveId}
                        </MenuItem>
                      ))}
                    </Select>
                    {leaveError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select an LeaveId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={fromDateError}>
                    <TextField
                      name="fromDate"
                      label="From Date"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      value={fromDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {fromDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a From Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={toDateError}>
                    <TextField
                      name="toDate"
                      label="To Date"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      value={toDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {toDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a To Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={fromStatusError}>
                    <TextField
                      name="fromStatus"
                      label="From Status"
                      variant="outlined"
                      fullWidth
                      required
                      value={fromStatus}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {fromStatusError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid From Status (alphanumeric characters, max length 5)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={toStatusError}>
                    <TextField
                      name="toStatus"
                      label="To Status"
                      variant="outlined"
                      fullWidth
                      required
                      value={toStatus}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {toStatusError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid To Status (alphanumeric characters, max length 5)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={leaveCountError}>
                    <TextField
                      name="leaveCount"
                      label="Leave Count"
                      variant="outlined"
                      fullWidth
                      required
                      value={leaveCount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {leaveCountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Leave Count (numeric)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid container spacing={1} paddingTop={'10px'}>
                  <Grid item xs={12} align="right">
                    <Button style={margin} type="reset" variant='outlined' color='primary'>RESET</Button>
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
