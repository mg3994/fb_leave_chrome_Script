// Function to click the specified icon
function clickLeaveGroupIcon() {
    const icon = document.querySelector('i[data-visualcompletion="css-img"].x1b0d499.xep6ejk[style*="-714px"]');

    if (icon) {
        icon.click();
        console.log("Correct icon clicked.");
        //setTimeout(clickLeaveGroupButton, 3000); // 3-second delay
    } else {
        console.log("Correct icon not found.");
    }
}  // Execute the function
clickLeaveGroupIcon();
