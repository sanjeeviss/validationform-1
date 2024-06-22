import { Grid,Card,
    TextField,
    Button,
    Typography,
    Box,
    FormHelperText,
    MenuItem,
    Select,

    CardContent,  
    FormControl
  } from '@mui/material';

  import {inputpaymleaveForm} from './paymleave';
import { PAYMBRANCHES, PAYMLEAVE } from '../../serverconfiguration/controllers';
import { useState, useEffect } from 'react';
import { PAYMEMPLOYEE,PAYMCOMPANIES } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';


  export default function LeaveForm() {
    

    const navigate = useNavigate();

    const[company,setCompany]=useState([])
    const [branch,setBranch]=useState([])
    const[leave,setLeave]=useState([])
    const[pnCompanyId,setPnCompanyId]=useState("")
    const[vLeaveName,setVLeaveName]=useState("")
    const[pnLeaveCode,setPnLeaveCode]=useState("")
    const[pnCount,setpnCount]=useState("")
    const[status,setStatus]=useState("")
    const[pnBranchId,setPnBranchId]=useState("")
    const[annualLeave,setAnnualLeave]=useState("")
    const[maxDays,setMaxDays]=useState("")
    const[el,setEl]=useState("")
    const[type,setType]=useState("")
    const [companyError,setCompanyError] = useState("")
    const [branchError,setBranchError] = useState("")
    const [vLeaveNameError,setVLeaveNameError] = useState("")
    const [pnLeaveCodeError,setPnLeaveCodeError] = useState("")
    const [pnCountError,setPnCountError] = useState("")
    const [statusError,setStatusError] = useState("")
    const [annualLeaveError,setAnnualLeaveError] = useState("")

    const [maxDaysError,setMaxDaysError] = useState("")

    const [elError,setELError] = useState("")

    const [typeError,setTypeError] = useState("")

   
    useEffect(()=>{
      async function getData(){
        const data = await getRequest(ServerConfig.url,PAYMCOMPANIES);
        setCompany(data.data);
        const data1 = await getRequest(ServerConfig.url,PAYMBRANCHES);
        setBranch(data1.data);
      }
      getData();
    },[]);
    
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
        case 'vLeaveName':
          setVLeaveName(value);
          setVLeaveNameError(!/^[A-Za-z0-9\s]{1,10}$/.test(value));
          break;
          case 'pnLeaveCode':
            setPnLeaveCode(value);
            setPnLeaveCodeError(!/^[A-Za-z0-9\s]{1,30}$/.test(value));
            break;
            case 'pnCount':
              setpnCount(value);
              setPnCountError(!!isNaN(value) && value !== '');
              break;
              case 'status':
                setStatus(value.toUpperCase());
                setStatusError(!/^[A-Za-z]{1}$/.test(value));
                break;
                case 'annualLeave':
                  setAnnualLeave(value);
                  setAnnualLeaveError(!/^[A-Za-z0-9\s]{1,30}$/.test(value));
                  break;
                           
        case 'maxDays':
          setMaxDays(value);
          setMaxDaysError(!!isNaN(value) && value !== '');
          break;
          case 'el':
            setEl(value);
            setELError(!/^[A-Za-z0-9\s]{1,6}$/.test(value));
            break;
            case 'type':
              setType(value);
              setTypeError(!/^[A-Za-z0-9\s]{1,10}$/.test(value));
              break;
        default:
          break;
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setCompanyError(!pnCompanyId);
      setBranchError(!pnBranchId);
   
      setVLeaveNameError(!/^[A-Za-z0-9\s]{1,10}$/.test(vLeaveName));
      setPnLeaveCodeError(!/^[A-Za-z0-9\s]{1,30}$/.test(pnLeaveCode));
      setPnCountError(isNaN(pnCount) || !pnCount);
  
      setStatusError(!/^[A-Za-z]{1}$/.test(status));

  
      setAnnualLeaveError(!/^[A-Za-z0-9\s]{1,30}$/.test(annualLeave));
  
  
      
      setMaxDaysError(isNaN(maxDays) || !maxDays);
      setELError(!/^[A-Za-z0-9\s]{1,6}$/.test(el));

      setTypeError(!/^[A-Za-z0-9\s]{1,6}$/.test(type));

  
      if (
        companyError ||
        branchError ||
        vLeaveNameError ||
        pnLeaveCodeError ||
        pnCountError ||
        statusError ||
        annualLeaveError ||
        maxDaysError ||
        elError ||
        typeError
       
      ) {
        return;
      }
  
      const formData = {
        pnCompanyId: pnCompanyId,
        pnBranchId: pnBranchId,
        vLeaveName: vLeaveName,
        pnLeaveCode:pnLeaveCode,
        pnCount: pnCount,
        status:status,
        annualLeave:annualLeave,
        maxDays:maxDays,
        el: el,
        type:type
  };
   try {
        const response = await postRequest(ServerConfig.url, PAYMLEAVE, formData);
        console.log(response);
        navigate('/PaymleaveTables');
      } catch (error) {
        console.error('Error saving Leave:', error);
      }
    };
  


    const margin={margin:"0 5px"}
    return (
      <div>
      <Grid style ={{ padding: "80px 5px0 5px" }}>
        <Card style = {{maxWidth: 600, margin: "0 auto"}}>
        <CardContent>
        <Typography variant='h5' color='S- Light' align='center'>PAYM LEAVE</Typography>
        <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
       
       <Grid container spacing={2} inputlabelprops={{shrink:true}}>
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
                  <MenuItem key={e.pnBranchId} value={e.pnBranchId}>{e.pnBranchId}</MenuItem>
                ))}
              </Select>
              {branchError && <FormHelperText sx={{ color: 'red' }}>Please Select a BranchId</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={vLeaveNameError}>
                   <TextField
                     name="vLeaveName"
                     label="v Leave Name"
                     variant="outlined"
                     fullWidth
                     required
                     value={vLeaveName}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {vLeaveNameError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Leave Name (alphanumeric characters, max length 40)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={pnLeaveCodeError}>
                   <TextField
                     name="pnLeaveCode"
                     label="Pn Leave Code"
                     variant="outlined"
                     fullWidth
                     required
                     value={pnLeaveCode}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {pnLeaveCodeError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Leave Code (alphanumeric characters, max length 10)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={pnCountError}>
                   <TextField
                     name="pnCount"
                     label="pn Count"
                     variant="outlined"
                     fullWidth
                     required
                     value={pnCount}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {pnCountError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Pn Count (it only the numeric values)
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
                       Please enter a valid Status (only one alphabetic characters and uppercase letter)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={annualLeaveError}>
                   <TextField
                     name="annualLeave"
                     label="Annual Leave"
                     variant="outlined"
                     fullWidth
                     required
                     value={annualLeave}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {annualLeaveError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid AnnualLeave (alphanumeric characters, max length 30)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={maxDaysError}>
                   <TextField
                     name="maxDays"
                     label="max Days"
                     variant="outlined"
                     fullWidth
                     required
                     value={maxDays}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {maxDaysError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Pn Count (it only the numeric values)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={elError}>
                   <TextField
                     name="el"
                     label="EL"
                     variant="outlined"
                     fullWidth
                     required
                     value={el}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {elError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid AnnualLeave (alphanumeric characters, max length 6)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={typeError}>
                   <TextField
                     name="type"
                     label="type"
                     variant="outlined"
                     fullWidth
                     required
                     value={type}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {typeError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Type (alphanumeric characters, max length 10)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
        
               <Grid container spacing={1} paddingTop={'10px'}>
           
           <Grid item xs ={12} align="right" >
             <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
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
   )   
   
}
