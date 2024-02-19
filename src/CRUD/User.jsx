import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
const User = () => {

    let [users, setUsers] = useState([])
    let [reload, setReload] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:5000/employees")
            .then((resp) => { setUsers(resp.data) })
            .catch(() => { console.log("didn't get the data"); })
        setReload(false)
    }, [reload])

    let deleteUser = (id) => {
        axios.delete(`http://localhost:5000/employees/${id}`)
        setReload(true)
        // window.location.reload("/users")
        // .then(() => { console.log("deleted"); })
        // .catch(() => { console.log("Cant delete"); })
    }
    
    return (
        <div id={style.user}>
            {users.map((user) => {
                return (
                    <div id={style.userHome}>
                        <h2>Name    : {user.empName}</h2>
                        <h2>Salary  : {user.empSalary}</h2>
                        <h2>Company : {user.empCompany}</h2>
                        <button><Link to={`/edit/${user.id}`}>EDIT</Link></button> <button onClick={() => { deleteUser(user.id) }}>Delete</button>
                    </div>
                )
            }
            )}
        </div>
    )
}
export default User