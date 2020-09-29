import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { userActionTypesConstants } from 'constants/userConstants';

const useEditProfile = (setEditProfile) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const { USER_UPDATE_SUCCESS_FINISHED } = userActionTypesConstants;

  const { loading, requestError, errorMsg, updated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (updated) {
      alert(
        intl.formatMessage({
          id: 'editprofile.success.text',
        })
      );
      setEditProfile(null);
      dispatch({ type: USER_UPDATE_SUCCESS_FINISHED });
    }
  }, [updated, setEditProfile, intl, dispatch, USER_UPDATE_SUCCESS_FINISHED]);

  return { loading, requestError, errorMsg };
};

export default useEditProfile;
