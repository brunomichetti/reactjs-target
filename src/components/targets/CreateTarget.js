import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import '../users/user-form.scss';
import './create-target.scss';
import targetImage from '../../assets/newTarget.png';
import CreateTargetForm from './CreateTargetForm';
import UpperBar from '../common/UpperBar';

const CreateTarget = ({
  newTargetlatlng,
  setNewTargetlatlng,
  newTargetRadius,
  setNewTargetRadius,
}) => {
  const intl = useIntl();

  const handleGoBack = () => {
    setNewTargetlatlng(null);
    setNewTargetRadius('');
  };

  return (
    <div className="create-target">
      <UpperBar
        goBackFunction={handleGoBack}
        titleText={intl.formatMessage({
          id: 'createtarget.title.text',
        })}
      />
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

CreateTarget.propTypes = {
  newTargetlatlng: PropTypes.object,
  setNewTargetlatlng: PropTypes.func,
  newTargetRadius: PropTypes.object,
  setNewTargetRadius: PropTypes.func,
};

export default CreateTarget;
