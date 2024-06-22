import {TextField,FormControl, Button, Card, FormHelperText,Select,MenuItem, Typography, Box, Grid, CardContent} from '@mui/material';
import { inputFormElements26} from './paymoverheadingCost'
import { useState, useEffect } from 'react';
import { PAYMBRANCHES, PAYMCOMPANIES, PAYMLOAN, PAYMOVERHEADINGCOST } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';


export default function Sample26() {

  const navigate = useNavigate();
  const [company,setCompany]=useState([])
  const [branch,setBranch] = useState([])
  const [pnCompanyId,setPnCompanyId]=useState("")
  const [branchId,setBranchId]=useState("")
  const [overHeadingName,setOverheadingname]=useState("")
  const [status,setStatus]=useState("")
  const [companyError,setCompanyError] = useState("")
    const [branchError,setBranchError] = useState("")
    const [overHeadingNameError,setOverheadingnameError] = useState("")
    const[statusError,setStatusError] = useState("")

    useEffect(()=>{
    async function getData(){
      const data = await getRequest(ServerConfig.url,PAYMCOMPANIES);
      setCompany (data.data);
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
          setBranchId(value);
      setBranchError(false);
        break;
      case 'overHeadingName':
        setOverheadingname(value);
        setOverheadingnameError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
        break;
     
      case 'status':
        setStatus(value.toUpperCase());
        setStatusError(!/^[A-Za-z]{1}$/.test(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!pnCompanyId);
    setBranchError(!branchId);
 
    setOverheadingnameError(!/^[A-Za-z0-9\s]{1,40}$/.test(overHeadingName));
    
    setStatusError(!/^[A-Za-z]{1}$/.test(status));

    if (
      companyError ||
      branchError ||
      overHeadingNameError ||
      statusError
    ) {
      return;
    }

    const formData = {
      pnCompanyId: pnCompanyId,
      branchId: branchId,
      overHeadingName: overHeadingName,
  status: status,
 
};
 try {
      const response = await postRequest(ServerConfig.url, PAYMOVERHEADINGCOST, formData);
      console.log(response);
      navigate('/PaymOverHeadingcostTable');
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
        <Typography variant='h5' color='S- Light' align='center'>PAYM Over Heading Cost</Typography>
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
                 <FormControl fullWidth error={overHeadingNameError}>
                   <TextField
                     name="overHeadingName"
                     label="overHeadingName"
                     variant="outlined"
                     fullWidth
                     required
                     value={overHeadingName}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {overHeadingNameError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Over Heading Name (alphanumeric characters, max length 40)
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
