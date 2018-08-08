"use strict";

let journalEntry = (entry) => {
    return `<div class="journal-entry--${entry.id}">
                        <h3>${entry.title}</h3>
                        <p>${entry.content}</p>
                        <h5>${entry.date}</h5>
                        <button class="delete-button" id="${entry.id}">Delete Entry</button>
                        </div>`
}

module.exports = journalEntry;