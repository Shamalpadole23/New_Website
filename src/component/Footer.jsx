import React from "react"
import { Stack, Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../styles/Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="socialMedia">
            <Stack spacing={0} direction="row">
           {/* <Button varient="contained" startIcon={<InstagramIcon></InstagramIcon>} href="https://instagram.com"></Button>
           <Button varient="contained" startIcon={<TwitterIcon></TwitterIcon>} href="https://twitter.com"></Button>
           <Button varient="contained" startIcon={<FacebookIcon></FacebookIcon>} href="https://facebook.com"></Button>
           <Button varient="contained" startIcon={<LinkedInIcon></LinkedInIcon>} href="https://linkedin.com"></Button> */}

           </Stack>


                <InstagramIcon></InstagramIcon> <TwitterIcon></TwitterIcon> <FacebookIcon></FacebookIcon> <LinkedInIcon></LinkedInIcon>
                <p>&copy; 2022 thepizzadine.com</p>
            </div>
        </div>
    );
}
export default Footer;