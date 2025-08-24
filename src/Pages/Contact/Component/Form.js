import React from 'react'

const Form = () => {
  return (
    <>
    <h1 className='heading'>Contact Us</h1>
   <section className='container'>
     <form>
          <div className='field'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className='field'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className='field'>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" />
          </div>

        <div className="form-button">
            <button type='submit'>Submit</button>
        </div>
    </form>
   </section>
      
    </>
  )
}

export default Form;
