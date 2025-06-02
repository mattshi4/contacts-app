import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"

export default function Home() {
  return (
    <div>
      <h1 style={{ fontweight: 'bold' }}>
        <Typewriter
          words={['A CONTACTS APPLICATION']}
        />
      </h1>
      <div>
        <Link to="/contacts">Browse Contacts</Link>
      </div>
    </div>
  )
}
