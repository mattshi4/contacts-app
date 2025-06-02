export default function ContactCard({ contact }) {
  if (!contact) {
    return  (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          There is no contact currently selected, please choose a contact to
          see information
        </div>
      </div>
    )
  } else {
    return  (
      <div>
        <p> <b>Name</b>: {contact.name} </p>
        <p> <b>Username</b>: {contact.username} </p>
        <p> <b>Email</b>: {contact.email} </p>
        <p> <b>Phone</b>: {contact.phone} </p>
      </div>
    )
  }
}
