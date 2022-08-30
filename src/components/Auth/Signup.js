import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { app, createUserDoc } from "../../firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

export default function Signup() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [school, setSchool]= useState("");
  const [favSport, setFavSport]= useState("");
  const [age, setAge]= useState("");

  const navigate = useNavigate()

  const changeFirstNameHandler = (e) => {
    setFirstName(e.target.value)
  }
  
  const changeLastNameHandler = (e) => {
    setLastName(e.target.value)
  }
  
  const changeSchoolHandler = (e) => {
    setSchool(e.target.value)
  }
  
  const changeFavSportHandler = (e) => {
    setFavSport(e.target.value)
  }
  
  const changeAgeHandler = (e) => {
    setAge(e.target.value)
  }
  
  const changeEmailHandler = (e) => {
    setEmail(e.target.value)
  }
  
  const changePassworldHandler = (e) => {
    setPassword(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log("Submitting Login Credentials")
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    const userFields = {
      email,
      firstName,
      lastName,
      school,
      favSport,
      age
    }
    await createUserDoc(user, userFields) 
    console.log(user)
    setEmail("")
    setPassword("")
    navigate("/login")
  }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={firstName}
              onChange={changeFirstNameHandler}
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={lastName}
              onChange={changeLastNameHandler}
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={school}
              onChange={changeSchoolHandler}
              id="school"
              label="Current School"
              name="school"
              autoComplete="school"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={favSport}
              onChange={changeFavSportHandler}
              id="favSport"
              label="Favorite Sport"
              name="favSport"
              autoComplete="favSport"
              autoFocus
            />
            <TextField
              margin="normal"
              type="number"
              required
              fullWidth
              value={age}
              onChange={changeAgeHandler}
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={changeEmailHandler}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={changePassworldHandler}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={submitHandler}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  )
}
