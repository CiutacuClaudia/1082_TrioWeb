import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
    return (
            <footer>
                <div className="container">
                    <div className="icons">
                        <InstagramIcon className="icon"/>
                        <FacebookIcon className="icon"/>
                        </div>
                        <div className="line">
                            <hr/>
                            <hr/>
                            </div>
                </div>
                </footer>
    )
}
export default Footer;