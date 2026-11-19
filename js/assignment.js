const assignments = {
    1: {
        title: "Assignment One",
        subtitle: "Academic Assignment 1",
        aim: "Write the objective or aim of your first assignment here.",
        description: "Add the complete description of your first assignment here. Explain what you did, which concepts you used and what the assignment demonstrates.",
        topics: ["Topic 1", "Topic 2", "Topic 3"],
        image: "images/assignment-1.png",
        outcome: "Write what you learned from completing this assignment."
    },

    2: {
        title: "Assignment Two",
        subtitle: "Academic Assignment 2",
        aim: "Write the objective of Assignment 2.",
        description: "Add the detailed description of Assignment 2 here.",
        topics: ["Topic 1", "Topic 2"],
        image: "images/assignment-2.png",
        outcome: "Write the learning outcome of Assignment 2."
    },

    3: {
        title: "Assignment Three",
        subtitle: "Academic Assignment 3",
        aim: "Write the objective of Assignment 3.",
        description: "Add the detailed description of Assignment 3 here.",
        topics: ["Topic 1", "Topic 2"],
        image: "images/assignment-3.png",
        outcome: "Write the learning outcome of Assignment 3."
    },

    4: {
        title: "Assignment Four",
        subtitle: "Academic Assignment 4",
        aim: "Write the objective of Assignment 4.",
        description: "Add the detailed description of Assignment 4 here.",
        topics: ["Topic 1", "Topic 2"],
        image: "images/assignment-4.png",
        outcome: "Write the learning outcome of Assignment 4."
    },

    5: {
        title: "Assignment Five",
        subtitle: "Academic Assignment 5",
        aim: "Write the objective of Assignment 5.",
        description: "Add the detailed description of Assignment 5 here.",
        topics: ["Topic 1", "Topic 2"],
        image: "images/assignment-5.png",
        outcome: "Write the learning outcome of Assignment 5."
    },

    6: {
        title: "Assignment Six",
        subtitle: "Academic Assignment 6",
        aim: "Write the objective of Assignment 6.",
        description: "Add the detailed description of Assignment 6 here.",
        topics: ["Topic 1", "Topic 2"],
        image: "images/assignment-6.png",
        outcome: "Write the learning outcome of Assignment 6."
    },

    7: {
        title: "Assignment Seven",
        subtitle: "Academic Assignment 7",
        aim: "Write the objective of Assignment 7.",
        description: "Add the detailed description of Assignment 7 here.",
        topics: ["Topic 1", "Topic 2"],
        image: "images/assignment-7.png",
        outcome: "Write the learning outcome of Assignment 7."
    }
};


// File name मधून Assignment Number शोधणे

const fileName = window.location.pathname
    .split("/")
    .pop();

const match = fileName.match(/assignment-(\d+)\.html/);

const number = match ? Number(match[1]) : 1;

const data = assignments[number];


// Page वर माहिती दाखवणे

if (data) {

    document.getElementById("assignmentNumber").textContent =
        "ASSIGNMENT " + String(number).padStart(2, "0");

    document.getElementById("assignmentTitle").textContent =
        data.title;

    document.getElementById("assignmentSubtitle").textContent =
        data.subtitle;

    document.getElementById("assignmentAim").textContent =
        data.aim;

    document.getElementById("assignmentDescription").textContent =
        data.description;

    document.getElementById("assignmentOutcome").textContent =
        data.outcome;


    // Topics

    const topicsContainer =
        document.getElementById("assignmentTopics");

    data.topics.forEach(function(topic) {

        const tag = document.createElement("span");

        tag.textContent = topic;

        topicsContainer.appendChild(tag);

    });


    // Image

    const image =
        document.getElementById("assignmentImage");

    image.src = data.image;

    image.onerror = function() {

        this.src =
            "https://placehold.co/900x500/eaf2ff/2563eb?text=Assignment+" + number;

    };

}