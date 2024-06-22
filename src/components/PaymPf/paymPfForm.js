import {
  Grid,
  Card,
  TextField,
  Button,
  Typography,
  Box,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { PAYMBRANCHES, PAYMCOMPANIES, PAYMPF } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';

export default function Sample25() {
  const navigate = useNavigate();
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [pnCompanyId, setpnCompanyId] = useState("");
  const [pnBranchId, setPnBranch] = useState("");
  const [empConPf, setEmpConPf] = useState("");
  const [empConEpf, setEmpConEpf] = useState("");
  const [empConFpf, setEmpConFpf] = useState("");
  const [adminCharges, setAdminCharges] = useState("");
  const [eligibilityAmt, setEligibilityAmt] = useState("");
  const [cRound, setCRound] = useState("");
  const [dDate, setDdate] = useState("");
  const [checkCeiling, setCheckCeiling] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [checkAllowance, setCheckAllowance] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [empConPfError, setEmpConPfError] = useState(false);
  const [empConEpfError, setEmpConEpfError] = useState(false);
  const [empConFpfError, setEmpConFpfError] = useState(false);
  const [adminChargesError, setAdminChargesError] = useState(false);
  const [eligibilityAmtError, setEligibilityAmtError] = useState(false);
  const [cRoundError, setCRoundError] = useState(false);
  const [dDateError, setDdateError] = useState(false);
  const [checkCeilingError, setCheckCeilingError] = useState(false);
  const [maxAmountError, setMaxAmountError] = useState(false);
  const [checkAllowanceError, setCheckAllowanceError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);

  useEffect(() => {
    async function getData() {
      const companyData = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(companyData.data);
      const branchData = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(branchData.data);
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'pnCompanyId':
        setpnCompanyId(value);
        setCompanyError(!value);
        break;
      case 'pnBranchId':
        setPnBranch(value);
        setBranchError(!value);
        break;
      case 'empConPf':
        setEmpConPf(value);
        setEmpConPfError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      case 'empConEpf':
        setEmpConEpf(value);
        setEmpConEpfError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      case 'empConFpf':
        setEmpConFpf(value);
        setEmpConFpfError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      case 'adminCharges':
        setAdminCharges(value);
        setAdminChargesError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      case 'eligibilityAmt':
        setEligibilityAmt(value);
        setEligibilityAmtError(!/^[A-Za-z0-9\s]{1,30}$/.test(value));
        break;
      case 'cRound':
        setCRound(value);
        setCRoundError(!/^[A-Za-z]{1}$/.test(value));
        break;
      case 'dDate':
        setDdate(value);
        setDdateError(!value);
        break;
      case 'checkCeiling':
        setCheckCeiling(value);
        setCheckCeilingError(!/^[A-Za-z0-9\s]{1,2}$/.test(value));
        break;
      case 'maxAmount':
        setMaxAmount(value);
        setMaxAmountError(!/^\d+$/.test(value) || !value);
        break;
      case 'checkAllowance':
        setCheckAllowance(value);
        setCheckAllowanceError(!/^[A-Za-z]{1}$/.test(value));
        break;
      case 'month':
        setMonth(value);
        setMonthError(!/^[A-Za-z0-9\s]{1,10}$/.test(value));
        break;
      case 'year':
        setYear(value);
        setYearError(!/^\d+$/.test(value) || !value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!pnCompanyId);
    setBranchError(!pnBranchId);

    setEmpConPfError(!/^\d+(\.\d+)?$/.test(empConPf) || !empConPf);
    setEmpConEpfError(!/^\d+(\.\d+)?$/.test(empConEpf) || !empConEpf);
    setEmpConFpfError(!/^\d+(\.\d+)?$/.test(empConFpf) || !empConFpf);
    setAdminChargesError(!/^\d+(\.\d+)?$/.test(adminCharges) || !adminCharges);
    setEligibilityAmtError(!/^[A-Za-z0-9\s]{1,30}$/.test(eligibilityAmt));
    setCRoundError(!/^[A-Za-z]{1}$/.test(cRound));
    setDdateError(!dDate);
    setCheckCeilingError(!/^[A-Za-z0-9\s]{1,2}$/.test(checkCeiling));
    setMaxAmountError(!/^\d+$/.test(maxAmount) || !maxAmount);
    setCheckAllowanceError(!/^[A-Za-z]{1}$/.test(checkAllowance));
    setMonthError(!/^[A-Za-z0-9\s]{1,10}$/.test(month));
    setYearError(!/^\d+$/.test(year) || !year);

    if (
      companyError ||
      branchError ||
      empConPfError ||
      empConEpfError ||
      empConFpfError ||
      adminChargesError ||
      eligibilityAmtError ||
      cRoundError ||
      dDateError ||
      checkCeilingError ||
      maxAmountError ||
      checkAllowanceError ||
      monthError ||
      yearError
    ) {
      return;
    }

    const formData = {
      pnCompanyId,
      pnBranchId,
      empConPf,
      empConEpf,
      empConFpf,
      adminCharges,
      eligibilityAmt,
      cRound,
      dDate,
      checkCeiling,
      maxAmount,
      checkAllowance,
      month,
      year,
    };

    try {
      const response = await postRequest(ServerConfig.url, PAYMPF, formData);
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
            <Typography variant='h5' color='textPrimary' align='center'>PaymPF</Typography>
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
                      {company.map((e) => (
                        <MenuItem key={e.pnCompanyId} value={e.pnCompanyId}>
                          {e.pnCompanyId}
                        </MenuItem>
                      ))}
                    </Select>
                    {companyError && <FormHelperText style={{ color: 'red' }}>Please select a company</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Branch Id</InputLabel>
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
                      {branch.map((e) => (
                        <MenuItem key={e.pnBranchId} value={e.pnBranchId}>
                          {e.pnBranchId}
                        </MenuItem>
                      ))}
                    </Select>
                    {branchError && <FormHelperText style={{ color: 'red' }}>Please select a branch</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Emp Con PF"
                    placeholder="Emp Con PF"
                    value={empConPf}
                    onChange={handleChange}
                    name="empConPf"
                    error={empConPfError}
                    helperText={empConPfError && 'Please enter a valid Emp Con PF its only the float value'}
                    inputProps={{ maxLength: 5 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Emp Con EPF"
                    placeholder="Emp Con EPF"
                    value={empConEpf}
                    onChange={handleChange}
                    name="empConEpf"
                    error={empConEpfError}
                    helperText={empConEpfError && 'Please enter a valid Emp Con EPF its only the float value'}
                    inputProps={{ maxLength: 5 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Emp Con FPF"
                    placeholder="Emp Con FPF"
                    value={empConFpf}
                    onChange={handleChange}
                    name="empConFpf"
                    error={empConFpfError}
                    helperText={empConFpfError && 'Please enter a valid Emp Con FPF its only the float value'}
                    inputProps={{ maxLength: 5 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Admin Charges"
                    placeholder="Admin Charges"
                    value={adminCharges}
                    onChange={handleChange}
                    name="adminCharges"
                    error={adminChargesError}
                    helperText={adminChargesError && 'Please enter a valid Admin Charges its only the float value'}
                    inputProps={{ maxLength: 5 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Eligibility Amt"
                    placeholder="Eligibility Amt"
                    value={eligibilityAmt}
                    onChange={handleChange}
                    name="eligibilityAmt"
                    error={eligibilityAmtError}
                    helperText={eligibilityAmtError && 'Please enter a valid Eligibility Amt its only the float value'}
                    inputProps={{ maxLength: 30 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CRound"
                    placeholder="CRound"
                    value={cRound}
                    onChange={handleChange}
                    name="cRound"
                    error={cRoundError}
                    helperText={cRoundError && 'Please enter a valid CRound its only one alphabetic character'}
                    inputProps={{ maxLength: 1 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="D Date"
                    type="date"
                    placeholder="D Date"
                    value={dDate}
                    onChange={handleChange}
                    name="dDate"
                    error={dDateError}
                    helperText={dDateError && 'Please enter a valid D Date'}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Check Ceiling"
                    placeholder="Check Ceiling"
                    value={checkCeiling}
                    onChange={handleChange}
                    name="checkCeiling"
                    error={checkCeilingError}
                    helperText={checkCeilingError && 'Please enter a valid Check Ceiling its only the alphanumeric values max length is 2'}
                    inputProps={{ maxLength: 2 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Max Amount"
                    placeholder="Max Amount"
                    value={maxAmount}
                    onChange={handleChange}
                    name="maxAmount"
                    error={maxAmountError}
                    helperText={maxAmountError && 'Please enter a valid Max Amount its only integer values'}
                    inputProps={{ maxLength: 5 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Check Allowance"
                    placeholder="Check Allowance"
                    value={checkAllowance}
                    onChange={handleChange}
                    name="checkAllowance"
                    error={checkAllowanceError}
                    helperText={checkAllowanceError && 'Please enter a valid Check Allowance its only one alphabetic character'}
                    inputProps={{ maxLength: 1 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Month"
                    placeholder="Month"
                    value={month}
                    onChange={handleChange}
                    name="month"
                    error={monthError}
                    helperText={monthError && 'Please enter a valid Month its only the alphanumeric values max length is 2'}
                    inputProps={{ maxLength: 10 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Year"
                    placeholder="Year"
                    value={year}
                    onChange={handleChange}
                    name="year"
                    error={yearError}
                    helperText={yearError && 'Please enter a valid Year its only integer values'}
                    inputProps={{ maxLength: 4 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
              <Box style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
                <Button type="submit" variant="contained" style={{ margin: "0 5px" }}>Submit</Button>
                <Button variant="contained" style={{ margin: "0 5px" }}>Cancel</Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
