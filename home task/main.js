document.addEventListener("DOMContentLoaded", function() {
    const main_branch_btn = document.getElementById("main-branch");
    const branch_btn = document.getElementById("branch");
    const smart = document.getElementById("smart");
    const otherLists = document.querySelectorAll(".location-list ul li:not(#smart)");

    main_branch_btn.addEventListener("click", function() {
        smart.style.display = "block";
        otherLists.forEach(li => li.style.display = "none");
    });

    branch_btn.addEventListener("click", function() {
        smart.style.display = "none";
        otherLists.forEach(li => li.style.display = "block");
    });
});
