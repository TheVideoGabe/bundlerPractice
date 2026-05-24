import "./style.css";
import { homePage, newsPage, menuPage, aboutPage} from "./pages.js"

// Main container elements holding the content
export const mainContainer = document.getElementById("container1");
export const bodyContainer = document.getElementById("content");
// Initialize html on load
homePage()

// Dynamic content changes per button
// Render Landing page Items Button
document.getElementById("homeBtn").addEventListener("click", renderHome);
function renderHome() {
    // Clear any content
    bodyContainer.innerHTML = "";
    // Call landing page HTML
    homePage();
}

// Render menu items button
document.getElementById("menuBtn").addEventListener("click", renderMenu);
function renderMenu() {    
    // clear old tab content
    bodyContainer.innerHTML = "";
    // render menu page
    menuPage()
}

// Render news items button
document.getElementById("newsBtn").addEventListener("click", renderNews);
function renderNews() {    
    // clear old tab content
    bodyContainer.innerHTML = "";
    // render news page
    newsPage()
}

// Render FAQ Items Button
document.getElementById("aboutBtn").addEventListener("click", renderAbout);
function renderAbout() {
    // Clear any content
    bodyContainer.innerHTML = "";
    // Call landing page
    aboutPage();
}