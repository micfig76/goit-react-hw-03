import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = window.localStorage.getItem("contacts-3");
      if (savedContacts !== null) {
        return JSON.parse(savedContacts);
      }
      return initialContacts;
    } catch (error) {
      return initialContacts;
    }
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts-3", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function addContact(name, number) {
    const contact = { name, number, id: crypto.randomUUID() };
    setContacts((prev) => [...prev, contact]);
  }

  function removeContact(id) {
    console.log(id);
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContactList contacts={filteredContacts} deleteContact={removeContact} />
    </div>
  );
}
