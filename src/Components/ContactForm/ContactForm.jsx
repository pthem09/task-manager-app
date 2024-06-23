import React, { useEffect, useState } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import "./Contact.css";

export default function ContactForm() {

    let [firstName, setFirst] = useState(getInitialFirst());
    useEffect(saveFirst, firstName);

    function saveFirst() {
        localStorage.setItem("first", JSON.stringify(firstName));
    }

    function getInitialFirst() {
        let savedState = localStorage.getItem("first");
        if (typeof savedState === "string") {
            return JSON.parse(savedState);
        }
        return [];
    }
    
    function handleFirstNameChange(e) {
        alert("here I go");
        setFirst(e.target.value);
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
                input={firstName}
                id="first-name-area"
                onChange={handleFirstNameChange}
                required=""
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
                required=""
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
                required=""
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
                required=""
            >
            </textarea>
        </FormGroup>

        <Button className="contact-row submit-btn" type="submit">
            Submit
        </Button>
    </Form>
  );
}
