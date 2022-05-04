import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Formik, useFormik } from 'formik';
import { Card, Container } from 'react-bootstrap';
import { Button } from '../Button';
import { Input } from '../Input';

export const Form = ({
  fields,
  title,
  initialValues,
  submit,
  validationSchema,
}) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: submit,
  });

  useEffect(() => {
    if (initialValues) {
      console.log(initialValues.title);
      formik.setFieldValue('title', initialValues.title);
      formik.setFieldValue('description', initialValues.description);
    }
  }, [initialValues]);

  return (
    <Box>
      <StyledCard>
        <Card.Body>
          <Title as="h3">{title}</Title>
          <form onSubmit={formik.handleSubmit}>
            {fields.map((field) =>
              field.type === 'file' ? (
                <input
                  key={field.name}
                  type="file"
                  name="image"
                  onChange={(e) =>
                    formik.setFieldValue('image', e.target.files[0])
                  }
                />
              ) : (
                <Input
                  key={field.name}
                  field={field}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              )
            )}

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </form>
        </Card.Body>
      </StyledCard>
    </Box>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
`;

const Box = styled(Container)`
  max-width: 700px;
`;

const Title = styled(Card.Title)`
  margin-bottom: 2rem;
  text-align: center;
`;
