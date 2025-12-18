import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [student,setStudent]=useState({
    name:"",
    email:"",
    course:""
  })

  

  const handleChange = (e)=>{
    setStudent((prev)=>{
      return ({...prev,[e.target.name]:e.target.value})
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const res=await axios.post("http://localhost:4000/api/create",student)
    console.log(res.data)
    setStudent({
      name:"",
      email:"",
      course:""
    })



  }
  return (
    <div className='container w-25 mt-4'>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={handleChange} name='name' value={student.name}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' onChange={handleChange} value={student.email}/>
  </div>
  <div className="mb-3">
    <select name="course" id="course" className="form-select" onChange={handleChange} value={student.course}>Course
      <option value>Please Select Course</option>
      <option value="fsd">Full Stack</option>
      <option value="UIUX">UI / UX</option>
      <option value="fsd">AI / ML</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      
    </div>
  )
}

export default Form
