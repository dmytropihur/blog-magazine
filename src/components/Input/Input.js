import { ErrorMessage } from "formik";
import { Form, FormGroup, FormLabel } from "react-bootstrap";

export const Input = ({ field, handleBlur, handleChange }) => {
  const {name, type, placeholder} = field
  return (
    <>
      <FormGroup className="mb-2">
        <FormLabel style={{ fontWeight: 500 }}>{field.label}</FormLabel>
        <Form.Control
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormGroup>
      <ErrorMessage name={name}/>
    </>
  );
};
