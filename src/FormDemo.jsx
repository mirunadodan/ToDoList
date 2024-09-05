import { useState } from "react";
import TextField from '@mui/material/TextField';

// export default function FormDemo() {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     function handleNameChange(event) {
//         setName(event.target.value);
//     }
//     function handleEmailChange(event) {
//         setEmail(event.target.value);
//     }
//     return(
//         <>
//         <h1>Name is: {name}</h1>
//         <h1>Email is: {email}</h1>
//         <TextField id="outlined-basic" label="Outlined" name="name" variant="outlined" onChange={handleNameChange} required/>
//         <TextField id="outlined-basic" label="Outlined" name="email" variant="outlined" onChange={handleEmailChange} required/>
//         </>
//     )

// }

export default function FormDemo() {
    const [data, setData] = useState({
        name:"",
        email: ""
    })
  
    function handleChange(event) {
        setData((currData) => {
            return {
                ...currData,
                [event.target.name]: event.target.value
            }           
        });
    }
    return(
        <>
        <h1>Name is: {data.name}</h1>
        <h1>Email is: {data.email}</h1>
        <TextField id="outlined-basic" label="Outlined" name="name" variant="outlined" onChange={handleChange} required/>
        <TextField id="outlined-basic" label="Outlined" name="email" variant="outlined" onChange={handleChange} required/>
        </>
    )
}