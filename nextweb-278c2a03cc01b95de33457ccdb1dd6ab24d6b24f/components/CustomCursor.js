
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
   
    const updateCursorPosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
<div
  className="custom-cursor"
  style={{
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: '20px',
    height: '20px',
    backgroundColor: 'grey',
    borderRadius: '50%',
    position: 'fixed',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 999, // Ensure the cursor is above other elements
    opacity: 0.4,
  }}
></div>


  );
};

export default CustomCursor;
