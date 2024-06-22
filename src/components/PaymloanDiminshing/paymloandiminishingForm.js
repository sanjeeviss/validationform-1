import {
  Grid,
  Card,
  TextField,
  Button,
  Typography,
  Box,
  FormHelperText,
  MenuItem,
  Select,
  CardContent,
  FormControl,
  InputLabel
} from '@mui/material';
import { useState } from 'react';
import { postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMLOANDIMINISHING } from '../../serverconfiguration/controllers';
import { useNavigate } from 'react-router-dom';

export default function LeaveForm() {
  const navigate = useNavigate();

  const [pnCompanyid, setPnCompanyId] = useState("");
  const [pnBranchid, setPnBranchId] = useState("");
  const [pnEmployeeid, setPnEmployeeid] = useState("");
  const [fnLoanId, setFnLoanId] = useState("");
  const [loanAppid, setLoanAppid] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [balanceAmt, setBalanceAmt] = useState("");
  const [installementCount, setInstallementCount] = useState("");
  const [effDate, setEffDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [instalAmt, setInstalAmt] = useState("");
  const [months, setMonths] = useState("");
  const [loanStatus, setLoanStatus] = useState("");

  const [pnCompanyidError, setPnCompanyidError] = useState("");
  const [pnBranchidError, setPnBranchidError] = useState("");
  const [pnEmployeeidError, setPnEmployeeidError] = useState("");
  const [fnLoanIdError, setFnLoanIdError] = useState("");
  const [loanAppidError, setLoanAppidError] = useState("");
  const [loanAmountError, setLoanAmountError] = useState("");
  const [balanceAmtError, setBalanceAmtError] = useState("");
  const [installementCountError, setInstallementCountError] = useState("");
  const [effDateError, setEffDateError] = useState("");
  const [fromDateError, setFromDateError] = useState("");
  const [toDateError, setToDateError] = useState("");
  const [instalAmtError, setInstalAmtError] = useState("");
  const [monthsError, setMonthsError] = useState("");
  const [loanStatusError, setLoanStatusError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'pnCompanyid':
        setPnCompanyId(value);
        setPnCompanyidError(!/^\d+$/.test(value));
        break;
      case 'pnBranchid':
        setPnBranchId(value);
        setPnBranchidError(!/^\d+$/.test(value));
        break;
      case 'pnEmployeeid':
        setPnEmployeeid(value);
        setPnEmployeeidError(!/^\d+$/.test(value));
        break;
      case 'fnLoanId':
        setFnLoanId(value);
        setFnLoanIdError(!/^\d+$/.test(value));
        break;
      case 'loanAppid':
        setLoanAppid(value);
        setLoanAppidError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
        break;
      case 'loanAmount':
        setLoanAmount(value);
        setLoanAmountError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'balanceAmt':
        setBalanceAmt(value);
        setBalanceAmtError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'installementCount':
        setInstallementCount(value);
        setInstallementCountError(!/^\d+$/.test(value));
        break;
      case 'effDate':
        setEffDate(value);
        setEffDateError(!value);
        break;
      case 'fromDate':
        setFromDate(value);
        setFromDateError(!value);
        break;
      case 'toDate':
        setToDate(value);
        setToDateError(!value);
        break;
      case 'instalAmt':
        setInstalAmt(value);
        setInstalAmtError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'months':
        setMonths(value);
        setMonthsError(!/^\d+$/.test(value));
        break;
      case 'loanStatus':
        setLoanStatus(value);
        setLoanStatusError(!/^[A-Za-z0-9\s]{1,30}$/.test(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPnCompanyidError(!/^\d+$/.test(pnCompanyid));
    setPnBranchidError(!/^\d+$/.test(pnBranchid));
    setPnEmployeeidError(!/^\d+$/.test(pnEmployeeid));
    setFnLoanIdError(!/^\d+$/.test(fnLoanId));
    setLoanAppidError(!/^[A-Za-z0-9\s]{1,20}$/.test(loanAppid));
    setLoanAmountError(!/^\d+(\.\d{1,2})?$/.test(loanAmount));
    setBalanceAmtError(!/^\d+(\.\d{1,2})?$/.test(balanceAmt));
    setInstallementCountError(!/^\d+$/.test(installementCount));
    setEffDateError(!effDate);
    setFromDateError(!fromDate);
    setToDateError(!toDate);
    setInstalAmtError(!/^\d+(\.\d{1,2})?$/.test(instalAmt));
    setMonthsError(!/^\d+$/.test(months));
    setLoanStatusError(!/^[A-Za-z0-9\s]{1,30}$/.test(loanStatus));

    if (
      pnCompanyidError ||
      pnBranchidError ||
      pnEmployeeidError ||
      fnLoanIdError ||
      loanAppidError ||
      loanAmountError ||
      balanceAmtError ||
      installementCountError ||
      effDateError ||
      fromDateError ||
      toDateError ||
      instalAmtError ||
      monthsError ||
      loanStatusError
    ) {
      return;
    }

    const formData = {
      pnCompanyid,
      pnBranchid,
      pnEmployeeid,
      fnLoanId,
      loanAppid,
      loanAmount,
      balanceAmt,
      installementCount,
      effDate,
      fromDate,
      toDate,
      instalAmt,
      months,
      loanStatus,
    };

    try {
      const response = await postRequest(ServerConfig.url, PAYMLOANDIMINISHING, formData);
      console.log(response);
      navigate('/PaymLoanDiminishingTable');
    } catch (error) {
      console.error('Error saving Loan Diminishing:', error);
    }
  };

  const margin = { margin: "0 5px" };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='textSecondary' align='center'>Paym Loan Diminishing</Typography>
            <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={pnCompanyidError}>
                    <TextField
                      name="pnCompanyid"
                      label="Company Id"
                      variant="outlined"
                      fullWidth
                      required
                      value={pnCompanyid}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {pnCompanyidError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Company Id (must be an integer)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={pnBranchidError}>
                    <TextField
                      name="pnBranchid"
                      label="Branch Id"
                      variant="outlined"
                      fullWidth
                      required
                      value={pnBranchid}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {pnBranchidError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Branch Id (must be an integer)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={pnEmployeeidError}>
                    <TextField
                      name="pnEmployeeid"
                      label="Employee Id"
                      variant="outlined"
                      fullWidth
                      required
                      value={pnEmployeeid}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {pnEmployeeidError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Employee Id (must be an integer)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={fnLoanIdError}>
                    <TextField
                      name="fnLoanId"
                      label="Loan Id"
                      variant="outlined"
                      fullWidth
                      required
                      value={fnLoanId}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {fnLoanIdError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Loan Id (must be an integer)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanAppidError}>
                    <TextField
                      name="loanAppid"
                      label="Loan Application Id"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanAppid}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {loanAppidError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Loan Application Id (alphanumeric, max length 20)
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
                        Please enter a valid Loan Amount (decimal format 8,2)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={balanceAmtError}>
                    <TextField
                      name="balanceAmt"
                      label="Balance Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={balanceAmt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {balanceAmtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Balance Amount (decimal format 8,2)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={installementCountError}>
                    <TextField
                      name="installementCount"
                      label="Installment Count"
                      variant="outlined"
                      fullWidth
                      required
                      value={installementCount}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {installementCountError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Installment Count (must be an integer)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={effDateError}>
                    <TextField
                      name="effDate"
                      label="Effective Date"
                      variant="outlined"
                      fullWidth
                      required
                      type="date"
                      value={effDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {effDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Effective Date
                      </FormHelperText>
                    )}
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
                      type="date"
                      value={fromDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
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
                      type="date"
                      value={toDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {toDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid To Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={instalAmtError}>
                    <TextField
                      name="instalAmt"
                      label="Installment Amount"
                      variant="outlined"
                      fullWidth
                      required
                      value={instalAmt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {instalAmtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Installment Amount (decimal format 8,2)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={monthsError}>
                    <TextField
                      name="months"
                      label="Months"
                      variant="outlined"
                      fullWidth
                      required
                      value={months}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {monthsError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Months (must be an integer)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={loanStatusError}>
                    <TextField
                      name="loanStatus"
                      label="Loan Status"
                      variant="outlined"
                      fullWidth
                      required
                      value={loanStatus}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {loanStatusError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Loan Status (alphanumeric, max length 30)
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
