import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <ul className="mb-0 ps-0">
        <li className='mt-0'>
            <NavLink to='addtreatments'>
                Add Treatments
            </NavLink>
        </li>
        <li>
            <NavLink to='updatetreatments'>
                Edit/View Treatments
            </NavLink>
        </li>
        <li>
            <NavLink to='adddoctors'>
                Add Doctors
            </NavLink>
        </li>
        <li>
            <NavLink to='updatedoctors'>
                Edit/View Doctors
            </NavLink>
        </li>
        <li>
            <NavLink to='addoffer'>
                Add Offer
            </NavLink>
        </li>
        <li>
            <NavLink to='updateoffer'>
                View/Edit Offer
            </NavLink>
        </li>
        <li>
            <NavLink  to='showappointments'>
                Appointments Data
            </NavLink>
        </li>
        <li>
            <NavLink to='updateappointments'>
                Edit/Delete Appointments
            </NavLink>
        </li>
    </ul>
  )
}

export default AdminSidebar