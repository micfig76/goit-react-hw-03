import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]+$/, "Only alphabetic characters are allowed")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Only numeric characters are allowed")
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
      <div className={css.wrapper}>
        <div className={css.formContainer}>
          <Form className={css.formLook}>
            <label htmlFor={nameId} className={css.label}>
              <span>Name</span>
              <Field
                type="text"
                name="name"
                id={nameId}
                className={css.inputField}
              />
              <ErrorMessage
                component="p"
                name="name"
                className={css.errorMessage}
              />
              <ErrorMessage
                name="name"
                render={(msg) =>
                  msg === "Required" ? (
                    <p className={css.requiredMessage}>{msg}</p>
                  ) : null
                }
              />
            </label>
            <label htmlFor={numberId} className={css.label}>
              <span>Number</span>
              <Field
                type="text"
                name="number"
                id={numberId}
                className={css.inputField}
              />
              <ErrorMessage
                component="p"
                name="number"
                className={css.errorMessage}
              />
              <ErrorMessage
                name="number"
                render={(msg) =>
                  msg === "Required" ? (
                    <p className={css.requiredMessage}>{msg}</p>
                  ) : null
                }
              />
            </label>
            <button type="submit" className={css.button}>
              Add contact
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
}
