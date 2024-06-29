import React, { useEffect, useContext } from 'react';
import CartContext from '../CartContext';
import './Popup.css';

const Popup = () => {
  const { addedtoCartPopup, setAddedtoCartPopup, popupMessage,  } = useContext(CartContext);

  // Use useEffect for timing out
  useEffect(() => {
    if (addedtoCartPopup) {
      const timer = setTimeout(() => {
        setAddedtoCartPopup(false);
      }, 2000); // Adjust time as needed (3000 milliseconds = 3 seconds)

      // Clean up timer on component unmount or when visible changes
      return () => clearTimeout(timer);
    }
  }, [addedtoCartPopup, setAddedtoCartPopup]);

  return (
    <div className={`popup ${addedtoCartPopup ? 'show' : 'hide'}`}>
      <p>{`Items ${popupMessage} to Cart ✅`}</p>
    </div>
  );
};

export default Popup;
