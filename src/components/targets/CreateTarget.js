import React from 'react';
import { useIntl } from 'react-intl';

import '../users/user-form.scss';
import './create-target.scss';
import backImage from '../../assets/back.png';
import targetImage from '../../assets/newTarget.png';
import CreateTargetForm from './CreateTargetForm';

const CreateTarget = ({
  newTargetlatlng,
  setNewTargetlatlng,
  newTargetRadius,
  setNewTargetRadius,
}) => {
  const intl = useIntl();

  const handleGoBack = () => {
    setNewTargetlatlng(null);
  };

  return (
    <div className="create-target">
      <div className="create-target__title-bar">
        <div className="create-target__title-bar-back">
          <input
            type="image"
            src={backImage}
            onClick={handleGoBack}
            width="12"
            height="22"
            alt="Back button"
          />
        </div>
        <div className="create-target__title-text">
          <p>
            {intl.formatMessage({
              id: 'createtarget.title.text',
            })}
          </p>
        </div>
      </div>
      <img
        src={targetImage}
        className="create-target__new-target-img"
        alt="New target img"
      />
      <p className="create-target__new-target-text">
        {intl.formatMessage({
          id: 'createtarget.new.target.text',
        })}
      </p>
      <div align="center">
        <CreateTargetForm
          intl={intl}
          newTargetlatlng={newTargetlatlng}
          setNewTargetlatlng={setNewTargetlatlng}
          newTargetRadius={newTargetRadius}
          setNewTargetRadius={setNewTargetRadius}
        />
      </div>
    </div>
  );
};

export default CreateTarget;
