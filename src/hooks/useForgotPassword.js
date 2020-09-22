import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useForgotPassword = (setErrors, setSuccess) => {
  const { loading, emailSent, errorMsg, requestError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (emailSent) {
      setSuccess(true);
      setErrors({});
    }
  }, [emailSent, setSuccess, setErrors]);

  return { loading, emailSent, errorMsg, requestError };
};

export default useForgotPassword;
