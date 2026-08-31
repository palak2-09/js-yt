// ======================================================
// 1. STORE ALL TASKS
// ======================================================

// We create an empty array to store all our tasks.
//
// Why an array?
// Because a to-do list can contain multiple tasks.
//
// Later, it will look something like:
// [
//     { id: 1, text: "Study JS", completed: false },
//     { id: 2, text: "Practice DOM", completed: true }
// ]
//
// JavaScript concepts:
// - Arrays
// - Variables
// - Objects

let tasks = [];


// ======================================================
// 2. GET HTML ELEMENTS FROM THE DOM
// ======================================================

// document.getElementById() finds an HTML element
// using the id that we gave it in index.html.
//
// We store each element in a variable so that
// JavaScript can interact with it later.
//
// For example:
// taskInput refers to:
// <input id="taskInput">

const taskInput = document.getElementById("taskInput");

// This refers to the "Add" button.
const addBtn = document.getElementById("addBtn");

// This refers to the <ul> where our tasks will be displayed.
const taskList = document.getElementById("taskList");

// This refers to the number showing pending tasks.
const taskCount = document.getElementById("taskCount");


// These three variables refer to our filter buttons.

const allBtn = document.getElementById("allBtn");

const pendingBtn = document.getElementById("pendingBtn");

const completedBtn = document.getElementById("completedBtn");


// ======================================================
// 3. ADD A NEW TASK
// ======================================================

// We listen for a "click" event on the Add button.
//
// addEventListener() means:
// "When this particular event happens,
// execute this function."
//
// Here the event is "click".

addBtn.addEventListener("click", function() {

    // Get whatever the user typed inside the input box.
    //
    // .value gives us the value entered by the user.
    //
    // .trim() removes unnecessary spaces from
    // the beginning and end of the text.
    //
    // Example:
    // "   Study JavaScript   "
    //
    // becomes:
    // "Study JavaScript"

    const taskText = taskInput.value.trim();


    // --------------------------------------------------
    // Check whether the user entered anything
    // --------------------------------------------------

    // If the input is empty, we don't want to create
    // an empty task.
    //
    // "" means an empty string.
    //
    // return stops the function immediately.
    //
    // So if the user clicks Add without typing anything,
    // nothing else in this function will execute.

    if (taskText === "") {
        return;
    }


    // --------------------------------------------------
    // Create a task object
    // --------------------------------------------------

    // Instead of storing only the task text,
    // we create an object containing useful information.
    //
    // Example:
    //
    // {
    //     id: 123456,
    //     text: "Study JavaScript",
    //     completed: false
    // }

    const task = {

        // Date.now() gives us the current timestamp.
        //
        // We use it as a simple unique ID for the task.
        // This helps us identify a particular task later,
        // especially when deleting it.

        id: Date.now(),

        // Store the text entered by the user.

        text: taskText,

        // Every new task starts as incomplete.

        completed: false
    };


    // --------------------------------------------------
    // Add the task object to our tasks array
    // --------------------------------------------------

    // push() adds an item to the end of an array.
    //
    // Before:
    // tasks = []
    //
    // After:
    // tasks = [
    //     {
    //         id: 123,
    //         text: "Study JavaScript",
    //         completed: false
    //     }
    // ]

    tasks.push(task);


    // --------------------------------------------------
    // Clear the input box
    // --------------------------------------------------

    // After adding the task, we don't want the old
    // text to remain in the input field.
    //
    // Setting value to "" makes the input empty.

    taskInput.value = "";


    // --------------------------------------------------
    // Display the updated task list
    // --------------------------------------------------

    // We call our displayTasks() function.
    //
    // We pass the complete tasks array to it.
    //
    // This tells the function:
    // "Display all the tasks currently stored in tasks."

    displayTasks(tasks);

});


// ======================================================
// 4. DISPLAY TASKS ON THE WEBPAGE
// ======================================================

// This function is responsible for taking the tasks
// from our JavaScript array and showing them in HTML.
//
// taskArray is a parameter.
//
// We can pass different arrays to this function:
//
// displayTasks(tasks)
// displayTasks(pendingTasks)
// displayTasks(completedTasks)
//
// That's why we use a parameter instead of always
// directly using the tasks array.

function displayTasks(taskArray) {


    // --------------------------------------------------
    // Clear the existing list
    // --------------------------------------------------

    // Every time we display the tasks, we first remove
    // the old HTML from the list.
    //
    // Otherwise, when we call displayTasks() again,
    // the same tasks would be added repeatedly.

    taskList.innerHTML = "";


    // --------------------------------------------------
    // Go through every task
    // --------------------------------------------------

    // forEach() runs the provided function once
    // for every item in the array.
    //
    // If we have 3 tasks, this function runs 3 times.
    //
    // "task" represents the current task.

    taskArray.forEach(function(task) {


        // --------------------------------------------------
        // Create an <li> element
        // --------------------------------------------------

        // document.createElement() creates a new HTML
        // element using JavaScript.
        //
        // This creates:
        //
        // <li></li>
        //
        // But it doesn't appear on the page yet.
        //
        // We'll add it later using appendChild().

        const li = document.createElement("li");


        // --------------------------------------------------
        // Create a <span> for the task text
        // --------------------------------------------------

        // Create:
        //
        // <span></span>

        const taskText = document.createElement("span");


        // Put the actual task text inside the span.
        //
        // If task.text is:
        // "Study JavaScript"
        //
        // then the HTML becomes approximately:
        //
        // <span>Study JavaScript</span>

        taskText.textContent = task.text;


        // --------------------------------------------------
        // Create the Done/Undo button
        // --------------------------------------------------

        // Create:
        //
        // <button></button>

        const completeBtn = document.createElement("button");


        // If the task is already completed,
        // show "Undo".
        //
        // Otherwise show "Done".
        //
        // This is a ternary operator:
        //
        // condition ? valueIfTrue : valueIfFalse

        completeBtn.textContent = task.completed ? "Undo" : "Done";


        // --------------------------------------------------
        // Create the Delete button
        // --------------------------------------------------

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";


        // ==================================================
        // 5. SHOW COMPLETED TASKS DIFFERENTLY
        // ==================================================

        // If the task has been completed,
        // add the CSS class "completed" to its text.
        //
        // Our CSS contains:
        //
        // .completed {
        //     text-decoration: line-through;
        // }
        //
        // So the task will appear crossed out.

        if (task.completed) {

            taskText.classList.add("completed");

        }


        // ==================================================
        // 6. DONE / UNDO BUTTON
        // ==================================================

        // We add a click event to the Done/Undo button.
        //
        // Every task gets its own button and
        // its own event listener.

        completeBtn.addEventListener("click", function() {


            // Toggle the completed status.
            //
            // If completed is false:
            // !false → true
            //
            // If completed is true:
            // !true → false
            //
            // So this single line changes:
            //
            // false → true
            // true  → false

            task.completed = !task.completed;


            // Re-display the tasks.
            //
            // This makes the UI update immediately.
            //
            // For example:
            // "Done" becomes "Undo"
            // and the text gets crossed out.

            displayTasks(tasks);

        });


        // ==================================================
        // 7. DELETE BUTTON
        // ==================================================

        deleteBtn.addEventListener("click", function() {


            // filter() creates a NEW array containing
            // only the elements that satisfy the condition.
            //
            // We want to keep every task EXCEPT
            // the task that the user clicked Delete on.
            //
            // task.id = ID of the task being deleted.
            //
            // item.id = ID of the current task being checked.
            //
            // !== means "not equal".

            tasks = tasks.filter(function(item) {

                return item.id !== task.id;

            });


            // Display the updated array.
            //
            // Since the deleted task is no longer inside
            // the tasks array, it won't appear anymore.

            displayTasks(tasks);

        });


        // ==================================================
        // 8. ADD ELEMENTS TO THE <li>
        // ==================================================

        // Currently our <li> is empty:
        //
        // <li></li>
        //
        // We add the task text to it.

        li.appendChild(taskText);


        // Add the Done/Undo button.

        li.appendChild(completeBtn);


        // Add the Delete button.

        li.appendChild(deleteBtn);


        // ==================================================
        // 9. ADD THE <li> TO THE <ul>
        // ==================================================

        // Finally, add our complete <li> to the
        // <ul id="taskList">.
        //
        // The structure becomes:
        //
        // <ul>
        //     <li>
        //         Study JavaScript
        //         <button>Done</button>
        //         <button>Delete</button>
        //     </li>
        // </ul>

        taskList.appendChild(li);

    });


    // After displaying the tasks,
    // update the pending task count.

    updateTaskCount();

}


// ======================================================
// 10. UPDATE PENDING TASK COUNT
// ======================================================

// This function calculates how many tasks
// are still incomplete.

function updateTaskCount() {


    // filter() creates a new array containing
    // only incomplete tasks.
    //
    // For example:
    //
    // tasks =
    // [
    //     { completed: false },
    //     { completed: true },
    //     { completed: false }
    // ]
    //
    // pendingTasks becomes:
    //
    // [
    //     { completed: false },
    //     { completed: false }
    // ]

    const pendingTasks = tasks.filter(function(task) {

        return task.completed === false;

    });


    // .length tells us how many items are
    // inside the pendingTasks array.
    //
    // Then we display that number in our HTML.

    taskCount.textContent = pendingTasks.length;

}


// ======================================================
// 11. SHOW ALL TASKS
// ======================================================

// When the user clicks "All",
// display the complete tasks array.

allBtn.addEventListener("click", function() {

    displayTasks(tasks);

});


// ======================================================
// 12. SHOW ONLY PENDING TASKS
// ======================================================

pendingBtn.addEventListener("click", function() {


    // Create a new array containing only
    // incomplete tasks.

    const pendingTasks = tasks.filter(function(task) {

        return task.completed === false;

    });


    // Display only those tasks.

    displayTasks(pendingTasks);

});


// ======================================================
// 13. SHOW ONLY COMPLETED TASKS
// ======================================================

completedBtn.addEventListener("click", function() {


    // Create a new array containing only
    // completed tasks.

    const completedTasks = tasks.filter(function(task) {

        return task.completed === true;

    });


    // Display only the completed tasks.

    displayTasks(completedTasks);

});