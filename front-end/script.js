document.getElementById("feedbackForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const feedbackData = {
        studentName: document.getElementById("studentName").value,
        rollNumber: document.getElementById("rollNumber").value,
        subjects: { subject1: document.getElementById("subject1").value, subject2: document.getElementById("subject2").value }
    };

    await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData)
    });

    alert("Feedback Submitted!");
});
