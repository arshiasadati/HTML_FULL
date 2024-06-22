import { useState } from "react"

type Props = {}

function WelomeTextBox({}: Props) {
    const [name , setName] = useState()
  return (
    <div>
        <input type="text" className="form-control" id="inputName" />
        <button onClick={() => setName(document.getElementById("inputName").value)}>
            Submit
        </button>
        <h1>Hi {name}</h1>
    </div>
  )
}

export default WelomeTextBox