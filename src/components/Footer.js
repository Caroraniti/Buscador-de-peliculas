import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//ESTILAR EL PIE DE PAGINA EN HOME 
const Footer = () => {
    return (
        <div className="footer">
            <Box sx={{ bgcolor: "black" }}>
                <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ textAlign: "center", alignItems: "center" }}>
                        <Typography variant="subtitle1" color="whitesmoke" fontWeight="bold">
                            🎥 Movie App
                        </Typography>

                        <Typography variant="subtitle1" color="whitesmoke" >
                            Hecho por Carolina Belen Raniti
                        </Typography>
                    </Box>
                    <Box>
                        <Link href="https://github.com/Caroraniti" underline="none" sx={{ p: 1 }}>
                            <GitHubIcon sx={{ fontSize: 30, color: "whitesmoke", position: "unset" }} />
                        </Link>

                        <Link href="https://twitter.com/Caroraniti" underline="none" sx={{ p: 1 }}>
                            <MailIcon sx={{ fontSize: 30, color: "whitesmoke" }} />
                        </Link>

                        <Link href="https://www.linkedin.com/in/CarolinaRaniti/" underline="none" sx={{ p: 1 }}>
                            <LinkedInIcon sx={{ fontSize: 30, color: "whitesmoke" }} />
                        </Link>
                    </Box>

                </CardContent>
            </Box>
        </div>





    )
}

export default Footer;




