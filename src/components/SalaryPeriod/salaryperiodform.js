import React, { useState } from 'react';
import { postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, Typography, Grid, CardContent } from '@mui/material';
import { inputFormElements17 } from './salaryperiod';
import { SALARYPERIOD } from '../../serverconfiguration/controllers';

const SalaryPeriodForm = () => {
  const navigate = useNavigate();
  const margin = { margin: "0 5px" };

  // Create a new Date object to get the current date and time
  const currentDate = new Date();

  const [formData, setFormData] = useState({
    pn_companyid: '',
    pn_branchid: '',
    period_code: '',
    selection: '',
    p_year: '',
    p_month: '',
    fromdate: currentDate.toISOString(), // Format to ISO 8601 datetime string
    todate: currentDate.toISOString(), // Format to ISO 8601 datetime string
    total_days: '',
    pay_date: currentDate.toISOString(), // Format to ISO 8601 datetime string
    ot_include: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post form data to the server
      await postRequest(ServerConfig.url, SALARYPERIOD, formData);
      // Navigate back to the table page
      navigate('/SalaryPeriodTable');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card style={{ padding: 20 }}>
          <CardContent>
            <Typography variant='h5' color='textPrimary' align='center' gutterBottom>
              Salary Period Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {inputFormElements17.map(input =>
                  <Grid item xs={12} key={input.name}>
                    <TextField
                      fullWidth
                      {...input}
                      value={formData[input.name]}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid container justifyContent="flex-end" style={{ marginTop: 20 }}>
              <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>

                <Button type="submit" variant='contained' color='primary'>Save</Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SalaryPeriodForm;
