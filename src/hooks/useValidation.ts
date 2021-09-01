import { useState, useEffect } from "react";

export interface IValidationList {
  isUncorrectEmail?: boolean;
}

export const useValidation = (value: string, validationList?: IValidationList) => {
  const [isUncorrectEmail, setIsUnorrectEmail] = useState(false);

  useEffect(() => {
    for (const validation in validationList) {
      switch (validation) {
        case "isUncorrectEmail":
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const checkResult = re.test(String(value).toLowerCase());
          setIsUnorrectEmail(!checkResult);
          break;
      }
    }
  }, [value, validationList]);

  return { isUncorrectEmail }
}
