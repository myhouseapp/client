/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const loadingImg = 'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

const Loading = () => (
  <div className="spinner">
    <img className='loading' src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
