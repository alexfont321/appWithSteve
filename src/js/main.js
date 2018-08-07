console.log("hey you guys");
let formManager = require("./journalForm");
let saveJournalEntry = require("./dataManager");


document.querySelector("#form").innerHTML = formManager.createForm();

document.querySelector("#saveEntryButton").addEventListener("click", () => {
    //Get form field values
    // create object from them
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }

    saveJournalEntry(newEntry).then(() => {
        formManager.clearForm()
    })




});

