type ResetFields = {
  [key: string]: React.Dispatch<React.SetStateAction<any>>;
};

const resetFormFields = (fields: ResetFields) => {
  Object.values(fields).forEach(setter => setter(''));
};

export default resetFormFields;
