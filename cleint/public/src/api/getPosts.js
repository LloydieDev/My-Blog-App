import API_URL from "./apiConfig.js"; // Import API base URL

export async function getPosts() {
    try {
        const response = await fetch(`${API_URL}/api/posts`); // Fetch from backend

        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); // Convert response to JSON
        console.log("📥 Posts from API:", data); // Debugging API response
        return data;
    } catch (error) {
        console.error("❌ Error fetching posts:", error);
        return [];
    }
}
