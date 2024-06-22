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
import { PAYMEMPLOYEEWORKDETAILS, PAYMEMPLOYEE } from '../../serverconfiguration/controllers';
import { useNavigate } from 'react-router-dom';

export default function EmployeeWorkDetailsForm() {
  const navigate = useNavigate();

  // State variables for form inputs and errors
  const [employee, setEmployee] = useState([]);
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState('');
  const [pnBranchId, setPnBranchId] = useState('');
  const [pnEmployeeId, setPnEmployeeId] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [offerDate, setOfferDate] = useState('');
  const [probationUpto, setProbationUpto] = useState('');
  const [extendedUpto, setExtendedUpto] = useState('');
  const [confirmationDate, setConfirmationDate] = useState('');
  const [retirementDate, setRetirementDate] = useState('');
  const [contractRenviewDate, setContractRenviewDate] = useState('');
  const [vReason, setVReason] = useState('');

  // State variables for input validation errors
  const [employeeError, setEmployeeError] = useState(false);
  const [joiningDateError, setJoiningDateError] = useState(false);
  const [offerDateError, setOfferDateError] = useState(false);
  const [probationUptoError, setProbationUptoError] = useState(false);
  const [extendedUptoError, setExtendedUptoError] = useState(false);
  const [confirmationDateError, setConfirmationDateError] = useState(false);
  const [retirementDateError, setRetirementDateError] = useState(false);
  const [contractRenviewDateError, setContractRenviewDateError] = useState(false);
  const [vReasonError, setVReasonError] = useState(false);

  // Fetch data from server on component mount
  useEffect(() => {
    async function getData() {
      try {
        const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
        setEmployee(data.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    }
    getData();
  }, []);

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
      case 'joiningDate':
        setJoiningDate(value);
        setJoiningDateError(false);
        break;
      case 'offerDate':
        setOfferDate(value);
        setOfferDateError(false);
        break;
      case 'probationUpto':
        setProbationUpto(value);
        setProbationUptoError(false);
        break;
      case 'extendedUpto':
        setExtendedUpto(value);
        setExtendedUptoError(false);
        break;
      case 'confirmationDate':
        setConfirmationDate(value);
        setConfirmationDateError(false);
        break;
      case 'retirementDate':
        setRetirementDate(value);
        setRetirementDateError(false);
        break;
      case 'contractRenviewDate':
        setContractRenviewDate(value);
        setContractRenviewDateError(false);
        break;
      case 'vReason':
        setVReason(value.toUpperCase());
        setVReasonError(!/^[A-Za-z0-9\s]{1,200}$/.test(value));
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    setEmployeeError(!pnCompanyId || !pnBranchId || !pnEmployeeId);
    setJoiningDateError(!joiningDate);
    setOfferDateError(!offerDate);
    setProbationUptoError(!probationUpto);
    setExtendedUptoError(!extendedUpto);
    setConfirmationDateError(!confirmationDate);
    setRetirementDateError(!retirementDate);
    setContractRenviewDateError(!contractRenviewDate);
    setVReasonError(!/^[A-Za-z0-9\s]{1,200}$/.test(vReason));

    // If there are errors, prevent form submission
    if (
      employeeError ||
      joiningDateError ||
      offerDateError ||
      probationUptoError ||
      extendedUptoError ||
      confirmationDateError ||
      retirementDateError ||
      contractRenviewDateError ||
      vReasonError
    ) {
      return;
    }

    // Prepare form data for submission
    const formData = {
      pnCompanyId,
      pnBranchId,
      pnEmployeeId,
      joiningDate,
      offerDate,
      probationUpto,
      extendedUpto,
      confirmationDate,
      retirementDate,
      contractRenviewDate,
      vReason,
    };

    try {
      // Post form data to server
      const response = await postRequest(ServerConfig.url, PAYMEMPLOYEEWORKDETAILS, formData);
      console.log('Response:', response);
      navigate('/PaymEmployeeWorkDetailTables'); // Navigate to another page on success
    } catch (error) {
      console.error('Error saving Work Details:', error);
    }
  };

  // Render the component
  return (
    <div>
      <Grid style={{ padding: '80px 5px 0 5px' }}>
        <Card style={{ maxWidth: 600, margin: '0 auto' }}>
          <CardContent>
            <Typography variant="h5" color="primary" align="center">
              Paym Employee Work Details
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={employeeError}>
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
                      <FormHelperText sx={{ color: 'red' }}>Please select a CompanyId</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={employeeError}>
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
                    {employeeError && <FormHelperText sx={{ color: 'red' }}>Please select a BranchId</FormHelperText>}
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
                    {employeeError && <FormHelperText sx={{ color: 'red' }}>Please select a EmployeeId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={joiningDateError}>
                    <TextField
                      name="joiningDate"
                      label="Joining Date"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      value={joiningDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {joiningDateError && (
                      <FormHelperText sx={{ color: 'red' }}>Please enter Joining Date</FormHelperText>
                    )}
                  </FormControl>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={offerDateError}>
                    <TextField
                      name="offerDate"
                      label="Offer Date"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      value={offerDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {offerDateError && (
                      <FormHelperText sx={{ color: 'red' }}>Please enter Offer Date</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={probationUptoError}>
                    <TextField
                      name="probationUpto"
                      label="Probation Upto"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      value={probationUpto}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {probationUptoError && (
                      <FormHelperText sx={{ color: 'red' }}>Please enter Probation Upto Date</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={extendedUptoError}>
                    <TextField
                      name="extendedUpto"
                      label="Extended Upto"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      value={extendedUpto}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {extendedUptoError && (
                      <FormHelperText sx={{ color: 'red' }}>Please enter Extended Upto Date</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={confirmationDateError}>
                    <TextField
                      name="confirmationDate"
                      label="Confirmation Date"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      value={confirmationDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {confirmationDateError && (
                      <FormHelperText sx={{ color: 'red' }}>Please enter Confirmation Date</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={retirementDateError}>
                    <TextField
                      name="retirementDate"
                      label="Retirement Date"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      value={retirementDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {retirementDateError && (
                      <FormHelperText sx={{ color: 'red' }}>Please enter Retirement Date</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={contractRenviewDateError}>
                    <TextField
                      name="contractRenviewDate"
                      label="Contract Review Date"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      value={contractRenviewDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {contractRenviewDateError && (
                      <FormHelperText sx={{ color: 'red' }}>Please enter Contract Review Date</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={vReasonError}>
                    <TextField
                      name="vReason"
                      label="Reason"
                      variant="outlined"
                      fullWidth
                      required
                      value={vReason}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {vReasonError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Reason (alphanumeric characters, max length 200)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid container spacing={1} paddingTop={'10px'}>
                  <Grid item xs={12} align="right">
                    <Button type="reset" variant="outlined" color="primary" style={{ margin: '0 5px' }}>
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
      </Grid>
    </div>
  );
}
