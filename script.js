```javascript
/* =========================================================
   JD ACADEMIC PORTFOLIO
   NO DATABASE
   ADD YOUR FILES BELOW
========================================================= */


/* =========================================================
   YOUR ACADEMIC WORKS

   Put your actual files inside:

   files/quiz/
   files/long-quiz/
   files/midterms/
   files/finals/
   files/activities/
   files/projects/

   Then add them here.
========================================================= */

const academicWorks = {

    /* =========================
       QUIZ
    ========================= */

    quiz: [

        {
            title: "Quiz 1",
            description: "My first quiz.",
            file: "files/quiz/quiz-1.pdf"
        },

        {
            title: "Quiz 2",
            description: "My second quiz.",
            file: "files/quiz/quiz-2.pdf"
        },

        /*
        EXAMPLE IMAGE:

        {
            title: "Quiz 3",
            description: "Quiz image.",
            image: "files/quiz/quiz-3.png"
        }
        */

    ],


    /* =========================
       LONG QUIZ
    ========================= */

    longQuiz: [

        {
            title: "Long Quiz 1",
            description: "Long Quiz 1.",
            file: "files/long-quiz/long-quiz-1.pdf"
        },

        {
            title: "Long Quiz 2",
            description: "Long Quiz 2.",
            file: "files/long-quiz/long-quiz-2.pdf"
        }

    ],


    /* =========================
       MIDTERMS
    ========================= */

    midterms: [

        {
            title: "Midterm Examination",
            description: "My Midterm Examination.",
            file: "files/midterms/midterm-exam.pdf"
        }

    ],


    /* =========================
       FINALS
    ========================= */

    finals: [

        {
            title: "Final Examination",
            description: "My Final Examination.",
            file: "files/finals/final-exam.pdf"
        }

    ],


    /* =========================
       ACTIVITIES
    ========================= */

    activities: [

        {
            title: "Activity 1",
            description: "My first academic activity.",
            file: "files/activities/activity-1.pdf"
        },

        {
            title: "Activity 2",
            description: "My second academic activity.",
            file: "files/activities/activity-2.pdf"
        },

        /*
        IMAGE EXAMPLE:

        {
            title: "Activity Image",
            description: "Activity screenshot.",
            image: "files/activities/activity-image.png"
        }
        */

    ],


    /* =========================
       PROJECTS
    ========================= */

    projects: [

        {
            title: "Academic Project 1",
            description: "My academic project.",
            file: "files/projects/project-1.pdf"
        },

        {
            title: "Academic Project Image",
            description: "Project screenshot.",
            image: "files/projects/project-image.jpg"
        }

    ]

};


/* =========================================================
   CATEGORY NAMES
========================================================= */

const categoryNames = {

    quiz: "Quiz",

    longQuiz: "Long Quiz",

    midterms: "Midterms",

    finals: "Finals",

    activities: "Activities",

    projects: "Projects"

};


/* =========================================================
   SHOW CATEGORY
========================================================= */

function showCategory(category, button) {

    const worksGrid =
        document.getElementById("worksGrid");

    const categoryTitle =
        document.getElementById("categoryTitle");

    const workCount =
        document.getElementById("workCount");


    /* Change active button */

    document
        .querySelectorAll(".category-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {
        button.classList.add("active");
    }


    /* Change title */

    categoryTitle.textContent =
        categoryNames[category];


    /* Get works */

    const works =
        academicWorks[category] || [];


    /* Count */

    workCount.textContent =
        works.length +
        (works.length === 1 ? " Work" : " Works");


    /* Clear */

    worksGrid.innerHTML = "";


    /* Empty */

    if (works.length === 0) {

        worksGrid.innerHTML = `

            <div class="empty-message">

                <div class="empty-icon">
                    📁
                </div>

                <h4>
                    No works added yet
                </h4>

                <p>
                    Add your files to the
                    JavaScript list.
                </p>

            </div>

        `;

        return;
    }


    /* Create cards */

    works.forEach((work, index) => {

        const card =
            document.createElement("div");

        card.className = "work-card";

        card.style.animationDelay =
            `${index * 0.08}s`;


        /* =========================
           IMAGE WORK
        ========================= */

        if (work.image) {

            card.innerHTML = `

                <img
                    src="${work.image}"
                    alt="${escapeHTML(work.title)}"
                    class="work-image"
                    loading="lazy"
                >

                <div class="work-info">

                    <h4>
                        ${escapeHTML(work.title)}
                    </h4>

                    <p>
                        ${escapeHTML(work.description || "")}
                    </p>

                    <div class="work-buttons">

                        <a
                            href="${work.image}"
                            target="_blank"
                            class="work-button">
                            View Image
                        </a>

                        <a
                            href="${work.image}"
                            download
                            class="work-button secondary">
                            Download
                        </a>

                    </div>

                </div>

            `;

        }


        /* =========================
           FILE WORK
        ========================= */

        else if (work.file) {

            card.innerHTML = `

                <div class="file-preview">
                    📄
                </div>

                <div class="work-info">

                    <h4>
                        ${escapeHTML(work.title)}
                    </h4>

                    <p>
                        ${escapeHTML(work.description || "")}
                    </p>

                    <div class="work-buttons">

                        <a
                            href="${work.file}"
                            target="_blank"
                            class="work-button">
                            View File
                        </a>

                        <a
                            href="${work.file}"
                            download
                            class="work-button secondary">
                            Download
                        </a>

                    </div>

                </div>

            `;

        }


        worksGrid.appendChild(card);

    });

}


/* =========================================================
   SECURITY HELPER
========================================================= */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   START WITH QUIZ
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    showCategory(
        "quiz",
        document.querySelector(".category-btn")
    );

});
```
