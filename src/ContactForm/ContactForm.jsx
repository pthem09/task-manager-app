import React, { useState } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import "./Contact.css";

export default function ContactForm(
    defaultFirstName,
    defaultLastName,
    defaultEmail,
    defaultMessage
) {

    const [firstName, setFirst] = useState(defaultFirstName ?? '');
    const [lastName, setLast] = useState(defaultLastName ?? '');
    const [email, setEmail] = useState(defaultEmail ?? '');
    const [message, setMessage] = useState(defaultMessage ?? '');
    
    function handleFirstNameChange(e) {
        setFirst(e.target.value);
    }

    function handleLastNameChange(e) {
        setLast(e.target.value);
    }    
    
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    
    function handleSubmit(e) {
        setFirst('');
        setLast('');
        setEmail('');
        setMessage('');

    }

  return (
    <Form action="https://formspree.io/f/mgegpeov" method="post" class="col-12 offset-md-2 col-md-8 offset-xl-3 col-xl-6"
        onSubmit={handleSubmit}
    >
        <FormGroup className="contact-row">
            <Label
                htmlFor="first-name-area"
            >
                First Name
            </Label>
            <Input
                type="text"
                id="first-name-area"
                onChange={handleFirstNameChange}
                required
            >
            </Input>
        </FormGroup>
        <FormGroup className="contact-row">
            <Label
                htmlFor="last-name-area"
            >
                Last Name
            </Label>
            <Input
                type="text"
                id="last-name-area"
                onChange={handleLastNameChange}
                required
            >
            </Input>
        </FormGroup>
        <FormGroup className="contact-row">
            <Label
                htmlFor="email-area"
            >
                Email
            </Label>
            <Input
                type="email"
                id="email-area"
                onChange={handleEmailChange}
                required
            >
            </Input>
        </FormGroup>
        <FormGroup className="contact-row">
            <Label
                htmlFor="message-area"
            >
                Message
            </Label>
            <textarea
                type="text"
                id="message-area"
                rows="4"
                onChange={handleMessageChange}
                required
            >
            </textarea>
        </FormGroup>

        <Button className="contact-row submit-btn" type="submit">
            Submit
        </Button>
    </Form>
  );
}
