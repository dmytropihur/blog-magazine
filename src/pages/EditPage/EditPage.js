import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '../../components/Form/Form';
import { URL } from '../../constants/constants';
import { getPostById } from '../../store/postsReducer';

const fields = [
  {
    label: 'Title',
    name: 'title',
    type: 'text',
    placeholder: 'Enter title of post',
  },
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    placeholder: 'Enter text of post',
  },
  {
    label: 'Image',
    name: 'image',
    type: 'file',
    placeholder: 'Enter image link of post',
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  description: Yup.string().min(2, 'To short!').required('Required!'),
  image: Yup.mixed().required('A file is required'),
});

export const EditPage = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const savedValues = {
    title: 'Hiesad',
    description: 'asdsadmsadsadsaddassad',
    image: '',
  };

  console.log(posts);

  const handleSubmit = () => {};

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);
  return (
    <Form
      title={'Edit your post'}
      submit={handleSubmit}
      fields={fields}
      initialValues={savedValues}
      validationSchema={validationSchema}
    ></Form>
  );
};
