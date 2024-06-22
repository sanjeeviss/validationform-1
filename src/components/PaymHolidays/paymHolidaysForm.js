  import {TextField, Button, Card,Select,MenuItem,  Typography,FormHelperText, Box, Grid, CardContent,FormControl} from '@mui/material';

  import { PAYMBRANCHES, PAYMCOMPANIES, PAYMHOLIDAYS } from '../../serverconfiguration/controllers';
  
  import React, { useState, useEffect } from 'react';
  import {FormData}  from '@mui/material';
  
  // import {  Card,  Typography, Box, Grid, CardContent, FormControl} from '@mui/material';
  import {inputpaymHolidayForm} from './paymHoliday';

  import  {getRequest,postRequest} from '../../serverconfiguration/requestcomp';
  import {InputLabel} from '@mui/material';
  import { Label } from '@mui/icons-material';
  import { useNavigate } from 'react-router-dom';
  import { ServerConfig } from '../../serverconfiguration/serverconfig';
  
  const HolidayForm = () => {  
  const navigate = useNavigate();
  const [company,setCompany]=useState([])
  const [branch,setBranch]=useState([])
  const [pnCompanyId,setPnCompanyId]=useState("")
  const [pnBranchId,setPnBranchId]=useState("")
  const [pnHolidaycode,setPnholdaycode]=useState("")
  const [pnHolidayname,setPnholidayname]=useState("")
  const [fyear,setFyear]=useState("")
  const [fromDate,setFromdate]=useState("")
  const [toDate,setTodate]=useState("")
  const [days,setDays]=useState("")
  const [companyError,setCompanyError] = useState("")
  const [branchError,setBranchError] = useState("")
  const [holidaycodeError,setHolidayCodeError] = useState("")
  const [holidaynameError,setHolidayNameError] = useState("")
  const [fyearError,setFyearError] = useState("")
  const [fromDateError,setFromDateError] = useState(false)
  const [toDateError,setToDateError] = useState(false)
  const [dayError,setDayError] = useState("")

  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     pnCompanyId: pnCompanyId,
  //     pnBranchId: pnBranchId,
  //     pnHolidaycode:pnHolidaycode ,
  //     pnHolidayname: pnHolidayname, // Added employee name field to state
  //     fyear: fyear,
  //     fromDate: fromDate,
  //     toDate: toDate,
  //     days: days,
  // };
  
  // };
  
  
  useEffect(()=>{
    async function getData()
    {
      const data=await getRequest(ServerConfig.url,PAYMCOMPANIES)
      setCompany(data.data)
   
      const data1=await getRequest(ServerConfig.url,PAYMBRANCHES)
      setBranch(data1.data)
      console.log(data1);
  
     
  }
    getData()
  
  },[])

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
      case 'pnHolidaycode':
        setPnholdaycode(value);
        setHolidayCodeError(!/^[A-Za-z0-9\s]{1,10}$/.test(value));
        break;
        case 'pnHolidayname':
          setPnholidayname(value);
          setHolidayNameError(!/^[A-Za-z0-9\s]{1,30}$/.test(value));
          break;
          case 'fyear':
            setFyear(value);
            setFyearError(!!isNaN(value) && value !== '');
            break;
            case 'fromDate':
              setFromdate(value);
              setFromDateError(!value);
              break;
              case 'toDate':
                setTodate(value);
                setToDateError(!value);
                break;
                         
      case 'days':
        setDays(value);
        setDayError(!!isNaN(value) && value !== '');
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!pnCompanyId);
    setBranchError(!pnBranchId);
 
    setHolidayCodeError(!/^[A-Za-z0-9\s]{1,10}$/.test(pnHolidaycode));
    setHolidayNameError(!/^[A-Za-z0-9\s]{1,30}$/.test(pnHolidayname));
    setFyearError(isNaN(fyear) || !fyear);

    setFromDateError(!fromDate);

    setToDateError(!toDate);


    
    setDayError(isNaN(days) || !days);

    if (
      companyError ||
      branchError ||
      holidaycodeError ||
      holidaynameError ||
      fyearError ||
      fromDateError ||
      toDateError ||
      dayError
     
    ) {
      return;
    }

    const formData = {
      pnCompanyId: pnCompanyId,
      pnBranchId: pnBranchId,
      pnHolidaycode: pnHolidaycode,
      pnHolidayname:pnHolidayname,
      fyear: parseInt(fyear),
      fromDate:fromDate,
      toDate:toDate,
      days: parseInt(days)
};
 try {
      const response = await postRequest(ServerConfig.url, PAYMHOLIDAYS, formData);
      console.log(response);
      navigate('/PaymHolidayTables');
    } catch (error) {
      console.error('Error saving designation:', error);
    }
  };


  
      const margin={margin:"0 5px"}
      return (
          <div>
            <Grid style={{padding: "80px 5px 0 5px"}}>
              <Card style = {{maxWidth: 600, margin: "0 auto"}}>
                <CardContent>
                  <Typography variant='h5' color='S- Light' align='center'>
                   Holiday Forms
                  </Typography>
                   <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
                    Fill all the Mandatory fields 
                  </Typography>
                  <form onSubmit={handleSubmit}>
       
       <Grid container spacing={2} inputlabelprops={{shrink:true}}>
       <Grid item xs={12} sm={6}>
                 <FormControl fullWidth>
                   <InputLabel shrink>Company</InputLabel>
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
                  <MenuItem key={e.pnBranchId} value={e.pnBranchId}>{e.pnBranchId}</MenuItem>
                ))}
              </Select>
              {branchError && <FormHelperText sx={{ color: 'red' }}>Please Select a BranchId</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={holidaycodeError}>
                   <TextField
                     name="pnHolidaycode"
                     label="pnHolidayCode"
                     variant="outlined"
                     fullWidth
                     required
                     value={pnHolidaycode}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {holidaycodeError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid holiday code (alphanumeric characters, max length 10)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={holidaynameError}>
                   <TextField
                     name="pnHolidayname"
                     label="pnHolidayname"
                     variant="outlined"
                     fullWidth
                     required
                     value={pnHolidayname}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {holidaynameError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid holiday Name (alphanumeric characters, max length 30)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={fyearError}>
                   <TextField
                     name="fyear"
                     label="f Year"
                     variant="outlined"
                     fullWidth
                     required
                     value={fyear}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {fyearError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid fyear (integer characters)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
                  
               <Grid xs={12} sm={6} item  >
                
                <FormControl fullWidth>
                <InputLabel shrink>fromDate</InputLabel>
                <TextField
  name="fromDate"
  label="fromDate"
  variant="outlined"
  fullWidth
  required
  type="datetime-local"
  InputLabelProps={{ shrink: true }}
  error={fromDateError}
  helperText={fromDateError ? 'Please select fromDate' : ''}
  onChange={(e) => setFromdate(e.target.value)}
/>

               </FormControl>
               </Grid>
                  
               
                  
               <Grid xs={12} sm={6} item  >
                
                <FormControl fullWidth>
                <InputLabel shrink>toDate</InputLabel>
                <TextField
  name="toDate"
  label="toDate"
  variant="outlined"
  fullWidth
  required
  type="datetime-local"
  InputLabelProps={{ shrink: true }}
  error={toDateError}
  helperText={toDateError ? 'Please select toDate' : ''}
  onChange={(e) => setTodate(e.target.value)}
/>

               
               </FormControl>
               </Grid>
             
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={dayError}>
                   <TextField
                     name="days"
                     label="days"
                     variant="outlined"
                     fullWidth
                     required
                     value={days}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {dayError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid days (integer characters)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
                
  
               
                 </Grid>
                 <Grid container spacing={1} paddingTop={'20px'}>
                
                <Grid item xs ={12} align="right" >
                  <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
                  <Button type = "submit" variant='contained' color='primary' >SAVE</Button>
  
                </Grid>
                </Grid>
      
      
      
             </form>
             </CardContent>
             </Card>
             </Grid>
          </div>
      );
  } 
  export default HolidayForm;