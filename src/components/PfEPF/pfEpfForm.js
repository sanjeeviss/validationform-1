import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Card, Typography, Box, Grid, CardContent, FormControl, InputLabel, MenuItem, Select, FormHelperText
} from '@mui/material';
import { PFEP, PFEPF } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';

export default function Sample20() {
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [pnCompanyId, setCompanyid] = useState("");
  const [pnBranchid, setBranchid] = useState("");
  const [pnEmployeeId, setEmployeeID] = useState("");
  const [nomineeName, setNomineeName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [pfShare, setPfshare] = useState("");
  const [relationship, setRelationship] = useState("");
  const [address1, setAddress1] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [pinNo, setPino] = useState("");
 
 
  const [employeeError, setEmployeeError] = useState(false);
  const [pnCompanyIdError, setpnCompanyIdError] = useState(false);
  const [pnBranchIdError, setpnBranchIdError] = useState(false);
  const [pnEmployeeIdError, setpnEmployeeIdError] = useState(false);
  const [nomineeNameError, setNomineeNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [pfShareError, setPfshareError] = useState(false);
  const [relationshipError, setRelationshipError] = useState(false);
  const [address1Error, setAddress1Error] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [districtError, setDistrictError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [pinNoError, setPinoError] = useState(false);
 

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PFEPF);
      setEmployee(data.data);
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'pnCompanyId':
        setCompanyid(value);
        setpnCompanyIdError(!value);
        break;
      case 'pnBranchid':
        setBranchid(value);
        setpnBranchIdError(!value);
        break;
      case 'pnEmployeeId':
        setEmployeeID(value);
        setpnEmployeeIdError(!value);
        break;
      case 'nomineeName':
        setNomineeName(value);
        setNomineeNameError(!/^[A-Za-z\s]{1,20}$/.test(value));
        break;
      case 'gender':
        setGender(value);
        setGenderError(!/^[A-Za-z]{1,10}$/.test(value));
        break;
      case 'dob':
        setDob(value);
        setDobError(!value);
        break;
      case 'pfShare':
        setPfshare(value);
        setPfshareError(!/^\d+(\.\d{1,2})?$/.test(value));
        break;
      case 'relationship':
        setRelationship(value);
        setRelationshipError(!/^[A-Za-z\s]{1,20}$/.test(value));
        break;
      case 'address1':
        setAddress1(value);
        setAddress1Error(!/^[\w\s!-/@#$%^&*()-,.?":{}|<>]{0,50}$/.test(value));
        break;
      case 'state':
        setState(value);
        setStateError(!/^[A-Za-z\s]{1,20}$/.test(value));
        break;
      case 'district':
        setDistrict(value);
        setDistrictError(!/^[A-Za-z\s]{1,20}$/.test(value));
        break;
      case 'city':
        setCity(value);
        setCityError(!/^[A-Za-z\s]{1,20}$/.test(value));
        break;
      case 'pinNo':
        setPino(value);
        setPinoError(!/^\d{6}$/.test(value));
        break;
    
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setpnCompanyIdError(!pnCompanyId);
    setpnBranchIdError(!pnBranchid);
    setpnEmployeeIdError(!pnEmployeeId);
    setNomineeNameError(!/^[A-Za-z\s]{1,20}$/.test(nomineeName));
    setGenderError(!/^[A-Za-z]{1,10}$/.test(gender));
    setDobError(!dob);
    setPfshareError(!/^\d+(\.\d{1,2})?$/.test(pfShare));
    setRelationshipError(!/^[A-Za-z\s]{1,20}$/.test(relationship));
    setAddress1Error(!/^[\w\s!-/@#$%^&*(),.?":{}|<>]{0,50}$/.test(address1));
    setStateError(!/^[A-Za-z\s]{1,20}$/.test(state));
    setDistrictError(!/^[A-Za-z\s]{1,20}$/.test(district));
    setCityError(!/^[A-Za-z\s]{1,20}$/.test(city));
    setPinoError(!/^\d{6}$/.test(pinNo));
    
    if (
      !pnCompanyIdError &&
      !pnBranchIdError &&
      !pnEmployeeIdError &&
      !nomineeNameError &&
      !genderError &&
      !dobError &&
      !pfShareError &&
      !relationshipError &&
      !address1Error &&
      !stateError &&
      !districtError &&
      !cityError &&
      !pinNoError 
    ) {
      const formData = {
        pnCompanyId: pnCompanyId,
  pnBranchid: pnBranchid,
  pnEmployeeId:pnEmployeeId,
  nomineeName:nomineeName ,
  gender: gender,
  dob: dob,
  pfShare: pfShare,
  relationship:relationship,
  address1:address1,
  state:state,
  district:district,
  city:city,
  pinNo:pinNo,
      };

      try {
        const response = await postRequest(ServerConfig.url, PFEPF, formData);
        console.log(response);
        navigate('/PfepfTable');
      } catch (error) {
        console.error('Error saving EPF:', error);
      }
    }
  };

  const margin = { margin: "0 5px" };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='dark' align='center'>
              Pf EPF
            </Typography>
            <Typography variant='subtitle1' color="dark" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={pnCompanyIdError}>
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
                    {pnCompanyIdError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a valid CompanyId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={pnBranchIdError}>
                    <InputLabel shrink>BranchId</InputLabel>
                    <Select
                      value={pnBranchid}
                      onChange={handleChange}
                      name="pnBranchid"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {employee.map((e) => (
                        <MenuItem key={e.pnBranchid} value={e.pnBranchid}>
                          {e.pnBranchId}
                        </MenuItem>
                      ))}
                    </Select>
                    {pnBranchIdError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a valid BranchId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={pnEmployeeIdError}>
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
                    {pnEmployeeIdError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a valid EmployeeId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nominee Name"
                    placeholder="Enter Nominee Name"
                    value={nomineeName}
                    onChange={handleChange}
                    name="nomineeName"
                    error={nomineeNameError}
                    helperText={nomineeNameError ? 'Please enter a valid family member name (alphabetic characters only)' : ''}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Gender"
                    placeholder="Enter Gender"
                    value={gender}
                    onChange={handleChange}
                    name="gender"
                    error={genderError}
                    helperText={genderError ? 'Please enter a valid gender (alphabetic characters only)' : ''}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    placeholder="Enter Date of Birth"
                    value={dob}
                    onChange={handleChange}
                    name="dob"
                    error={dobError}
                    helperText={dobError ? 'Please enter a valid date of birth' : ''}
                    InputLabelProps={{ shrink: true }}
                    type="date"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="PF Share"
                    placeholder="Enter PF Share"
                    value={pfShare}
                    onChange={handleChange}
                    name="pfShare"
                    error={pfShareError}
                    helperText={pfShareError ? 'Please enter a valid PF Share (numeric value with up to 2 decimal places)' : ''}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Relationship"
                    placeholder="Enter Relationship"
                    value={relationship}
                    onChange={handleChange}
                    name="relationship"
                    error={relationshipError}
                    helperText={relationshipError ? 'Please enter a valid relationship (alphabetic characters only)' : ''}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Address"
                    placeholder="Enter Address"
                    value={address1}
                    onChange={handleChange}
                    name="address1"
                    error={address1Error}
                    helperText={address1Error ? 'Please enter a valid address (alphanumeric and special characters .,-)' : ''}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="State"
                    placeholder="Enter State"
                    value={state}
                    onChange={handleChange}
                    name="state"
                    error={stateError}
                    helperText={stateError ? 'Please enter a valid state (alphabetic characters only)' : ''}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="District"
                    placeholder="Enter District"
                    value={district}
                    onChange={handleChange}
                    name="district"
                    error={districtError}
                    helperText={districtError ? 'Please enter a valid district (alphabetic characters only)' : ''}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="City"
                    placeholder="Enter City"
                    value={city}
                    onChange={handleChange}
                    name="city"
                    error={cityError}
                    helperText={cityError ? 'Please enter a valid city (alphabetic characters only)' : ''}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Pin No"
                    placeholder="Enter Pin No"
                    value={pinNo}
                    onChange={handleChange}
                    name="pinNo"
                    error={pinNoError}
                    helperText={pinNoError ? 'Please enter a valid Pin No (6 digit number)' : ''}
                    InputLabelProps={{ shrink: true }}
                  />
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
