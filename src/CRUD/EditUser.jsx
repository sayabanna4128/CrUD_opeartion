import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import { useNavigate, useParams } from "react-router-dom"
const EditUser = () => {

    let navigate = useNavigate()
    let userId = useParams();
    console.log(userId.abc);
    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:5000/employees/${userId.abc}`)
            .then((response) => {
                setName(response.data.empName)
                setSalary(response.data.empSalary)
                setCompany(response.data.empCompany)
            })
            .catch(() => { console.log("errrrrr"); })
    }, [])

    let getName=(e)=>{
        setName(e.target.value)
    }
    let getSalary=(e)=>{
        setSalary(e.target.value)
    }
    let getCompany=(e)=>{
        setCompany(e.target.value)
    }

    let update=(s)=>{
        s.preventDefault()
        let payload={
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        axios.put(`http://localhost:5000/employees/${userId.abc}`,payload)
        .then((res)=>{console.log("updated"); })
        .catch(()=>{console.log("Cant update the data");})
        navigate("/users")
    }
    return (
        <div id={style.createuser}>
            <form action="">
                <label htmlFor="">Name</label> <br />
                <input type="text" value={name} onChange={getName}/> <br />
                <label htmlFor="">Salary</label> <br />
                <input type="text" value={salary} onChange={getSalary}/> <br />
                <label htmlFor="">Company</label> <br />
                <input type="text" value={company} onChange={getCompany}/> <br />
                <button onClick={update}>Update</button>
            </form>
        </div>
    )
}
export default EditUser