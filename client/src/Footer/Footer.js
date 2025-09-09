import React from 'react'
import footerstyles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={footerstyles.footer}>
        <div className="container py-3">
            <div className="row">
                <div className="col-6">
                    <p className="text-center">Designed & Developed By Dev Karwa</p>
                </div>
                <div className="col-6">
                    <p className="text-center">All Rights Reserved &copy; 2025</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer