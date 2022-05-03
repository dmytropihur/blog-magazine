import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Formik } from 'formik';
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
  console.log(initialValues);
  return (
    <Box>
      <StyledCard>
        <Card.Body>
          <Title as="h3">{title}</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
            enableReinitialize={true}
          >
            {({
              handleChange,
              handleSubmit,
              handleBlur,
              setFieldValue,
              isValid,
            }) => (
              <form>
                {fields.map((field) =>
                  field.type === 'file' ? (
                    <input
                      key={field.name}
                      type="file"
                      name="image"
                      onChange={(e) =>
                        setFieldValue('image', e.target.files[0])
                      }
                    />
                  ) : (
                    <Input
                      key={field.name}
                      field={field}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                  )
                )}

                <Button
                  variant="dark"
                  type="submit"
                  handleSubmit={handleSubmit}
                  disable={!isValid}
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
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
