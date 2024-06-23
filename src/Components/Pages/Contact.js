import React, { useEffect, useState } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import "./Contact.css";

export default function Contact() {

    let [firstName, setFirst] = useState(getInitialFirst());
    let [lastName, setLast] = useState(getInitialLast());
    let [email, setEmail] = useState(getInitialEmail());
    let [message, setMessage] = useState(getInitialMessage());

    useEffect(saveFirstName, [firstName]);
    useEffect(saveLastName, [lastName]);
    useEffect(saveEmail, [email]);
    useEffect(saveMessage, [message]);

    function saveFirstName() {
        localStorage.setItem("first", [firstName]);
    }

    function saveLastName() {
        localStorage.setItem("last", [lastName]);
    }

    function saveEmail() {
        localStorage.setItem("emailEntered", [email]);
    }

    function saveMessage() {
        localStorage.setItem("messageEntered", [message])
    }


    function getInitialFirst() {
        let savedState = localStorage.getItem("first");
        if (typeof savedState === "string") {
            return savedState;
        }
        return "";
    }

    function getInitialLast() {
        let savedState = localStorage.getItem("last");
        if (typeof savedState === "string") {
            return savedState;
        }
        return "";
    }

    function getInitialEmail() {
        let savedState = localStorage.getItem("emailEntered");
        if (typeof savedState === "string") {
            return savedState;
        }
        return "";
    }

    function getInitialMessage() {
        let savedState = localStorage.getItem("messageEntered");
        if (typeof savedState === "string") {
            return savedState;
        }
        return "";
    }

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

  return (
    <section class="page-start">

    <h1>Contact us today!</h1>
    
    <Form action="https://formspree.io/f/mgegpeov" method="post" class="col-12 offset-md-2 col-md-8 offset-xl-3 col-xl-6">
        <FormGroup className="contact-row">
            <Label
                htmlFor="first-name-area"
            >
                First Name
            </Label>
            <Input
                type="text"
                id="first-name-area"
                name="First Name"
                onChange={handleFirstNameChange}
                value={firstName}
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
                name="Last Name"
                onChange={handleLastNameChange}
                value={lastName}
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
                name="Email"
                onChange={handleEmailChange}
                value={email}
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
                name="message-area"
                id="message-area"
                rows="4"
                onChange={handleMessageChange}
                value={message}
                required
            >
            </textarea>
        </FormGroup>

        <Button className="contact-btn" type="submit">
            Submit
        </Button>
    </Form>

    </section>
  );
}
