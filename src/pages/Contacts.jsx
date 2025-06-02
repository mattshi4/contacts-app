import { useEffect, useState } from 'react';
import ContactsList from '../components/ContactsList'
import ContactCard from '../components/ContactCard'

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <div
      style={{
        width: '100vh',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px'
      }}
    >
      <div>
        <p>
          <b> YOUR CONTACTS </b>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '90%',
          marginTop: 'auto'
        }}
      >
        <div
          style={{
            borderRadius: '8px',
            backgroundColor: '#f8f8ff',
          }}
        >
          <ContactsList contacts={contacts} onContactClick={setSelectedContact}/>
        </div>
        <div style={{ width: '2%' }}>
        </div>
        <div
          style={{
            width: '100%',
            backgroundColor: '#f8f8ff',
            borderRadius: '8px',
          }}
        >
          <ContactCard contact={selectedContact} />
        </div>
      </div>
    </div>
  )
}

