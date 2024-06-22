import { useState } from "react"

function TitleLabel() {
  const [users , setUsers] = useState([
    {
      userId : 1 ,
      firstname : "arshia" ,
      lastname : "sadati"
    },
    {
      userId : 2 ,
      firstname : "ali" ,
      lastname : "rezaei"
    },
    {
      userId : 3 ,
      firstname : "ahmad" ,
      lastname : "alavi"
    },
    {
      userId : 4 ,
      firstname : "hossein" ,
      lastname : "mahdavi"
    },
    {
      userId : 5 ,
      firstname : "mohammad" ,
      lastname : "khosravi" ,
    },
  ])
  return (
    <>
      <ul>
        {users.map((user) => (
          <li>{user.firstname}</li>
        ))}
      </ul>
    </>
  )
}

export default TitleLabel