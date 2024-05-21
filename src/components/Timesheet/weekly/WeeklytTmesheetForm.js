import React, { useState } from 'react';
import { Paper, Typography, Table, InputLabel,TableHead, TableBody, TableRow, TableCell, Select, MenuItem, Grid,FormControl,TextField } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { PAYMEMPLOYEE, TIMECARD } from '../../../serverconfiguration/controllers';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getRequest } from '../../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../../serverconfiguration/serverconfig';

const WeeklyTimesheetForm = () => {
  // Simulated dropdown options
  const navigate = useNavigate();
  const [company,setCompany]=useState([])
  const [branch,setBranch]=useState([])
const [employee,setEmployee]=useState([])
const [timeCard,setTimeCard]=useState([])
  const [pnCompanyid,setCompanyid]=useState("")
  const [pnBranchid,setBranchid]=useState("") 
  const [employeeCode,setEmployeecode]=useState("")
  const [employeeName,setEmployeename]=useState("")
  const [empCode,setEmpcode]=useState("")
  const [empName,setEmpname]=useState("")
  const [dates,setDates]=useState("")
  const [days,setDays]=useState("")
  const [intime,setIntime]=useState("")
  const [breakOut,setBreakout]=useState("")
  const [breakIn,setBreakin]=useState("")
  const [earlyOut,setEarlyout]=useState("")
  const [outtime,setOuttime]=useState("")
  const [lateIn,setLatein]=useState("")
  const [lateOut,setLateout]=useState("")
  const [otHrs,setOthrs]=useState("")
  const [status,setStatus]=useState("")



  const companyOptions = ['Company A', 'Company B', 'Company C'];
  const branchOptions = ['Branch 1', 'Branch 2', 'Branch 3'];
 

  
useEffect(()=>{
  async function getData()
  {
    const data=await getRequest(ServerConfig.url,PAYMEMPLOYEE)
    setEmployee(data.data)
    const datas=await getRequest(ServerConfig.url,TIMECARD)
    setTimeCard(datas.data)
 
}
  getData()

},[])
  const [formData] = useState({
    pnCompanyid: pnCompanyid,
    pnBranchid: pnBranchid,
    employeeCode: empCode,
    empName: empName,
    dates:dates,
    days:days,
    intime:intime,
    breakOut:breakOut,
    breakIn:breakIn,
    earlyOut:earlyOut,
    outtime:outtime,
    lateIn:lateIn,
    lateOut:lateOut,
    otHrs:otHrs,
    status:status,
    
    entries: [
      { day: 'Monday', intime: '', outtime: '', latein: '', lateout: '', breakin:'',breakout:'', othrs: '', status: '' },
      { day: 'Tuesday',  intime: '', outtime: '', latein: '', lateout: '', breakin:'',breakout:'', othrs: '', status: '' },
      { day: 'Wednesday', intime: '', outtime: '', latein: '', lateout: '', breakin:'',breakout:'', othrs: '', status: '' },
      { day: 'Thursday',  intime: '', outtime: '', latein: '', lateout: '',  breakin:'',breakout:'',othrs: '', status: '' },
      { day: 'Friday',  intime: '', outtime: '', latein: '', lateout: '',  breakin:'',breakout:'',othrs: '', status: '' },
      { day: 'Saturday', intime: '', outtime: '', latein: '', lateout: '', breakin:'',breakout:'', othrs: '', status: '' },
      { day: 'Sunday', intime: '', outtime: '', latein: '', lateout: '', breakin:'',breakout:'', othrs: '', status: '' }
    ]
  });

  const handleCompanyChange = (event) => {
    // Handle company selection
    console.log(event.target.value);
  };

  const handleBranchChange = (event) => {
    // Handle branch selection
    console.log(event.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: 20, maxWidth: 1100 }}>
        <Typography variant="h5" gutterBottom>
          Weekly Timesheet
        </Typography>
        <Grid container spacing={2}>
  {/* Company ID and Branch ID */}
  <Grid item xs={6} sm={6}>
    <FormControl fullWidth>
      <InputLabel shrink>Company</InputLabel>
      <select
        name="pnCompanyId"
        onChange={(e) => {
          // setCompany(e.target.value)
        }}
        style={{ height: '50px' }}
      >
        <option value="">Select</option>
        {employee.map((e) => (
          <option>{e.pnCompanyId}</option>
        ))}
      </select>
    </FormControl>
  </Grid>
  <Grid item xs={6} sm={6}>
    <FormControl fullWidth>
      <InputLabel shrink>Branch</InputLabel>
      <select name="pnBranchId"  style={{ height: '50px' }}>
        <option value="">Select</option>
        {employee.map((e) => (
          <option>{e.pnBranchId}</option>
          
        ))}
        
      </select>
    </FormControl>
  </Grid>

  {/* Employee Code and Employee Name */}
  <Grid item xs={6} sm={6}>
            <FormControl fullWidth>
              <InputLabel shrink>EmpCode</InputLabel>
              <select
                name="empcode"
                onChange={(e) => {
                  const selectedEmpCode = e.currentTarget.value;
                  setEmpcode(selectedEmpCode);
                  const selectedEmployee = employee.find((e) => e.employeeCode === selectedEmpCode);
                  if (selectedEmployee) {
                    setEmployeename(selectedEmployee.employeeFullName);
                  }
                }}
                style={{ height: '50px' }}
              >
                <option value="">Select</option>
                {employee.map((e) => (
                  <option key={e.employeeCode}>{e.employeeCode}</option>
                ))}
              </select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl fullWidth>
              <TextField
                name="pnEmployeeName"
                value={employeeName}
                label="Employee Name"
                variant="outlined"
                fullWidth
                required
              />
            </FormControl>
          </Grid>
</Grid>

        
  
       
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Date</TableCell> {/* Moved Date to the second position */}
              <TableCell>Intime</TableCell>
              <TableCell>Outtime</TableCell>
              <TableCell>Late In</TableCell>
              <TableCell>Late Out</TableCell>
              <TableCell>Break In</TableCell>
              <TableCell>Break Out</TableCell>
              <TableCell>Ot Hours</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.day}</TableCell>
                <TableCell>
                  {
                    console.log
                  }
                  {
                  
                    console.log(timeCard.filter((e)=>e.employeeCode==empCode))
                  
                  }
                  {timeCard.filter((e)=>e.empCode==empCode).map((e)=>{
              return <span>{e.dates}</span>
              console.log(e)
            })}
                  </TableCell> 
                <TableCell> {timeCard.filter((e)=>e.empCode==empCode).map((e)=>{
              return <span>{e.intime}</span>
              console.log(e)
            })}</TableCell>

               <TableCell>
               {timeCard.filter((e)=>e.empCode==empCode).map((e)=>{
                return <span>{e.outtime}</span>
              console.log(e)
            })}</TableCell>

          <TableCell>
          {timeCard.filter((e)=>e.empCode==empCode).map((e)=>{
              return <span>{e.lateIn}</span>
              console.log(e)
            })}</TableCell>

          <TableCell> 
          {timeCard.filter((e)=>e.empCode==empCode).map((e)=>{
              return <span>{e.lateOut}</span>
              console.log(e)
            })}</TableCell>

           <TableCell> 
           {timeCard.filter((e)=>e.empCode==empCode).map((e)=>{
              return <span>{e.breakIn}</span>
              console.log(e)
            })}</TableCell>

          <TableCell> 
          {timeCard.filter((e)=>e.empCode==empCode).map((e)=>{
              return <span>{e.breakOut}</span>
              console.log(e)
            })}</TableCell>

<TableCell> 
{timeCard.filter((e)=>e.empCode==empCode).map((e)=>{
              return <span>{e.otHrs}</span>
              console.log(e)
            })}</TableCell>


<TableCell> 
{timeCard.filter((e)=>e.empCode==empCode).map((e)=>{
              return <span>{e.status}</span>
              console.log(e)
            })}</TableCell>






                <TableCell></TableCell>
                <TableCell>{entry.intime}</TableCell>
                <TableCell>{entry.outtime}</TableCell>
                <TableCell>{entry.latein}</TableCell>
                <TableCell>{entry.lateout}</TableCell>
                <TableCell>{entry.breakin}</TableCell>
                <TableCell>{entry.breakout}</TableCell>
                <TableCell>{entry.othrs}</TableCell>
                <TableCell>{entry.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default WeeklyTimesheetForm;