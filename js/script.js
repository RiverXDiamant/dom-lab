// * ========== TASKS ==========

//* A. Cache new element
//*   1. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// *  2. Set content
// *  3. add a class

let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

// * B.
// *   1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// *   2. Set the height topMenuEl element to be 100%.
// *   3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// *   4. Add a class of flex-around to topMenuEl.

let topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// * C
// * Iterate over the entire menuLinks array and for each "link" object:
// *  1. Create an <a> element.
// *  2. On the new element, add an href attribute with its value set to the href property of the "link" object.
// *  3. Set the new element's content to the value of the text property of the "link" object.
// *  4. Append the new element to the topMenuEl element.

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

for (let i = 0; i < menuLinks.length; i++) {
  let aEl = document.createElement("a");
  aEl.setAttribute("href", "menulinks[i].href");
  aEl.textContent = menuLinks[i].text;
  topMenuEl.append(aEl);
}
