console.log("hey you guys");
let formManager = require("./journalForm");
let dbCalls = require("./dataManager");
let journalEntry = require("./entryRep");



////////////////must use const $ = require("jquery"); Check steve's branch

document.querySelector("#form").innerHTML = formManager.createForm();

const blogPosts = document.querySelector("#blog-posts");

dbCalls.getJournalEntry()
    .then(response => {
        response.forEach(post => {
            posts = journalEntry(post);
            blogPosts.innerHTML += posts;
        })
    })


///////////////


document.querySelector("#saveEntryButton").addEventListener("click", () => {
    //Get form field values
    // create object from them
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date(Date.now())
    }

    dbCalls.saveJournalEntry(newEntry).then(() => {
        formManager.clearForm()
    })
        .then(() => {
            dbCalls.getJournalEntry()
                .then(response => {
                    blogPosts.innerHTML = "";
                    response.forEach(post => {
                        posts = journalEntry(post);
                        blogPosts.innerHTML += posts;
                    })
                })
        })

});



//////event 


document.body.addEventListener("click", () => {
    if (event.target.className === "delete-button") {
        event.target.parentElement.remove();
        dbCalls.deleteJournalEntry(event.target.id)
    }
})


