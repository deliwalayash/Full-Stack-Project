
import './App.css'
import Form from './components/Form'
import View from './components/View'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

function App() {
 const [students,setStudents]=useState([])
 const [editingId,setEditingId]=useState(null)

   const [student,setStudent]=useState({
    name:"",
    email:"",
    course:""
  })

   const getStudents =async()=>{

        try{
          const res= await axios.get('http://localhost:4000/api/view')
          setStudents(res.data.data)
        
        }catch(err){
          toast.error(err.response.data.message)
        }
    }

       useEffect(()=>{
        getStudents()
    },[])

      // console.log(students)


  return (
    <>
      <ToastContainer></ToastContainer>
      <Form student={student} setStudent={setStudent} getStudents={getStudents} editingId={editingId} setEditingId={setEditingId}></Form>
      <View students={students} setStudents={setStudents} getStudents={getStudents} student={student} setStudent={setStudent} setEditingId={setEditingId}></View>
    </>
  )
}

export default App
