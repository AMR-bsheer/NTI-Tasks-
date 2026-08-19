const url ="https://teams.microsoft.com/l/message/19:meeting_NGFhOTA3ZjctOTI2NC00ZTUwLTk5MGYtMzBhYTk3MWFhY2Yw@thread.v2/1787061566101?context=%7B%22contextType%22%3A%22chat%22%7D"
const loadBtn = document.getElementById("loadBtn");
const postsContainer = document.getElementById("postsContainer");

loadBtn.addEventListener("click", () => {

    // 1) Create instance
    const xhr = new XMLHttpRequest();

    // 2) Prepare request
    xhr.open("GET", URL);

    // 3) Listen for load
    xhr.addEventListener("load", () => {

        if (xhr.status >= 200 && xhr.status < 300) {

            let posts = [];

            try {
                posts = JSON.parse(xhr.responseText);
            } catch {
                console.error("Failed to parse JSON");
            }

            // Clear old posts
            postsContainer.innerHTML = "";

            // Render posts using Bootstrap cards
            posts.slice(0, 6).forEach((post) => {

                const col = document.createElement("div");
                col.className = "col-md-6 col-lg-4";

                col.innerHTML = `
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text text-muted">${post.body}</p>
                        </div>
                    </div>
                `;

                postsContainer.appendChild(col);
            });

        } else {

            console.error(
                "Request failed with status:",
                xhr.status
            );
        }
    });

    xhr.send();
});