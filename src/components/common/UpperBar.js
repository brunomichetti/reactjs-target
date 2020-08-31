import React from 'react';
import { func, string } from 'prop-types';

import backImage from '../../assets/back.png';
import './upper-bar.scss';

const UpperBar = ({ goBackFunction, titleText }) => (
  <div className="upper-bar">
    <div className="upper-bar__back">
      <input
        type="image"
        src={backImage}
        onClick={goBackFunction}
        width="12"
        height="22"
        alt="Back button"
      />
    </div>
    <div className="upper-bar__title-text">
      <p>{titleText}</p>
    </div>
  </div>
);

UpperBar.propTypes = {
  goBackFunction: func,
  titleText: string,
};

export default UpperBar;