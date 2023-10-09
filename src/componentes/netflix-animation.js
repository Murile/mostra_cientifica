import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function NetflixAnimation() {
    const [showAnimation, setShowAnimation] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
  
      return () => {
        clearTimeout(timer); 
      };
    }, []);
  
    const fadeIn = useSpring({
      opacity: showAnimation ? 1 : 0,
      from: { opacity: 0 },
      config: { duration: 1000 },
    });
    if (!showAnimation) {
        return null; 
    }
  

  return (
    <animated.div
      style={{
        ...fadeIn,  
        background: 'linear-gradient(135deg, #E50914 0%, #000 100%)',
        position: 'fixed',
        top: 0,
        left: 0,
        transform: 'translate(1)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ color: '#fff' }}>Mostra Cultural</h1>
    </animated.div>
  );
}

export default NetflixAnimation;