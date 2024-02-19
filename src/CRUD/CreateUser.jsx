import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUser=()=>{
    let [name,setName] = useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] = useState("")

    let navigate = useNavigate()

    let getName=(e)=>{
        setName(e.target.value)
    }
    let getSalary=(e)=>{
        setSalary(e.target.value)
    }
    let getCompany=(e)=>{
        setCompany(e.target.value)
    }

    let formhandle=(e)=>{
        e.preventDefault()
        // if(setName.length>=!2 && setCompany.length>=2 && setSalary){
            
        let payload={
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        axios.post("http://localhost:5000/employees",payload)
        .then(()=>{console.log("Data Saved");})
        .catch(()=>{console.log("Cant Save the data");})

        navigate("/users") //navigating next page 'users' page
        setName("")
        setSalary("")
        setCompany("")
        }
    

    return(
        <div id={style.createuser}>
            <form action="">
              <label htmlFor="">Name</label> <br />
                    <input type="text" value={name} onChange={getName}/> <br />
               <label htmlFor="">Salary</label> <br />
                    <input type="text" value={salary} onChange={getSalary}/> <br />
               <label htmlFor="">Company</label> <br />
                    <input type="text" value={company} onChange={getCompany}/> <br />
                <button onClick={formhandle}>Submit</button>  
            </form>
        </div>
    )
}
export default CreateUser