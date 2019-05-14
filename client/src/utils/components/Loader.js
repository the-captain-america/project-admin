import React from 'react';

const Loader = ({ loaderStyle }) => {

  const { childLoaderStyle } = styles;
  const mergedLoaderStyle = loaderStyle ? Object.assign({}, childLoaderStyle, loaderStyle) : childLoaderStyle;

  return (
    <div style={mergedLoaderStyle}>
      <div className="loader"></div>
    </div>
  );
}

const styles = {
  childLoaderStyle: {
    width: 60,
    marginTop: 5,
  }
}

export { Loader };
