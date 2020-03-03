import React from 'react';

function Feed(props) {

  const style0 = { boxShadow: (props.selected === 0) ? '3px 8px 10px black' : 'none'};
  const style1 = { boxShadow: (props.selected === 1) ? '3px 8px 10px black' : 'none'};
  const style2 = { boxShadow: (props.selected === 2) ? '3px 8px 10px black' : 'none'};

  const feedStyles = {
    textAlign: 'center',
    padding: '20%',
    margin: '8px',
    marginTop: '8%'
  }
  const arrow0 = {
    opacity: (props.selected === 0) ? '1' : '0',
    color: '#5ea1db'
  };
  const arrow1 = {
    opacity: (props.selected === 1) ? '1' : '0',
    color: '#5ea1db'
  };
  const arrow2 = {
    opacity: (props.selected === 2) ? '1' : '0',
    color: '#5ea1db'
  };

  return (
    <div style={feedStyles}>
    <h2 style={style0} >
      <span style={arrow0}>⫸</span> A LITTLE <span style={arrow0}>⫷</span>
    </h2>
    <br />
    <br />
    <br />
    <h2 style={style1} >
      <span style={arrow1}>⫸</span> A LOT <span style={arrow1}>⫷</span>
    </h2>
    <br />
    <br />
    <br />
    <h2 style={style2} >
      <span style={arrow2}>⫸</span> A TON <span style={arrow2}>⫷</span>
    </h2>
    </div>
  );
}

export default Feed;
