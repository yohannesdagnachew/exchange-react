// AdsterraAd.js
import React, { useEffect } from 'react';


const AdsterraAd = () => {
  useEffect(() => {
    // Create and insert the ad script into the document
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.topcreativeformat.com/fafce3da654507b327e9acb9bee72329/invoke.js';
    script.async = true;
    document.body.appendChild(script);

    // Define the ad options
    const atOptions = {
      key: 'fafce3da654507b327e9acb9bee72329',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {}
    };
    
    // Create and insert the inline script with ad options
    const inlineScript = document.createElement('script');
    inlineScript.type = 'text/javascript';
    inlineScript.text = `
      atOptions = ${JSON.stringify(atOptions)};
    `;
    document.body.appendChild(inlineScript);

    // Cleanup script elements when the component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(inlineScript);
    };
  }, []);

  return (
    <div id="ad-container" style={{ width: '320px', height: '50px' }}></div>
  );
};

export default AdsterraAd;