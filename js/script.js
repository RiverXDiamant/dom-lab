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
  const aEl = document.createElement("a");
  aEl.setAttribute("href", menuLinks[i].href);
  aEl.textContent = menuLinks[i].text;
  topMenuEl.append(aEl);
}

// * D. Lab Part 2 ~ Events
// *    1. Select and cache the ~<nav id="sub-menu">~ element in a variable named subMenuEl.
// *    2. Set the height subMenuEl element to be 100%.
// *    3. Set the background color of subMenuEl to the value stored in the --sub-menu-bgCSS custom property.
// *    4. Add the class of (flex-around) to the (subMenuEl) element.

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

// * E.
// *   1. Set the CSS position property of subMenuEl to the value of absolute.
// *   2. Links to an external site.Task 4.5
// *   3. Set the CSS top property of subMenuEl to the value of 0.
// *   4. Update the menuLinks array in script.js

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// * F-a.
// *  1. Select and cache the all of the <a> elements inside of (topMenuEl) in a variable named topMenuLinks. ~done
// *  2. Declare a global (showingSubMenu) variable and initialize it to false; ~ done
// *  3.  Attach a delegated 'click' event listener to topMenuEl.
// *  4. The first line of code of the event listener function should call the event object's preventDefault()method.
// *  6. The second line of code function should immediately return if the element clicked was not an <a> element.
// ! check: Links to an external site.Task 5.2 ~done

// console.log the content of the <a>to verify the handler is working

const topMenuLinks = topMenuEl.querySelectorAll("a"); // <-- returns all element descendants
let showingSubMenu = false;

topMenuEl.addEventListener("click", (evt) => {
  // < --- Element.addEventListener(string, EventListener || EventListenerObject)
  // evt = event

  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    return;
  }
  console.log(evt.target.textContent);

  // * F-b.
  // *  1. Remove the active class from the clicked <a> element.
  // *  2. Set the showingSubMenu to false.
  // *  3. Set the CSS top property of subMenuEl to 0.
  // *  4. return to exit the handler. <----just means 'return'

  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  // * F-c.
  // * 1. Next, the event listener should remove a class name of (active)
  // *    from each <a> element in (topMenuLinks)- whether the active class exists or not.
  // * 2. -Set showingSubMenu to true-
  // *    - if the clicked <a> element's "link" object within menuLinks has a subLinks property
  // * 3.  Next, the event listener should add a class name of active to the <a> element that was clicked.
  //      (all do, except for the "link" object for ABOUT), otherwise, set it to false.
  // ! Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array
  // !       in Task 5.7

  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }

  evt.target.classList.add("active");

  const linkObj = evt.target.textContent; // <---- text of links when event happens
  const linksMenu = menuLinks.find((link) => {
    // <--- stores menuLinks , links in a variable along with settings for those links.
    return link.text === linkObj;
  });

  if (linksMenu === undefined) {
    return;
  }

  if (linksMenu.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  // * F-d.
  // *  1. Code the buildSubMenu function so that it:
  // *  2. Clears the contents of subMenuEl.
  // *  Iterates over the subLinks array passed as an argument; and for each "link" object:
  // * Create an <a> element.
  // * On the new element, add an href attribute with its value set to the href property of the "link" object.
  // *Set the new element's content to the value of the text property of the "link" object.
  // * Append the new element to the subMenuEl element.

  const buildSubMenu = (subLinks) => {
    subMenuEl.innerHTML = "";
    for (let i = 0; i < subLinks.length; i++) {
      const alinks = document.createElement("a");
      alinks.setAttribute("href", subLinks[i].href);
      alinks.textContent = subLinks[i].text;
      subMenuEl.appendChild(alinks);
    }
  };

  if (showingSubMenu) {
    buildSubMenu(linksMenu.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  if (linkObj === "about") {
    mainEl.innerHTML = "<h1>about</h1>";
  }

  // * G ~
  // * Attach a delegated 'click' event listener to subMenuEl.
  // * The first line of code of the event listener function should call the event object's preventDefault()method.
  // * The second line of code function should immediately return if the element clicked was not an <a>element.
  // *console.log the content of the <a>to verify the handler is working.

  subMenuEl.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== "A") {
      return;
    }
  });
  console.log(evt.target.textContent);

  // *  1. Next in the event listener...
  // *  2. If showingSubMenu is true:
  // *  3. Call a buildSubMenu function passing to it the subLinks array for the clicked <a >element.
  // *  4. Set the CSS top property of subMenuEl to 100%.
  // *  Otherwise (showingSubMenu is false):

  // *Set the CSS top property of subMenuEl to 0.
  // * Links to an external site.Task 5.8
  // * Code the buildSubMenu function so that it:

  // * Clears the contents of subMenuEl.
  // * Iterates over the subLinks array passed as an argument; and for each "link" object:

  // *Create an <a> element.
  // * On the new element, add an href attribute with its value set to the href property of the "link" object.
  // * Set the new element's content to the value of the text property of the "link" object.
  // * Append the new element to the subMenuEl element.
});

// console.log(topMenuLinks);
// evt.target.addEventListener("click").classList.add("active");
