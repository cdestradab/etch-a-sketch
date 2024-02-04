GENERAL OBJECTIVE: Build an "etch-a-sketch" game, whatever it is, following the instructions given by TOP.

1. Create a webpage with a 16x16 grid of square divs.
    CONSTRAINTS:
        - Use javascript only.
        - Use flexbox, not Grid.
        - Create a div container to build the grid inside of it.
    
    PSEUDO:
        - Create basic boilerplate and link css and js files.
        - Create some sections: HEADER, MAIN, FOOTER
        - Create a div with a class "eas-container" to contain the grid
        - In JS:
            OK- Declare a variable string "size", to determinate the dimension of the squared grid.
            OK- Declare a function "createSquare" to create an individual DIV
            OK-     This DIVs will have the class "eas-square"
            OK- Declare a function "buildRow" to create a row made of squares using "createSquare", taking "size" as an input
            OK-     Create a div element "rowContainer" to contain the elements of the row
            OK-     Create n number of squares inside "rowContainer" using "createSquare"
            OK-         LATER: Use a loop to create every square, give it an ID called "cX-rY" where X is the number of the column, and Y is the number of the row"
            OK- Declare a function "buildGrid" to create a series of rows using "buildRow", taking "size" as an input
            
            OK- Make the unitary elements of the grid to fill the dimensions of the grid container, all of them have the same dimensions.
            OK- Make the createGrid() function create grids with a specific dimension from a given input.
            OK- Write all the styles made with the JS scripts in the CSS file instead.

2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
        OK- Create a variable "hoverElement" for a "hover" event, that captures the id of the element.
        OK- Create a function "changeColor" that takes "hoverElement" and a HEX color code as input, and change the background color of the element.

3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
   Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before.
   (You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.)
    CONSTRAINTS:
        - Set the limit for the user input to a maximum of 100

> EXTRAS:
a. Rather than a color change from black to white, each interaction should randomize the square’s RGB value entirely.

