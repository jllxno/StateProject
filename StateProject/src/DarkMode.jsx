import React from 'react';

export const DarkMode = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </>
  )
}
