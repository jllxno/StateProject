import React from 'react';

export const LikeCounter = ({ isDarkMode }) => {
  const [isLike, setIsLike] = React.useState(0);
  const [isDislike, setIsDislike] = React.useState(0);

  const handleLike = () => {
    setIsLike(isLike + 1);
  };
  const handleDislike = () => {
    setIsDislike(isDislike + 1);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div>
        <button onClick={handleLike}> 👍 </button>
        <span> Likes: {isLike}</span>
      </div>
      <div>
        <button onClick={handleDislike}>👎</button>
        <span> Dislikes: {isDislike}</span>
      </div>
    </div>
  );
};