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
import { PAYROLLFINALSETTLEMENT, PAYMEMPLOYEE } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';

export default function Sample21() {
  const navigate = useNavigate();
  const [payrollfinalsettlement, setPayRollFinalSettlement] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState("");
  const [pnBranchId, setPnBranchId] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [pnEmployeeId, setEmployeeId] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [lastWorkingDate, setLastWorkingDate] = useState("");
  const [serviceYear, setServiceYear] = useState("");
  const [grauityAmount, setGrauityAmount] = useState("");
  const [pfAmount, setPfAmount] = useState("");
  const [encashmentAmount, setEncashmentAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [deductSalaryAmount, setDeductSalaryAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState("");
  const [status, setStatus] = useState("");

  const [employeeError, setEmployeeError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [branchError, setBranchError] = useState("");
  const [referenceNoError, setReferenceNoError] = useState("");
  const [joiningDateError, setJoiningDateError] = useState("");
  const [lastWorkingDateError, setLastWorkingDateError] = useState("");
  const [serviceYearError, setServiceYearError] = useState("");
  const [grauityAmountError, setGrauityAmountError] = useState("");
  const [pfAmountError, setPfAmountError] = useState("");
  const [encashmentAmountError, setEncashmentAmountError] = useState("");
  const [loanAmountError, setLoanAmountError] = useState("");
  const [deductSalaryAmountError, setDeductSalaryAmountError] = useState("");
  const [finalAmountError, setFinalAmountError] = useState("");
  const [statusError, setStatusError] = useState("");

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
        setEmployeeId(value);
        setEmployeeError(false);
        break;
      case 'referenceNo':
        setReferenceNo(value);
        setReferenceNoError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
        break;
      case 'joiningDate':
        setJoiningDate(value);
        setJoiningDateError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
        break;
      case 'lastWorkingDate':
        setLastWorkingDate(value);
        setLastWorkingDateError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
        break;
      case 'serviceYear':
        setServiceYear(value);
        setServiceYearError(!/^\d+$/.test(value));
        break;
      case 'grauityAmount':
        setGrauityAmount(value);
        setGrauityAmountError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'pfAmount':
        setPfAmount(value);
        setPfAmountError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'encashmentAmount':
        setEncashmentAmount(value);
        setEncashmentAmountError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'loanAmount':
        setLoanAmount(value);
        setLoanAmountError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'deductSalaryAmount':
        setDeductSalaryAmount(value);
        setDeductSalaryAmountError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'finalAmount':
        setFinalAmount(value);
        setFinalAmountError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'status':
        setStatus(value.toUpperCase());
        setStatusError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
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
    setReferenceNoError(!/^[A-Za-z0-9\s]{1,40}$/.test(referenceNo));
    setJoiningDateError(!/^[A-Za-z0-9\s]{1,40}$/.test(joiningDate));
    setServiceYearError(!/^\d+$/.test(serviceYear));
    setLastWorkingDateError(!/^[A-Za-z0-9\s]{1,40}$/.test(lastWorkingDate));
    setGrauityAmountError(!/^\d+(\.\d{1,2})?$/.test(grauityAmount));
    setPfAmountError(!/^\d+(\.\d{1,2})?$/.test(pfAmount));
    setEncashmentAmountError(!/^\d+(\.\d{1,2})?$/.test(encashmentAmount));
    setLoanAmountError(!/^\d+(\.\d{1,2})?$/.test(loanAmount));
    setDeductSalaryAmountError(!/^\d+(\.\d{1,2})?$/.test(deductSalaryAmount));
    setFinalAmountError(!/^\d+(\.\d{1,2})?$/.test(finalAmount));
    setStatusError(!/^[A-Za-z0-9\s]{1,40}$/.test(status));

    if (
      companyError ||
      branchError ||
      employeeError ||
      referenceNoError ||
      joiningDateError ||
      serviceYearError ||
      lastWorkingDateError ||
      grauityAmountError ||
      pfAmountError ||
      encashmentAmountError ||
      loanAmountError ||
      deductSalaryAmountError ||
      finalAmountError ||
      statusError
    ) {
      return;
    }

    const formData = {
      pnCompanyId: pnCompanyId,
      pnBranchId: pnBranchId,
      pnEmployeeId: pnEmployeeId,
      referenceNo: referenceNo,
      joiningDate: joiningDate,
      lastWorkingDate: lastWorkingDate,
      serviceYear: serviceYear,
      grauityAmount: grauityAmount,
      pfAmount: pfAmount,
      encashmentAmount: encashmentAmount,
      loanAmount: loanAmount,
      deductSalaryAmount: deductSalaryAmount,
      finalAmount: finalAmount,
      status: status
    };

    try {
      const response = await postRequest(ServerConfig.url, PAYROLLFINALSETTLEMENT, formData);
      console.log(response);
      navigate('/PayrollFinalSettlemetTable');
    } catch (error) {
      console.error('Error saving Final Settlement:', error);
    }
  };

  const margin = { margin: "0 5px" };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>Payroll Final Settlements</Typography>
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
                  <FormControl fullWidth error={referenceNoError}>
                    <TextField
                      name="referenceNo"
                      label="Reference No"
                      variant="outlined"
                      fullWidth
                      required
                      value={referenceNo}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {referenceNoError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Reference No (alphanumeric characters, max length 40)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={joiningDateError}>
                    <TextField
                      name="joiningDate"
                      label="Joining Date"
                      variant="outlined"
                      fullWidth
                      required
                      value={joiningDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {joiningDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Joining Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={lastWorkingDateError}>
                    <TextField
                      name="lastWorkingDate"
                      label="Last Working Date"
                      variant="outlined"
                      fullWidth
                      required
                      value={lastWorkingDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {lastWorkingDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Last Working Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={serviceYearError}>
                    <TextField
                      name="serviceYear"
                      label="Service Year"
                      variant="outlined"
                      fullWidth
                      required
                      value={serviceYear}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {serviceYearError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Service Year
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={grauityAmountError}>
                    <TextField
                      name="grauityAmount"
                      label="Grauity Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={grauityAmount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {grauityAmountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Grauity Amount (numeric values, max 2 decimal places)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={pfAmountError}>
                    <TextField
                      name="pfAmount"
                      label="PF Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={pfAmount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {pfAmountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid PF Amount (numeric values, max 2 decimal places)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={encashmentAmountError}>
                    <TextField
                      name="encashmentAmount"
                      label="Encashment Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={encashmentAmount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {encashmentAmountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Encashment Amount (numeric values, max 2 decimal places)
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
                        Please enter a valid Loan Amount (numeric values, max 2 decimal places)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={deductSalaryAmountError}>
                    <TextField
                      name="deductSalaryAmount"
                      label="Deduct Salary Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={deductSalaryAmount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {deductSalaryAmountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Deduct Salary Amount (numeric values, max 2 decimal places)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={finalAmountError}>
                    <TextField
                      name="finalAmount"
                      label="Final Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={finalAmount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {finalAmountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Final Amount (numeric values, max 2 decimal places)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={statusError}>
                    <TextField
                      name="status"
                      label="Status"
                      variant="outlined"
                      fullWidth
                      required
                      value={status}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {statusError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Status (only alphanumeric characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={1} paddingTop={'10px'}>
                <Grid item xs={12} align="right">
                  <Button style={margin} type="reset" variant='outlined' color='primary'>RESET</Button>
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
