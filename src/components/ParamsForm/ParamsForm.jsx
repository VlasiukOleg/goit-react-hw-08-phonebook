import { FormData, Section, Step1, Step2, Step3, StepWrap, RadioWrap, InputWrap} from "components/ParamsForm/ParamsForm.styled"
import { useState } from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const ParamsForm = () => {
    const [height, setHeight] = useState('');
    const [currentWeight, setCurrentWeight] = useState('');
    const [desiredWeight, setDesiredWeight] = useState('');
    const [birthday, setBirthday] = useState('');


    const [blood, setBlood] = useState("1");
    const [sex, setSex] = useState('male');
    const [level, setLevel] = useState('light');

    const [step, setStep] = useState(1);


    const handleOnChange = (e) => {
        const {name, value} = e.currentTarget;
        switch (name) {
            case "height":
                setHeight(value);
                break;
            case "currentWeight":
                setCurrentWeight(value);
                break;
            case "desiredWeight":
                setDesiredWeight(value);
                break;
            case "birthday":
                setBirthday(value);
                break;
            default:
                break;
        }
    }


    const handleChangeBlood = (e) => {
        setBlood(e.target.value);
    }

    const handleChangeSex = (e) => {
        setSex(e.target.value);
    }

    const handleChangeLevel = (e) => {
        setLevel(e.target.value);
    }

    const handleClickNext = () => {
        setStep(state => state + 1);
    }

    const handleClickBack = () => {
        setStep(state => state - 1);
    }

    const handleClickGo = () => {
        alert(`{height: ${height}, currentWeight: ${currentWeight},desiredWeight: ${desiredWeight}, birthday: ${birthday}, bloodt: ${blood}, sex:  ${sex}, level:  ${level}}`);
    }

    return (
        <Section>
            { step === 1 &&  
            <>
                <h2>Get closer to your goals!</h2>
                <p>To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:</p>
                <FormData>
                <InputWrap>
                <TextField
                    id="outlined-basic"
                    type="text"
                    label="Height"
                    variant="outlined"
                    name="height"
                    value={height}
                    size="small"
                    sx={{ mb: 2 }}
                    onChange={handleOnChange}
                />
                <TextField
                    id="outlined-basic"
                    type="text"
                    label="Current Weight"
                    variant="outlined"
                    name="currentWeight"
                    value={currentWeight}
                    size="small"
                    sx={{ mb: 2 }}
                    onChange={handleOnChange}
                /> 
                </InputWrap>
                
                <InputWrap>
                <TextField
                    id="outlined-basic"
                    type="text"
                    label="Desired Weight"
                    variant="outlined"
                    name="desiredWeight"
                    value={desiredWeight}
                    size="small"
                    sx={{ mb: 2 }}
                    onChange={handleOnChange}
                /> 
                <TextField
                    id="outlined-basic"
                    type="text"
                    label="Birthday"
                    variant="outlined"
                    name="birthday"
                    value={birthday}
                    size="small"
                    sx={{ mb: 2 }}
                    onChange={handleOnChange}
                /> 
                </InputWrap>
               
            </FormData>
            </>}
            { step === 2 && 
             <FormControl>
                <RadioWrap>
                    <FormLabel id="blood" >Blood</FormLabel>
                    <RadioGroup
                        aria-labelledby="blood"
                        name="blood"
                        value={blood}
                        onChange={handleChangeBlood}
                    >
                    <FormControlLabel value="1" control={<Radio size="small" />} label="1"/>
                    <FormControlLabel value="2" control={<Radio size="small"/>} label="2" />
                    <FormControlLabel value="3" control={<Radio size="small"/>} label="3" />
                    <FormControlLabel value="4" control={<Radio size="small"/>} label="4" />
                    </RadioGroup>

                    <FormLabel id="sex">Sex</FormLabel>
                    <RadioGroup
                        aria-labelledby="sex"
                        name="sex"
                        value={sex}
                        onChange={handleChangeSex}
                    >
                        <FormControlLabel value="male" control={<Radio size="small"/>} label="Male" />
                        <FormControlLabel value="female" control={<Radio size="small"/>} label="Female" />

                    </RadioGroup>
                </RadioWrap>
             

             

             
             <FormLabel id="level">Level Activity:</FormLabel>
             <RadioGroup
                 aria-labelledby="level"
                 name="level"
                 value={level}
                 onChange={handleChangeLevel}
             >
                 <FormControlLabel value="sedentary" control={<Radio size="small"/>} label="Sedentary lifestyle (little or no physical activity)"/>
                 <FormControlLabel value="light" control={<Radio size="small"/>} label="Light activity (light exercises/sports 1-3 days per week)" />
                 <FormControlLabel value="very" control={<Radio size="small"/>} label="Very active (intense exercises/sports 6-7 days per week)" />
                 <FormControlLabel value="extremely" control={<Radio size="small"/>} label="Extremely active (very strenuous exercises/sports and physical work)" />
             </RadioGroup>
            </FormControl>}

            { step === 3 && 
            <>
             <p>Dear User</p>
             <p>Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach.</p>
            </>
            
            }
           
           { step > 1 && <Button variant="contained" type="button" size="medium" margin="normal" onClick={handleClickBack}>
                    Back
            </Button>}

            {step < 3 && <Button variant="contained" type="button" size="medium" margin="normal" onClick={handleClickNext}>
                    Next
            </Button>}
            {step === 3 && <Button variant="contained" type="submit" size="medium" margin="normal" onClick={handleClickGo}>
                    Go
                </Button>}
            <StepWrap>
                <Step1 step={step}></Step1>
                <Step2 step={step}></Step2>
                <Step3 step={step}></Step3>
            </StepWrap>
            
            
        </Section>
        
       
    )
}

