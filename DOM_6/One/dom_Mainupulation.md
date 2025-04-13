# DOM Manipulation and Attribute Handling in JavaScript

## Selecting an Element by Its ID

```js
document.getElementById('title');
```

### Explanation:
This selects the HTML element with the ID `title`.

Example HTML element:
```html
<h1 id="title" class="heading">DOM Learning - The Journey towards Success</h1>
```

---
## Getting Attributes

### Get the ID of the Element
```js
document.getElementById('title').id; // Output: 'title'
```

### Incorrect Way to Access Class Name
```js
document.getElementById('title').class; // Output: undefined
```
> `class` is a reserved keyword in JavaScript, so we cannot use it this way.

### Correct Way to Get the Class Name
```js
document.getElementById('title').className; // Output: 'heading'
```

### Alternative Way to Get an Attribute (Recommended)
```js
document.getElementById('title').getAttribute('class'); // Output: 'heading'
```

### Getting the ID Using `getAttribute()`
```js
document.getElementById('title').getAttribute('id'); // Output: 'title'
```

---
## Setting a New Attribute

### Changing the ID of the Element
```js
document.getElementById('title').setAttribute('id', 'main_heading');
```

### Effect on HTML:
Before:
```html
<h1 id="title" class="heading">DOM Learning - The Journey towards Success</h1>
```

After:
```html
<h1 id="main_heading" class="heading">DOM Learning - The Journey towards Success</h1>
```

---
## Accessing Elements After Changing the ID

### Trying to Access the Old ID (Now Invalid)
```js
document.getElementById('title'); // Output: null
```

### Accessing the New ID
```js
document.getElementById('main_heading');
// Output: <h1 id="main_heading" class="heading">DOM Learning - The Journey towards Success</h1>
```

### Incorrect Way of Selecting an Element
```js
document.getElementById('main_heading title');
```
> **Error:** IDs cannot contain spaces. If an ID is mistakenly set as `'main_heading title'`, use `getElementById('main_heading title')`.

---
## Storing an Element in a Variable

### Assigning the Element to a Variable
```js
const title = document.getElementById('main_heading');
```

### Accessing the Stored Element
```js
title;
// Output: <h1 id="main_heading" class="heading">DOM Learning - The Journey towards Success</h1>
```
> Storing the element in a variable allows multiple manipulations without repeatedly calling `document.getElementById()`.

---
## Applying Styles

### Changing the Background Color
```js
title.style.backgroundColor = 'red'; // Background changes to red
```

### Adding Padding
```js
title.style.padding = '20px'; // Adds 20px padding around the text
```

### Adding Rounded Corners
```js
title.style.borderRadius = '5px'; // Rounds the corners with a 5px radius
```

### Modifying the Border Radius
```js
title.style.borderRadius = '50px'; // The corners become more rounded
```

### Changing the Background Color Again
```js
title.style.backgroundColor = 'grey'; // Background changes to grey
```

### Adjusting the Border Radius Again
```js
title.style.borderRadius = '20px'; // The corners are now rounded with a 20px radius
```

---
## Summary
This document explains how to:
- Select an element using `document.getElementById()`.
- Retrieve and modify attributes.
- Store elements in variables for easier manipulation.
- Apply inline styles dynamically using JavaScript.

With these techniques, you can dynamically interact with and manipulate HTML elements using JavaScript efficiently!



------------------------------------------------------------------------------------------------------------------------------------------------

# Understanding `innerHTML`, `innerText`, and `textContent` in JavaScript DOM Manipulation

## JavaScript Code with Explanations

```javascript
// Get the element with ID 'title'
title.innerHTML
// Output: 'DOM Learning - The Journey towards Success <span style="display: none;"> Damn needed!!!</span>'
✅ innerHTML returns the full HTML content inside the element, including any child elements and tags.
✅ If an element contains another HTML tag, it will be included in the output.
⚠️ Be cautious when using innerHTML to modify content, as it can expose security risks (XSS attacks).


title.innerText
// Output: 'DOM Learning - The Journey towards Success'
✅ innerText returns only the visible text inside the element.
✅ It does NOT include hidden elements (e.g., elements with `display: none` or `visibility: hidden`).
✅ It preserves text formatting (like line breaks).
⚠️ If an element inside has `display: none`, its content will NOT be included.


title.textContent
// Output: 'DOM Learning - The Journey towards Success  Damn needed!!!'
✅ textContent returns all text inside the element, including hidden elements.
✅ It does NOT parse or include HTML tags—it only extracts raw text content.
✅ It is faster than innerText because it does not check for visibility styles.
⚠️ If an element contains hidden text, textContent will still return it.
```

## Summary:

| Method         | Returns | Includes Hidden Text? | Parses HTML? |
|---------------|---------|-----------------|------------|
| `innerHTML`   | HTML content (including tags) | No | Yes |
| `innerText`   | Only visible text | No | No |
| `textContent` | All text (visible & hidden) | Yes | No |

## When to Use:
- **Use `innerHTML`** if you need to insert or retrieve HTML content (but be cautious of security risks).
- **Use `innerText`** when you need only the visible text content.
- **Use `textContent`** when you need all text, including hidden elements, and want better performance.

This guide should help clarify when to use each method effectively in your projects!
