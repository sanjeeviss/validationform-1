import { Grid,Card,
  TextField,
  Button,
  Typography,
  Box,
  FormHelperText,
  Select,
  MenuItem,
  CardContent,
  FormControl
} from '@mui/material';
import { useState, useEffect } from 'react';
import { PAYMBRANCHES, PAYMCOMPANIES, PAYMEMPLOYEE, PAYMPF, PAYMSHIFT } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';



export default function Sample23() {
const navigate= useNavigate();
const [company,setCompany]=useState([])
const [branch,setBranch]=useState([])
const [pnCompanyId,setpnCompanyId]=useState("")
const [branchId,setBranchId]=useState("")
const [vShiftName,setVshiftName]=useState("")
const [vShiftFrom,setVshiftFrom]=useState("")
const [vShiftTo,setVshiftTo]=useState("")
const [status,setStatus]=useState("")
const [vShiftCategory,setVshiftCategory]=useState("")
const [companyError,setCompanyError]=useState([])
const [branchError,setBranchError]=useState([])

const [vShiftNameError,setVshiftNameError]=useState("")
const [vShiftFromError,setVshiftFromError]=useState("")
const [vShiftToError,setVshiftToError]=useState("")
const [statusError,setStatusError]=useState("")
const [vShiftCategoryError,setVshiftCategoryError]=useState("")


useEffect(() => {
async function getData() {
  const data = await getRequest(ServerConfig.url, PAYMCOMPANIES);
  setCompany(data.data);
  const data1 = await getRequest(ServerConfig.url, PAYMBRANCHES);
    setBranch(data1.data)
  
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
      case 'branchId':
    setBranchId(value);
    setBranchError(false);
      break;
    case 'vShiftName':
      setVshiftName(value);
      setVshiftNameError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
      break;
   
    case 'vShiftFrom':
      setVshiftFrom(value);
      setVshiftFromError(!/^[A-Za-z0-9\s]{1,5}$/.test(value));
      break;
      case 'vShiftTo':
        setVshiftTo(value);
        setVshiftToError(!/^[A-Za-z0-9\s]{1,5}$/.test(value));
        break;
        case 'status':
          setStatus(value.toUpperCase());
          setStatusError(!/^[A-Za-z]{1}$/.test(value));
          break;
          case 'vShiftCategory':
            setVshiftCategory(value);
            setVshiftCategoryError(!/^[A-Za-z0-9\s]{1,20}$/.test(value));
            break;
    default:
      break;
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setCompanyError(!pnCompanyId);
  setBranchError(!branchId);
  setVshiftNameError(!/^[A-Za-z0-9\s]{1,40}$/.test(vShiftName));
  setVshiftFromError(!/^[A-Za-z0-9\s]{1,5}$/.test(vShiftTo));
  setVshiftToError(!/^[A-Za-z0-9\s]{1,5}$/.test(vShiftFrom));
  setStatusError(!/^[A-Za-z]{1}$/.test(status));
  setVshiftCategoryError(!/^[A-Za-z0-9\s]{1,20}$/.test(vShiftCategory));
  if (
    companyError ||
    branchError ||
    vShiftNameError ||
    vShiftFromError ||
    vShiftToError ||
    
    statusError ||
    vShiftCategoryError
  ) {
    return;
  }

  const formData = {
    pnCompanyId: pnCompanyId,
    branchId: branchId,
    vShiftName: vShiftName,
    vShiftFrom:vShiftFrom,
    vShiftTo:vShiftTo,
status: status,
vShiftCategory:vShiftCategory

};
try {
    const response = await postRequest(ServerConfig.url, PAYMSHIFT, formData);
    console.log(response);
    navigate('/PaymshiftTable');
  } catch (error) {
    console.error('Error saving grade:', error);
  }
};



  const margin={margin:"0 5px"}
  return (
    <div>
      <Grid style ={{ padding: "80px 5px0 5px" }}>
      <Card style = {{maxWidth: 600, margin: "0 auto"}}>
      <CardContent>
      <Typography variant='h5' color='S- Light' align='center'>Paym Shift</Typography>
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
                value={branchId}
                onChange={handleChange}     
                name="branchId"              
                   displayEmpty
                style={{ height: '50px' }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {branch.map((e) => (
                  <MenuItem key={e.branchId} value={e.branchId}>{e.pnBranchId}</MenuItem>
                ))}
              </Select>
              {branchError && <FormHelperText sx={{ color: 'red' }}>Please Select a BranchId</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={vShiftNameError}>
                   <TextField
                     name="vShiftName"
                     label="vShiftName"
                     variant="outlined"
                     fullWidth
                     required
                     value={vShiftName}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {vShiftNameError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Shift Name (alphanumeric characters, max length 40)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={vShiftFromError}>
                   <TextField
                     name="vShiftFrom"
                     label="vShiftFrom"
                     variant="outlined"
                     fullWidth
                     required
                     value={vShiftFrom}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {vShiftFromError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Shift from (alphanumeric characters, max length 5)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={vShiftToError}>
                   <TextField
                     name="vShiftTo"
                     label="vShiftTo"
                     variant="outlined"
                     fullWidth
                     required
                     value={vShiftTo}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {vShiftToError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Shift To (alphanumeric characters, max length 5)
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
                       Please enter a valid Status (only alphabetic characters)
                     </FormHelperText>
                   )}
                 </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                 <FormControl fullWidth error={vShiftCategoryError}>
                   <TextField
                     name="vShiftCategory"
                     label="vShiftCategory"
                     variant="outlined"
                     fullWidth
                     required
                     value={vShiftCategory}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {vShiftCategoryError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Shift Category (alphanumeric characters, max length 20)
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
