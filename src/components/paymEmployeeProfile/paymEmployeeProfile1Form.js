import { useState, useEffect } from 'react';
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
  MenuItem,
  Select,
  FormHelperText
} from '@mui/material';
import { PAYMBRANCHES, PAYMCOMPANIES, PAYMEMPLOYEE, PAYMDIVISION, PAYMDEPARTMENT, PAYMDESIGNATION, PAYMGRADE, PAYMSHIFT, PAYMCATEGORY, JOBSTATUS, PAYMLEVEL, PAYMEMPLOYEEPROFILE1 } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';

export default function EmployeeProfile1Form() {
  const navigate = useNavigate();
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [division, setDivision] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [grade, setGrade] = useState([]);
  const [shift, setShift] = useState([]);
  const [category, setCategory] = useState([]);
  const [jobstatus, setJobStatus] = useState([]);
  const [level, setLevel] = useState([]);

  const [pnCompanyId, setpnCompanyId] = useState("");
  const [pnBranchId, setpnBranchId] = useState("");
  const [pnEmployeeId, setpnEmployeeId] = useState("");
  const [pnDivisionId, setpnDivisionId] = useState("");
  const [pnDepartmentId, setpnDepartmentId] = useState("");
  const [pnDesingnationId, setpnDesingnationId] = useState("");
  const [pnGradeId, setpnGradeId] = useState("");
  const [pnShiftId, setpnShiftId] = useState("");
  const [pnCategoryId, setpnCategoryId] = useState("");
  const [pnJobStatusId, setpnJobStatusId] = useState("");
  const [pnLevelId, setpnLevelId] = useState("");
  const [pnProjectsiteId, setpnProjectsiteId] = useState("");
  const [dDate, setdDate] = useState("");
  const [vReason, setvReason] = useState("");
  const [rDepartment, setrDepartment] = useState("");
  const [fatherName, setFatherName] = useState("");

  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [employeeError, setEmployeeError] = useState(false);
  const [divisionError, setDivisionError] = useState(false);
  const [departmentError, setDepartmentError] = useState(false);
  const [designationError, setDesignationError] = useState(false);
  const [gradeError, setGradeError] = useState(false);
  const [shiftError, setShiftError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [jobstatusError, setJobstatusError] = useState(false);
  const [levelError, setLevelError] = useState(false);
  const [ProjectsiteError, setProjectsiteError] = useState(false);
  const [dDateError, setdDateError] = useState(false);
  const [vReasonError, setvReasonError] = useState(false);
  const [rDepartmentError, setrDepartmentError] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(data.data);
      const data1 = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(data1.data);
      const data2 = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
      setEmployee(data2.data);
      const data3 = await getRequest(ServerConfig.url, PAYMDIVISION);
      setDivision(data3.data);
      const data4 = await getRequest(ServerConfig.url, PAYMDEPARTMENT);
      setDepartment(data4.data);
      const data5 = await getRequest(ServerConfig.url, PAYMDESIGNATION);
      setDesignation(data5.data);
      const data6 = await getRequest(ServerConfig.url, PAYMGRADE);
      setGrade(data6.data);
      const data7 = await getRequest(ServerConfig.url, PAYMSHIFT);
      setShift(data7.data);
      const data8 = await getRequest(ServerConfig.url, PAYMCATEGORY);
      setCategory(data8.data);
      const data9 = await getRequest(ServerConfig.url, JOBSTATUS);
      setJobStatus(data9.data);
      const data10 = await getRequest(ServerConfig.url, PAYMLEVEL);
      setLevel(data10.data);
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'pnCompanyId':
        setpnCompanyId(value);
        setCompanyError(false);
        break;
      case 'pnBranchId':
        setpnBranchId(value);
        setBranchError(false);
        break;
      case 'pnEmployeeId':
        setpnEmployeeId(value);
        setEmployeeError(false);
        break;
      case 'pnDivisionId':
        setpnDivisionId(value);
        setDivisionError(false);
        break;
      case 'pnDepartmentId':
        setpnDepartmentId(value);
        setDepartmentError(false);
        break;
      case 'pnDesingnationId':
        setpnDesingnationId(value);
        setDesignationError(false);
        break;
      case 'pnGradeId':
        setpnGradeId(value);
        setGradeError(false);
        break;
      case 'pnShiftId':
        setpnShiftId(value);
        setShiftError(false);
        break;
      case 'pnCategoryId':
        setpnCategoryId(value);
        setCategoryError(false);
        break;
      case 'pnJobStatusId':
        setpnJobStatusId(value);
        setJobstatusError(false);
        break;
      case 'pnLevelId':
        setpnLevelId(value);
        setLevelError(false);
        break;
      case 'pnProjectsiteId':
        setpnProjectsiteId(value);
        setProjectsiteError(false);
        break;
      case 'dDate':
        setdDate(value);
        setdDateError(!value);
        break;
      case 'vReason':
        setvReason(value);
        setvReasonError(!/^[A-Za-z0-9\s]{1,500}$/.test(value));
        break;
      case 'rDepartment':
        setrDepartment(value);
        setrDepartmentError(!/^\d+$/.test(value));
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
    setDivisionError(!pnDivisionId);
    setDepartmentError(!pnDepartmentId);
    setGradeError(!pnGradeId);
    setJobstatusError(!pnJobStatusId);
    setDesignationError(!pnDesingnationId);
    setLevelError(!pnLevelId);
    setShiftError(!pnShiftId);
    setProjectsiteError(!pnProjectsiteId);
    setCategoryError(!pnCategoryId);
    setdDateError(!dDate);
    setvReasonError(!/^[A-Za-z0-9\s]{1,500}$/.test(vReason));
    setrDepartmentError(!/^\d+$/.test(rDepartment));

    if (
      companyError ||
      branchError ||
      employeeError ||
      divisionError ||
      departmentError ||
      designationError ||
      gradeError ||
      jobstatusError ||
      levelError ||
      shiftError ||
      categoryError ||
      ProjectsiteError ||
      dDateError ||
      vReasonError ||
      rDepartmentError
    ) {
      return;
    }

    const formData = {
      pnCompanyId,
      pnBranchId,
      pnEmployeeId,
      pnDivisionId,
      pnDepartmentId,
      pnDesingnationId,
      pnGradeId,
      pnShiftId,
      pnCategoryId,
      pnJobStatusId,
      pnLevelId,
      pnProjectsiteId,
      dDate,
      vReason,
      rDepartment
    };

    try {
      const response = await postRequest(ServerConfig.url, PAYMEMPLOYEEPROFILE1, formData);
      console.log(response);
      navigate('/PaymEmployeeProfile1Tables');
    } catch (error) {
      console.error('Error saving Employee profile:', error);
    }
  };

  const margin = { margin: "0 5px" };
  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>Paym Employee Profile</Typography>
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
                      {branch.map((e) => (
                        <MenuItem key={e.pnBranchId} value={e.pnBranchId}>
                          {e.pnBranchId}
                        </MenuItem>
                      ))}
                    </Select>
                    {branchError && <FormHelperText sx={{ color: 'red' }}>Please Select a BranchId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={divisionError}>
                    <InputLabel shrink>DivisionId</InputLabel>
                    <Select
                      value={pnDivisionId}
                      onChange={handleChange}
                      name="pnDivisionId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {division.map((e) => (
                        <MenuItem key={e.pnDivisionId} value={e.pnDivisionId}>
                          {e.pnDivisionId}
                        </MenuItem>
                      ))}
                    </Select>
                    {divisionError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a DivisionId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={departmentError}>
                    <InputLabel shrink>DepartmentId</InputLabel>
                    <Select
                      value={pnDepartmentId}
                      onChange={handleChange}
                      name="pnDepartmentId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {department.map((e) => (
                        <MenuItem key={e.pnDepartmentId} value={e.pnDepartmentId}>
                          {e.pnDepartmentId}
                        </MenuItem>
                      ))}
                    </Select>
                    {departmentError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a DepartmentId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={designationError}>
                    <InputLabel shrink>DesignationId</InputLabel>
                    <Select
                      value={pnDesingnationId}
                      onChange={handleChange}
                      name="pnDesingnationId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {designation.map((e) => (
                        <MenuItem key={e.pnDesingnationId} value={e.pnDesingnationId}>
                          {e.pnDesingnationId}
                        </MenuItem>
                      ))}
                    </Select>
                    {designationError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a DesignationId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={gradeError}>
                    <InputLabel shrink>GradeId</InputLabel>
                    <Select
                      value={pnGradeId}
                      onChange={handleChange}
                      name="pnGradeId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {grade.map((e) => (
                        <MenuItem key={e.pnGradeId} value={e.pnGradeId}>
                          {e.pnGradeId}
                        </MenuItem>
                      ))}
                    </Select>
                    {gradeError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a GradeId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={shiftError}>
                    <InputLabel shrink>ShiftId</InputLabel>
                    <Select
                      value={pnShiftId}
                      onChange={handleChange}
                      name="pnShiftId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {shift.map((e) => (
                        <MenuItem key={e.pnShiftId} value={e.pnShiftId}>
                          {e.pnShiftId}
                        </MenuItem>
                      ))}
                    </Select>
                    {shiftError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a ShiftId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={categoryError}>
                    <InputLabel shrink>CategoryId</InputLabel>
                    <Select
                      value={pnCategoryId}
                      onChange={handleChange}
                      name="pnCategoryId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {category.map((e) => (
                        <MenuItem key={e.pnCategoryId} value={e.pnCategoryId}>
                          {e.pnCategoryId}
                        </MenuItem>
                      ))}
                    </Select>
                    {categoryError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a CategoryId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={jobstatusError}>
                    <InputLabel shrink>JobStatusId</InputLabel>
                    <Select
                      value={pnJobStatusId}
                      onChange={handleChange}
                      name="pnJobStatusId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {jobstatus.map((e) => (
                        <MenuItem key={e.pnJobStatusId} value={e.pnJobStatusId}>
                          {e.pnJobStatusId}
                        </MenuItem>
                      ))}
                    </Select>
                    {jobstatusError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a JobStatusId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={levelError}>
                    <InputLabel shrink>LevelId</InputLabel>
                    <Select
                      value={pnLevelId}
                      onChange={handleChange}
                      name="pnLevelId"
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {level.map((e) => (
                        <MenuItem key={e.pnLevelId} value={e.pnLevelId}>
                          {e.pnLevelId}
                        </MenuItem>
                      ))}
                    </Select>
                    {levelError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a LevelId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={ProjectsiteError}>
                    <InputLabel shrink>ProjectSiteId</InputLabel>
                    <TextField
                      name="pnProjectsiteId"
                      value={pnProjectsiteId}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                    {ProjectsiteError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a ProjectSiteId
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={dDateError}>
                    <InputLabel shrink>Date</InputLabel>
                    <TextField
                      name="dDate"
                      value={dDate}
                      onChange={handleChange}
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                    {dDateError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please select a Date
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={vReasonError}>
                    <InputLabel shrink>Reason</InputLabel>
                    <TextField
                      name="vReason"
                      value={vReason}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                    {vReasonError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Reason (alphanumeric characters, max length 500)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={rDepartmentError}>
                    <InputLabel shrink>Reporting Department</InputLabel>
                    <TextField
                      name="rDepartment"
                      value={rDepartment}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                    {rDepartmentError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Department (only numeric characters)
                      </FormHelperText>
                    )}
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
      </Grid>
    </div>
  );
}
