import css from "./Contact.module.css";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";

export default function Contact({
  contact: { id, name, number },
  deleteContact,
}) {
  return (
    <article className={css.contact}>
      <p>
        <BsFillPersonFill />
        {name}
      </p>
      <p>
        <BsFillTelephoneFill />
        {number}
      </p>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </article>
  );
}
