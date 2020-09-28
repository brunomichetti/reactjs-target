import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from 'actions/user.actions';

const useMatches = () => {
  const dispatch = useDispatch();

  const { getMatches } = userActions;

  const loggingOut = useSelector((state) => state.user.loading);

  const { userMatches } = useSelector((state) => state.target);

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch, getMatches]);

  return { userMatches, loggingOut };
};

export default useMatches;
