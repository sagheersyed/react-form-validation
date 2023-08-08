import React from 'react'
import RequestForm from './RequestForm'
import './FormSection.css'

const FormSection = () => {
  return (
    <section className='form-section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <div className="content-area">
                        <h5>Book An Appointment</h5>
                        <h2>Discuss our Services or request a Flooring Estimate today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur optio quod odit neque</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <RequestForm/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FormSection