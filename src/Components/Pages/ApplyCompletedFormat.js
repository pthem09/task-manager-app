import { useEffect } from 'react';

function showCompleted() {  
  const loopList = JSON.parse(localStorage.getItem("copiedItems"));
    if (loopList !== null && typeof loopList === "string") {  
      if (loopList.length > 0) {
          for (let item of loopList) {
            if (item.completed) {
              document
              .getElementById(`${item.id}-header`)
              .classList
              .add("completed-task");
          document
              .getElementById(`${item.id}-footer`)
              .classList
              .add("completed-task");
          document
              .getElementById(`${item.id}-checkbox`)
              .checked = true;
        }
      }
      }
    }
  }

  function highlightFilter() {
    const currFilter = JSON.parse(localStorage.getItem("appliedFilter"));

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
      .remove("task-filter-selected");

    if (currFilter === "All") {
      document
        .getElementById("all-tasks")
        .classList
        .add("task-filter-selected");
    } else if (currFilter === "Pending") {
      document
        .getElementById("pending-tasks")
        .classList
        .add("task-filter-selected");
    } else {
        document
          .getElementById("finished-tasks")
          .classList
          .add("task-filter-selected");
    }

  }

export default function ApplyCompletedFormat() {
    useEffect(() => {
        showCompleted();
        highlightFilter();
    }, []);

   return [];
}