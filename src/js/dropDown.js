const dropdown = document.getElementById('dropdown');
const dropdownProfile = document.getElementById('dropdown-profile');

function toggleDropdown(element) {
    element.style.display = (element.style.display == "none") ? "block" : "none";
}

function closeDropdown() {
    dropdown.style.display = "none";
    dropdownProfile.style.display = "none";
}

// Add an event listener to the window to close dropdowns on outside click
window.addEventListener('click', function(event) {
    const target = event.target;
    
    // Check if the clicked target is not within the dropdown or dropdownProfile
    if (target !== dropdown && !dropdown.contains(target) &&
        target !== dropdownProfile && !dropdownProfile.contains(target)) {
        closeDropdown();
    }
});

// Prevent the click event propagation from closing the dropdown when clicking inside it
dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Prevent the click event propagation from closing the dropdownProfile when clicking inside it
dropdownProfile.addEventListener('click', function(event) {
    event.stopPropagation();
});
