import { Grid,Card,
    TextField,
    Button,
    Typography,
    Box,
    FormHelperText,
    MenuItem,
    Select,
    CardContent,InputLabel,FormControl,
  } from '@mui/material';

  import {inputpaymLevelForm} from './paymLevel';
import { PAYMLEVEL } from '../../serverconfiguration/controllers';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRequest,postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMBRANCHES, PAYMCOMPANIES} from '../../serverconfiguration/controllers';

  

  export default function LevelForm() {
    const navigate = useNavigate()
    const [company,setCompany]=useState([])
    const [branch,setBranch] =useState([])
    const [level,setLevel] =useState([])
    const [pnCompanyId,setPnCompanyId] =useState("")
    const [pnBranchId,setPnBranchId] = useState("")
    const [vLevelName,setVLevelName] = useState("")
    const [status,setStatus] = useState("")
    const [companyError,setCompanyError] = useState("")
    const [branchError,setBranchError] = useState("")
    const [levelNameError,setLevelNameError] = useState("")
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
      setPnBranchId(value);
      setBranchError(false);
        break;
      case 'vLevelName':
        setVLevelName(value);
        setLevelNameError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
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
    setBranchError(!pnBranchId);
 
    setLevelNameError(!/^[A-Za-z0-9\s]{1,40}$/.test(vLevelName));
    
    setStatusError(!/^[A-Za-z]{1}$/.test(status));

    if (
      companyError ||
      branchError ||
      levelNameError ||
      statusError
    ) {
      return;
    }

    const formData = {
      pnCompanyId: pnCompanyId,
      pnBranchId: pnBranchId,
      vLevelName: vLevelName,
  status: status,
 
};
 try {
      const response = await postRequest(ServerConfig.url, PAYMLEVEL, formData);
      console.log(response);
      navigate('/PaymlevelTables');
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
        <Typography variant='h5' color='S- Light' align='center'>PAYM LEVEL</Typography>
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
                 <FormControl fullWidth error={levelNameError}>
                   <TextField
                     name="vLevelName"
                     label="vGradeName"
                     variant="outlined"
                     fullWidth
                     required
                     value={vLevelName}
                     onChange={handleChange}
                     InputLabelProps={{ shrink: true }}
                   />
                   {levelNameError && (
                     <FormHelperText sx={{ color: 'red' }}>
                       Please enter a valid Level Name (alphanumeric characters, max length 40)
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
