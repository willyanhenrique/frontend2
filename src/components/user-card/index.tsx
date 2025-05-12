import { Card } from "@mui/material";

interface Props {
    login: string;
    avatar_url:string;
}

const UserCard = ({login, avatar_url}:Props) => {
  return (
    <Card sx={{display: "flex", alignItems: "center", p:2}}>

    </Card>
  )
}

export default UserCard
