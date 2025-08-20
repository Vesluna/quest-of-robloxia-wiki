function openTab(tabName) {
    // Hide all tab content
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove active class from all tab links
    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the selected tab content and add active class to the clicked tab
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}
