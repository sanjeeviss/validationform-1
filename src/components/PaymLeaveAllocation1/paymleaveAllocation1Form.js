import { 
  Grid, Card, TextField, Button, Typography, CardContent, FormControl, InputLabel, Select, MenuItem, FormHelperText 
} from '@mui/material';
import { useState, useEffect } from 'react';
import { PAYMEMPLOYEE, PAYMLEAVE, PAYMLEAVEALLOCATION1 } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';

export default function LeaveAllocation1Form() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [paymLeave, setPaymLeave] = useState([]);
  
  const [pnCompanyId, setPnCompanyId] = useState("");
  const [pnBranchId, setPnBranchId] = useState("");
  const [pnEmployeeId, setEmployeeId] = useState("");
  const [pnLeaveId, setLeaveId] = useState("");
  const [nCount, setNCount] = useState("");
  const [cyCount, setCyCount] = useState("");
  const [leaveby, setLeaveby] = useState("");
  const [yearend, setYearEnd] = useState("");
  
  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [employeeError, setEmployeeError] = useState(false);
  const [leaveError, setLeaveError] = useState(false);
  const [nCountError, setNCountError] = useState(false);
  const [cyCountError, setCyCountError] = useState(false);
  const [leavebyError, setLeavebyError] = useState(false);
  const [yearendError, setYearendError] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
      setEmployee(data.data);
      const paymLeave = await getRequest(ServerConfig.url, PAYMLEAVE);
      setPaymLeave(paymLeave.data);
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'pnCompanyId':
        setPnCompanyId(value);
        setCompanyError(!value);
        break;
      case 'pnBranchId':
        setPnBranchId(value);
        setBranchError(!value);
        break;
      case 'pnEmployeeId':
        setEmployeeId(value);
        setEmployeeError(!value);
        break;
      case 'pnLeaveId':
        setLeaveId(value);
        setLeaveError(!value);
        break;
      case 'nCount':
        setNCount(value);
        setNCountError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      case 'cyCount':
        setCyCount(value);
        setCyCountError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      case 'leaveby':
        setLeaveby(value);
        setLeavebyError(!/^[A-Za-z0-9\s]{1,30}$/.test(value));
        break;
      case 'yearend':
        setYearEnd(value);
        setYearendError(!/^\d+$/.test(value) || !value);
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
    setLeaveError(!pnLeaveId);
    setNCountError(!/^\d+(\.\d+)?$/.test(nCount) || !nCount);
    setCyCountError(!/^\d+(\.\d+)?$/.test(cyCount) || !cyCount);
    setLeavebyError(!/^[A-Za-z0-9\s]{1,30}$/.test(leaveby));
    setYearendError(!/^\d+$/.test(yearend) || !yearend);

    if (
      companyError ||
      branchError ||
      employeeError ||
      leaveError ||
      nCountError ||
      cyCountError ||
      leavebyError ||
      yearendError
    ) {
      return;
    }

    const formData = {
      pnCompanyId,
      pnBranchId,
      pnEmployeeId,
      pnLeaveId,
      nCount: parseFloat(nCount),
      cyCount: parseFloat(cyCount),
      leaveby,
      yearend: parseInt(yearend),
    };

    try {
      const response = await postRequest(ServerConfig.url, PAYMLEAVEALLOCATION1, formData);
      console.log(response);
      navigate('/Paymleaveallocation1Tables');
    } catch (error) {
      console.error('Error saving Leave:', error);
    }
  };

  const margin = { margin: "0 5px" };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='dark' align='center'>Paym Leave Allocation</Typography>
            <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth >
                    <InputLabel shrink>CompanyId</InputLabel>
                    <Select
                      name="pnCompanyId"
                      value={pnCompanyId}
                      onChange={handleChange}
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {employee.map((e) => (
                        <MenuItem key={e.pnCompanyId} value={e.pnCompanyId}>{e.pnCompanyId}</MenuItem>
                      ))}
                    </Select>
                    {companyError && <FormHelperText sx={{ color: 'red' }}>Please select a CompanyId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth >
                    <InputLabel shrink>BranchId</InputLabel>
                    <Select
                      name="pnBranchId"
                      value={pnBranchId}
                      onChange={handleChange}
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
                    {branchError && <FormHelperText sx={{ color: 'red' }}>Please select a BranchId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth >
                    <InputLabel shrink>EmployeeId</InputLabel>
                    <Select
                      name="pnEmployeeId"
                      value={pnEmployeeId}
                      onChange={handleChange}
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {employee.filter((e) => (e.pnCompanyId === pnCompanyId && e.pnBranchId === pnBranchId)).map((e) => (
                        <MenuItem key={e.pnEmployeeId} value={e.pnEmployeeId}>{e.pnEmployeeId}</MenuItem>
                      ))}
                    </Select>
                    {employeeError && <FormHelperText sx={{ color: 'red' }}>Please select an EmployeeId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth >
                    <InputLabel shrink>LeaveId</InputLabel>
                    <Select
                      name="pnLeaveId"
                      value={pnLeaveId}
                      onChange={handleChange}
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
                    {leaveError && <FormHelperText sx={{ color: 'red' }}>Please select a LeaveId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth >
                    <TextField
                      name="nCount"
                      label="nCount"
                      variant="outlined"
                      fullWidth
                      required
                      value={nCount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {nCountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Invalid nCount (must be a float)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth >
                    <TextField
                      name="cyCount"
                      label="cyCount"
                      variant="outlined"
                      fullWidth
                      required
                      value={cyCount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cyCountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Invalid cyCount (must be a float)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth >
                    <TextField
                      name="leaveby"
                      label="leaveby"
                      variant="outlined"
                      fullWidth
                      required
                      value={leaveby}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {leavebyError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Invalid leaveby (must be alphanumeric, max length 30)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth >
                    <TextField
                      name="yearend"
                      label="yearend"
                      variant="outlined"
                      fullWidth
                      required
                      value={yearend}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {yearendError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Invalid yearend (must be an integer)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={1} paddingTop={'10px'}>
                <Grid item xs={12} align="right">
                  <Button style={margin} type="reset" variant='outlined' color='primary'>RESET</Button>
                  <Button type="submit" variant='contained' color='primary'>SAVE</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
