// ===============================
// 1. Display Current Date on Home Page
// ===============================

document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("current-date");
    if (dateElement) {
        const today = new Date().toDateString();
        dateElement.textContent = "Today’s Date: " + today;
    }
});

// ===============================
// 2. Show Thank-You Message After Form Submission
// ===============================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ticketForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // stops page refresh
            alert("Thank you! Your ticket form has been submitted successfully.");
            form.reset(); // clears the form
        });
    }
});
