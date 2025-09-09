import React from 'react'
import adminstyles from './admin.module.css'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'
const AdminDashboard = () => {
    return (
        <>
            <section className={adminstyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Admin Dashboard</p>
                        </div>
                    </div>
                </div>
            </section>
            <main className='d-flex'>
                <aside className={adminstyles.sidebar}>
                    <AdminSidebar/>
                </aside>
                <div className={adminstyles.outlet}>
                    <Outlet/>
                </div>
            </main>
        </>
    )
}

export default AdminDashboard