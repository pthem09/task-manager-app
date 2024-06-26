import React, { useState } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import "./ToDoForm.css";

const PRIORITIES = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
}

export default function ToDoForm({
    submitData,
    id,
    defaultDate,
    defaultCategory,
    defaultPriority,
    defaultLink,
    defaultDescription,
    defaultCompleted,
    cancelClicked,
}) {

    let idPrefix = "";
    if (typeof id === "string" && id.length > 0) {
        idPrefix = "-" + id;
    }
    
    const [date, setDate] = useState(defaultDate ?? '');
    const [category, setCategory] = useState(defaultCategory ?? '');
    const [link, setLink] = useState(defaultLink ?? '');
    const [description, setDescription] = useState(defaultDescription ?? '');
    const [priority, setPriority] = useState(defaultPriority ?? PRIORITIES.Medium);
    defaultCompleted = Boolean(false);
    
    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }    
    
    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleDescChange(e) {
        setDescription(e.target.value);
    }

    function handlePriotChange(e) {
        setPriority(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const [y, M, d] = date.split('-');
        const formattedDate = `${M}/${d}/${y}`;
        submitData(formattedDate, category, link, description, priority, Boolean(false));
        setDate('');
        setCategory('');
        setLink('');
        setDescription('');
        setPriority(PRIORITIES.Medium);
    }

    return (
        <Form
            data-bs-theme="dark"
            className="to-do-form"
            onSubmit={handleSubmit}>
            <FormGroup className="to-do-row">
                <Label htmlFor={`${idPrefix}category-text`}>
                    Category
                </Label>
                <Input
                    type="text"
                    name="category-text"
                    id={`${idPrefix}category-text`}
                    value={category}
                    onChange={handleCategoryChange}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor={`${idPrefix}link-date`}>
                    Date
                </Label>
                <Input
                    type="date"
                    name="date"
                    id={`${idPrefix}link-date`}
                    value={date}
                    onChange={handleDateChange}
                    required
                />
            </FormGroup>
            <FormGroup className="to-do-row">
                <Label htmlFor={`${idPrefix}link-url`}>
                    Link
                </Label>
                <Input
                    type="url"
                    name="url"
                    id={`${idPrefix}link-url`}
                    value={link}
                    onChange={handleLinkChange}
                    required
                />
            </FormGroup>
            <FormGroup className="to-do-row">
                <Label htmlFor={`${idPrefix}link-description`}>
                    Description
                </Label>
                <Input
                    type="text"
                    name="description"
                    id={`${idPrefix}link-description`}
                    value={description}
                    onChange={handleDescChange}
                    required
                />
            </FormGroup>
            <FormGroup className="to-do-row d-flex flex-wrap">
                <div>
                    <Input
                        type="radio"
                        name="radio-priority"
                        value={PRIORITIES.High}
                        checked={priority === PRIORITIES.High}
                        onChange={handlePriotChange}
                        id={`${idPrefix}priot-high`}
                    />
                    {' '}
                    <Label htmlFor={`${idPrefix}priot-high`} className="me-3">
                        High
                    </Label>
                </div>
                <div>
                    <Input
                        type="radio"
                        name="radio-priority"
                        value={PRIORITIES.Medium}
                        checked={priority === PRIORITIES.Medium}
                        onChange={handlePriotChange}
                        id={`${idPrefix}priot-med`}
                    />
                    {' '}
                    <Label htmlFor={`${idPrefix}priot-med`} className="me-3">
                        Medium
                    </Label>
                </div>
                <div>
                    <Input
                        type="radio"
                        name="radio-priority"
                        value={PRIORITIES.Low}
                        checked={priority === PRIORITIES.Low} 
                        onChange={handlePriotChange}
                        id={`${idPrefix}priot-low`}
                    />
                    {' '}
                    <Label htmlFor={`${idPrefix}priot-low`} className="me-3">
                        Low
                    </Label>
            </div>
            </FormGroup>
            <Button type="submit">
                Submit
            </Button>
            {
                typeof cancelClicked === "function" &&
                <Button
                    type="button"
                    className="ms-3"
                    onClick={cancelClicked}>
                    Cancel
                </Button>
            }
        </Form>
    )
}