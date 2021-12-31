/*
Object-Oriented Programming


DVD:
-------
Height
Weight
Width
Color

Functionality of a DVD Player:
-----
Play
Fast Forwarded
Rewind
Pause

The attributes and functionality make up the description of the object, the dvd player

DVD attributes:
-----
Movie Length
Image
Size
*/


/* 
Class section:
*/


// class Student {
//     constructor(){
//         this.firtName = "Xee";
//         this.lastName = "Vang";
//         this.phoneNumber = "65115296671";
//         this.grade = "A";
//     }
// }

/* 
- it is recommended that our class(es) follow a Pascal case naming convention:
    - which means the first letter of each word is capitalized 
    - instead of the first letter of the first word being lowercase

- Constructor = add properties or variables to our class by creating a special method 
    - going to go ahead and put some opening w/everything between the opening and the closing curly braces here will be our class 
        - it will be the blueprint we are creating to build objects from  
        - our constructor we're gonna use the constructor keyword
- class should be dynamic we want it to be almost a blank slate 
	- so that when we create an instance of that class, an object 
    - from that class, we can assign those values so 


to do this: the code below will make it dynamic
class Student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firtName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }
}

-  instead of assigning a literal value 
- we assign the value that comes in from the argument 
*/

class Student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firtName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce(){
        console.log(`${this.firtName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student = new Student();
student.firtName = 'Tommy';
student.lastName = 'Smith';


let student1 = new Student('Tom', 'Sawyer', '6515296671', 'A');
// Tom Sawyer can be reached at 6515296671 --> this should print in the console
let student2 = new Student('Messa', 'Vang', '6518081986', 'A');
// Messa Vang can be reached at 6518081986 --> this should print in the console

student1.introduce();
student2.introduce();

/*
- introduce is used instead of function
    - we just give our method a name 
    - then declare what our method is going to do 

- notice how we're calling it a method instead of a function again that's 
	– because a method is a function that belongs to an object or a class
    - it's not a standalone object itself it belongs to this class 
    - so the introduce could log out some information about the properties of our student


    class Student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firtName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce(){
        console.log(`${this.firtName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student = new Student();
student.firtName = 'Tommy';
student.lastName = 'Smith';

- it's nice to use the parameters here and assign our values instead of assigning them one at a time 
	– the reason is because this is a lot more efficient 
    - so this is what it would look like if we didn't have any parameters here
    - see line 121 - 123




let student1 = new Student('Tom', 'Sawyer', '6515296671', 'A');
// Tom Sawyer can be reached at 6515296671 --> this should print in the console
let student2 = new Student('Messa', 'Vang', '6518081986', 'A');
// Messa Vang can be reached at 6518081986 --> this should print in the console

student1.introduce();
student2.introduce();
*/