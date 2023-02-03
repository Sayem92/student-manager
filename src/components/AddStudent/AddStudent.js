import React, { useState } from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles({
    submitButton: {
        marginTop: '20px',
    },

    // all style is here ----------------------
});

export const AddStudent = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        class: '',
        division: '',
        rollNumber: '',
        addressLine1: '',
        addressLine2: '',
        landmark: '',
        city: '',
        pincode: '',
        // profilePicture: null,
    });
    const [errors, setErrors] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        class: '',
        division: '',
        rollNumber: '',
        addressLine1: '',
        addressLine2: '',
        landmark: '',
        city: '',
        pincode: '',
        // profilePicture: '',
    });

    // const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // const handleFileChange = (event) => {
    //     setFormData({ ...formData, profilePicture: event.target.files[0] });
    // };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) {
            newErrors.firstName = 'First Name is required';
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last Name is required';
        }
        if (!formData.class) {
            newErrors.class = 'Class is required';
        }
        if (!formData.division) {
            newErrors.division = 'Division is required';
        }
        if (!formData.rollNumber) {
            newErrors.rollNumber = 'Roll Number is required';
        }
        else if (!/^\d{2}$/.test(formData.rollNumber)) {
            newErrors.rollNumber = 'Roll Number must be a 2-digits number';
        }
        if (!formData.addressLine1) {
            newErrors.addressLine1 = 'Address Line 1 is required';
        }
        if (!formData.addressLine2) {
            newErrors.addressLine2 = 'Address Line 2 is required';
        }
        if (!formData.landmark) {
            newErrors.landmark = 'Landmark is required';
        }
        if (!formData.city) {
            newErrors.city = 'City is required';
        }
        if (!formData.pincode) {
            newErrors.pincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Pincode must be a 6-digits number';
        }
        // if (!formData.profilePicture) {
        //     newErrors.profilePicture = 'Profile picture is required';
        // }
        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate());
        // setIsSubmitting(true);
    };


    const result = Object.values(errors).some((error) => error !== '')
    if (!result) {
        // sotik man--------------- 
        console.log(formData)
    }


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

                {/* from section  */}

                <Box sx={{
                    width: "100%",
                }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={4}>
                                <TextField
                                    name="firstName"
                                    label="First Name"
                                    placeholder="Enter First Name"
                                    margin="normal"
                                    fullWidth
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    error={!!errors.firstName}
                                    helpertext={errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    name="middleName"
                                    label="Middle Name"
                                    placeholder="Enter Middle Name"
                                    margin="normal"
                                    fullWidth
                                    value={formData.middleName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    name="lastName"
                                    label="Last Name"
                                    placeholder="Enter Last Name"
                                    margin="normal"
                                    fullWidth
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    error={!!errors.lastName}
                                    helpertext={errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="class-select-label">Select Class</InputLabel>
                                    <Select
                                        labelId="class-select-label"
                                        name="class"
                                        value={formData.class}
                                        label="Select Class"
                                        onChange={handleChange}
                                        error={!!errors.class}
                                        helpertext={errors.class}
                                    >
                                        <MenuItem value="class1">Class 1</MenuItem>
                                        <MenuItem value="class2">Class 2</MenuItem>
                                        <MenuItem value="class3">Class 3</MenuItem>
                                        <MenuItem value="class4">Class 4</MenuItem>
                                        <MenuItem value="class5">Class 5</MenuItem>
                                        <MenuItem value="class6">Class 6</MenuItem>
                                        <MenuItem value="class7">Class 7</MenuItem>
                                        <MenuItem value="class8">Class 8</MenuItem>
                                        <MenuItem value="class9">Class 9</MenuItem>
                                        <MenuItem value="class10">Class 10</MenuItem>
                                        <MenuItem value="class11">Class 11</MenuItem>
                                        <MenuItem value="class12">Class 12</MenuItem>

                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="Select Division-label">Select Division</InputLabel>

                                    <Select
                                        labelId="Select Division-label"
                                        name="division"
                                        label="Select Division"
                                        placeholder="Select Division"
                                        fullWidth
                                        value={formData.division}
                                        onChange={handleChange}
                                        error={!!errors.division}
                                        helpertext={errors.division}
                                    >
                                        <MenuItem value="divisionA">Division A</MenuItem>
                                        <MenuItem value="divisionB">Division B</MenuItem>
                                        <MenuItem value="divisionC">Division C</MenuItem>
                                        <MenuItem value="divisionD">Division D</MenuItem>
                                        <MenuItem value="divisionE">Division E</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    className={classes.formControl}
                                    label="Enter Roll Number in Digits"
                                    type="number"
                                    name="rollNumber"
                                    fullWidth
                                    value={formData.rollNumber}
                                    onChange={handleChange}
                                    error={!!errors.rollNumber}
                                    helperText={errors.rollNumber}
                                    inputProps={{ maxLength: 2 }}
                                />
                            </Grid>
                        </Grid>

                        {/* 2nd section */}

                        <Grid container spacing={5} marginTop={'7px'}>
                            <Grid item xs={6}>
                                <TextField
                                    className={classes.formControl}
                                    label="Address Line 1"
                                    name="addressLine1"
                                    fullWidth
                                    value={formData.addressLine1}
                                    onChange={handleChange}
                                    error={!!errors.addressLine1}
                                    helperText={errors.addressLine1}
                                    multiline
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    className={classes.formControl}
                                    label="Address Line 2"
                                    name="addressLine2"
                                    fullWidth
                                    value={formData.addressLine2}
                                    onChange={handleChange}
                                    error={!!errors.addressLine2}
                                    helperText={errors.addressLine2}
                                    multiline
                                />
                            </Grid>
                        </Grid>

                        {/* 3rd section  */}

                        <Grid container spacing={3} marginTop={'5px'}>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    name="landmark"
                                    label="Landmark"
                                    fullWidth
                                    value={formData.landmark}
                                    placeholder="Enter landmark"
                                    className={classes.textField}
                                    onChange={handleChange}
                                    error={!!errors.landmark}
                                    helperText={errors.landmark}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    name="city"
                                    label="City"
                                    fullWidth
                                    value={formData.city}
                                    placeholder="Enter city name"
                                    className={classes.textField}
                                    onChange={handleChange}
                                    error={!!errors.city}
                                    helperText={errors.city}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    name="pincode"
                                    label="Pincode"
                                    type="number"
                                    fullWidth
                                    value={formData.pincode}
                                    placeholder="Please enter a 6-digit pincode"
                                    className={classes.textField}
                                    onChange={handleChange}
                                    inputProps={{ maxLength: 6 }}
                                    error={!!errors.pincode}
                                    helperText={errors.pincode}
                                />
                            </Grid>
                        </Grid>



                        <Grid container spacing={3} marginTop={'10px'}  >
                            <Grid item xs={4} >
                                <Button
                                    sx={{
                                        paddingY: '13px',
                                        backgroundColor: "red",
                                        fontWeight: "bold",

                                        '&:hover': {
                                            backgroundColor: "red"
                                        },
                                    }}
                                    height="20px"
                                    type="submit"
                                    variant="contained"

                                    className={classes.submitButton}
                                    fullWidth

                                >
                                    Add Student
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};
