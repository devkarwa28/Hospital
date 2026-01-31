import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
import Offers from './innerPages/Offers'
import EditDoctor from './Admin/EditDoctor'
import BookAppointment from './innerPages/BookAppointment'
import Home from './innerPages/Home'
import ContactUS from './innerPages/ContactUS'
import PatientsRespons from './innerPages/PatientsRespons'
import PatientsRights from './innerPages/PatientsRights'
import VisitorsInfo from './innerPages/VisitorsInfo'
import AdmissionDischarge from './innerPages/AdmissionDischarge'
import EmergencyTrauma from './innerPages/EmergencyTrauma'
import Careers from './innerPages/Careers'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/treatments' element={<Treatments/>}/>
      <Route path='/contactus' element={<ContactUS/>}/>
      <Route path='/bookappointment' element={<BookAppointment/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/addmission-discharge' element={<AdmissionDischarge/>}/>
      <Route path='/patient-responsibility' element={<PatientsRespons/>}/>
      <Route path='/patient-rights' element={<PatientsRights/>}/>
      <Route path='/vistior-info' element={<VisitorsInfo/>}/>
      <Route path='/emergency-trauma-care' element={<EmergencyTrauma/>}/>
      <Route path='/careers' element={<Careers/>}/>


      {/* Admin Routing  */}
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
           <Route path='edit_treatment/:id' element={<EditTreatment/>}/>
           <Route path='edit_doctor/:id' element={<EditDoctor/>}/>
        </Route>
        <Route path='/registeradmin' element={<RegisterAdmin/>}/>
    </Routes>
  )
}

export default Routing