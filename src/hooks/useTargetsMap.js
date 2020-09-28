import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from 'actions/user.actions';

const useTargetsMap = () => {
  const { getTargets } = userActions;

  const dispatch = useDispatch();

  const { userTargets } = useSelector((state) => state.target);

  useEffect(() => {
    dispatch(getTargets());
  }, [dispatch, getTargets]);

  return { userTargets };
};

export default useTargetsMap;
