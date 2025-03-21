import { getPosts } from "../api/getPosts.js";

export async function loadHomePage() {
    try {
        const postContent = document.getElementById("post-content");
        if (!postContent) {
            console.error("Error: Element with id 'post-contain' not found!");
            return;
        }

        const posts = await getPosts();
        console.log("Posts from API:", posts); // Debugging: Check if data is received

        // Generate HTML for each post
        postContent.innerHTML = posts.map(post => `
            <div class="post-content">
                <h3 class="post-content-title">${post.title}</h3>
                <p class="post-content-content">${post.content}</p>
                <p class="post-content-author"> Author:${post.author || "Unknown Author"}</p>
                <p class="post-content-time-added">Date published: ${post.date || "No Date Provided"}</p>
                <div class="btn-post-content">
                    <button class="edit-post-btn">Edit</button>
                    <button class="remove-post-btn">Remove</button>
                </div>
            </div>
        `).join("");

    } catch (error) {
        console.error("Error loading posts:", error);
    }
}
