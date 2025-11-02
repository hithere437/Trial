// Name checking
function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  const errorMsg = document.getElementById("errorMsg");

  const correctName = "fatah";

  if (input === correctName) {
    
    localStorage.setItem("access", "granted");
    window.location.href = "choice.html";
  } else {
    errorMsg.textContent = "❌ Incorrect name, try again!";
  }
}

// Navigation
function goTo(page) {
  if (localStorage.getItem("access") === "granted") {
    window.location.href = page;
  } else {
    alert("Access denied!");
    window.location.href = "index.html";
  }
}



