import { useState } from "react";
import { IValidationList, useValidation } from "./useValidation";

export const useInput = (initialValue: string, validationList?: IValidationList) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const valid = useValidation(value, validationList);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
  }

  return {
    value,
    onChange,
    onBlur,
    touched,
    ...valid
  }
}
