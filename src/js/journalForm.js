"use strict";

const formManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = "";
            document.querySelector("#entryContent").value = "";
        }
    },
    createForm: {
        value: () => {
            let form = `<fieldset>
                    <label for="entryTitle">Title:</label>
                    <input required type="text" id="entryTitle">
                </fieldset>
                <fieldset>
                    <label for="entryContent">Deep Thoughts:</label>
                    <input required id="entryContent">
                </fieldset>
                <button id="saveEntryButton">Save Journal Entry</button>`
           return form
        }
    }
})

module.exports = formManager;

// function clearForm () {
//     document.querySelector("#entryTitle").value = "";
//     document.querySelector("#entryContent").value = "";
// }


// function createForm () {
//     let form = `<fieldset>
//                     <label for="entryTitle">Title:</label>
//                     <input required type="text" id="entryTitle">
//                 </fieldset>
//                 <fieldset>
//                     <label for="entryContent">Deep Thoughts:</label>
//                     <input required id="entryContent">
//                 </fieldset>
//                 <button id="saveEntryButton">Save Journal Entry</button>`
//     return form
// }
