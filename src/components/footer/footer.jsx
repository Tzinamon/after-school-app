import React from "react";
import "./footer.css";

function Footer(props) {
  return (
    <div className="f-footer">
      <div>
        <div>חוגי חגיגה</div>
        <div>דברו איתנו</div>
      </div>
      <div className="footer-icons">
        <div>WhatsApp icon</div>
        <div>facebook icon</div>
        <div>instagram icon</div>
        <div>twitter icon</div>
      </div>
      <div>כל הזכויות שמורות</div>
    </div>
  );
}

export default Footer;
