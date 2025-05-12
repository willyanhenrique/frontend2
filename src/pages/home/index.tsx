import { use, useEffect, useState } from "react"
import { fetchUsers } from "../../services/github"

type UserProps = {
    login: "string",
    avatar_url: "string"
}

const Home = () => {
    const [user, setUsers] = useState<UserProps[]> ()
    useEffect(() => {
        fetchUsers().then((res) => setUsers(res.data))
    }, [])
 
 
    return (
    <div>
      
    </div>
  )
}

export default Home
