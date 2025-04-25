import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Mes infos</h4>
            <ul className="list-unstyled">
              <li> Okreinntchinou21@gmail.com</li>
              <li> 06 23 84 25 11</li>
              <li> Île-De-France, FRANCE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;