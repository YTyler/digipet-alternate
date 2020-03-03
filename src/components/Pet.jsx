import React from 'react';

function Pet(props) {
  const petStyle = {
    textAlign: 'center',
    maxWidth: '90%',
    margin: 'auto'
  }
  const imgStyle = {
    maxHeight:'40vh',
    maxWidth: '40vw',
    margin: 'auto',
    marginTop: '5%'
  }
  const arrow = {
    color: '#5ea1db'
  };

  return (
    <div style={petStyle}>
      <img src='/pet.png' alt='pet' style={imgStyle}/>
      <h2><span style={arrow}>⫸</span> Menu <span style={arrow}>⫷</span></h2>
    </div>
  );
}

export default Pet;
