import { Grid, Card, TextField, Button, Typography,FormHelperText, CardContent, FormControl } from '@mui/material';
import { useState, useEffect } from 'react';
import { PAYMEMPLOYEE } from '../../serverconfiguration/controllers';
import { getRequest } from '../../serverconfiguration/requestcomp';
import { postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { inputFormAttendence } from './attendence';
import { ATTENDANCECEILING } from '../../serverconfiguration/controllers';
import { useNavigate } from 'react-router-dom';


const AttendenceForm = () => {

  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [company, setCompany] = useState('');
  const [branch, setBranch] = useState('');
  const [employeeCode,setEmployeeCode]=useState("")
  const [employeeName,setEmployeeName]=useState("")

  const [intime,setIntime]=useState("")
  const [earlyIntime,setEarlyIntime]=useState("")
  const [shiftLin,setShiftLin]=useState("")
  const [lunchEin,setLunchEin]=useState("")
  const [halfday,setHalfday]=useState("")
  const [otLimit,setOtLimit]=useState("")
  const [permissionLimit,setPermissionLimit]=useState("")
  const [leaveDays,setLeaveDays]=useState("")
  const [morningOt,setMorningOt]=useState("")
  const [monthType,setMonthType]=useState("")
  const [weekOff1,setWeekOff1]=useState("")
  const [weekOff2,setWeekOff2]=useState("")
  const [manualDays,setManualDays]=useState("")
  const [otDays,setOtDays]=useState("")
  const [otHrs,setOtHrs]=useState("")
  const [timeCard,setTimeCard]=useState("")
  const [ptaxMonth,setPtaxMonth]=useState("")
  const [readerName,setReaderName]=useState("")
  
  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [employeeCodeError,setEmployeeCodeError]=useState(false)
  const [intimeError,setIntimeError]=useState(false)
  const [earlyIntimeError,setEarlyIntimeError]=useState(false)
  const [shiftLinError,setShiftLinError]=useState(false)
  const [lunchEinError,setLunchEinError]=useState(false)
  const [halfdayError,setHalfdayError]=useState(false)
  const [otLimitError,setOtLimitError]=useState(false)
  const [permissionLimitError,setPermissionLimitError]=useState(false)
  const [leaveDaysError,setLeaveDaysError]=useState(false)
  const [morningOtError,setMorningOtError]=useState(false)
  const [monthTypeError,setMonthTypeError]=useState(false)
  const [weekOff1Error,setWeekOff1Error]=useState(false)
  const [weekOff2Error,setWeekOff2Error]=useState(false)
  const [manualDaysError,setManualDaysError]=useState(false)
  const [otDaysError,setOtDaysError]=useState(false)
  const [otHrsError,setOtHrsError]=useState(false)
  const [timeCardError,setTimeCardError]=useState(false)
  const [ptaxMonthError,setPtaxMonthError]=useState(false)
  const [readerNameError,setReaderNameError]=useState(false)




  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
      setEmployee(data.data);
    }
    getData();
  }, []);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const timeFields = ["intime", "earlyIntime", "shiftLin", "lunchEin", "halfday", "otLimit", "permissionLimit"];
    // if (timeFields.includes(name)) {
    //   const formattedTime = formatTime(value); 
    //   setFormData(formData => ({
    //     ...formData,
    //     [name]: formattedTime
    //   }));
    // } else {
    //   setFormData(prevFormData => ({
    //     ...prevFormData,
    //     [name]: value
    //   }));
    

    switch (name) {
      case 'pnCompanyid':
        setCompany(value);
        setCompanyError(false);
        break;
      case 'pnBranchid':
        setBranch(value);
        setBranchError(false);
        break;
        case 'employeeCode':
          setEmployeeCode(value);
          var v=e.currentTarget.value
          var empname=employee.filter((e)=>e.employeeCode==v)
          setEmployeeName(empname[0].employeeFullName)
             handleChange(e)
          setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,50}$/.test(value) || !value);
          break;
        case 'intime':
          setIntime(value + ':00.000');
          setIntimeError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(value + ':00.000'));
          break;
          case 'earlyIntime':
          setEarlyIntime(value + ':00.000');
          setEarlyIntimeError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(value + ':00.000'));
          break;
          case 'shiftLin':
          setShiftLin(value + ':00.000');
          setShiftLinError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(value + ':00.000'));
          break;
          case 'lunchEin':
          setLunchEin(value + ':00.000');
          setLunchEinError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(value + ':00.000'));
          break;
          case 'halfday':
          setHalfday(value + ':00.000');
          setHalfdayError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(value + ':00.000'));
          break;
          case 'otlimit':
            setOtLimit(value + ':00.000');
            setOtLimitError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(value + ':00.000'));
            break;
          case 'permissionLimit':
          setPermissionLimit(value + ':00.000');
          setPermissionLimitError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(value + ':00.000'));
          break;

      case 'leaveDays':
        setLeaveDays(value);
        setLeaveDaysError(!/^\d+$/.test(value) || !value);
        break;
      case 'morningOt':
        setMorningOt(value);
        setMorningOtError(!/^[A-Za-z0-9\s]{1,3}$/.test(value) || !value);
        break;
     
      case 'monthType':
        setMonthType(value);
        setMonthTypeError(!/^[A-Za-z0-9\s]{1,22}$/.test(value) || !value);
        break;
      case 'weekOff1':
        setWeekOff1(value);
        setWeekOff1Error(!/^[A-Za-z0-9\s]{1,12}$/.test(value) || !value);
        break;
        case 'weekOff2':
          setWeekOff2(value);
          setWeekOff2Error(!/^[A-Za-z0-9\s]{1,12}$/.test(value));
          break;
      case 'manualDays':
        setManualDaysError(value);
        setManualDaysError(!/^\d+$/.test(value) || !value);
        break;
      case 'otDays':
        setOtDays(value);
        setOtDaysError(!/^\d+(\.\d+)?$/.test(value));
        break;
        case 'otHrs':
        setOtHrsError(value);
        setOtHrsError(!/^\d+(\.\d+)?$/.test(value));
        break;
        case 'timeCard':
          setTimeCard(value);
          setTimeCardError(!/^[A-Za-z0-9\s]{1,25}$/.test(value) || !value);
          break
          case 'ptaxMonth':
          setPtaxMonth(value);
          setPtaxMonthError(!/^[A-Za-z0-9\s]{1,30}$/.test(value) || !value);
          break
          case'readerName':
          setReaderName(value);
          setReaderNameError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
          break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!company);
    setBranchError(!branch);
    setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,50}$/.test(employeeCode) || !employeeCode);
    setIntimeError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(intime + ':00.000'));
    setEarlyIntimeError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(earlyIntime + ':00.000'));
    setShiftLinError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(shiftLin + ':00.000'));
    setLunchEinError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(lunchEin + ':00.000'));
    setHalfdayError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(halfday + ':00.000'));
    setOtLimitError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(otLimit + ':00.000'));

    setPermissionLimitError(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:00\.000$/.test(permissionLimit + ':00.000'));
    setLeaveDaysError(!/^\d+$/.test(leaveDays) || !leaveDays);
    setMorningOtError(!/^[A-Za-z0-9\s]{1,3}$/.test(morningOt) || !morningOt);
    setMonthTypeError(!/^[A-Za-z0-9\s]{1,22}$/.test(monthType) || !monthType);
    setWeekOff1Error(!/^[A-Za-z0-9\s]{1,12}$/.test(weekOff1) || !weekOff1);
    setWeekOff2Error(!/^[A-Za-z0-9\s]{1,12}$/.test(weekOff2) || !weekOff2);
    setManualDaysError(!/^\d+$/.test(manualDays) || !manualDays);
    setOtDaysError(!/^\d+(\.\d+)?$/.test(otDays));
    setOtHrsError(!/^\d+(\.\d+)?$/.test(otHrs));
    setTimeCardError(!/^[A-Za-z0-9\s]{1,25}$/.test(timeCard) || !timeCard);
    setPtaxMonthError(!/^[A-Za-z0-9\s]{1,30}$/.test(ptaxMonth) || !ptaxMonth);

    setReaderNameError(!/^[A-Za-z0-9\s]{1,20}$/.test(readerName));


    if (!company || !branch || !intime || !earlyIntime || !shiftLin || !lunchEin || !halfday || !otLimit || !permissionLimit || !leaveDays || !morningOt ||monthType || weekOff1 || weekOff2 || manualDays ||otDays|| otHrs ||timeCard||ptaxMonth || readerName) {
      return;
    }

    const formData = {
    //  id: 0,
      pnCompanyid: company,
      pnBranchid: 0,
      intime: "",
      earlyIntime: "",
      shiftLin: "",
      lunchEin: "",
      halfday: "4:00:00.000",
      otLimit: "",
      permissionLimit: "4:00:00.000", 
      leaveDays:"" ,
      morningOt: "",
      monthType: "",
      weekOff1: "",
      weekOff2: "",
      manualDays: "",
      otDays: "",
      otHrs: "",
      timeCard: "",
      ptaxMonth: "",
      readerName: ""
    };

    try {
      const response = await postRequest(ServerConfig.url, ATTENDANCECEILING, formData);
      if (response.status === 200 || response.status === 201) {
        console.log('Data saved successfully!');
        navigate('/AttendenceTable');
      } else {
        console.error('Error saving data:', response.statusText);
        console.error('Server validation errors:', response);
      }
    }catch(error){
      console.error('Error saving data:', error);
    }
      };
  

  const formatTime = (timeString) => {
    if (!timeString) return null; 
    
    const [hours = '00', minutes = '00', seconds = '00'] = timeString.split(':');
    return' ${padWithZero(hours, 2)}:${padWithZero(minutes, 2)}:${padWithZero(seconds, 2)}.000;'
  };
  

  const padWithZero = (str, length) => {
    str = String(str);
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  };

  return (
    <div className="App">
    <Grid style={{ padding: "80px 5px 0 5px" }}>
      <Card style={{ maxWidth: 600, margin: "0 auto", font: 'initial' }}>
        <CardContent>
          <Typography sx={{ mt: 3 }} align='center' color='primary' variant="h5">Attendence</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} columns={12} >
              <Grid item xs={12} sm={6} width={200}>
                <FormControl fullWidth>
                  <select name="pnCompanyid" onChange={handleChange}
                   style={{ height: '50px' }}>
                    {employee.map((e) => <option>{e.pnCompanyId}</option>)}
                  </select>
                  {companyError && <FormHelperText sx={{ color: 'red' }}>Please Select a company</FormHelperText>}

                </FormControl>
              </Grid>
              <Grid xs={12} sm={6} item>
                <FormControl fullWidth>
                  <select name="pnBranchid"onChange={handleChange}
                   style={{ height: '50px' }}>
                   {employee.filter((e)=>(e.pnCompanyId==company)).map((e)=><option>{e.pnBranchId}</option>)}
                  </select>
                  {branchError && <FormHelperText sx={{ color: 'red' }}>Please Select a branch</FormHelperText>}

                </FormControl>
              </Grid>
                  <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                 <select  onChange={handleChange}
                  style={{ height: '50px' }}>
                 
                     {
                        
                        employee.filter((e)=>(e.pnCompanyId==company && e.pnBranchId==branch)).map((e)=><option>{e.employeeCode}</option>)
                     }
                 </select>
                 {employeeCodeError && <FormHelperText sx={{ color: 'red' }}>Please Select a employeecode</FormHelperText>}

                 </FormControl>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                   <FormControl fullWidth>
                  <TextField value={employeeName} disabled={true}/> 
                  </FormControl>
                  </Grid>
                  <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="intime"
                 
              label="In Time"
              variant="outlined"
              fullWidth
              required
              type="time"
                  onChange={handleChange} 
                  
                />
             {intimeError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
            name="earlyIntime"
                placeholder="Enter Early InTime "
                label="Early InTime"
                variant="outlined"
                fullWidth
                required
                type="time"
                  onChange={handleChange} 
                  
                />
             {earlyIntimeError && <FormHelperText sx={{ color: 'red' }}>Please select earlyIntime</FormHelperText>}

                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="shiftLin"
              placeholder="Enter Shift Late Intime"
              labe="Shift Late Intime"
              variant="outlined"
              fullWidth
              required
              type="time"
                  onChange={handleChange} 
                  
                />
             {shiftLinError && <FormHelperText sx={{ color: 'red' }}>Please select shiftin</FormHelperText>}

                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="lunchEin"
              placeholder="Enter Lunch Early Intime"
              label="Shift Lunch Intime"
              variant="outlined"
              fullWidth
              required
              type="time"
                  onChange={handleChange} 
                  
                />
             {lunchEinError && <FormHelperText sx={{ color: 'red' }}>Please select lunchEin</FormHelperText>}

                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
               name=" halfday"
               placeholder="Enter HalfDay"
               label="HalfDay"
               variant="outlined"
               fullWidth
               required
               type="time"
                  onChange={handleChange} 
                  
                />
             {halfdayError && <FormHelperText sx={{ color: 'red' }}>Please select halfday</FormHelperText>}

                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="otLimit"
              placeholder="Enter ot Limit"
              label="ot Limit"
              variant="outlined"
              fullWidth
              required
              type="time"
                  onChange={handleChange} 
                  
                />
             {otLimitError && <FormHelperText sx={{ color: 'red' }}>Please select otLimit</FormHelperText>}

                </FormControl>
                </Grid>
              <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
             name=" permissionLimit"
             placeholder="Enter Permission Limit"
             label="Permission Limit"
             variant="outlined"
            
              fullWidth
              required
              type="time"
                  onChange={handleChange} 
                  
                />
             {permissionLimitError && <FormHelperText sx={{ color: 'red' }}>Please select permissionLimit</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
             name="leaveDays"
             placeholder="Enter Leave Days"
             label="Leave Days"
             variant="outlined"
              fullWidth
              required
           
                  onChange={handleChange} 
                  
                />
             {leaveDaysError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid> 

                <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth>
                <TextField
               name="morningOt"
               placeholder="Enter Morning ot"
               label="Morning ot"
               variant="outlined"
                fullWidth
            
                  onChange={handleChange} 
                  
                />
             {morningOtError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid>
                <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth>
                <TextField
                name="monthType"
                placeholder="Enter Month Type"
                label="Month Type"
                variant="outlined"
                fullWidth
            
                  onChange={handleChange} 
                  
                />
             {monthTypeError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
           name="weekOff1"
           placeholder="Enter Weak Off1"
           label="Weak Off1"
           variant="outlined"
              fullWidth
              required
        error={weekOff1Error}
                  onChange={handleChange} 
                  
                />
             {weekOff1Error && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
            name="weekOff2"
            placeholder="Enter Week Off2"
            label="WeekOff2"
            variant="outlined"
            fullWidth
            required
            value={weekOff2}
            error={weekOff2Error}
            onChange={handleChange}
          />
          {weekOff2Error && (
            <FormHelperText sx={{ color: 'red' }}>
              Please enter a valid week off (1-12 alphanumeric characters)
            </FormHelperText>
          )}
                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
          name="manualDays"
          placeholder="Enter Manual Days"
          label="Manual Days"
          variant="outlined"
            error={manualDaysError}
              fullWidth
              required
           
                  onChange={handleChange} 
                  
                />
             {manualDaysError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
           name="otDays"
           placeholder="Enter ot Days"
           label="ot Days"
           variant="outlined"
              fullWidth
              required
             
                  onChange={handleChange} 
                  
                />
             {otDaysError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid>
                
                  <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
            name="otHrs"
            placeholder="Enter ot Hours"
            label="ot Hours"
            variant="outlined"
              fullWidth
              required
           
                  onChange={handleChange} 
                  
                />
             {otHrsError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
             name="timeCard"
             placeholder="Enter Time card"
             label="Time card"
             variant="outlined"
            error={timeCardError}
              fullWidth
              required
             
                  onChange={handleChange} 
                  
                />
             {timeCardError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid> <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
             name="ptaxMonth"
             placeholder="Enter Proffessionl Tax Month"
             label="ot Hours"
             variant="outlined"
            error={ptaxMonthError}
              fullWidth
              required
            
                  onChange={handleChange} 
                  
                />
             {ptaxMonthError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid>
                 <Grid  xs={12}  sm={6} item>
                <FormControl fullWidth> 
                <TextField
           name="readerName"
           placeholder="Enter Reader Name"
           label="Reader Name"
           variant="outlined"
           fullWidth
           required
           error={readerNameError}
           onChange={handleChange}
                />
           {readerNameError && (
                    <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid reader name (1-20 alphanumeric characters)
                    </FormHelperText>
                )}
                </FormControl>
                </Grid>
                 {/* <Grid>
                <FormControl fullWidth> 
                <TextField
             name=" permissionLimit"
             placeholder="Enter Permission Limit"
             label="Permission Limit"
             variant="outlined"
            
              fullWidth
              required
              type="time"
                  onChange={handleChange} 
                  
                />
             {intimeError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid> <Grid>
                <FormControl fullWidth> 
                <TextField
             name=" permissionLimit"
             placeholder="Enter Permission Limit"
             label="Permission Limit"
             variant="outlined"
            
              fullWidth
              required
              type="time"
                  onChange={handleChange} 
                  
                />
             {intimeError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid>

                 */}

                


            
                 
            
                  
                 
                <Grid container spacing={1}>
                  <Grid item xs={12} align="right">
                    <Button type="reset" variant="contained" color="primary" style={{ paddingRight: '3' }} >Reset</Button>
                    <Button type="submit"  variant="contained" color="primary" onSubmit={handleSubmit}>Submit</Button>
                  </Grid>
                </Grid>
             </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
                 }


export default AttendenceForm;
