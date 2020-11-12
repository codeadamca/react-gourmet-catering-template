import React from 'react';

function NavBar() {
  return (
    <div id="NavBar">
      <div className="w3-top">
        <div className="w3-bar w3-white w3-padding w3-card" style={{letterSpacing:'4px'}}>
          <a href="https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm#home" className="w3-bar-item w3-button">Gourmet au Catering</a>
          <div className="w3-right w3-hide-small">
            <a href="https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm#about" className="w3-bar-item w3-button">About</a>
            <a href="https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm#menu" className="w3-bar-item w3-button">Menu</a>
            <a href="https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm#contact" className="w3-bar-item w3-button">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;