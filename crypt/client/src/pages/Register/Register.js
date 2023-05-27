import { Button, Box, TextField, Typography , Select, MenuItem ,InputLabel, FormControl } from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import image from "./image.gif"
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
    const navigate = useNavigate();

    const [ inputs, setInputs] = useState({
        title:"",
        fname:"",
        lname:"",
        email:"",
        password:"",
        phone:"",
        ref:"",
       
    });

      // imageArray

    const handleChange =(e) =>{
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(inputs);
        const response = await axios.post("http://localhost:3001/register", {
          title: inputs.title,
          fname: inputs.fname,
          lname: inputs.lname,
          email: inputs.email,
          password: inputs.password,
          phone: inputs.phone,
          ref: inputs.ref,
        });
    
        const data = response.data; // Access the data from the response object
    
        if (data.status) {
          window.alert("User registered successfully");
          navigate("/login");
        }
      } catch (error) {
        if (error.response && error.response.data) {
          // console.log(error.response.data.error)
          window.alert(error.response.data.error);
        } else {
          console.log(error.response.data.error)
          window.alert(error.response.data.message);
        }
      }
    };
    
    

    
    return ( 
      
        <div style={{ position: 'absolute', width: '45%', height: '300px' }}>
          <Navbar/>
          <h2 style={{float:"right"}}>Registration helps to Know You Better...</h2>
      <Box 
         style={{
          position: 'absolute',
          top: '60%',
          right: '-10%',
          width: '100%',
          border: '1px solid #ccc',
          flexDirection: 'row',
          height: '180%',
          maxWidth: '135%',
          objectFit: 'cover',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
         <Box
    position="absolute"
    top={0}
    left={0}
    height="100%"
    width="100%"
    style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    zIndex={-1}
  ></Box>
       
      </Box>
      <div style={{ width: "700px" }}>
        <form onSubmit = {handleSubmit}>
           <Box 
           style={{
            position: 'absolute',
            top: '60%',
            left: '150%',
            width: '40%',
            border: '5px solid #ccc',
            borderRadius: '5px',
            padding: '2%',
            flexDirection: "column",
            maxHeight: '500px',
            overflow: 'auto'
          }}
           >
            <Typography 
            variant="h5"
            textAlign={"center"}
            fontWeight="bold"
            padding="2%"
            color="gray"
            >
                Register
            </Typography>

            <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Title</InputLabel>
       
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={inputs.title}
          onChange={handleChange}
          autoWidth
          label="Title"
          name="title"
          required
          sx={{ width: '100%' }}
        >
          <MenuItem value="">
          <em>None</em>
          </MenuItem>
<MenuItem value="Mr">Mr</MenuItem>
<MenuItem value="Mrs">Mrs</MenuItem>
<MenuItem value="Miss">Miss</MenuItem>
        </Select>
      </FormControl>
            
            <TextField
                placeholder = "fname"
                value={inputs.fname}
                onChange={handleChange}
                name = "fname"
                margin = "normal"
                type = {"text"}
                required
                
            />
            <TextField
                placeholder = "lname"
                value={inputs.lname}
                onChange={handleChange}
                name = "lname"
                margin = "normal"
                type = {"text"}
                required
                
            />
            <TextField
                placeholder = "email"
                value={inputs.email}
                name = "email"
                margin = "normal"
                type = {"email"}
                required
                onChange={handleChange}
            />
            <TextField
                placeholder = "password"
                value={inputs.password}
                name = "password"
                margin = "normal"
                type = {"password"}
                required
                onChange={handleChange}
            />
            <TextField
    placeholder="Mob. Number"
    value={inputs.phone}
    name="phone"
    margin="normal"
    type="text"
    required
    onChange={handleChange}
/>

            <TextField
                placeholder = "Ref. Code"
                value={inputs.ref}
                name = "ref"
                margin = "normal"
                type = {"text"}
                required
                onChange={handleChange}
            />
            
            <Button 
            className ="btn"
            type = "submit"
            sx ={{borderRadius:3, marginTop:3}}
            varient = "contained"
            color = "primary"
            >SUBMIT
            </Button >
            <Button 
            onClick ={() => navigate("/login")}>
            Already Registerd ? Please Login </Button>
            </Box> 
        </form>
        </div>
        </div>
     );
}
 
export default Register;