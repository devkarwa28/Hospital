import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowStudents from './innerPages/ShowStudents'
import AddStudent from './innerPages/AddStudent'
import UpdateStudents from './innerPages/UpdateStudents'
import DeleteStudents from './innerPages/DeleteStudents'
import StudentEdit from './innerPages/StudentEdit'
import Admin from './Admin/Admin'
import RegisterAdmin from './Admin/RegisterAdmin'
import AdminDashboard from './Admin/AdminDashboard'
import UpadteAppointments from './Admin/UpdateAppointments'
import UpdateTreatments from './Admin/UpdateTreatments'
import AddTreatments from './Admin/AddTreatments'
import AddDoctors from './Admin/AddDoctors'
import UpdateDoctors from './Admin/UpdateDoctors'
import AddOffers from './Admin/AddOffers'
import ShowAppointments from './Admin/ShowAppointments'
import UpdateOffers from './Admin/UpdateOffers'
import EditTreatment from './Admin/EditTreatment'
import Treatments from './innerPages/Treatments'
import AboutUs from './innerPages/AboutUs'

const Routing = () => {
  return (
    <Routes>
      <Route path='/treatments' element={<Treatments/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/addstudents' element={<AddStudent />}/>
        <Route path='/updatestudent' element={<UpdateStudents />}/>
        <Route path='/showstudents' element={<ShowStudents/>}/>
        <Route path='/deletestudents' element={<DeleteStudents />}/>
        <Route path='/studentedit/:sid' element={<StudentEdit/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}>

           <Route path='addtreatments' element={<AddTreatments/>}/>
           <Route path='updatetreatments' element={<UpdateTreatments/>}/>
           <Route path='adddoctors' element={<AddDoctors/>}/>
           <Route path='updatedoctors' element={<UpdateDoctors/>} />
           <Route path='addoffer' element={<AddOffers/>} />
           <Route path='updateoffer' element={<UpdateOffers/>}/>
           <Route path='showappointments' element={<ShowAppointments/>}/>
           <Route path='updateappointments' element={<UpadteAppointments/>} />
           <Route path='edit_treatment/:tid' element={<EditTreatment/>}/>
           
        </Route>
        <Route path='/registeradmin' element={<RegisterAdmin/>}/>
    </Routes>
  )
}

export default Routing