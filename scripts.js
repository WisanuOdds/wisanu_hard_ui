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
  sidebar.classList.toggle("active");
  hamburger.classList.toggle("active");
  search.classList.toggle("active");
  mainContent.classList.toggle("shift");
  body.classList.toggle("shift");

});

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

document.addEventListener("DOMContentLoaded", generateTableRows);




