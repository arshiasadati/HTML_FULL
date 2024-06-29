import { useState } from "react"

type Props = {}

const MinesButton = ({}: Props) => {
const [count, setCount] = useState(0)
  return (
    <div>
        <h4>{count}</h4>
        <button style={{backgroundColor : "red"}} onClick={() => setCount(count + 1)}>
            Click On Me To +
        </button>
        <button style={{backgroundColor : "blue"}} onClick={() => setCount(count - 1)}>
            Click On Me To -
        </button>
    </div>
  )
}

export default MinesButton