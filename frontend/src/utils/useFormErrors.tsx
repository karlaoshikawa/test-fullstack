import { useState } from "react";

interface FormErrors {
  [fieldName: string]: string; 
}

function useFormErrors(initialErrors: FormErrors) {
  const [errors, setErrors] = useState<FormErrors>(initialErrors);

  const setError = (fieldName: string, errorMessage: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  const clearError = (fieldName: string) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };

  return {
    errors,
    setError,
    clearError,
  };
}

export default useFormErrors;
