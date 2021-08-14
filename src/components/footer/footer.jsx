import React from "react";
import "./footer.css";
import FB from "./FB.png";
import insta from "./insta color logo.png";

function Footer(props) {
  return (
    <div className="f-footer">
      <div>
        <div>חוגי חגיגה</div>
        <div>דברו איתנו</div>
      </div>
      <div className="footer-icons">
        <div>WhatsApp icon</div>
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
