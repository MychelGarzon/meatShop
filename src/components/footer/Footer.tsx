import React from 'react';
import logo from '../../assets/LogoAlCorte.svg';

const Footer: React.FC = () => {
  return (

    <div style={{ position: 'absolute', left: 0, display: 'flex', flexDirection: 'row', width: '100vw', backgroundColor: '#000000', padding: '60px', boxSizing: 'border-box' }}>


      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '-105px', marginRight: '20px' }}>
        <img src={logo} alt="Logo" style={{ height: '150px', width: '150px' }} />
      </div>

      {/* First Column with Headline and Links */}
      <div style={{ marginLeft: '80px', marginRight: '40px' }}>
        <h2 style={{ margin: '0', marginBottom: '10px', color: 'white' }}>Compañía</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a href="#" style={{ margin: '10px 0 20px 0', textDecoration: 'none', color: '#FFFFFF' }}>Sobre nosotros</a>
          <a href="#" style={{ margin: '0 0 20px 0', textDecoration: 'none', color: '#FFFFFF' }}>Términos y condiciones</a>
          <a href="#" style={{ margin: '0 0 5px 0', textDecoration: 'none', color: '#FFFFFF' }}>Privacidad</a>
        </div>
      </div>

      {/* Second Column with Headline and Single Link */}
      <div>
        <h2 style={{ margin: '0', marginLeft: '20px', marginBottom: '20px', color: "#FFFFFF" }}>Soporte</h2>
        <div>
          <a href="#" style={{ margin: '0 0 5px 20px', textDecoration: 'none', color: '#FFFFFF' }}>Contáctenos</a>
        </div>
      </div>
    </div>
  );
}


export default Footer;
