import { TextField, Button } from "@material-ui/core";
import { useState, React } from "react";


const Quizlet = ({props}) => {
    const [name, setName] = useState("");
    const handleChange = (e) =>{
        setName(e.target.value);
    }
    const check =() =>{
        if(name.toLowerCase()===props.name){
            alert("Good job");
            window.location.reload();
        }
        else{
            alert("Try again");
        }

    }
    return(
        <>
            <br></br>
            <TextField onChange={handleChange} value={name} width="100px"></TextField>
            <br></br>
            <Button onClick={check} variant="outlined" color="primary">Check</Button>
            <div></div>
        </> 
    )
}
export default Quizlet;