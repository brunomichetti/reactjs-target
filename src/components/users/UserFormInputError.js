import React from 'react';

import './user-form.scss';
import { FormattedMessage } from 'react-intl';

const UserFormInputError = ({ error, errorId }) => (
  <div>
    {error && (
      <div className="user-form__alert">
        <FormattedMessage id={errorId} />
      </div>
    )}
  </div>
);

export default UserFormInputError;
