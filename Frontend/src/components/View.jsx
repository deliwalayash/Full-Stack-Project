import axios from 'axios'

import { toast, ToastContainer } from 'react-toastify'

const View = ({students,getStudents,setStudent,setEditingId}) => {

    const handleDelete = async(id)=>{
      try{
        await axios.delete(`http://localhost:4000/api/delete/${id}`)
      }
      catch(err){
        console.log(err)

      }
        toast.success("data deleted succesfully")
        getStudents()
    }
    const handleEdit = (student)=>{
      setStudent(student)
      setEditingId(student._id)

    }

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
                  <button className='btn btn-warning' onClick={()=>{handleEdit(student)}}>Edit
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

