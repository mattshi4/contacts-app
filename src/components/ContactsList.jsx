import { useState } from 'react';

export default function ContactsList({ contacts, onContactClick }) {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div
      style={{
        width: '300px',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {contacts.map((contact, index) => (
        <div
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(index)}
          onClick={() => onContactClick(contact)}
          key={index}
          style={{
            backgroundColor: isHovered == index ? '#fcfcff' : 'white',
            padding: '12px',
            margin: '8px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          <p>
            <b> {contact.name} </b>
          </p>
          <p>
            {contact.email}
          </p>
        </div>
      ))}
    </div>
  );
}
