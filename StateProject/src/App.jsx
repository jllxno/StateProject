import { useState } from 'react';
import { DarkMode } from "../src/DarkMode.jsx";
import { LikeCounter } from './LikeCounter.jsx';
import { ColorButton } from './ColorButton.jsx';
import { TimeCounter } from './TimeCounter.jsx';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const changeColor = () => {
    const coloresAbsolutos = [
      "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
      "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
      "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
    ];
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setBackgroundColor(randomColor);
  };

  const getBackgroundColor = () => {
    return isDarkMode ? '#333' : backgroundColor;
  };

  return (
    <div style={{ backgroundColor: getBackgroundColor(), height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'background-color 0.5s ease' }}>
      <DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <LikeCounter isDarkMode={isDarkMode} />
      <ColorButton changeColor={changeColor} />
      <TimeCounter/>
    </div>
  );
}


