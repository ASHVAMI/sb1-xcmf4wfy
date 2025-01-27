# Responsive Webpage with Navbar, Sections, Footer, and Responsive JavaScript Logic

This project involves building a responsive webpage with a fixed navbar, collapsible left menu, main content area, right-side panel, and a footer. The webpage also features a JavaScript function that adjusts the page's layout based on screen width.

## Table of Contents

- [Responsive Webpage with Navbar, Sections, Footer, and Responsive JavaScript Logic](#responsive-webpage-with-navbar-sections-footer-and-responsive-javascript-logic)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)

## Features

1. **Fixed Navbar**: The navbar remains fixed at the top of the page, even when scrolling.
2. **Three Sections**:
   - **Left Menu**: A collapsible left menu.
   - **Main Content Area**: The central section for displaying content.
   - **Right-Side Panel**: Additional information or widgets can be placed here.
3. **Footer**: Positioned at the bottom of the page.
4. **Responsive Design**: The page layout dynamically adjusts based on the screen width, following specific shrinkage rules.

## Technologies Used

- **HTML5**: For the webpage structure.
- **CSS3**: For styling the webpage, making the design responsive, and ensuring a fixed navbar.
- **JavaScript**: To implement responsive layout behavior based on screen size.
- **Bootstrap**: For additional responsiveness and styling (optional).

## Setup Instructions

1. Clone this repository:
   git clone https://github.com/yourusername/responsive-webpage.git
   cd responsive-webpage
2. npm Install
3. npm run dev

Open index.html in your preferred browser to view the webpage.

The webpage is fully responsive, and its layout changes based on screen size.

Responsive Design Rules:
The JavaScript function applies different shrinkage rules depending on the screen width:

Between 992px and 1600px: The page shrinks by 90%.
Between 700px and 767px: The page shrinks by 80%.
Between 600px and 700px: The page shrinks by 75%.
Less than or equal to 600px: The page shrinks by 50%.

Collapsible Left Menu:
The left menu is collapsible, allowing users to expand or collapse it for more screen space.

How to Toggle Left Menu:
Click the toggle button at the top of the left menu to collapse or expand it.
This feature is implemented using basic JavaScript and CSS transitions.

JavaScript Logic for Responsive Layout:
The following JavaScript logic is used to adjust the page's width based on the screen size:

function adjustLayout() {
    const width = window.innerWidth;
    const body = document.body;

    if (width >= 992 && width <= 1600) {
        body.style.transform = 'scale(0.9)';
    } else if (width >= 700 && width <= 767) {
        body.style.transform = 'scale(0.8)';
    } else if (width >= 600 && width < 700) {
        body.style.transform = 'scale(0.75)';
    } else if (width <= 600) {
        body.style.transform = 'scale(0.5)';
    } else {
        body.style.transform = 'scale(1)';
    }
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);

The function adjustLayout() is triggered whenever the window is resized or loaded.
It checks the current screen width and applies the appropriate scaling to the webpage.

License:
This project is licensed under the MIT License. See the LICENSE file for details.


Developed by Ashvani S !!!!!!!!

