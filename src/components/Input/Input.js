import { Form, FormGroup, FormLabel } from "react-bootstrap";

export const Input = ({props}) => {
  return (
    <FormGroup className="mb-2">
      <FormLabel style={{ fontWeight: 500 }}>{props.label}</FormLabel>
      <Form.Control
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </FormGroup>
  );
};
