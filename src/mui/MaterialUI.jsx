import { Container, Grid } from '@mui/material'
import React from 'react'

export default function MaterialUI() {
    return (
        <Container maxWidth="lg">

            <Grid container spacing={2} className='bg-primary'>
                <Grid item xs={6} md={8} lg={12} className='bg-secondary'>
                    <h2>Hello</h2>
                </Grid>
                <Grid item xs={6} md={4} lg={12} className='bg-info'>
                    <h2>Hello</h2>
                </Grid>
                <Grid item xs={6} md={4} lg={12} className='bg-warning'>
                    <h2>Hello</h2>
                </Grid>
                <Grid item xs={6} md={8} lg={12} className='bg-danger'>
                    <h2>Hello</h2>
                </Grid>
            </Grid>

        </Container>
    )
}
