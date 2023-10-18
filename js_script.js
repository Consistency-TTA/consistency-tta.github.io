function saveRating(rating, thing, aspect) {
    // Construct the key for localStorage
    let key = thing + '-' + aspect;

    // Save the rating to localStorage
    localStorage.setItem(key, rating);

    // Reset color of all buttons for the current thing and aspect
    let buttons = document.querySelectorAll('#' + key + ' .eval_rating_button');
    buttons.forEach(button => button.classList.remove("clicked"));

    // Change color of clicked button
    let button = buttons[rating - 1];
    button.classList.add("clicked");

    // Display message
    let messageElement = document.getElementById("message-" + key);
    messageElement.textContent = "The rating of " + rating + " has been received.";
}


function clearRatings() {
    // Confirm with the user before clearing ratings
    if (confirm("Are you sure you want to clear all ratings?")) {
        // Clear all data from localStorage
        localStorage.clear();

        // Reset all button colors
        let buttons = document.querySelectorAll('.eval_rating_button');
        buttons.forEach(button => button.classList.remove("clicked"));

        // Clear all messages
        let messages = document.querySelectorAll('[id^="message-"]');
        messages.forEach(messageElement => messageElement.textContent = "");

        alert("All ratings have been cleared.");
    }
}


// When the page loads, retrieve ratings from localStorage (if any) and update button colors
document.addEventListener('DOMContentLoaded', function() {
    let things = ['thing1']; // Add other things to this array
    let aspects = ['aspect1']; // Add other aspects to this array
    
    things.forEach(thing => {
        aspects.forEach(aspect => {
            let rating = localStorage.getItem(thing + '-' + aspect);
            if (rating) {
                let buttons = document.querySelectorAll(
                    '#' + thing + '-' + aspect + ' .eval_rating_button'
                );
                buttons[rating - 1].classList.add("clicked");
            }
        });
    });
});


function downloadLocalStorageData(name) {
    // Create a CSV string
    let csvContent = "Index,Aspect,Rating\n";

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        let [thing, aspect] = key.split('-');
        csvContent += thing + "," + aspect + "," + value + "\n";
    }

    // Create a blob from the CSV string
    let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

    // Create a download link and trigger it
    let link = document.createElement("a");
    let url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", name + ".csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Function to set button colors based on localStorage values
function setButtonColorsFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let rating = localStorage.getItem(key);

        let buttons = document.querySelectorAll('#' + key + ' .eval_rating_button');
        buttons.forEach(button => button.classList.remove("clicked"));  // Reset all button colors
        buttons[rating - 1].classList.add("clicked");  // Set the color of the rated button
    }
}

// Event listener to execute the function when the content is loaded
document.addEventListener('DOMContentLoaded', setButtonColorsFromLocalStorage);

function copyToClipboard(elementId) {
    let element = document.getElementById(elementId);
    let range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    alert("BibTeX copied to clipboard!");
}
