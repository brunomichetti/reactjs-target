import React from 'react';
import { useIntl } from 'react-intl';
import { func, string } from 'prop-types';

import 'components/users/user-form.scss';
import 'components/targets/create-target.scss';
import targetImage from 'assets/newTarget.png';
import CreateTargetForm from 'components/targets/CreateTargetForm';
import UpperBar from 'components/common/UpperBar';
import { latLngShape } from 'constants/shapes';

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
      <div className="create-target__form-container">
        <CreateTargetForm
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
  newTargetlatlng: latLngShape,
  setNewTargetlatlng: func,
  newTargetRadius: string,
  setNewTargetRadius: func,
};

export default CreateTarget;
