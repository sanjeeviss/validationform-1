import { useState, useEffect } from 'react';
import { Grid, Card, TextField, Button, Typography, Box, CardContent, FormControl, Select, MenuItem, FormHelperText, InputLabel } from '@mui/material';
import { PAYMEMPLOYEE, PAYMLEAVE, PAYMDESIGNATION, LEAVEAPPROVEHR, LEAVEAPPROVEMANAGER } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';

export default function ApproveManagerForm() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState([]);
  const [pnCompanyId, setpnCompanyId] = useState("");
  const [pnBranchId, setpnBranchId] = useState("");
  const [empId, setEmployeeId] = useState("");
  const [empCode, setEmployeeCode] = useState("");
  const [empName, setEmployeeName] = useState("");
  const [leave, setLeave] = useState([]);
  const [pnLeaveId, setLeaveId] = useState("");
  const [vLeaveName, setLeaveName] = useState("");
  const [pnLeaveCode, setLeaveCode] = useState("");
  const [designation, setDesignation] = useState([]);
  const [pnDesignationId, setPnDesignationId] = useState("");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [submittedDate, setSubmittedDate] = useState("");
  const [fromStatus, setFromStatus] = useState("");
  const [toStatus, setToStatus] = useState("");
  const [approve, setApprove] = useState("");
  const [yearEnd, setYearEnd] = useState("");
  const [dayss, setDayss] = useState("");

  const [EmployeeError, setEmployeeError] = useState("");
  const [employeeCodeError, setEmployeeCodeError] = useState("");
  const [employeeNameError, setEmployeeNameError] = useState("");
  const [LeaveError, setLeaveError] = useState("");
  const [vLeaveNameError, setLeaveNameError] = useState("");
  const [pnLeaveCodeError, setLeaveCodeError] = useState("");
  const [DesignationError, setDesignationError] = useState("");
  const [fromDateError, setFromDateError] = useState("");
  const [toDateError, setToDateError] = useState("");
  const [submittedDateError, setSubmittedDateError] = useState("");
  const [fromStatusError, setFromStatusError] = useState("");
  const [toStatusError, setToStatusError] = useState("");
  const [approveError, setApproveError] = useState("");
  const [yearEndError, setYearEndError] = useState("");
  const [daysError, setDaysError] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
      setEmployee(data.data);
      const paymleave = await getRequest(ServerConfig.url, PAYMLEAVE);
      setLeave(paymleave.data);
      const paymDesignation = await getRequest(ServerConfig.url, PAYMDESIGNATION);
      setDesignation(paymDesignation.data);
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
        case 'empId':
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
        setLeaveError(!/^[A-Za-z0-9\s]{1,50}$/.test(value));
        break;
      case 'pnDesignationId':
        setPnDesignationId(value);
        setDesignationError(false);
        break;
      case 'fromDate':
        setFromDate(value);
        setFromDateError(!value);
        break;
      case 'toDate':
        setToDate(value);
        setToDateError(!value);
        break;
      case 'submittedDate':
        setSubmittedDate(value);
        setSubmittedDateError(!value);
        break;
      case 'fromStatus':
        setFromStatus(value);
        setFromStatusError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
        break;
      case 'toStatus':
        setToStatus(value);
        setToStatusError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
        break;
      case 'approve':
        setApprove(value);
        setApproveError(!/^[A-Za-z0-9\s]{1,30}$/.test(value));
        break;
      case 'yearEnd':
        setYearEnd(value);
        setYearEndError(!/^[A-Za-z0-9\s]{1,10}$/.test(value));
        break;
      case 'dayss':
        setDayss(value);
        setDaysError(!/^\d+$/.test(value));
        break;
      default:
        break;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmployeeError(!pnCompanyId);
    setEmployeeError(!pnBranchId);
    setEmployeeError(!empId);
    setLeaveError(!pnLeaveId);
    setDesignationError(!pnDesignationId);
    setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,50}$/.test(empCode));
    setEmployeeNameError(!/^[A-Za-z0-9\s]{1,100}$/.test(empName));
    setLeaveCodeError(!/^[A-Za-z0-9\s]{1,50}$/.test(pnLeaveCode));
    setLeaveNameError(!/^[A-Za-z0-9\s]{1,100}$/.test(vLeaveName));
    setFromDateError(!fromDate);
    setToDateError(!toDate);
    setSubmittedDateError(!submittedDate);
    setFromStatusError(!/^[A-Za-z0-9\s]{1,20}$/.test(fromStatus));
    setToStatusError(!/^[A-Za-z0-9\s]{1,20}$/.test(toStatus));
    setApproveError(!/^[A-Za-z0-9\s]{1,30}$/.test(approve));
    setYearEndError(!/^[A-Za-z0-9\s]{1,10}$/.test(yearEnd));
    setDaysError(!/^\d+$/.test(dayss));

    if (
      EmployeeError ||
      LeaveError ||
      DesignationError ||
      fromDateError ||
      toDateError ||
      submittedDateError ||
      fromStatusError ||
      toStatusError ||
      yearEndError ||
      approveError ||
      daysError
    ) {
      return;
    }

    const formData = {
      pnCompanyId: pnCompanyId,
      pnBranchId: pnBranchId,
      empId: empId,
      empCode: empCode,
      empName: empName,
      pnLeaveId: pnLeaveId,
      pnLeavename: vLeaveName,
      pnLeavecode: pnLeaveCode,
      pnDesignationId: pnDesignationId,
      fromDate: fromDate,
      toDate: toDate,
      submittedDate: submittedDate,
      fromStatus: fromStatus,
      toStatus: toStatus,
      approve: approve,
      yearEnd: yearEnd,
      dayss: parseInt(dayss),
    };
    try {
      const response = await postRequest(ServerConfig.url, LEAVEAPPROVEMANAGER, formData);
      console.log(response);
      navigate('/LeaveApproveManagerTable');
    } catch (error) {
      console.error('Error saving Leave Approve:', error);
    }
  };

  const margin = { margin: "0 5px" };
  return (
    <div>
      <Grid style={{ padding: "80px 5px0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>Leave Approve Manager Form</Typography>
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
                    {EmployeeError && (
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
                    {EmployeeError && <FormHelperText sx={{ color: 'red' }}>Please Select a BranchId</FormHelperText>}
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
      value={empId}
      onChange={handleChange}
      name="empId"
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
                      {leave.map((e) => (
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
                  <FormControl fullWidth>
                    <InputLabel shrink>Designation ID</InputLabel>
                    <Select
                      value={pnDesignationId}
                      onChange={handleChange}
                      name="pnDesignationId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {designation.map((e) => (
                        <MenuItem key={e.pnDesignationId} value={e.pnDesignationId}>{e.pnDesignationId}</MenuItem>
                      ))}
                    </Select>
                    {DesignationError && <FormHelperText sx={{ color: 'red' }}>Please Select a Designation ID</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={fromDateError}>
                    <TextField
                      name="fromDate"
                      label="From Date"
                      variant="outlined"
                      fullWidth
                      required
                      value={fromDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      type="date"
                    />
                    {fromDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid From Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={toDateError}>
                    <TextField
                      name="toDate"
                      label="To Date"
                      variant="outlined"
                      fullWidth
                      required
                      value={toDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      type="date"
                    />
                    {toDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid To Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={submittedDateError}>
                    <TextField
                      name="submittedDate"
                      label="Submitted Date"
                      variant="outlined"
                      fullWidth
                      required
                      value={submittedDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      type="date"
                    />
                    {submittedDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Submitted Date
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
                        Please enter a valid From Status (alphanumeric characters, max length 20)
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
                        Please enter a valid To Status (alphanumeric characters, max length 20)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={approveError}>
                    <TextField
                      name="approve"
                      label="Approve"
                      variant="outlined"
                      fullWidth
                      required
                      value={approve}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {approveError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Approve (alphanumeric characters, max length 30)
                      </FormHelperText>
                    )}
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
                    {yearEndError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Year End (alphanumeric characters, max length 10)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={daysError}>
                    <TextField
                      name="dayss"
                      label="Days"
                      variant="outlined"
                      fullWidth
                      required
                      value={dayss}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {daysError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid number of Days only integer value 
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
