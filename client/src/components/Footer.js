import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        color: 'orange',
        padding: '2rem 1rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: '0.9rem',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
      <h6 style={{ margin: '0.5rem', cursor: 'pointer' }}>
        © 2025 @ServeSurplus.org
      </h6>
      <h6 style={{ margin: '0.5rem', cursor: 'pointer' }}>
        Privacy Policy / Terms of Use
      </h6>
    </div>
  );
};

export default Footer;
