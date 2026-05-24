// We can select html elements with querySelector, getElementById, getElementsByClassName, etc. and manipulate them with JavaScript.
const header = document.querySelector("header");

// any of these can be hard coded with "" or dynamically coded with `` and ${} variables
const dynamicVariable = "Hello";

// We can Dynamically change or add the attribute of the header element. Some default attrivutes are class, id, src, href, etc.
header.setAttribute("data-static-attribute", "static value");
// backticks on different arguemnts
header.setAttribute(`data-${dynamicVariable}-attribute`, `${dynamicVariable}}`);
// we could also add these with timers, events, or separate functions that track state.
header.setAttribute("id", "new-id");

// We can access the attributes using dot notation and change them. This is the preferred way to change attributes because it is more efficient and easier to read.
header.className = "new-header-class-2";
header.className = "d-flex justify-content-center py-3";

// We can change the CSS style of the header element with JavaScript. (After style we can access any CSS property and change its value. Inline css)
header.style.backgroundColor = "#05488b";

// Text content use cases. We usually have components that we don't want to change the HTML structure of, but we only want to change the text content of this is also safer for apps. 
const div = document.createElement("div");
div.textContent = "<p><--- This is a paragraph. I ONLY want to display this text. So Tags are visible. ---></p>";

// innerHTML use cases
const div2 = document.createElement("div");
// This is a statically created element. We could define the properties here and add some later
div2.innerHTML = "<p><--- This is a paragraph. Using Inner HTML So you can't see these tags ---></p>";
div2.className = "text-center";
// mainContainer.appendChild(div2);

// Or we can dinamically create HTML elements with variable properties

// dynamic variable use cases
const div3 = document.createElement("div");
div3.textContent = dynamicVariable;
div3.className = "text-center";
// mainContainer.appendChild(div3);

// dynamic variable with innerHTML
const div4 = document.createElement("div");
div4.innerHTML = `<p>${dynamicVariable}</p>`;
div4.className = "text-center";
// mainContainer.appendChild(div4);

// A great example of this would be something like cards that need to be rendered with different data each time

// Like the ones in index.JS for the project