import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome!</h1>
      <p style={styles.text}>
        <strong>Name:</strong> Sanya Thakur
      </p>
      <p style={styles.text}>
        <strong>Contact:</strong> sanya.thakur.s69@kalvium.community 
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
};

export default Home;
