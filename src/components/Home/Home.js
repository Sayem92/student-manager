import { Grid, Typography } from '@mui/material';
import React from 'react';


function HomePage() {

    return (
        <Grid container justify="center" 
        sx={{
            width: "50%",
            marginX: "auto",
            display: "flex",
            justifyContent: "center",
            marginY:"90px",
           
        }}
        >
            
                    <Typography variant="h5" component="h3"
                    sx={{
                        fontSize: "50px",
                        fontWeight: "bold",
                        color: "green",
                    }}>
                        Welcome to the Home Page
                    </Typography>
                    <Typography component="p" marginTop={"10px"}>
                    Storing student data in a database is important because it allows for efficient and organized access to important information. This information can include personal details, academic records, and enrollment information, among others. By keeping this data in a centralized location, it becomes easier for administrators and teachers to track student progress, make informed decisions, and ensure compliance with legal requirements. 
                    </Typography>
                    <Typography component="p" marginTop={"10px"}>
                    Additionally, having this data saved in a database also enables faster data retrieval, reduces the risk of errors, and provides a secure backup in case of any data loss. Overall, saving student data in a database is crucial for the efficient functioning of educational institutions and the proper management of student records.
                    </Typography>
         
        </Grid>
    );
}

export default HomePage;
