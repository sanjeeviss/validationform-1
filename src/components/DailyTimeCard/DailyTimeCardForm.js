import {
  Grid, Card,
  TextField,
  Button,
  Typography,
  Box,
  CardContent, FormControl, FormHelperText
} from '@mui/material';
import { useState, useEffect } from 'react';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { PAYMEMPLOYEE, SHIFTDETAILS, DAILYTIMECARD } from '../../serverconfiguration/controllers';
import { InputLabel } from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { inputDailyTimecardForm } from './DailyTimeCard';
import { useNavigate } from 'react-router-dom';


export default function DailyTimeCardForm() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([])
  const [company, setCompany] = useState([])
  const [branch, setBranch] = useState([])
  const [employeeCode, setEmployeeCode] = useState("")
  const [employeeName, setEmployeeName] = useState("")
  const [shiftdetails, setShiftDetails] = useState([])
  const [shiftCode, setShiftCode] = useState("")
  const [machineNum, setMachineNum] = useState("")
  const [cardNo, setCardNo] = useState("")
  const [verifyMode, setVerifyMode] = useState("")
  const [inOutMode, setInOutMode] = useState("")
  const [dates, setDates] = useState("")
  const [days, setDays] = useState("")
  const [intime, setInTime] = useState("")
  const [breakOut, setBreakOut] = useState("")
  const [breakIn, setBreakIn] = useState("")
  const [outtime, setOutTime] = useState("")
  const [otHrs, setOtHrs] = useState("")
  const [status, setStatus] = useState("")



  const [employeeError, setEmployeeError] = useState(false)
  const [companyError, setCompanyError] = useState(false)
  const [branchError, setBranchError] = useState(false)
  const [employeeCodeError, setEmployeeCodeError] = useState(false)
  const [employeeNameError, setEmployeeNameError] = useState(false)
  const [shiftdetailsError, setShiftDetailsError] = useState(false)
  const [shiftCodeError, setShiftCodeError] = useState(false)
  const [machineNumError, setMachineNumError] = useState(false)
  const [cardNoError, setCardNoError] = useState(false)
  const [verifyModeError, setVerifyModeError] = useState(false)
  const [inOutModeError, setInOutModeError] = useState(false)
  const [datesError, setDatesError] = useState(false)
  const [daysError, setDaysError] = useState(false)
  const [intimeError, setInTimeError] = useState(false)
  const [breakOutError, setBreakOutError] = useState(false)
  const [breakInError, setBreakInError] = useState(false)
  const [outtimeError, setOutTimeError] = useState(false)
  const [otHrsError, setOtHrsError] = useState(false)
  const [statusError, setStatusError] = useState(false)


  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
      setEmployee(data.data);
      const shiftdetails = await getRequest(ServerConfig.url, SHIFTDETAILS)
      setShiftDetails(shiftdetails.data)
    }
    getData();
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'company':
        setCompany(value);
        setCompanyError(false);
        break;
      case 'branch':
        setBranch(value);
        setBranchError(false);
        break;
      case 'machineNum':
        setMachineNum(value);
        setMachineNumError(/^[A-Za-z0-9\s]{1,30}$/.test(value) || !value);
        break;
      case 'cardNo':
        setCardNo(value);
        setCardNoError(/^[A-Za-z0-9\s]{1,5}$/.test(value) || !value);
        break;
      case 'employeeCode':
        setEmployeeCode(value);
        setEmployeeCodeError(/^[A-Za-z0-9\s]{1,10}$/.test(value) || !value);
        break;
      case 'employeeName':
        setEmployeeName(value);
        setEmployeeNameError(/^[A-Za-z0-9\s]{1,50}$/.test(value) || !value);
        break;
      case 'verifyMode':
        setVerifyMode(value);
        setVerifyModeError(!/^\d+$/.test(value) || !value);
        break;
      case 'inOutMode':
        setInOutMode(value);
        setInOutModeError(!/^\d+$/.test(value) || !value);
        break;
      case 'shiftCode':
        setShiftCode(value);
        setShiftCodeError(/^[A-Za-z0-9\s]{1,5}$/.test(value) || !value);
        break;
      case 'days':
        setDays(value);
        setDaysError(/^[A-Za-z0-9\s]{1,15}$/.test(value) || !value);
        break;
      case 'status':
        setStatus(value);
        setStatusError(/^[A-Za-z0-9\s]{1,2}$/.test(value) || !value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!company);
    setBranchError(!branch);
    setMachineNumError(/^[A-Za-z0-9\s]{1,30}$/.test(machineNum) || !machineNum);
    setCardNoError(/^[A-Za-z0-9\s]{1,5}$/.test(cardNo) || !cardNo);
    setEmployeeCodeError(/^[A-Za-z0-9\s]{1,10}$/.test(employeeCode) || !employeeCode);
    setEmployeeNameError(/^[A-Za-z0-9\s]{1,50}$/.test(employeeName) || !employeeName);
    setVerifyModeError(!/^\d+$/.test(verifyMode) || !verifyMode);
    setInOutModeError(!/^\d+$/.test(inOutMode) || !inOutMode);
    setShiftCodeError(/^[A-Za-z0-9\s]{1,5}$/.test(shiftCode) || !shiftCode);
    setDaysError(/^[A-Za-z0-9\s]{1,15}$/.test(days) || !days);
    setStatusError(/^[A-Za-z0-9\s]{1,2}$/.test(status) || !status);


    if (!company || !branch || !machineNum || !cardNo || !employeeCode || !employeeName || !verifyMode || !inOutMode || !shiftCode || !days || !status) {
      return;
    }

    const formData = {
      pnCompanyid: company,
      pnBranchid: branch,
      machineNum: machineNum,
      cardNo: cardNo,
      empCode: employeeCode,
      empName: employeeName,
      verifyMode: verifyMode,
      inOutMode: inOutMode,
      shiftCode: shiftCode,
      dates: dates,
      days: days,
      intime: intime,
      breakOut: breakOut,
      breakIn: breakIn,
      outtime: outtime,
      otHrs: otHrs,
      status: status
    };

    try {
      await postRequest(ServerConfig.url, DAILYTIMECARD, formData);
      navigate('/DailyTimeCardTables');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  const margin = { margin: "0 5px" }
  return (

    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>
              DailyTimeCard
            </Typography>
            <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={6} >
                  <FormControl fullWidth>

                    <InputLabel shrink>Company</InputLabel>
                    <select name="company"
                      onChange={(e) => {
                        setCompany(e.target.value)



                      }}
                      style={{ height: '50px' }}

                    >
                      <option value="">Select</option>
                      {

                        employee.map((e) => <option>{e.pnCompanyId}</option>)

                      }
                    </select>
                    {companyError && <FormHelperText style={{ color: "red" }}>Please select a company</FormHelperText>}
                  </FormControl >
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth >
                    <InputLabel shrink>BranchId</InputLabel>
                    <select
                      name="branch"
                      onChange={(e) => {
                        setBranch(e.target.value)


                      }}
                      style={{ height: '50px' }}
                      inputlabelprops={{ shrink: true }}
                    >
                      <option value="">Select</option>
                      {

                        employee.filter((e) => (e.pnCompanyId == company)).map((e) => <option>{e.pnBranchId}</option>)
                      }
                    </select>
                    {branchError && <FormHelperText style={{ color: "red" }}>Please select a branch</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>

                  <FormControl fullWidth>
                    <InputLabel shrink>empCode</InputLabel>
                    <select
                      name="empCode"
                      onChange={(e) => {

                        var v = e.currentTarget.value
                        var empname = employee.filter((e) => e.employeeCode == v)
                        setEmployeeCode(v)
                        setEmployeeName(empname[0].employeeFullName)

                      }}
                      style={{ height: '50px' }}
                    >
                      <option value="">Select</option>

                      {

                        employee.filter((e) => (e.pnCompanyId == company && e.pnBranchId == branch)).map((e) => <option>{e.employeeCode}</option>)

                      }
                    </select>
                    {employeeCodeError && <FormHelperText style={{ color: "red" }}>Please enter correct values</FormHelperText>}
                  </FormControl>
                </Grid>


                <Grid xs={12} sm={6} item  >

                  <FormControl fullWidth>
                    <TextField
                      name="empName"
                      value={employeeName}
                      label="employeename"
                      variant="outlined"
                      fullWidth
                      required />

                    {employeeNameError && <FormHelperText style={{ color: "red" }}>Please enter correct values</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} >
                  <FormControl fullWidth>

                    <InputLabel shrink>Shiftcode</InputLabel>
                    <select name="shiftCode"
                      onChange={(e) => {
                        setShiftCode(e.target.value)



                      }}
                      style={{ height: '50px' }}

                    >
                      <option value="">Select</option>
                      {

                        shiftdetails.map((e) => <option>{e.shiftCode}</option>)

                      }
                    </select>
                    {shiftCodeError && <FormHelperText style={{ color: "red" }}>Please enter correct values</FormHelperText>}
                  </FormControl >
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="machineNum"
                      label="MachineNum"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setMachineNum(e.target.value)}
                    />
                    {machineNumError && <FormHelperText style={{ color: "red" }}>Please enter correct values</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="cardNo"
                      label="cardNo"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCardNo(e.target.value)}
                    />
                    {cardNoError && <FormHelperText style={{ color: "red" }}>Please enter correct values</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="verifyMode"
                      label="verifyMode"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setVerifyMode(e.target.value)}
                    />
                    {verifyModeError && <FormHelperText style={{ color: "red" }}>Please enter correct values</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="inOutMode"
                      label="inOutMode"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setInOutMode(e.target.value)}
                    />
                    {inOutModeError && <FormHelperText style={{ color: "red" }}>Please enter correct values</FormHelperText>}
                  </FormControl>
                </Grid>


                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="dates"
                      label="dates"
                      variant="outlined"
                      fullWidth
                      required
                      type='datetime-local'
                      onChange={(e) => setDates(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                    />
                    {datesError && <FormHelperText style={{ color: "red" }}>Please Select the Date</FormHelperText>}
                  </FormControl>
                </Grid>





                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="days"
                      label="days"
                      variant="outlined"

                      fullWidth
                      required
                      onChange={(e) => setDays(e.target.value)}
                    />
                    {daysError && <FormHelperText style={{ color: "red" }}>Please Enter the Day</FormHelperText>}
                  </FormControl>
                </Grid>



                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="intime"
                      label="intime"
                      variant="outlined"
                      type='time'
                      fullWidth
                      required
                      onChange={(e) => setInTime(e.target.value + ':00.0000000')}
                      InputLabelProps={{ shrink: true }}
                    />
                    {intimeError && <FormHelperText style={{ color: "red" }}>Please select the Intime</FormHelperText>}
                  </FormControl>
                </Grid>



                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="breakOut"
                      label="breakOut"
                      type='time'
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setBreakOut(e.target.value + ':00.0000000')}
                      InputLabelProps={{ shrink: true }}
                    />
                    {breakOutError && <FormHelperText style={{ color: "red" }}>Please select the BreakOut</FormHelperText>}

                  </FormControl>
                </Grid>



                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="breakIn"
                      label="breakIn"
                      type='time'
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setBreakIn(e.target.value + ':00.0000000')}
                      InputLabelProps={{ shrink: true }}
                    />
                    {breakInError && <FormHelperText style={{ color: "red" }}>Please select the BreakIn</FormHelperText>}

                  </FormControl>
                </Grid>



                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="outtime"
                      label="outtime"
                      type='time'
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setOutTime(e.target.value + ':00.0000000')}
                      InputLabelProps={{ shrink: true }}
                    />
                    {outtimeError && <FormHelperText style={{ color: "red" }}>Please select the OutTime</FormHelperText>}

                  </FormControl>
                </Grid>



                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="otHrs"
                      label="otHrs"
                      type='datetime-local'
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setOtHrs(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                    />
                    {otHrsError && <FormHelperText style={{ color: "red" }}>Please select the OTHrs</FormHelperText>}

                  </FormControl>
                </Grid>


                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="status"
                      label="status"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    {statusError && <FormHelperText style={{ color: "red" }}>Please enter Status</FormHelperText>}

                  </FormControl>
                </Grid>


              </Grid>


              <Grid container spacing={1} paddingTop={'20px'}>

                <Grid item xs={12} align="right" >
                  <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
                  <Button onClick={() => {
                    const formData = {
                      pnCompanyid: company,
                      pnBranchid: branch,
                      machineNum: machineNum,
                      cardNo: cardNo,
                      empCode: employeeCode,
                      empName: employeeName,
                      verifyMode: verifyMode,
                      inOutMode: inOutMode,
                      shiftCode: shiftCode,
                      dates: dates,
                      days: days,
                      intime: intime,
                      breakOut: breakOut,
                      breakIn: breakIn,
                      outtime: outtime,
                      otHrs: otHrs,
                      status: status

                    };
                    console.log(formData)
                    postRequest(ServerConfig.url, DAILYTIMECARD, formData).then((e) => {
                      console.log(e)
                      navigate('/dailytimecardtable')
                    }).catch((e) => console.log(e));


                  }}
                    variant='contained' color='primary' >SAVE</Button>
                </Grid>
              </Grid>



            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}