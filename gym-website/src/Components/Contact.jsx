import React from 'react';

function Contact() {
  return (
      <div id="contact">
          <h1>CONTACT US</h1>
          <form>
              <input type='type' placeholder='Full Name' required />
              <input type='email' placeholder='Type Your E-Mail' required />
              <textarea placeholder='Write Here......' name='message'></textarea>
              <input type='submit' value='Send' />
          </form>
      </div>
  )
}

export default Contact;