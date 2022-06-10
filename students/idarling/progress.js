var linksClicked = ["linkedInBtn", "gitHubBtn", "soBtn"];

var updateProgress = function () {
    if (linksClicked.includes(this.id)) {
        linksClicked = linksClicked.filter(item => item != this.id)
        let len = linksClicked.length;
        if (len == 0) {
            progress = 100;
        } else {
            progress = 99 - 33 * len;
        }
        document.getElementById("progressLine").innerHTML =
            `<div class="progress-bar bg-success" role="progressbar" style="width: ${progress}%;" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"></div>`
    }
};

Array.from(document.getElementsByClassName("btn btn-outline-dark")).forEach(function (element) {
    element.addEventListener("click", updateProgress);
});
