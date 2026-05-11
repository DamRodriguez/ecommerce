import { useState } from "react";
import type { FieldValues, FormState } from "react-hook-form";

type UseFormErrorReturn = {
  apiErrorMessage: undefined;
  setApiErrorMessage: React.Dispatch<React.SetStateAction<undefined>>;
};

const useFormError = <T extends FieldValues>(
  formState: FormState<T>,
): UseFormErrorReturn => {
  const [apiErrorMessage, setApiErrorMessage] = useState<undefined>();

  const finalError = formState.isSubmitting ? undefined : apiErrorMessage;

  return {
    apiErrorMessage: finalError,
    setApiErrorMessage,
  };
};

export default useFormError;
