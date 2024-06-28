import { Grid,Card,
  TextField,
  Button,
  Typography,
  Box,
  CardContent,FormHelperText,
  FormControl
} from '@mui/material';
import { useState, useEffect } from 'react';
import { PAYMEMPLOYEE, ONDUTY } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import {InputLabel} from '@mui/material';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';



export default function OndutyForm() {
const navigate= useNavigate();
const [employee,setEmployee]=useState([])
const [pnCompanyId, setpnCompanyId] = useState("");
const [company, setCompany] = useState("");
const [branch, setBranch] = useState("");


  const [pnBranchId, setpnBranchId] = useState("");
const [pnEmployeeId,setEmployeeId]=useState("")
const [employeeCode,setEmployeeCode]=useState("")
const [employeeName,setEmployeeName]=useState("")
const [refNo,setRefNo]=useState("")
const[ondutyDat,setOndutyDat ] = useState("")
const [fstatus,setFstatus]=useState("")
const [todat,setToDat]=useState("")
const [tstatus,setTstatus]=useState("")
const [totDays,setTotDays]=useState("")
const [subDat,setSubDat]=useState("")
const [reason,setReason]=useState("")
const [priority,setPriority]=useState("")
const [approval,setApproval]=useState("")
const [message1,setMessage1]=useState("")
const [message2,setMessage2]=useState("")
const [message3,setMessage3]=useState("")
const [message4,setMessage4]=useState("")


const [pnEmployeeIdError,setEmployeeIdError]=useState(false)

const [pnCompanyIdError, setpnCompanyIdError] = useState(false);
  const [pnBranchIdError, setpnBranchIdError] = useState(false);
const [employeeError,setEmployeeError]=useState("")
const [employeeCodeError,setEmployeeCodeError]=useState("")
const [employeeNameError,setEmployeeNameError]=useState("")
const [refNoError,setRefNoError]=useState("")
const[ondutyDatError,setOndutyDatError ] = useState("")

const [fstatusError,setFstatusError]=useState("")
const [todatError,setToDatError]=useState("")
const [tstatusError,setTstatusError]=useState("")
const [totDaysError,setTotDaysError]=useState("")
const [subDatError,setSubDatError]=useState("")
const [reasonError,setReasonError]=useState("")
const [priorityError,setPriorityError]=useState("")
const [approvalError,setApprovalError]=useState("")
const [message1Error,setMessage1Error]=useState("")
const [message2Error,setMessage2Error]=useState("")
const [message3Error,setMessage3Error]=useState("")
const [message4Error,setMessage4Error]=useState("")
useEffect(() => {
async function getData() {
  const data = await getRequest(ServerConfig.url, PAYMEMPLOYEE);
  setEmployee(data.data);
  
}
getData();
}, []);

const handleChange = (e) => {
  const { name, value } = e.target;

  switch (name) {
    case 'pnCompanyId':
      setpnCompanyId(value);
      setpnCompanyIdError(false);
      break;
      case 'pnBranchId':
    setpnBranchId(value);
    setpnBranchIdError(false);
      break;
      case 'empId':
    setEmployeeId(value);
    setEmployeeIdError(false);
      break; 
      case 'empCode':
      const selectedEmployee = employee.find(emp => emp.empCode === value);
      if (selectedEmployee) {
        setEmployeeId(selectedEmployee.empId);  // Set empId from selected employee
        setEmployeeCode(selectedEmployee.empCode);
        setEmployeeName(selectedEmployee.empName); // Set empName here
        setEmployeeCodeError(false);
      } else {
        setEmployeeId("");
        setEmployeeCode(value);
        setEmployeeName(""); // Clear empName if no employee found
        setEmployeeCodeError(true);
      }
      break;
    case 'refNo':
      setRefNo(value);
      setRefNoError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
      break;
   
    case 'ondutyDat':
      setOndutyDat(value);
      setOndutyDatError(!value);
      break;

      case 'fstatus':
      setFstatus(value);
      setFstatusError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
      break;

      case 'todat':
        setToDat(value);
        setToDatError(!value);
        break;

        case 'tstatus':
          setTstatus(value);
          setTstatusError(!/^[A-Za-z0-9\s]{1,40}$/.test(value));
          break;

          case 'totDays':
            setTotDays(value);
            setTotDaysError(!/^\d+(\.\d+)?$/.test(totDays));
            break;



            case 'subDat':
              setSubDat(value);
              setSubDatError(!value);
              break;

              case 'reason':
                setReason(value);
                setReasonError(!/^[A-Za-z0-9\s]{1,30}$/.test(value));
                break;

                case 'priority':
                  setPriority(value);
                  setPriorityError(!/^[A-Za-z0-9\s]{1,10}$/.test(value));
                  break;
                  case 'approval':
      setApproval(value);
      setApprovalError(!/^[A-Za-z0-9\s]{1,500}$/.test(value));
      break; 
                    case 'message1':
                      setMessage1(value);
                      setMessage1Error(!/^[A-Za-z0-9\s]{1,500}$/.test(value));
                      break;  
                    case 'message2':
                    setMessage2(value);
                    setMessage2Error(!/^[A-Za-z0-9\s]{1,500}$/.test(value));
                    break;  
                    case 'message3':
                    setMessage3(value);
                    setMessage3Error(!/^[A-Za-z0-9\s]{1,500}$/.test(value));
                    break;
                    case 'message4':
                      setMessage4(value);
                      setMessage4Error(!/^[A-Za-z0-9\s]{1,500}$/.test(value));
                      break;

    default:
      break;
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setpnCompanyIdError(!pnCompanyId);
  setpnBranchIdError(!pnBranchId);
  setEmployeeError(employee);
  setEmployeeCodeError(employeeCode);
  setRefNoError(!/^[A-Za-z0-9\s]{1,40}$/.test(refNo));
  setOndutyDatError(!ondutyDat);
  setFstatusError(!/^[A-Za-z0-9\s]{1,40}$/.test(fstatus));
  setToDatError(!todat);
  setTstatusError(!/^[A-Za-z0-9\s]{1,40}$/.test(tstatus));
  setSubDatError(!subDat);
  setReasonError(!/^[A-Za-z0-9\s]{1,30}$/.test(reason));
  setPriorityError(!/^[A-Za-z0-9\s]{1,10}$/.test(priority));
  setApprovalError(!/^[A-Za-z0-9\s]{1,10}$/.test(approval));
  setMessage1Error(!/^[A-Za-z0-9\s]{1,500}$/.test(message1));
  setMessage2Error(!/^[A-Za-z0-9\s]{1,500}$/.test(message2));
  setMessage3Error(!/^[A-Za-z0-9\s]{1,500}$/.test(message3));
  setMessage4Error(!/^[A-Za-z0-9\s]{1,500}$/.test(message4));
  if (
    pnCompanyId ||
    message4 ||
    message3 ||
    message2||
    message1||
    approval||
    priority||
    reason ||
    subDat ||
    tstatus ||
    todat ||
    ondutyDat ||
    refNo ||
    employeeCode ||
    pnBranchId
  ) {
    return;
  }

  const formData = {
    pnCompanyId: company,
    pnBranchId: branch,
    empId: pnEmployeeId,
    empName: employeeName,
    refNo:refNo,
    ondutyDat: ondutyDat,
    fstatus: fstatus,
    todat: todat,
    tstatus: tstatus,
    totDays: totDays,
    subDat:  subDat,
    reason: reason,
    priority: priority,
    approval: approval,
    message1: message1,
    message2:message2,
    message3: message3,
    message4: message4,

};
try {
    const response = await postRequest(ServerConfig.url, ONDUTY, formData);
    console.log(response);
    navigate('/OnDutyTable');
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
      <Typography variant='h5' color='S- Light' align='center'>OnDuty</Typography>
      <form onSubmit={handleSubmit}>
     
      <Grid container spacing={2} inputlabelprops={{shrink:true}}>
          <Grid item xs={12} sm={6} >
            <FormControl fullWidth>
           
            <InputLabel shrink>Company</InputLabel>
               <select name = "pnCompanyId" 
               onChange={(e)=>{
                setCompany(e.target.value)
                
               }}
               style={{ height: '50px' }}
              
               >
                <option value="">Select</option>
                   {

                      employee.map((e)=><option>{e.pnCompanyId}</option>)
                      
                   }
               </select>
               {pnCompanyIdError && <FormHelperText sx={{ color: 'red' }}>Please Select a company</FormHelperText>}

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
               {pnBranchIdError && <FormHelperText sx={{ color: 'red' }}>Please Select a Branch</FormHelperText>}

               </FormControl>
                </Grid>

                

                <Grid xs={12} sm={6} item>
               
                  <FormControl fullWidth>
                  <InputLabel shrink>Employeeid</InputLabel>
               <select 
               name = "empId"
               onChange={
                  
                 handleChange
             
               }
               style={{ height: '50px' }}
               >
                      <option value="">Select</option>
               
                   {
                      
                      employee.filter((e)=>(e.pnCompanyId==company && e.pnBranchId==branch)).map((e)=><option>{e.pnEmployeeId}</option>)
                    
                   }
               </select>
               {pnEmployeeIdError && <FormHelperText sx={{ color: 'red' }}>Please Select a employeeid</FormHelperText>}

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
               {employeeNameError && <FormHelperText sx={{ color: 'red' }}>select values</FormHelperText>}

                </FormControl>
                </Grid>
         
                
           
            
               

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="refNo"
                 
                  label="refNo"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 
                  
                />
             {refNoError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}

                </FormControl>
                </Grid>


<Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="ondutyDat"
              type= "datetime-local"
                  label="ondutyDat"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                {ondutyDat && <FormHelperText sx={{ color: 'red' }}>Please select values</FormHelperText>}
                </FormControl>
                </Grid>



                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="fstatus"
                 
                  label=" fstatus"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 
                  
                />
                {fstatus && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>


                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="todat"
                 
                  label="todat"
                  variant="outlined"
                  type= "datetime-local"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
                {todatError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>


                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="tstatus"
                 
                  label="tstatus"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                {tstatusError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>



                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="totDays"
                 
                  label="totDays"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                {totDaysError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>



                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="subDat"
                 
                  label="subDat"
                  variant="outlined"
                  type= "datetime-local"
                  fullWidth
                  required
                  onChange={handleChange} 
                  InputLabelProps={{shrink:true}}
                  
                />
                {subDatError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>
               
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "reason"
                 
                  label="reason"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
              {reasonError&& <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>


                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="priority"
                 
                  label="priority"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 
                  
                />
                {priorityError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>
               
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
             name="approval"
             label="approval"
             variant="outlined"
             fullWidth
             required
             onChange={handleChange}
            
             error={approvalError}

                />
                {approvalError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>


                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="message1"
              label="message1"
              variant="outlined"
              fullWidth
              required
              onChange={handleChange}
             
              error={message1Error}
                  
                />
                {message1Error && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>
               
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "message2"
                 
                  label="message2"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={(e) =>setMessage2(e.target.value)} 

                />
                {refNoError && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}  
                </FormControl>
                </Grid>

                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name="message3"
                 
                  label="message3"
                  variant="outlined"
                 
                  fullWidth
                  required
                  onChange={handleChange} 
                  
                />
                {message3Error && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>
               
                <Grid  xs={12}  sm={6} item>
                  <FormControl fullWidth> 
                <TextField
              name= "message4"
                 
                  label="message4"
                  variant="outlined"
                  
                  fullWidth
                  required
                  onChange={handleChange} 

                />
                {message4Error && <FormHelperText sx={{ color: 'red' }}>Please enter values</FormHelperText>}
                </FormControl>
                </Grid>


              
        </Grid>
        <Grid container spacing={1} paddingTop={'10px'}>
            
            <Grid item xs ={12} align="right" >
              <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
              <Button 
      variant='contained' color='primary' >SAVE</Button>
            </Grid>
            </Grid>

      </form>
      </CardContent>
      </Card>
      </Grid>
    </div>
  )

}

