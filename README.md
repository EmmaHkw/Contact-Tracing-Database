# ICS4U-2-Database-2020
Our second project where we will be using object-oriented programming to develop an interactive database saved in the browser.

## Learning Goals
*I can use my understanding of object-oriented programming and user interaction to create an interactive web-based database.*

I can:
- [ ] Write code that meets specific requirements
- [ ] Clearly describe the function and purpose of code
- [ ] Work effectively with others
- [ ] Solve complex problems by breaking them down into simple steps I can achieve with code
- [ ] Use coding patterns to organize my thoughts and better understand the world

## Context
You will create a functional database that tracks entries, and allows the addition, modification and deletion of entries. This database will be founded on your understanding of objects, properties and methods, and will allow the tracking of real-world events in a way that is useful. You will describe the structure and function of your database (what are created as properties, methods, objects, instances and why) using correct terminology in an updated ReadMe (this file).


## Products of Learning
- [ ] functional code (HTML, CSS, JS), fully commented
- [ ] Explanation of structure of objects/properties and methods created for this database (this file and additional images/files/explanations as needed). [Advanced markdown can be found here.](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)



## Specifications
Your app must:
1. Allow the user to input data in a structured way
2. Present this data to the user in a useful format
3. Present the user with methods to alter the data in some way (delete/modify etc.)
4. Perform some form of useful analysis on the data and display this to the user.

## Rubric

Please see below for specific feedback on your project and learning so far. Please see the classroom for specific success criteria for our project that we will develop together.

| Developing | Learning Goal | Exceeding  |
| ------------- |:-------------:| -----:|
|   -  | Write code that meets specific requirements |     - |
|   -  |Clearly describe the function and purpose of code| -    |
|   -  |Work effectively with others|    - |
|   -  |Solve complex problems by breaking them down into simple steps I can achieve with code|   -  |
|   -  |Use coding patterns to organize my thoughts and better understand the world|  -   |

## Success Criteria
### Knowledge
- All commands have been properly used (no errors, correct input/output of functions)
- No unnecessary lines of code are included
- All technical vocabulary is used consistently and correctly
- New skills have been developed and demonstrated (from online resources)
### Thinking
- Objects, properties and methods have been clearly developed to serve a purpose
- Novel aspects of the project have been carefully planned and developed
### Communication
- Clear comments are used throughout code
- Written description of the structure of the database is has clear explanations and is supported by sketches, images, examples, code or point form notes where appropriate.
### Application
- Database is functional, live on server
- Blog post is live and accessible on server
- Database contains complex storage or analysis of data that demonstrates creativity or development beyond the examples shown in class.
- Database is presented with clear user interface and presentation of data

## Day by day plan
- 2020-10-19 - Development of class structure, adding first data objects
- 2020-10-20 - Saving and retrieving data from local storage
- 2020-10-21 - Async - reflection for recent learning
- 2020-10-22 - Using form input from users to populate data
- 2020-10-23 - Adding analysis of data
- 2020-10-26 - final changes and bug fixes.

# User interface:

1. Input the information of the person you have met in the form. This includes their name, the date of your meeting, whether it is indoors or outdoors, the distance between the two of you, the length of your meeting and whether you both wore masks
2. Press Submit. The information should appear in the table above
3. It is recommended that you add a contact if your meeting fulfills one of these requirements: it lasted for more than 5 minutes, one or both of you did not wear masks or the distance between you was less than 2 meters.
4. If for some reason you want to delete an entry, press the delete button (this action cannot be undone)
5. If you learned that one of your contacts are confirmed with COVID 19, press the Confirm button on their row
6. Answer the window prompt by entering the date when they were confirmed (please use the format YYYY-MM-DD)
7. Read the suggestions on the window prompt and decide what you should do next

Note: The suggestions provided is just a recommendation, please decided your next steps according to your situation



# Explanation of structure of objects/properties and methods

### Requirements:
- [ ] Explanation of structure of objects/properties and methods created for this database (this file and additional images/files/explanations as needed). [Advanced markdown can be found here.](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

![alt text] (https://jamboard.google.com/d/19D9rzOl-BgL0SBzTmMg4gMs4fBZSdyUhDO5FFFjEb0M/edit?usp=sharing)

In this contact tracing database, the object is the contact. The properties of this contact includes their name, the date of your meeting, whether your meeting was inside /outside, the length between you and your contact, the length of your meeting and whether you wore masks. These properties exists because they define what the contact object are. These properties affect the suggestion the database will give you when your contact is confirmed with COVID-19.

To better explain it, let's look at an example. I can create a new instance using the term "new" and including all the input I need (line 46 of my javascript file). This calls the constructor (line 8 of my javascript file), which runs a method in my class. A contact in this database can have a name: "Vicky" (which is a value that is contained in the property), date: "2020-10-27", location: "inside", distance: "2", length: "20", masks "yes".
