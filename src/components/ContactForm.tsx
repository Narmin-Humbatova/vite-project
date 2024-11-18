import React from 'react';
import './ContactForm.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Ad ən az 3 simvol olmalıdır')
        .max(25, 'Ad ən çox 25 simvol ola bilər')
        .required('Ad vacibdir'),
      email: Yup.string()
        .email('Email düzgün olmalıdır')
        .required('Email vacibdir'),
      message: Yup.string()
        .required('Mesaj sahəsi boş ola bilməz'),
    }),
    onSubmit: (values) => {
      toast.success('Mesaj uğurla göndərildi!');
      console.log(values);
    },
  });

  return (
    <div className="contact-form container mt-5">
      <form onSubmit={formik.handleSubmit} className="p-4 border rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Adınız
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            rows={4}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="invalid-feedback">{formik.errors.message}</div>
          ) : null}
        </div>

        <button type="submit" className="btn">
          Göndər
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Form;
