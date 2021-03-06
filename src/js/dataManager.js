"use strict";

const dbCalls = {};


dbCalls.saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    }).then(response => response.json())
}

dbCalls.getJournalEntry = () => {
    return fetch("http://localhost:8088/entries?_order=desc&_sort=id")
    .then(response => response.json())
}

dbCalls.deleteJournalEntry = (ID) => {
    return fetch(`http://localhost:8088/entries/${ID}`, {
        method: "DELETE"
    }).then(response => response.json())

}

module.exports = dbCalls;


