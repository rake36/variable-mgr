import React, { useState, useEffect } from 'react';

function ToggleHook() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  useEffect(() => {
    // document.title = `Toggled: ${isToggleOn}`;
    console.log(`Toggled: ${isToggleOn}`);
  });

  return (
    <button onClick={() => setIsToggleOn(!isToggleOn)}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default ToggleHook;
