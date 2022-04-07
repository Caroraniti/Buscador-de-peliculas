import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { textAlign } from '@mui/system';

//ESTILAR EL PIE DE PAGINA EN HOME 
const Footer = () => {
    return (

        <Box sx={{bgcolor:"#111111"}}>
        <CardContent sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <Box sx={{textAlign:"center", height:"200px", alignItems:"center"}}>
                <Typography variant="subtitle1" color="whitesmoke" fontWeight="bold"> 
                    🎥 Movie App 
                </Typography>
                <Typography  variant="subtitle1" color="whitesmoke" fontWeight="bold"> 
                    Hecho por Carolina Belen Raniti
                </Typography>
            </Box>
            <Box>
                <Link href= "https://github.com/Caroraniti" underline="none" sx={{p:2}}>
                    <GitHubIcon sx={{fontSize:35, color:"whitesmoke"}}/>
                </Link>

                <Link href="https://twitter.com/Caroraniti" underline="none" sx={{p:2}}>
                    <MailIcon sx={{fontSize:35, color:"whitesmoke"}}/>
                </Link>

                <Link href="https://www.linkedin.com/in/CarolinaRaniti/" underline="none" sx={{p:2}}>
                    <LinkedInIcon sx={{fontSize:35, color:"whitesmoke"}}/>
                </Link>
            </Box>

        </CardContent>
    </Box>

  



           
    )
}

export default Footer;






            // <a href="https://github.com/Caroraniti">GitHub</a>
            // <a href="https://www.linkedin.com/in/CarolinaRaniti/">Linkedin</a>
            // <a href="https://twitter.com/Caroraniti">Twitter</a>
