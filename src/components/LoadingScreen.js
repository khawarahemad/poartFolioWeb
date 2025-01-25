import React from 'react';
import loadingGif from '../assets/img/Loading.gif';

export const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};
