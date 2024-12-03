import css from "./Contact.module.css";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";

export default function Contact({
  contact: { id, name, number },
  deleteContact,
}) {
  return (
    <article className={css.contact}>
      <div className={css.contactDetails}>
        <p>
          <BsFillPersonFill className={css.icon} />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={deleteContact}>
        Delete
      </button>
    </article>
  );
}
