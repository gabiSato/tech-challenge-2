import { useState } from "react";
import { InferType, Schema, ValidationError } from "yup";

export function useValidation(schema: Schema) {
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function validate(valueToValidate: unknown) {
    let valid;
    try {
      await schema.validate(valueToValidate, { abortEarly: false });
      valid = true;
      resetErrors();
    } catch (error) {
      if (error instanceof ValidationError) {
        valid = false;
        const normalizedErrors = normalizeErrors(error.inner);
        setErrors(normalizedErrors);
      }
    }

    return valid;
  }

  function normalizeErrors(errors: ValidationError[]) {
    return errors.reduce((errors, validationError) => {
      return {
        ...errors,
        [validationError.path || ""]: validationError.errors,
      };
    }, {});
  }

  function resetErrors() {
    setErrors({});
  }

  function resetFieldErros(path: string) {
    setErrors((prev) => ({ ...prev, [path]: [] }));
  }

  return {
    errors,
    validate,
    resetErrors,
    resetFieldErros,
  };
}
