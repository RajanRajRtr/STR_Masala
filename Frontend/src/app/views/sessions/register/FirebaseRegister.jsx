import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, Checkbox, Grid, styled, TextField, useTheme ,Step,Stepper,StepLabel,Typography,MenuItem } from "@mui/material";
import { MatxDivider } from "app/components";
import { FlexAlignCenter, FlexBox } from "app/components/FlexBox";
import { Paragraph } from "app/components/Typography";
import useAuth from "app/hooks/useAuth";
import { useForm } from "react-hook-form";

import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const ContentBox = styled(FlexAlignCenter)(({ theme }) => ({
  height: "100%",
  padding: "32px",
  backgroundColor: theme.palette.background.default,
}));

const IMG = styled("img")(() => ({ width: "100%" }));
const StyledStepper = styled(Stepper)(({ theme }) => ({
  backgroundColor: "transparent",
 
}));

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
 
    fontWeight: "bold",
  },
}));
const GoogleButton = styled(Button)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  backgroundColor: "#e0e0e0",
  boxShadow: theme.shadows[3],
  "&:hover": { backgroundColor: "#d5d5d5" },
}));

const RegisterRoot = styled(FlexAlignCenter)(() => ({
  background: "#1A2038",
  minHeight: "100vh !important",
  "& .card": { maxWidth: 650, margin: 16, borderRadius: 12 },
}));

// inital login credentials
const initialValues = {
  email: "",
  password: "",
  remember: true,
};

// form field validation schema


const FirebaseRegister = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const { createUserWithEmail, signInWithGoogle } = useAuth();

  const formSteps = [
    {
      fields: [
        {
          name: "firstname",
          label: "Firstname",
          type: "text",
          validation: { required: "Firstname is required" },
        },{
          name: "lastname",
          label: "Lastname",
          type: "text",
          validation: { required: "Lastname is required" },
        },{
          name: "phonenumber",
          label: "Mobileno",
          type: "text",
          validation: { required: "Mobileno is required" },
        },{
          name: "email",
          label: "Email",
          type: "email",
          validation: { required: "Email is required" },
        },
        
        
      ],
    },
    {fields:[
       {
          name: "password",
          label: "Password",
          type: "password",
          validation: {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long",
            },
          },
        }, {
          name: "confirmpassword",
          label: "confirmpassword",
          type: "password",
          validation: {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long",
            },
          },
        },
    ]},
    {
      fields: [
        {
          name: "country",
          label: "Country",
           type: "select", // Use "select" for dropdown
        options: ["USA", "Canada", "UK", "Australia"], // Add your dropdown options here
          validation: { required: "Country is required" },
        },
        {
          name: "state",
          label: "State",  type: "select",
        options: ["State 1", "State 2", "State 3", "State 4"], // Sample options
 
          validation: { required: " State is required" },
        },  {
          name: "city",
          label: "City",
          type: "select",
        options: ["City 1", "City 2", "City 3", "City 4"], 
          validation: { required: " City is required" },
        },  {
          name: "district ",
          label: "District ",
         type: "select",
        options: ["District 1", "District 2", "District 3", "District 4"],
          validation: { required: " District is required" },
        }, {
          name: "pincode ",
          label: "Pincode ",
          type: "text",
          validation: { required: " Pincode is required" },
        },
      ],
    },
    // Add more steps as needed
  ];
    const [activeStep, setActiveStep] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const handleGoogleRegister = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (e) {
      setLoading(false);
    }
  };
const onSubmit = async(data) => {
   if (activeStep === formSteps.length - 1) {
      // If it's the last step, submit the entire form
      try {
         alert(JSON.stringify(data));
        setLoading(true);
        await createUserWithEmail(data.email, data.password);
        navigate("/");
        enqueueSnackbar("Register Successfully!", { variant: "success" });
      } catch (e) {
        setLoading(false);
        enqueueSnackbar(e.message, { variant: "error" });
      }
    } else {
      // Otherwise, move to the next step
      setActiveStep(activeStep + 1);
    }
  }; // your form submit function which will invoke after successful validation
  const currentStepFields = formSteps[activeStep].fields;
  console.log(watch("example")); // you can watch individual input by pass the name of the input
 
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <RegisterRoot>
      <Card className="card">
        
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <ContentBox>
              <IMG src="/assets/images/illustrations/posting_photo.svg" alt="" />
            </ContentBox>
          </Grid>

          <Grid item lg={7} md={7} sm={7} xs={12}>
            <Box px={4} pt={4}>
              <StyledStepper activeStep={activeStep}  >
                {formSteps.map((step, index) => (
                  <Step key={index}  sx={{
                        '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                          fill: 'black',
                      },
                    }}>
                  <StyledStepLabel    StepIconProps={{
                  sx: {
                      width: "30px",
                          height: "30px",
                    "&.Mui-completed": {
                      background: "white",
                      borderRadius: "50px",color:'green'
                    }
                  }
                }}
                >
               {step.label}
                </StyledStepLabel>
                  </Step>
                ))}
              </StyledStepper>
              {/* <GoogleButton
                fullWidth
                variant="contained"
                onClick={handleGoogleRegister}
                startIcon={<img src="/assets/images/logos/google.svg" alt="google" />}
              >
                Sign In With Google
              </GoogleButton> */}
            </Box>

            {/* <MatxDivider sx={{ mt: 3, px: 4 }} text="Or" /> */}

            <Box p={4} height="100%">
                  <form onSubmit={handleSubmit(onSubmit)}>
                {currentStepFields.map((field) => (
  <React.Fragment key={field.name}>
    {field.type === "select" ? (
      <TextField
        select
        fullWidth
        size="small"
        name={field.name}
        label={field.label}
        variant="outlined"
        {...register(field.name, field.validation)}
        error={!!errors[field.name]}
        helperText={errors[field.name] && errors[field.name].message}
        sx={{
          mb: 1.5,
          ...(watch(field.name) && !errors[field.name]
            ? { color: "green" }
            : {}),
        }}
      >
        {field.options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    ) : (
      <TextField
        key={field.name}
        fullWidth
        size="small"
        name={field.name}
        type={field.type}
        label={field.label}
        variant="outlined"
        {...register(field.name, field.validation)}
        error={!!errors[field.name]}
        helperText={errors[field.name] && errors[field.name].message}
        sx={{
          mb: 1.5,
          ...(watch(field.name) && !errors[field.name]
            ? { color: "green" }
            : {}),
        }}
      />
    )}
  </React.Fragment>
))}


                    {/* <FlexBox gap={1} alignItems="center">
                      <Checkbox
                        size="small"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />

                      <Paragraph fontSize={13}>
                        I have read and agree to the terms of service.
                      </Paragraph>
                    </FlexBox> */}
                     <Box sx={{ display: "flex"}}>
                    {activeStep > 0 && (
                      <LoadingButton
                        variant="contained"
                        color="primary"
                        onClick={handleBack}
                        sx={{ my: 2, mr: 1 }}
                      >
                        Back
                      </LoadingButton>
                    )}
                 <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                        {activeStep === formSteps.length - 1 ? "Register" : "Next"}
                    </LoadingButton>
                    </Box>


                    <Paragraph>
                      Already have an account?
                      <NavLink
                        to="/session/signin"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Login
                      </NavLink>
                    </Paragraph>
                  </form>
             
            </Box>
          </Grid>
        </Grid>
      </Card>
    </RegisterRoot>
  );
};

export default FirebaseRegister;
