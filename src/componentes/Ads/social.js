// SocialScript.js
import React, { useEffect } from 'react';

const SocialScript = () => {
  useEffect(() => {
    // Create and insert the external script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl23973362.highratecpm.com/0b/be/cd/0bbecd0998309b000578c063ee0d433e.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* The script might dynamically insert content here */}
    </div>
  );
};

export default SocialScript;