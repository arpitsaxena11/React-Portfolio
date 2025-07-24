import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const typedRef = useRef(null); // Reference to the HTML element
  const typedInstance = useRef(null); // Reference to the Typed instance

  useEffect(() => {
    // Initialize Typed instance
    typedInstance.current = new Typed(typedRef.current, {
      strings: ["","Front-End Developer..",
      "Back End Developer..",
      " Java, SQL , MONGODB..",
       "MERN Stack Developer.."],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    // Cleanup on unmount
    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div>
      <p style={styles.paragraph}>
        <span className="typing" ref={typedRef} style={styles.typing}></span>
      </p>
    </div>
  );
};

const styles = {
  
  typing: {
    color: 'var(--btn-color)',
    fontSize: '1.3rem',
    fontStyle: 'italic',
  },
};

export default TypingEffect;
