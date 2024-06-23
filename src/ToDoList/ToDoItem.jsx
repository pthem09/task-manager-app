import React, { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import {
    Button,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    ModalBody
} from "reactstrap";

export default function ToDoItem({
    deleteItem,
    editItem,
    id,
    date,
    category,
    priority,
    link,
    description,
    completed
}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(oldModalState => !oldModalState);

    function handleDelete() {
        deleteItem(id);
    }
    
    function usDateToYyyyMmDd(date) {
        const [M, d, y] = date.split('/');
        return `${y}-${M}-${d}`;
    }

    function updateItem(formattedDate, category, link, description, priority, completed) {
        editItem(id, formattedDate, category, link, description, priority, completed);
        setModal(false);
    }

    function handleComplete() {
        document
            .getElementById(`${id}-header`)
            .classList
            .toggle("completed-task");
        document
            .getElementById(`${id}-footer`)
            .classList
            .toggle("completed-task");
        updateItem(date, category, link, description, priority, !completed)
    }

    return (
        <Card
            className="my-2 to-do-item-container"
            color="secondary"
            inverse>
        <CardHeader
            className={`card-header-footer`}
            id={`${id}-header`}
        >
            <div>
                { category }
            </div>
            <div>
                <Button
                    color="success"
                    className="card-button"
                    onClick={toggle}>
                    🖉
                </Button>
                <Button
                    color="danger"
                    className="card-button delete-button"
                    onClick={handleDelete}>
                        <strong>
                            X
                        </strong>
                </Button>
            </div>
        </CardHeader>
        <CardBody>
            <CardTitle tag="h5">
                { description }
            </CardTitle>
            <CardText>
                Link:&nbsp;
                <a href={link} target="_blank" className="to-do-item-anchor">
                    {link}
                </a>
            </CardText>
            <FormGroup className="to-do-row d-flex flex-wrap" check>
                    <Input
                        type="checkbox"
                        id={`${id}-checkbox`}
                        onClick={handleComplete}
                    />
                    <Label check>
                        Mark complete
                    </Label>
                </FormGroup>
        </CardBody>
        <CardFooter
            className="card-header-footer"
            id={`${id}-footer`}
        >
            {date} (Importance: { priority })
        </CardFooter>
        <Modal isOpen={modal} toggle={toggle} fade={true}>
            <ModalHeader data-bs-theme="dark" className="bg-dark" toggle={toggle}>Edit { category }: { description }</ModalHeader>
            <ModalBody data-bs-theme="dark" className="bg-dark">
                <ToDoForm
                    id={id}
                    defaultDate={usDateToYyyyMmDd(date)}
                    defaultCategory={category}
                    defaultPriority={priority}
                    defaultLink={link}
                    defaultDescription={description}
                    defaultCompleted={completed}
                    submitData={updateItem}
                    cancelClicked={toggle}
                />
            </ModalBody>
        </Modal>
        </Card>
    );
}