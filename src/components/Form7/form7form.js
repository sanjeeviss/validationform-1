import { Grid,Card,
  TextField,
  Button,
  Typography,
  Box,
  CardContent,
  FormControl,
  FormHelperText,
  Fab
} from '@mui/material';
import { useState, useEffect } from 'react';
import { FORM7, PAYMEMPLOYEE } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { inputFormform7 } from './form7';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';



export default function SampleForm7() {
const navigate=useNavigate();
const [employee,setEmployee]=useState([])
const [company,setCompany]=useState([])
const [branch,setBranch]=useState([])
const [pnEmployeeId,setEmployeeId]=useState("")
const [employeeCode,setEmployeeCode]=useState("")
const [employeeName,setEmployeeName]=useState("")
const [form7,setForm7]=useState([])
const [esino,setEsiNo]=useState("")
const [m1,setM1]=useState("")
const [m2,setM2]=useState("")
const [m3,setM3]=useState("")
const [m4,setM4]=useState("")
const [m5,setM5]=useState("")  
const [m6,setM6]=useState("")
const [d1,setD1]=useState("")
const [d2,setD2]=useState("")
const [d3,setD3]=useState("")
const [d4,setD4]=useState("")
const [d5,setD5]=useState("")
const [d6,setD6]=useState("")
const [w1,setW1]=useState("")
const [w2,setW2]=useState("")
const [w3,setW3]=useState("")
const [w4,setW4]=useState("")
const [w5,setW5]=useState("")
const [w6,setW6]=useState("")
const [esi1,setEsi1]=useState("")
const [esi2,setEsi2]=useState("")
const [esi3,setEsi3]=useState("")
const [esi4,setEsi4]=useState("")
const [esi5,setEsi5]=useState("")
const [esi6,setEsi6]=useState("")
const [empr1,setEmpr1]=useState("")
const [empr2,setEmpr2]=useState("")
const [empr3,setEmpr3]=useState("")
const [empr4,setEmpr4]=useState("")
const [empr5,setEmpr5]=useState("")
const [empr6,setEmpr6]=useState("")
const [totwage,seTotwage]=useState("")
const [totEsi,setTotEsi]=useState("")
const [totEmpr,setTotEmpr]=useState("")
const [disp,setDisp]=useState("")



const [companyError,setCompanyError]=useState([])
const [branchError,setBranchError]=useState([])
const [pnEmployeeIdError,setEmployeeIdError]=useState(false)
const [employeeCodeError,setEmployeeCodeError]=useState(false)
const [employeeNameError,setEmployeeNameError]=useState(false)
const [form7Error,setForm7Error]=useState(false)
const [esinoError,setEsiNoError]=useState(false)
const [m1Error,setM1Error]=useState(false)
const [m2Error,setM2Error]=useState(false)
const [m3Error,setM3Error]=useState(false)
const [m4Error,setM4Error]=useState(false)
const [m5Error,setM5Error]=useState(false)  
const [m6Error,setM6Error]=useState(false)
const [d1Error,setD1Error]=useState(false)
const [d2Error,setD2Error]=useState(false)
const [d3Error,setD3Error]=useState(false)
const [d4Error,setD4Error]=useState(false)
const [d5Error,setD5Error]=useState(false)
const [d6Error,setD6Error]=useState(false)
const [w1Error,setW1Error]=useState(false)
const [w2Error,setW2Error]=useState(false)
const [w3Error,setW3Error]=useState(false)
const [w4Error,setW4Error]=useState(false)
const [w5Error,setW5Error]=useState(false)
const [w6Error,setW6Error]=useState(false)
const [esi1Error,setEsi1Error]=useState(false)
const [esi2Error,setEsi2Error]=useState(false)
const [esi3Error,setEsi3Error]=useState(false)
const [esi4Error,setEsi4Error]=useState(false)
const [esi5Error,setEsi5Error]=useState(false)
const [esi6Error,setEsi6Error]=useState(false)
const [empr1Error,setEmpr1Error]=useState(false)
const [empr2Error,setEmpr2Error]=useState(false)
const [empr3Error,setEmpr3Error]=useState(false)
const [empr4Error,setEmpr4Error]=useState(false)
const [empr5Error,setEmpr5Error]=useState(false)
const [empr6Error,setEmpr6Error]=useState(false)
const [totwageError,setTotwageError]=useState(false)
const [totEsiError,setTotEsiError]=useState(false)
const [totEmprError,setTotEmprError]=useState(false)
const [dispError,setDispError]=useState(false)




useEffect(() => {
async function getData() {
  const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
  setEmployee(data.data);
  const form7=await getRequest(ServerConfig.url,FORM7)
    setForm7(form7.data)
}
getData();
}, []);



const handleChange = (e) => {
  const { name, value } = e.target;

  switch (name) {
    case 'pnCompanyId':
      setCompany(value);
      setCompanyError(false);
      break;
    case 'pnBranchId':
      setBranch(value);
      setBranchError(false);
      break;
    case 'pnEmployeeId':
      setEmployeeId(value);
      setEmployeeIdError(!/^[A-Za-z0-9\s]{1,20}$/.test(value) || !value);
      break;
      case 'employeeCode':
        setEmployeeCode(value);
        var v=e.currentTarget.value
                var empname=employee.filter((e)=>e.employeeCode==v)
                setEmployeeCode(v)
                setEmployeeName(empname[0].employeeFullName)
        setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,20}$/.test(value) || !value);
        break;
        case 'esino':
          setEsiNo(value);
          setEsiNoError(!/^\d{10,17}$/.test(value) || !value);
          break;
    case 'm1':
      setM1(value);
      setM1Error(!/^\d+$/.test(value) || !value);
      break;
      case 'm2':
        setM2(value);
        setM2Error(!/^\d+$/.test(value) || !value);
      break;
      case 'm3':
        setM3(value);
        setM3Error(!/^\d+$/.test(value) || !value);
      break;
      case 'm4':
        setM4(value);
        setM4Error(!/^\d+$/.test(value) || !value);
      break;
      case 'm5':
        setM5(value);
        setM5Error(!/^\d+$/.test(value) || !value);
      break;
      case 'm6':
        setM6(value);
        setM6Error(!/^\d+$/.test(value) || !value);
      break;
      case 'd1':
      setD1(value);
      setD1Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'd2':
      setD2(value);
      setD2Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'd3':
      setD3(value);
      setD3Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'd4':
      setD4(value);
      setD4Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'd5':
      setD5(value);
      setD5Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'd6':
      setD6(value);
      setD6Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'w1':
      setW1(value);
      setW1Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'w2':
      setW2(value);
      setW2Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'w3':
      setW3(value);
      setW3Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'w4':
      setW4(value);
      setW4Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'w5':
      setW5(value);
      setW5Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'w6':
      setW6(value);
      setW6Error(!/^\d+(\.\d+)?$/.test(value));
      break;
      case 'esi1':
        setEsi1(value);
        setEsi1Error(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'esi2':
        setEsi2(value);
        setEsi2Error(!/^\d{10,17}$/.test(value) || !value);
        break;
      case 'esi3':
        setEsi3(value);
        setEsi3Error(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'esi4':
        setEsi4(value);
        setEsi4Error(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'esi5':
        setEsi5(value);
        setEsi5Error(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'esi6':
        setEsi6(value);
        setEsi6Error(!/^\d{10,17}$/.test(value) || !value);
      break;
    case 'empr1':
      setEmpr1(value);
      setEmpr1Error(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'empr2':
      setEmpr2(value);
      setEmpr2Error(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'empr3':
      setEmpr3(value);
      setEmpr3Error(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'empr4':
      setEmpr4(value);
      setEmpr4Error(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'empr5':
      setEmpr5(value);
      setEmpr5Error(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'empr6':
      setEmpr6(value);
      setEmpr6Error(!/^\d{10,17}$/.test(value) || !value);
        break;
      case 'totwage':
      seTotwage(value);
      setTotwageError(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'totEsi':
      setTotEsi(value);
      setTotEsiError(!/^\d{10,17}$/.test(value) || !value);
      break;
      case 'totEmpr':
      setTotEmpr(value);
      setTotEmprError(!/^\d{10,17}$/.test(value) || !value);
        break;
        case 'disp':
      setDisp(value);
      setDispError(!/^\d{10,17}$/.test(value) || !value);
      break;
      
    default:
      break;
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setCompanyError(!company);
  setBranchError(!branch);
  setEmployeeIdError(!/^[A-Za-z0-9\s]{1,20}$/.test(pnEmployeeId) || !pnEmployeeId);
  setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,20}$/.test(employeeCode) || !employeeCode);
  setEsiNoError(!/^\d{10,17}$/.test(esino) || !esino);
  setM1Error(!/^\d+$/.test(m1) || !m1);
  setM2Error(!/^\d+$/.test(m2) || !m2);
  setM3Error(!/^\d+$/.test(m3) || !m3);
  setM4Error(!/^\d+$/.test(m4) || !m4);
  setM5Error(!/^\d+$/.test(m5) || !m5);
  setM6Error(!/^\d+$/.test(m6) || !m6);
  setD1Error(!/^\d+(\.\d+)?$/.test(!d1));
  setD2Error(!/^\d+(\.\d+)?$/.test(!d2));
  setD3Error(!/^\d+(\.\d+)?$/.test(!d3));
  setD4Error(!/^\d+(\.\d+)?$/.test(!d4));
  setD5Error(!/^\d+(\.\d+)?$/.test(!d5));
  setD6Error(!/^\d+(\.\d+)?$/.test(!d6));
  setW1Error(!/^\d+(\.\d+)?$/.test(!w1));
  setW2Error(!/^\d+(\.\d+)?$/.test(!w2));
  setW3Error(!/^\d+(\.\d+)?$/.test(!w3));
  setW4Error(!/^\d+(\.\d+)?$/.test(!w4));
  setW5Error(!/^\d+(\.\d+)?$/.test(!w5));
  setW6Error(!/^\d+(\.\d+)?$/.test(!w6));
  setEsi1Error(!/^\d{10,17}$/.test(esi1) || !esi1);
  setEsi2Error(!/^\d{10,17}$/.test(esi2) || !esi2);
  setEsi3Error(!/^\d{10,17}$/.test(esi3) || !esi3);
  setEsi4Error(!/^\d{10,17}$/.test(esi4) || !esi4);
  setEsi5Error(!/^\d{10,17}$/.test(esi5) || !esi5);
  setEsi6Error(!/^\d{10,17}$/.test(esi6) || !esi6);
  setEmpr1Error(!/^\d{10,17}$/.test(empr1) || !empr1);
  setEmpr2Error(!/^\d{10,17}$/.test(empr2) || !empr2);
  setEmpr3Error(!/^\d{10,17}$/.test(empr3) || !empr3);
  setEmpr4Error(!/^\d{10,17}$/.test(empr4) || !empr4);
  setEmpr5Error(!/^\d{10,17}$/.test(empr5) || !empr5);
  setEmpr6Error(!/^\d{10,17}$/.test(empr6) || !empr6);
  setTotwageError(!/^\d{10,17}$/.test(totwage) || !totwage);
  setTotEsiError(!/^\d{10,17}$/.test(totEsi) || !totEsi);
  setTotEmprError(!/^\d{10,17}$/.test(totEmpr) || !totEmpr);
  setDispError(!/^\d{10,17}$/.test(disp) || !disp);


  if (!company || !branch || !pnEmployeeId || !employeeCode || 
  
    ! esino||
    !m1||
    ! m2|| ! m3|| ! m4|| ! m5|| ! m6|| ! d1||! d2||! d3||! d4||! d5||! d6|| ! w1|| ! w2|| ! w3|| ! w4|| ! w5|| ! w6||
  !esi1|| !esi2|| !esi3|| !esi4|| !esi5|| !esi6||
    ! empr1||  ! empr2||  ! empr3||   ! empr4||   ! empr5||  ! empr6||
    !totwage||
    ! totEsi||
    ! totEmpr||
  ! disp ) {
    return;
  }

  const formData = {
    pnCompanyId: company,
    pnBranchId: branch,
    pnEmployeeId: pnEmployeeId,
    employeeCode: employeeCode,
    empName: employeeName,
    esino: esino,
    m1: m1,
    m2: m2,
    m3: m3,
    m4: m4,
    m5: m5,
    m6: m6,
    d1: d1,
    d2: d2,
    d3: d3,
    d4: d4,
    d5: d5,
    d6: d6,
    w1: w1,
    w2: w2,
    w3: w3,
    w4: w4,
    w5: w5,
    w6: w6,
    esi1: esi1,
    esi2: esi2,
    esi3: esi3,
    esi4: esi4,
    esi5: esi5,
    esi6: esi6,
    empr1: empr1,
    empr2: empr2,
    empr3: empr3,
    empr4: empr4,
    empr5:empr5,
    empr6: empr6,
    totwage: totwage,
    totEsi: totEsi,
    totEmpr: totEmpr,
    disp:  disp
  };

  try {
    await postRequest(ServerConfig.url, FORM7, formData);
    navigate('/Form7table')
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};



  const margin={margin:"0 5px"}
  return (
    <div>
      <Grid style ={{ padding: "80px 5px0 5px" }}>
      <Card style = {{maxWidth: 600, margin: "0 auto"}}>
      <CardContent>
      <Typography variant='h5' color='S- Light' align='center'>Form7</Typography>
      <form>
     
      <Grid container spacing={2} inputlabelprops={{shrink:true}}>
          <Grid item xs={12} sm={6} >
            <FormControl fullWidth>
           
            <InputLabel shrink>Company</InputLabel>
               <select name = "pnCompanyId" 
               onChange={handleChange}
               style={{ height: '50px' }}
              
               >
                <option value="">Select</option>
                   {

                      employee.map((e)=><option>{e.pnCompanyId}</option>)
                      
                   }
               </select>
               {companyError && <FormHelperText  style={{color:"red"}}>Please select a company</FormHelperText>}

            </FormControl >
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth >
                  <InputLabel shrink>BranchId</InputLabel>
               <select 
               name="pnBranchId"
               onChange={handleChange}
               style={{ height: '50px' }}
               inputlabelprops={{ shrink: true }}
               >
                <option value="">Select</option>
                   {
                     
                        employee.filter((e)=>(e.pnCompanyId==company)).map((e)=><option>{e.pnBranchId}</option>)
                   }
               </select>
               {branchError && <FormHelperText  style={{color:"red"}}>Please select a branch</FormHelperText>}

               </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="pnEmployeeId"
                  label="pnEmployeeId"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange}
                                    InputLabelProps={{ shrink: true }} 
                />
                                 {pnEmployeeIdError && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


                
                <Grid xs={12} sm={6} item>
               
                  <FormControl fullWidth>
                  <InputLabel shrink>empCode</InputLabel>
               <select 
               name = "empCode"
               onChange={handleChange}
               style={{ height: '50px' }}
               >
                      <option value="">Select</option>
               
                   {
                      
                      employee.filter((e)=>(e.pnCompanyId==company && e.pnBranchId==branch)).map((e)=><option>{e.employeeCode}</option>)
                    
                   }
               </select>
               {employeeCodeError && <FormHelperText  style={{color:"red"}}>Please select a employeeCode</FormHelperText>}

               </FormControl>

                </Grid>

          
                 <Grid xs={12} sm={6} item  >
                
                 <FormControl fullWidth>
                <TextField 
                name= "empName"
                value={employeeName}
                label="employeename"
                variant="outlined"
                fullWidth
                required  /> 
                                                 {employeeNameError && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>
         
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="esino"
                  label="esino"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {esinoError && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="m1"
                 
                  label="m1"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {m1Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>
               
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="m2"
                  label="m2"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {m2Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="m3"
                 
                  label="m3"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {m3Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="m4"
                  label="m4"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {m4Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="m5"
                 
                  label="m5"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {m5Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="m6"
                  label="m6"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {m6 && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="d1"
                 
                  label="d1"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {d1Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="d2"
                  label="d2"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {d2Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="d3"
                 
                  label="d3"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {d3Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="d4"
                  label="d4"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {d4Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="d5"
                 
                  label="d5"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {d5Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="d6"
                  label="d6"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {d6Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="w1"
                 
                  label="w1"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {w1 && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="w2"
                  label="w2"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {w2Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="w3"
                 
                  label="w3"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 
                />
                                                 {w3Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="w4"
                  label="w4"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {w4Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="w5"
                 
                  label="w5"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {w5Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="w6"
                  label="w6"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {w6Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="esi1"
                 
                  label="esi1"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {esi1Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="esi2"
              label="esi2"
              variant="outlined"
              fullWidth
              required
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              error={esi2Error}
                />
              {esi2Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="esi3"
                 
                  label="esi3"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {esi3Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="esi4"
                  label="esi4"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {esi4Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="esi5"
                 
                  label="esi5"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {esi5Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="esi6"
                  label="esi6"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {esi6Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="empr1"
                 
                  label="empr1"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {empr1Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="empr2"
                  label="empr2"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {empr2Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="empr3"
                 
                  label="empr3"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {empr3Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="empr4"
                  label="empr4"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {empr4Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="empr5"
                 
                  label="empr5"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {empr5Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="empr6"
                  label="empr6"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {empr6Error && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="totwage"
                 
                  label="totwage"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {totwageError && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="totEsi"
                  label="totEsi"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {totEsiError && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="totEmpr"
                 
                  label="totEmpr"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                                                 {totEmprError && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="disp"
                  label="disp"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                                                 {dispError && <FormHelperText  style={{color:"red"}}>Please enter value</FormHelperText>}

                </FormControl>
                </Grid>


             


              

        </Grid>
        <Grid container spacing={1} paddingTop={'10px'}>
            
            <Grid item xs ={12} align="right" >
              <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
              <Button onClick={()=>{
const formData = {
  pnCompanyId: company,
  pnBranchId: branch,
  pnEmployeeId: pnEmployeeId,
  employeeCode: employeeCode,
  empName: employeeName,
  esino: esino,
  m1: m1,
  m2: m2,
  m3: m3,
  m4: m4,
  m5: m5,
  m6: m6,
  d1: d1,
  d2: d2,
  d3: d3,
  d4: d4,
  d5: d5,
  d6: d6,
  w1: w1,
  w2: w2,
  w3: w3,
  w4: w4,
  w5: w5,
  w6: w6,
  esi1: esi1,
  esi2: esi2,
  esi3: esi3,
  esi4: esi4,
  esi5: esi5,
  esi6: esi6,
  empr1: empr1,
  empr2: empr2,
  empr3: empr3,
  empr4: empr4,
  empr5:empr5,
  empr6: empr6,
  totwage: totwage,
  totEsi: totEsi,
  totEmpr: totEmpr,
  disp:  disp
};
console.log(formData)
postRequest(ServerConfig.url,FORM7  ,formData).then((e)=>{
console.log(e)
navigate('/Form7table')
}).catch((e)=>console.log(e));

                
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