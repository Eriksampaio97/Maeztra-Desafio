import { useState, useEffect } from "react";

const useMobile = () => {
  const [mobile, setMobile] = useState(false)
  
  const handleMobile = () => {
    const width = window.innerWidth;
    setMobile(width < 1024); 
  };

  useEffect(() => {
    handleMobile();
    window.addEventListener('resize', handleMobile);

    return () => {
      window.removeEventListener('resize', handleMobile);
    };
  }, []);

  return mobile;
};

export default useMobile;