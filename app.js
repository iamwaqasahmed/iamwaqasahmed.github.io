(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function showNotebook(notebookFilename, projectElement) {
    var notebookContainerId = notebookFilename.replace('.html', '').replace(/\W+/g, "_");
    var notebookContainer = document.getElementById(notebookContainerId);
    
    var allContainers = document.querySelectorAll('.notebook-container');
    allContainers.forEach(container => {
        if (container.id !== notebookContainerId) {
            container.style.display = 'none';
        }
    });
    
    if (notebookContainer.innerHTML.trim() === '') {
        notebookContainer.innerHTML = `<iframe src="${notebookFilename}" width="100%" height="600px"></iframe>`;
    }
    
    notebookContainer.style.display = 'block';
    notebookContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}