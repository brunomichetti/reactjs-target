import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActionTypesConstants } from 'constants/userConstants';

const useSignUp = (setErrors, setSignupSuccess) => {
  const dispatch = useDispatch();

  const { USER_CLEAN_ALERT } = userActionTypesConstants;

  const { requestError, errorMsg, signup, loading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (signup) {
      setSignupSuccess(true);
      setErrors({});
      dispatch({ type: USER_CLEAN_ALERT });
    }
  }, [signup, setSignupSuccess, dispatch, setErrors, USER_CLEAN_ALERT]);

  return { requestError, errorMsg, loading };
};

export default useSignUp;
