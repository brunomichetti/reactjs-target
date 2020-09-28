import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { targetActionTypesConstants } from 'constants/target.constants';

const useCreateTarget = (setNewTargetlatlng, setNewTargetRadius) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const createTargetState = useSelector((state) => state.target);

  const createTargetError = useSelector((state) => state.user.errorMsg);

  const createTargetRequest = useSelector((state) => state.user.loading);

  const { CREATE_ALERT_FINISHED } = targetActionTypesConstants;

  useEffect(() => {
    if (createTargetState.createTargetSuccess) {
      alert(
        intl.formatMessage({
          id: 'createtarget.success.text',
        })
      );
      setNewTargetlatlng(null);
      setNewTargetRadius('');
      dispatch({ type: CREATE_ALERT_FINISHED });
    }
  }, [
    createTargetState,
    setNewTargetRadius,
    setNewTargetlatlng,
    intl,
    dispatch,
    CREATE_ALERT_FINISHED,
  ]);

  return { createTargetError, createTargetRequest };
};

export default useCreateTarget;
