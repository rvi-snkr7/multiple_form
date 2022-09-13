import React from 'react';
import { useState } from 'react';
import { Typography,Stepper,Step,StepLabel,Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import{
    useFieldArray,
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        "Personal Information",
        "Basic Information",
        "Communication Information",
        "Education Information",
        "Final",
    ];
}
const PersonalForm= () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="name"
                render={({ field }) => (
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        placeholder="Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="father"
                render={({ field }) => (
                    <TextField
                        id="father"
                        label="Father"
                        variant="outlined"
                        placeholder="Father"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="mother"
                render={({ field }) => (
                    <TextField
                        id="mother"
                        label="Mother"
                        variant="outlined"
                        placeholder="Enter Your Nick Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />

                )}
            />
            <Controller
                control={control}
                name="spouse"
                render={({ field }) => (
                    <TextField
                        id="spouse"
                        label="Spouse"
                        variant="outlined"
                        placeholder="Spouse"
                        fullWidth
                        margin="normal"
                        {...field}
                    />

                )}
            />
            <Controller
                control={control}
                name="child"
                render={({ field }) => (
                    <TextField
                        id="chi-ld"
                        label="Child"
                        variant="outlined"
                        placeholder="Enter Child Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />

                )}
            />
        </>
    );
};
const CommunicationForm = () => {
    const { control } = useFormContext();

    // function remove(index) {
    //
    // }

    return (
        <>
            <Controller
                control={control}
                name="email"
                render={({ field }) => (
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                // name={`defaultValues.${index}.mobile`}
                name="mobile"
                render={({ field }) => (
                    <TextField
                        id="mobile"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                // name={`defaultValues.${index}.mobile`}
                name="dob"
                render={({ field }) => (
                    <TextField
                        id="dob"
                        label="DateOfBirth"
                        variant="outlined"
                        placeholder="Enter Your D.O.B"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            {/*<button type="button" onClick={() => remove(index)}>Delete</button>*/}
        </>
    );
};
const EducationForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="degree"
                render={({ field }) => (
                    <TextField
                        id="degree"
                        label="Course"
                        variant="outlined"
                        placeholder="Course"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};
const BasicForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="religion"
                render={({ field }) => (
                    <TextField
                        id="religion"
                        label="Religion"
                        variant="outlined"
                        placeholder="Religion"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="gender"
                render={({ field }) => (
                    <TextField
                        id="gender"
                        label="Gender"
                        variant="outlined"
                        placeholder="Gender"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="category"
                render={({ field }) => (
                    <TextField
                        id="category"
                        label="Category"
                        variant="outlined"
                        placeholder="Category"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

        </>
    );
};
function getStepContent(step) {
    switch (step) {
        case 0:
            return <PersonalForm/>;

        case 1:
            return <BasicForm />;
        case 2:
            return <CommunicationForm />;
        case 3:
            return <EducationForm />;
        case 4:
            return ""
        default:
            return "unknown step";
    }
}

function DynamicForm() {

    // const url="http://localhost:3000/USER"
    const methods = useForm({
        defaultValues: {
            name: "",
            father: "",
            mother: "",
            spouse: "",
            child: "",
            religion: "",
            gender: "",
            mobile: "",
            email: "",
            category: "",
            degree: "",
            dob:"",
        },
    });

    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = (data) => {
        {data.course == "" ? <></> : detailsform()}
        async function detailsform() {

            try {
                let result = await fetch("http://localhost:3000/api/prominent", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                result = await result.json();
             console.log(result)
            } catch (error) {
            }
        }





        if (activeStep == steps.length - 1) {
            // fetch("https://jsonplaceholder.typicode.com/comments")
            //     .then((data) => data.json())
            //     .then((res) => {
            //         console.log(res);
                    setActiveStep(activeStep + 1);
                }
        else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(
                skippedSteps.filter((skipItem) => skipItem !== activeStep)
            );
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
    };

//  const[data,setData]=useState([initialValues]);
//
// console.log(initialValues.mobile.push())
// console.log(Object.values(initialValues));
//  // setData(initialValues);
//  // console.log(data)
//  // let arr=[];
//  // initialValues.mobile.map((c)=>{
//  //    arr.push(c.mobile[""]);
//  // })
//
// function handle(e){
//   const newData={...USER  }
//   newData[e.target.id]=e.target.value
//   setData(newData)
//   console.log(newData)
// }
// const USER=setData
//
//
// function Submit(e) {
    // e.preventDefault();

//     axios.post(url,{USER}).then((response)=>response.data)
//     setTimeout(window.location.reload.bind(window.location), 100);
// }
// function Axios(){
//   e.preventDefault();
//   axios.post(url,{USER}).then((response)=>response.data)
//     setTimeout(window.location.reload.bind(window.location), 100);


    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                            >
                                optional
                            </Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center">
                    Thank You "Your  Form is Submitted"
                </Typography>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}

                            <Button
                                // className={classes.button}
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                    // className={classes.button}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                >
                                    skip
                                </Button>
                            )}
                            <Button
                                // className={classes.button}
                                variant="contained"
                                color="primary"
                                // onClick={handleNext}
                                type="submit"
                            >
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>

    )
}

export default DynamicForm;
