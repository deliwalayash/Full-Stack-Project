import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {

    const [students,setStudents]=useState([])

    const getStudents =async()=>{
        const res= await axios.get('http://localhost:4000/api/view')
        setStudents(res.data.data)
        console.log(students)
    }

    const handleDelete = async(id)=>{
        await axios.delete(`http://loalhost:4000/api/delete/${id}`)
        getStudents()
    }

    useEffect(()=>{
        getStudents()
    },[])

  return (
    <div className='container mt-4'>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {
            students.map(student => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <button 
                    className="btn btn-danger"
                    onClick={() => handleDelete(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>
  )
}

export default View

