import {
  Grid,
  Card,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Select,
  FormHelperText,
  CardContent,
  InputLabel,
  FormControl,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMBRANCHES, PAYMCOMPANIES, PAYMEARNING } from '../../serverconfiguration/controllers';

export default function PaymEarnForm() {
  const navigate = useNavigate();

  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState("");
  const [vEarningsCode, setVEarningsCode] = useState("");
  const [vEarningsName, setVEarningsName] = useState("");
  const [cRegular, setCRegular] = useState("");
  const [cPf, setCPf] = useState("");
  const [cEsi, setCEsi] = useState("");
  const [cOt, setCOt] = useState("");
  const [cLop, setCLop] = useState("");
  const [cPt, setCPt] = useState("");
  const [cPrint, setCPrint] = useState("");
  const [payslip, setPayslip] = useState("");
  const [status, setStatus] = useState("");
  const [dOrder, setDOrder] = useState("");
  const [pnBranchId, setPnBranchId] = useState("");
  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [vEarningsCodeError, setVEarningsCodeError] = useState(false);
  const [vEarningsNameError, setVEarningsNameError] = useState(false);
  const [cRegularError, setCRegularError] = useState(false);
  const [cPfError, setCPfError] = useState(false);
  const [cEsiError, setCEsiError] = useState(false);
  const [cOtError, setCOtError] = useState(false);
  const [cLopError, setCLopError] = useState(false);
  const [cPtError, setCPtError] = useState(false);
  const [cPrintError, setCPrintError] = useState(false);
  const [payslipError, setPayslipError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [dOrderError, setDOrderError] = useState(false);

  useEffect(() => {
    async function getData() {
      const companyData = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(companyData.data);
      const branchData = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(branchData.data);
    }
    getData();
  }, []);

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
      case 'vEarningsCode':
        setVEarningsCode(value);
        setVEarningsCodeError(!/^[a-zA-Z0-9!@#$%^&*()_+={}|:"<>?,./;'\\[\]`~-]+$/.test(value));
        break;
      case 'vEarningsName':
        setVEarningsName(value);
        setVEarningsNameError(!/^[a-zA-Z ]+$/.test(value));
        break;
      case 'cRegular':
        setCRegular(value);
        setCRegularError(!/^[a-zA-Z]$/.test(value));
        break;
      case 'cPf':
        setCPf(value);
        setCPfError(!/^[a-zA-Z]$/.test(value));
        break;
      case 'cEsi':
        setCEsi(value);
        setCEsiError(!/^[a-zA-Z]$/.test(value));
        break;
      case 'cOt':
        setCOt(value);
        setCOtError(!/^[a-zA-Z]$/.test(value));
        break;
      case 'cLop':
        setCLop(value);
        setCLopError(!/^[a-zA-Z]$/.test(value));
        break;
      case 'cPt':
        setCPt(value);
        setCPtError(!/^[a-zA-Z]$/.test(value));
        break;
      case 'cPrint':
        setCPrint(value);
        setCPrintError(!/^[a-zA-Z]$/.test(value));
        break;
      case 'payslip':
        setPayslip(value);
        setPayslipError(!/^[a-zA-Z]$/.test(value));
        break;
      case 'status':
        setStatus(value.toUpperCase());
        setStatusError(!/^[a-zA-Z]$/.test(value));
        break;
      case 'dOrder':
        setDOrder(value);
        setDOrderError(!/^[0-9]+$/.test(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!pnCompanyId);
    setBranchError(!pnBranchId);
    setVEarningsCodeError(!/^[a-zA-Z0-9!@#$%^&*()_+={}|:"<>?,./;'\\[\]`~-]+$/.test(vEarningsCode));
    setVEarningsNameError(!/^[a-zA-Z ]+$/.test(vEarningsName));
    setCRegularError(!/^[a-zA-Z]$/.test(cRegular));
    setCPfError(!/^[a-zA-Z]$/.test(cPf));
    setCEsiError(!/^[a-zA-Z]$/.test(cEsi));
    setCOtError(!/^[a-zA-Z]$/.test(cOt));
    setCLopError(!/^[a-zA-Z]$/.test(cLop));
    setCPtError(!/^[a-zA-Z]$/.test(cPt));
    setCPrintError(!/^[a-zA-Z]$/.test(cPrint));
    setPayslipError(!/^[a-zA-Z]$/.test(payslip));
    setStatusError(!/^[a-zA-Z]$/.test(status));
    setDOrderError(!/^[0-9]+$/.test(dOrder));

   
   

    if (
      companyError ||
      branchError ||
      vEarningsCodeError ||
      vEarningsNameError ||
      cRegularError ||
  cPfError ||
  cEsiError ||
  cOtError ||
  cLopError ||
  cPtError ||
  cPrintError ||
  payslipError ||
      statusError ||
      dOrder
    ) {
      return;
    }

    const formData = {
      pnCompanyId: pnCompanyId,
      vEarningsCode: vEarningsCode,
      vEarningsName: vEarningsName,
      cRegular: cRegular,
      cPf: cPf,
      cEsi: cEsi,
      cOt: cOt,
      cLop: cLop,
      cPt: cPt,
      cPrint: cPrint,
      payslip: payslip,
      status: status,
      dOrder: dOrder,
      pnBranchId: pnBranchId,
     
    };

    try {
      const response = await postRequest(ServerConfig.url, PAYMEARNING, formData);
      console.log(response);
      navigate('/PaymEarnTable');
    } catch (error) {
      console.error('Error saving Earnings:', error);
    }
  };

  const margin = { margin: "0 5px" };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>Earnings Form</Typography>
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
                        Please select a Company
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
                <FormControl fullWidth error={vEarningsCodeError}>

                  <TextField
                    name="vEarningsCode"
                    label="Earnings Code"
                  variant="outlined"
                    fullWidth
                    required
                    value={vEarningsCode}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {vEarningsCodeError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Earnings Code (alphanumeric characters and Special Character, max length 40)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={vEarningsNameError}>

                  <TextField
                    name="vEarningsName"
                    label="Earnings Name"
                  variant="outlined"
                    fullWidth
                    required
                    value={vEarningsName}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {vEarningsNameError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid Earnings Name (alphanumeric characters and Special Character, max length 40)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cRegularError}>
                    <TextField
                      name="cRegular"
                      label="Regular"
                      variant="outlined"
                      fullWidth
                      required
                      value={cRegular}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cRegularError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  cRegular(only one alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cPfError}>
                    <TextField
                      name="cPf"
                      label="cPf"
                      variant="outlined"
                      fullWidth
                      required
                      value={cPf}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cPfError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  cPf (only one alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cEsiError}>
                    <TextField
                      name="cEsi"
                      label="cEsi"
                      variant="outlined"
                      fullWidth
                      required
                      value={cEsi}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cEsiError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  cEsi (only one alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cOtError}>
                    <TextField
                      name="cOt"
                      label="cOt"
                      variant="outlined"
                      fullWidth
                      required
                      value={cOt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cOtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  cOt (only one alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cLopError}>
                    <TextField
                      name="cLop"
                      label="cLop"
                      variant="outlined"
                      fullWidth
                      required
                      value={cLop}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cLopError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  cLop (only one alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cPtError}>
                    <TextField
                      name="cPt"
                      label="cPt"
                      variant="outlined"
                      fullWidth
                      required
                      value={cPt}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cPtError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  cPt (only one alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={cPrintError}>
                    <TextField
                      name="cPrint"
                      label="cPrint"
                      variant="outlined"
                      fullWidth
                      required
                      value={cPrint}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cPrintError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  cPrint (only one alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={payslipError}>
                    <TextField
                      name="payslip"
                      label="payslip"
                      variant="outlined"
                      fullWidth
                      required
                      value={payslip}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {payslipError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  payslip (only one alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={statusError}>
                    <TextField
                      name="status"
                      label="status"
                      variant="outlined"
                      fullWidth
                      required
                      value={status}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {statusError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  status (only one alphabetic characters)
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={dOrderError}>
                    <TextField
                      name="dOrder"
                      label="dOrder"
                      variant="outlined"
                      fullWidth
                      required
                      value={dOrder}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {dOrderError && (
                      <FormHelperText sx={{ color: 'red' }}>
                        Please enter a valid  dOrder(only one alphabetic characters)
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
