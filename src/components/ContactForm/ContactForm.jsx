import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = { name: "", number: "" };

export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();

  function handleSubmit({ name, number }, actions) {
    addContact(name, number);
    actions.resetForm();
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form>
        <label htmlFor={nameId}>
          <span>Name</span>
          <Field type="text" name="name" id={nameId} />
        </label>

        <label htmlFor={numberId}>
          <span>Number</span>
          <Field type="text" name="number" id={numberId} />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
