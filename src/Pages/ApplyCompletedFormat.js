import { useEffect } from 'react';

function showCompleted() {  
  const loopList = JSON.parse(localStorage.getItem("copiedItems"));
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

export default function ApplyCompletedFormat() {
    useEffect(() => {
        showCompleted();
    }, []);

   return [];
}
