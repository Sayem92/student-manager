import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import { AddStudent } from '../AddStudent/AddStudent';
import ManageStudent from '../ManageStudent/ManageStudent';



const Dashboard = () => {
    const [route, setRoute] = useState('addStudent');

    return (
        <Box margin={"40px"}>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    columnGap: "20px"
                }}
            >

                {/* menu section  */}

                <Box mt={'15px'}
                    sx={{
                        width: "20%",
                    }}
                >
                    <Grid item xs={4} >
                        <Button
                            onClick={() => setRoute('addStudent')}
                            sx={{
                                paddingY: '13px',
                                paddingRight: '50px',
                                backgroundColor: 'green',
                                fontWeight: "bold",
                                '&:hover': {
                                    backgroundColor: "green"
                                },
                                '&:active': {
                                    backgroundColor: "red"
                                },

                            }}
                            height="20px"
                            variant="contained"
                            fullWidth


                        >
                            <PeopleOutlineIcon
                                sx={{ marginRight: '10px' }}
                            />

                            Add Student
                        </Button>
                    </Grid>
                    <Grid item xs={4} mt={'10px'}>
                        <Button
                            onClick={() => setRoute('manageStudent')}
                            sx={{
                                paddingY: '13px',
                                backgroundColor: 'green',
                                fontWeight: "bold",
                                '&:hover': {
                                    backgroundColor: "green"
                                },
                                '&:active': {
                                    backgroundColor: "red"
                                },

                            }}
                            height="20px"
                            variant="contained"
                            fullWidth

                        >
                            <ListIcon
                                sx={{ marginRight: '10px' }}
                            />
                            Manage Student
                        </Button>
                    </Grid>
                    <Grid item xs={4} mt={'10px'}>
                        <Button
                            sx={{
                                paddingY: '13px',
                                paddingRight: '85px',
                                backgroundColor: 'green',
                                fontWeight: "bold",
                                '&:hover': {
                                    backgroundColor: "green"
                                },
                                '&:active': {
                                    backgroundColor: "red"
                                },

                            }}
                            height="20px"
                            variant="contained"
                            fullWidth

                        >
                            <LogoutIcon
                                sx={{ marginRight: '10px' }}
                            />
                            Logout
                        </Button>
                    </Grid>
                </Box>

                {
                    route === 'addStudent' &&
                    <Box>
                        <AddStudent></AddStudent>
                    </Box>
                }
                {
                    route === 'manageStudent' &&
                    <Box>
                        <ManageStudent></ManageStudent>
                    </Box>
                }
            </Box>

        </Box>
    );
};

export default Dashboard;