import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 14, fontWeith: 300, color: 'gray', alignItems: 'center' }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia provident dolores ea tempora magni, nostrum deleniti aperiam reiciendis eveniet id.
                        </Typography>
                        <Typography>

                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED', marginTop: '10px' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item style={verticalCenter} xs={12} md={6}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;