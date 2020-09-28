import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

const useResetPassword = (setErrors) => {
  const intl = useIntl();

  const { loading, requestError, errorMsg, updated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (updated) {
      setErrors({});
      alert(
        intl.formatMessage({
          id: 'reset.password.completed.text',
        })
      );
    }
  }, [updated, intl, setErrors]);

  return { loading, requestError, errorMsg };
};

export default useResetPassword;
