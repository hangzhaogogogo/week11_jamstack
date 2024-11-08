import * as React from "react"
import { Link } from "gatsby"

export default function Home() {
  return <div style={{color: 'tomato', backgroundColor: 'lightgray'}}>
          <h1>Page 2!</h1>
          <Link to="/">Home</Link>
         </div>
}
