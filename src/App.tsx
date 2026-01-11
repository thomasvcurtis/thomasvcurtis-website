import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { getBrowserName, getPlatformAndArchitecture } from './userAgent';

function Page() {
  return (
    <>
    <CssBaseline />
      <AppBar>
        <Typography variant="h6" color="black">{getPlatformAndArchitecture()} - {getBrowserName()}</Typography>
      </AppBar>
      <Box sx={{ textAlign: 'left', padding: '10px' }}>
        <Typography variant="h1">Thomas Curtis</Typography>
         <Typography variant="body1">I am professional software developer with a focus on designing and enginnering data focued software applications. 
          I have experince working in small to large organizations. I have a bachelors degree in software engineering from Bowling Green State University. 
          What I like most about software and technology is the ability to learn and expland my knowledge in diffrent domains. </Typography>
        <br />
        <Typography variant="body1">I am currently working as Assocate Software Developer at <Link href="https://www.constructconnect.com">ConstructConnect</Link></Typography>
        <br />
        <Typography>About my career: <Link href="https://www.linkedin.com/in/thomasvcurtis">LinkedIn</Link> </Typography>
        <br />
        <Typography>My programming projects: <Link href="https://github.com/thomasvcurtis">GitHub</Link> </Typography>
        <br />
        <Typography>For gaming and socializing: <Link href ="https://discord.com/users/1334929413397282848">Discord</Link> </Typography>  
      </Box>
    </>
  );
}

export default Page;
