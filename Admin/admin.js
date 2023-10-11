// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

    // JavaScript to toggle the dropdown
    const iconDropdown = document.getElementById("iconDropdown");
    iconDropdown.addEventListener("click", function() {
        this.classList.toggle("active");
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".dropbtn")) {
            iconDropdown.classList.remove("active");
        }
    });

// On/Off
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            console.log('Toggle is ON');
        } else {
            console.log('Toggle is OFF');
        }
    });
});





