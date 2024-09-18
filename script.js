"use strict";
//* Get form and resume div elements
const form_submit = document.getElementById("resume-form");
const resume_generate = document.getElementById("generated-resume");
//* Form submission event listener
form_submit.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    //* Capture input values
    const user_name = document.getElementById("name").value;
    const user_email = document.getElementById("email")
        .value;
    const user_phone = document.getElementById("phone")
        .value;
    const user_education = document.getElementById("education").value;
    //* Check if all fields are filled
    const user_experience = document.getElementById("experience").value;
    const user_skills = document.getElementById("skills")
        .value;
    const resume_html = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Info</h3>
    <p><b>Name:</b> <span contenteditable = "true">${user_name}</span></p>
    <p><b>Email:</b> <span contenteditable = "true">${user_email}</span></p>
    <p><b>Phone No:</b> <span contenteditable = "true">${user_phone}</span></p>

    
    <h3>Education</h3>
    <p contenteditable = "true">${user_education}</p>

    <h3>Experience</h3>
    <p contenteditable = "true">${user_experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable = "true">${user_skills}</p>
  `;
    //* Show the generated resume in the "generated_resume" div
    if (resume_generate) {
        resume_generate.innerHTML = resume_html;
    }
    else {
        console.error("resume_generate element not found");
    }
});
