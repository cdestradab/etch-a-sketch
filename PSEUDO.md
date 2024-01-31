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
            Declare a variable string "size", to determinate the dimension of the squared grid.
            Declare a function "createSquare" to create an individual DIV
                This DIVs will have the class "eas-square"
            Declare a function "buildRow" to create a row made of squares using "createSquare", taking "size" as an input
            Declare a function "buildGrid" to create a series of rows using "buildRow", taking "size" as an input

2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
   Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before.
   (You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.)
    CONSTRAINTS:
        - Set the limit for the user input to a maximum of 100

> EXTRAS:
a. Rather than a color change from black to white, each interaction should randomize the square’s RGB value entirely.
b. Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.