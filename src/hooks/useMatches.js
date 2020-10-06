import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from 'actions/userActions';

const useMatches = () => {
  const dispatch = useDispatch();

  const { getMatches } = userActions;

  const { loading: loggingOut, requestError, errorMsg } = useSelector(
    (state) => state.user
  );

  const { userMatches } = useSelector((state) => state.target);

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch, getMatches]);

  return { userMatches, loggingOut, requestError, errorMsg };
};

export default useMatches;
