import React from "react";
import "./footer.css";
import FB from "./FB.png";
import insta from "./insta color logo.png";
import whatsapp from "./whatsapp.jpg";

function Footer(props) {
  return (
    <div className="f-footer">
      <div>
        <div>אודות חוגי תפוח</div>
        <div>דברו איתנו</div>
      </div>
      <div className="footer-icons">
        <div><img src={whatsapp} width="30"  alt="" /></div>
        <div>
          <img src={FB} width="30"  alt="" />
        </div>
          <div>
            <img src={insta} width="30"  alt="" />
          </div>
      </div>
      <div>כל הזכויות שמורות</div>
    </div>
  );
}

export default Footer;
