import { useParams } from "react-router-dom"

export default function UserProfile({ userData }) {


    console.log("IN USERPROFILE COMP")
    console.log(userData)
    const { userId } = useParams()

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h2>Welcome, {userData.firstName} {userData.lastName}</h2>
                <p>EMAIL : {userData.email}</p>
                <p>SCHOOL : {userData.school}</p>
                <p>FAVORITE SPORT : {userData.favSport}</p>
                <p>AGE : {userData.age}</p>
            </div>
        </div>
    )
}