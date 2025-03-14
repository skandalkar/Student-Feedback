
document.getElementById("feedbackForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const feedbackData =
    {
        studentName: document.getElementById("studentName").value,
        rollNumber: document.getElementById("rollNumber").value,

        subjects: {
            subject1: document.getElementById("subject1").value,
            subject2: document.getElementById("subject2").value,
            subject3: document.getElementById("subject3").value,
            subject4: document.getElementById("subject4").value,
            subject5: document.getElementById("subject5").value
        },

        practicals: {
            practical1: document.getElementById("practical1").value,
            practical2: document.getElementById("practical2").value,
            practical3: document.getElementById("practical3").value
        },

        feedbackComments: document.getElementById("feedback").value
    };

    await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData)
    });

    alert("Feedback Submitted!");
});