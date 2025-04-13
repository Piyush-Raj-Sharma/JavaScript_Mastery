// -------------------- jQuery 'on' alternative in JS --------------------

// In vanilla JavaScript, we use `addEventListener` to listen for events, similar to how jQuery uses `.on()`
// Syntax: document.addEventListener('eventType', callback, useCapture)

// `useCapture` (true or false) determines whether the event will be captured during the **capturing phase** or **bubbling phase**

// -------------------- Event Object Properties --------------------

// When an event occurs, an event object (`e`) is passed to the event handler containing useful properties:
// - type: The type of event (e.g., "click", "keydown")
// - timestamp: Time at which the event occurred
// - defaultPrevented: Boolean indicating if `preventDefault()` was called
// - target: The actual element that triggered the event
// - currentTarget: The element on which the event listener is registered
// - clientX/clientY: Mouse coordinates relative to the viewport
// - screenX/screenY: Mouse coordinates relative to the screen
// - altKey, ctrlKey, shiftKey: Booleans indicating if these keys were held
// - keyCode: Code of the key pressed (for keyboard events)

// -------------------- Event Propagation --------------------

// There are **two main phases** of event propagation:
// 1. **Capturing Phase** (top to bottom) — if `useCapture` is `true`
// 2. **Bubbling Phase** (bottom to top) — if `useCapture` is `false` (default)

// ----------- Event Bubbling Example (false - bottom to top) -----------
document.querySelector("ul").addEventListener(
    "click",
    function (e) {
      console.log("clicked on the UL");
      // e.stopPropagation(); // Uncomment to stop the event from bubbling further
    },
    false // Event will bubble from child to parent (default behavior)
  );
  
  document.querySelector("#three").addEventListener(
    "click",
    function (e) {
      console.log("clicked on the list Item");
    },
    false
  );
  
  // Output when list item #three is clicked:
  // clicked on the list Item
  // clicked on the UL
  
  // ----------- Event Capturing Example (true - top to bottom) -----------
  document.querySelector("ul").addEventListener(
    "click",
    function (e) {
      console.log("clicked on the UL");
      // e.stopPropagation(); // Stops capturing or bubbling based on phase
    },
    true // Event will capture from parent to child
  );
  
  document.querySelector("#three").addEventListener(
    "click",
    function (e) {
      console.log("clicked on the list Item");
    },
    true
  );
  
  // Output when list item #three is clicked:
  // clicked on the UL
  // clicked on the list Item
  

  // -------------------- e.preventDefault() --------------------

// 🔸 What is it?
// e.preventDefault() is a method available on the event object (e) in JavaScript.
// It is used to stop the browser's default action for a specific event.

// 🔸 Why is it useful?
// Sometimes we want to run our custom code instead of the default behavior provided by the browser.
// For example:
//   - Preventing a form from actually submitting (so the page doesn't reload).
//   - Preventing a link <a> from navigating to a new page.
//   - Preventing drag-and-drop default actions.

// 🔸 When do we use it?
// Anytime the default action of an HTML element would interfere with your custom logic or behavior.

// ------------------ EXAMPLES ------------------

// ✅ Example 1: Preventing a form submission
// document.querySelector("form").addEventListener("submit", function (e) {
//     e.preventDefault(); // Stops the form from submitting
//     console.log("Form submission prevented. You can handle it via JS now.");
//   });
  
//   // ✅ Example 2: Preventing a link from navigating
//   document.querySelector("a").addEventListener("click", function (e) {
//     e.preventDefault(); // Stops navigation to the href
//     console.log("Link click prevented. You can handle navigation via JS.");
//   }); 
  
//   // ✅ Example 3: Preventing right-click menu
//   document.addEventListener("contextmenu", function (e) {
//     e.preventDefault(); // Disables right-click context menu
//     console.log("Right-click disabled on this page.");
//   });
  
  
// -------------------------REMOVE ELEMENT----------------------------------------

document.querySelector('ul').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    let removeIt = e.target.parentNode;
    removeIt.remove();
    // removeIt.parentNode.removeChile(removeIt);
})