import React from 'react';
import "../ContactForm/Contact.css";

export default function Contact() {
  return (
<section class="page-start">

<h1>Contact us today!</h1>
      
<form action="https://formspree.io/f/mgegpeov" method="post" class="col-12 offset-md-2 col-md-8 offset-xl-3 col-xl-6">
        <div>
            <label for="first-name-area" class="form-label">First name:</label>
            <input type="text" class="form-control" id="first-name-area" name="First Name" required=""/>
        </div>
        <div>
            <label for="last-name-area" class="form-label">Last name:</label>
            <input type="text" class="form-control" id="last-name-area" name="Last Name" required=""/>
        </div>

    <div>
        <label for="email-field" class="form-label">Email address:</label>
        <input type="email" class="form-control" id="email-field" name="Email" required=""/>
    </div>

    <div>
        <label for="message-area" class="form-label">Message:</label>
        <textarea name="message-area" class="form-control" id="message-area" rows="4" required=""></textarea>
    </div>

    <button type="submit" class="form-control contact-btn ">Submit</button>
</form>
</section>
  );
}
