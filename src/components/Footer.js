import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="footer centrado-footer">
        <div>
        <a className="red-social linkedin" href="https://www.linkedin.com/in/carolina-raniti-4416a81b0//"><FiLinkedin/></a>
            <a className="red-social github" href="https://github.com/Caroraniti"><FiGithub/></a>
            <a className="red-social mail " href="https://gmail.com/raniticarolina@gmail.com"><FiMail/></a>
        </div>
            
            

            <div>
                <p>Hecho por Carolina Raniti</p>
            </div>
        </footer>
    )
}

export default Footer
