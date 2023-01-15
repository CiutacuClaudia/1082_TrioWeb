import React from "react";
import ReactDOM from "react-dom/client";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramLogin from 'react-instagram-login';
import { BrowserRouter } from "react-router-dom";
import "../css/footerStyle.css";

function Footer() {

  return (
    
    <footer>
      <div className="container">
        <div className="icons">
          <InstagramIcon className="icon" id="igButon"/>
          <FacebookIcon className="icon" />
        </div>
      </div>
    </footer>

  );
}



// const footer = ReactDOM.createRoot(document.getElementById("Footer"));
// const responseInstagram = (response) => {
//   console.log(response);
// };
// footer.render(
//   <BrowserRouter>
//     <InstagramLogin
//       clientId="5fd2f11482844c5eba963747a5f34556"
//       buttonText="Login"
//       onSuccess={responseInstagram}
//       onFailure={responseInstagram}
//     />
//   </BrowserRouter>
// );

export default Footer;
