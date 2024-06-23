import React, { useState, useEffect } from 'react';
import { Button } from "reactstrap";
import { nanoid } from 'nanoid';
import Timer from '../Timer/Timer';
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';
import ApplyCompletedFormat from './ApplyCompletedFormat';

const LIST_FILTER = {
  All: "All",
  Complete: "Completed",
  Pending: "In progress",
}

export default function Home() {
  let [toDoItems, setToDoItems] = useState(getInitialState());
  let [filteredItems, setFilteredItems] = useState(getInitialCopiedState());
  let [filterChoice, setFilterChoice] = useState(getInitialFilterChoice());

  useEffect(saveToDoItems, [toDoItems]);
  useEffect(saveCopiedItems, [filteredItems]);
  useEffect(saveFilterChoice, [filterChoice]);

  function saveToDoItems() {
    localStorage.setItem("items", JSON.stringify(toDoItems));
  }
  
  function saveCopiedItems() {
    localStorage.setItem("copiedItems", JSON.stringify(filteredItems));
  }

  function saveFilterChoice() {
    localStorage.setItem("appliedFilter", JSON.stringify(filterChoice));
  }
  
  function getInitialState() {
    let savedState = localStorage.getItem("items");
    if (typeof savedState === "string") {
      return JSON.parse(savedState);
    }
    return [];
  }

  function getInitialCopiedState() {
    let savedCopiedState = localStorage.getItem("copiedItems");
    if (typeof savedCopiedState === "string" && savedCopiedState.length > 0) {
      return JSON.parse(savedCopiedState);
    }
    return [];
  }

  function getInitialFilterChoice() {
    let savedFilter = localStorage.getItem("appliedFilter");
    if (typeof savedFilter === "string") {
      return JSON.parse(savedFilter);
    }
    return "All";
  }

  function addItem(date, category, link, description, priority, completed) {
    
    let newId = nanoid();

    setToDoItems((oldItems) => [
      ...oldItems,  
      {
        id: newId,
        date,
        category,
        description,
        link,
        priority,
        completed
      },
    ]);
  
    setFilteredItems((oldItems) => [
      ...oldItems,  
      {
        id: newId,
        date,
        category,
        description,
        link,
        priority,
        completed
      },
    ]);
  }

  function editItem(id, newDate, newCategory, newLink, newDescription, newPriority, newCompleted) {
    setToDoItems((oldItems) =>
      oldItems.map((item) => {
        if (item.id === id) {
          return {
            id,
            date: newDate,
            category: newCategory,
            description: newDescription,
            link: newLink,
            priority: newPriority,
            completed: newCompleted
          };
        } else {
            return item;
        }
      })
    );

    setFilteredItems((oldItems) =>
      oldItems.map((item) => {
        if (item.id === id) {
          return {
            id,
            date: newDate,
            category: newCategory,
            description: newDescription,
            link: newLink,
            priority: newPriority,
            completed: newCompleted
          };
        } else {
            return item;
        }
      })
    );
  }
  
  function deleteItem(id) {
    setToDoItems((oldItems) =>
       oldItems.filter((item) => item.id !== id)
    );
    setFilteredItems((oldItems) =>
      oldItems.filter((item) => item.id !== id)
   );
  }

  function filterAll() {
    document
      .getElementById("all-tasks")
      .classList
      .add("task-filter-selected");
    document
      .getElementById("pending-tasks")
      .classList
      .remove("task-filter-selected");
    document
      .getElementById("finished-tasks")
      .classList
      .remove("task-filter-selected");
    updateFilteredList("All");
  }

  function filterPending() {
    document
      .getElementById("all-tasks")
      .classList
      .remove("task-filter-selected");
    document
      .getElementById("pending-tasks")
      .classList
      .add("task-filter-selected");
    document
      .getElementById("finished-tasks")
      .classList
      .remove("task-filter-selected");
    updateFilteredList("Pending");
  }

  function filterComplete() {
    document
      .getElementById("all-tasks")
      .classList
      .remove("task-filter-selected");
    document
      .getElementById("pending-tasks")
      .classList
      .remove("task-filter-selected");
    document
      .getElementById("finished-tasks")
      .classList
      .add("task-filter-selected");
    
    updateFilteredList("Complete");
  }

  function updateFilteredList(choice) {
    if (choice === "All") {
      setFilterChoice("All");
      setFilteredItems(toDoItems);
    } else if (choice === "Pending") {
      setFilterChoice("Pending");
      setFilteredItems(toDoItems.filter((item) => !item.completed));
    } else {
      setFilterChoice("Completed");
      setFilteredItems(toDoItems.filter((item) => item.completed));
      
    }
  }

  return (
    <div>
      <header>        
      <h1>Keep tabs on your tasks</h1>
      <h2>without needing hundreds of tabs!</h2>
      <Timer />
    </header>
    <main>
    <ToDoForm submitData={addItem} />

    <div>
      <Button
        color="primary"
        className="task-filter-pill task-filter-selected"
        id="all-tasks"
        onClick={filterAll}
      >
        { LIST_FILTER.All }
      </Button>
      {' '}
      <Button
        color="primary"
        className="task-filter-pill"
        id="pending-tasks"
        onClick={filterPending}
      >
        { LIST_FILTER.Pending }
      </Button>
      {' '}
      <Button
        color="primary"
        className="task-filter-pill"
        id="finished-tasks"
        onClick={filterComplete}
      >
        { LIST_FILTER.Complete }
      </Button>
      {' '}
    </div>

    <ToDoList
        toDoItems={filteredItems}
        deleteItem={deleteItem}
        editItem={editItem}
      />
      <ApplyCompletedFormat />
    </main>
  </div>
  )
}