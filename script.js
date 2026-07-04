let issues = [];

fetch("issues.json")
.then(response => response.json())
.then(data => {

    issues = data;

    document.getElementById("count").textContent = issues.length;

    displayIssues(issues);

})
.catch(error => {

    console.log(error);

});

function displayIssues(data){

    const container = document.getElementById("issues");

    container.innerHTML = "";

    data.forEach(issue => {

        container.innerHTML += `

        <div class="card">

            <h2>${issue.title}</h2>

            <p><b>Category:</b> ${issue.category}</p>

            <p><b>Location:</b> ${issue.location}</p>

            <p><b>Reported By:</b> ${issue.reportedBy}</p>

            <p><b>Status:</b> ${issue.status}</p>

            <p><b>Votes:</b> ${issue.votes}</p>

        </div>

        `;

    });

}

function searchIssue(){

    const searchText =
    document.getElementById("search")
    .value
    .toLowerCase();

    const filtered = issues.filter(issue =>

        issue.location
        .toLowerCase()
        .includes(searchText)

    );

    displayIssues(filtered);

}

function pending(){

    const filtered = issues.filter(issue =>

        issue.status === "Pending"

    );

    displayIssues(filtered);

}

function resolved(){

    const filtered = issues.filter(issue =>

        issue.status === "Resolved"

    );

    displayIssues(filtered);

}

function progress(){

    const filtered = issues.filter(issue =>

        issue.status === "In Progress"

    );

    displayIssues(filtered);

}

function showAll(){

    displayIssues(issues);

}
