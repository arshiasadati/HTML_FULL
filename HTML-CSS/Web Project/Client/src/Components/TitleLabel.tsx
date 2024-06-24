import axios from "axios"
import { useEffect, useState } from "react"

function TitleLabel() {
  // const [users , setUsers] = useState([
  //   {
  //     userId : 1 ,
  //     firstname : "arshia" ,
  //     lastname : "sadati"
  //   },
  //   {
  //     userId : 2 ,
  //     firstname : "ali" ,
  //     lastname : "rezaei"
  //   },
  //   {
  //     userId : 3 ,
  //     firstname : "ahmad" ,
  //     lastname : "alavi"
  //   },
  //   {
  //     userId : 4 ,
  //     firstname : "hossein" ,
  //     lastname : "mahdavi"
  //   },
  //   {
  //     userId : 5 ,
  //     firstname : "mohammad" ,
  //     lastname : "khosravi" ,
  //   },
  // ])
  // return (
  //   <>
  //     <ul>
  //       {users.map((user) => (
  //         <li>{user.firstname}</li>
  //       ))}
  //     </ul>
  //   </>
  // )
  const [data , setData] = useState<Data[]>([])

  type Data = {
    firstname: string
    lastname : string
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:3000/members/getMember/2170585621");
        console.log(res)
          setData([res.data])
      }  catch (error){
          console.log(error)
        };
    })();
  },[]);
  

  return (
    <>
      <ul>{data.map((d) => (<li key={d.firstname}>
        {d.firstname} {d.lastname}
        </li> ))} 
        </ul>
    </>
  )}
export default TitleLabel