import React from 'react';
import { Form } from '../../components/Form/Form';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useUserState } from '../../helpers/useUserState';
import { Spinner } from 'react-bootstrap';
import { createPost } from '../../store/postsReducer';

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

const initialValues = { title: '', description: '', image: '' };

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  description: Yup.string().min(2, 'To short!').required('Required!'),
  image: Yup.mixed().required('A file is required'),
});

export const CreatePost = () => {
  const dispatch = useDispatch();
  const { user, status } = useUserState();
  const handleSubmit = (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('image', values.image);
    formData.append('creatorId', user._id);
    formData.append('createdAt', new Date());
    dispatch(createPost(formData));
  };

  return (
    <>
      {status === 'loading' ? (
        <Spinner animation="border" />
      ) : (
        <Form
          submit={handleSubmit}
          fields={fields}
          title={'Create your post'}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      )}
    </>
  );
};
