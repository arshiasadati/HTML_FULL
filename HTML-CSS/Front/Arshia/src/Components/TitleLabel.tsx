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
    title: string
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res.data)
        if (res.data) {
          setData(res.data)
        }
      }  catch (error){
          console.log(error)
        };
    })();
  },[]);
  

  return (
    <>
      <ul>{data ? data.map((d) => <li>{d.title}</li> ) : ""} </ul>
    </>
  )}
export default TitleLabel