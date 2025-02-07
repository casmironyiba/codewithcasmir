type ResetFields = {
  [key: string]: React.Dispatch<React.SetStateAction<any>>;
};

const resetFormFields = (fields: ResetFields, defaultValues: Record<string, any> = {}) => {
  Object.entries(fields).forEach(([key, setter]) => {
    setter(defaultValues[key] ?? '');
  });
};

export default resetFormFields;

