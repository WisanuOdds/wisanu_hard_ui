// JavaScript to toggle the sidebar and move the hamburger icon
const data = [
  {
    "Name": "John Doe",
    "Email": "john@example.com",
    "Joined": "Jan 21, 2020",
    "Type": "New",
    "Status": "Liked"
  },
  {
    "Name": "Kaiden Goodwin",
    "Email": "kaiden@example.com",
    "Joined": "Jan 11, 2020",
    "Type": "Member",
    "Status": "Shared"
  },
  {
    "Name": "Hanna Harris",
    "Email": "hanna@example.com",
    "Joined": "Jan 11, 2020",
    "Type": "New",
    "Status": "Shared"
  },
  {
    "Name": "Magnus Yates",
    "Email": "magnus@example.com",
    "Joined": "Jan 10, 2020",
    "Type": "Member",
    "Status": "Shared"
  },
  {
    "Name": "Sharon Price",
    "Email": "sharon@example.com",
    "Joined": "Jan 10, 2020",
    "Type": "Member",
    "Status": "Liked"
  }
];

const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const search = document.getElementById("search");
const mainContent = document.getElementById("main-content");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  if (window.innerWidth > 1150) {
    sidebar.classList.toggle("active");
    body.classList.toggle("shift");
    hamburger.classList.toggle("active");
    mainContent.classList.toggle("shift");
  }

});

function updateSidebarVisibility() {
  if (window.innerWidth < 1150) {
    sidebar.classList.remove("active");
    body.classList.remove("shift");
    hamburger.classList.remove("active");
    mainContent.classList.remove("shift");
    search.classList.remove("active");
  }
  
}

function generateTableRows() {
  const tbody = document.querySelector('#dataTable tbody');
  tbody.innerHTML = ''; // Clear existing rows
  data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.Name}</td>
          <td>${item.Email}</td>
          <td>${item.Joined}</td>
          <td>${item.Type}</td>
          <td>${item.Status}</td>
      `;
      tbody.appendChild(row);
  });
}


function printViewportWidth() {
  console.log(`Viewport width: ${window.innerWidth}px`);
}
document.addEventListener("DOMContentLoaded", generateTableRows);

// Add event listener for window resize
window.addEventListener('resize', updateSidebarVisibility);

//print viewport width on resize
window.addEventListener('resize', printViewportWidth);

// Initial print when the page loads
printViewportWidth();


