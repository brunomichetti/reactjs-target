import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

import { userActions } from 'actions/user.actions';

const useTargetsMap = () => {
  const { getTargets, getMatches } = userActions;

  const intl = useIntl();

  const dispatch = useDispatch();

  const { userTargets, targetDeleted } = useSelector((state) => state.target);

  useEffect(() => {
    if (targetDeleted) {
      // If a target is deleted reload the matches
      alert(
        intl.formatMessage({
          id: 'delete.target.success.text',
        })
      );
      dispatch(getMatches());
    }
    dispatch(getTargets());
  }, [dispatch, getTargets, getMatches, targetDeleted, intl]);

  return { userTargets };
};

export default useTargetsMap;
