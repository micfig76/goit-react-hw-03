import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = { name: "", number: "" };

export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();

  function handleSubmit({ name, number }, actions) {
    addContact(name, number);
    actions.resetForm();
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={ContactSchema}
    >
      <Form>
        <label htmlFor={nameId}>
          <span>Name</span>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage component="p" name="name" />
        </label>

        <label htmlFor={numberId}>
          <span>Number</span>
          <Field type="text" name="number" id={numberId} />

          <ErrorMessage className={css.error} component="p" name="number" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
