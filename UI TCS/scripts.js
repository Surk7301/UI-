document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userType = document.getElementById("userType").value;
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    if (userType === "admin" && userId === "admin" && password === "admin123") {
      showPage("adminPage");
    } else if (
      userType === "underwriter" &&
      userId.startsWith("underWriter") &&
      password === "underwriter123"
    ) {
      showPage("underwriterPage");
    } else {
      alert("Invalid login credentials");
    }
  });

function showPage(pageId) {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("adminPage").classList.add("hidden");
  document.getElementById("underwriterPage").classList.add("hidden");
  document.getElementById(pageId).classList.remove("hidden");
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(
    "#adminPage > div, #underwriterPage > div"
  );
  sections.forEach((section) => section.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
}

// Additional JavaScript for handling underwriter and insurance forms submission should be added here
// This will include capturing form data and updating the relevant data structures
