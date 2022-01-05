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
  constructor(firstName, lastName, phoneNumber, grade) {
    this.firtName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.grade = grade;
  }

  introduce() {
    console.log(
      `${this.firtName} ${this.lastName} can be reached at ${this.phoneNumber}`
    );
  }
}

let student = new Student();
student.firtName = "Tommy";
student.lastName = "Smith";

let student1 = new Student("Tom", "Sawyer", "6515296671", "A");
// Tom Sawyer can be reached at 6515296671 --> this should print in the console
let student2 = new Student("Messa", "Vang", "6518081986", "A");
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

/* Inheritance section */
class NotificationSender{
    constructor(status){
        this.status = status;
    }


    // this was moved from the class PromotionSender section
    sendNotification(notification) { 
    console.log("sending: " + notification);
  }


  // this was moved from the class PromotionSender section
  findUsersWithStatus(status) {
    // we want users who meet a specific status, i.e. silver, bronze, gold, etc
    let users = getUsers(status);
    return users;
  }
}


class PromotionSender extends NotificationSender {
  constructor(status) {
    super(status);
  }

  calculateDiscount(status) {
    // to calculate the discount for the promotions we are sending out in the email
    if (status === "Gold") {
      return 0.3;
    } else if (status === "Silver") {
      return 0.15;
    }
    return 0;
  }
}

class CollectionsSender extends NotificationSender {
  constructor(status) {
    super(status);
  }

    // remove these two completely
        //   sendNotification(notification) {
        //     console.log("Sending: " + notification);
        //   }

        //   findUsersWithStatus(status) {
        //     let users = getUsers(status);
        //     return users;
        //   }

  calculateFee(status) {
    if (status === "OVERDUE") {
      return 10;
    } else if (status === "DELIQUENT") {
      return 25;
    }
    return 5;
  }
}



let collectionsSender = new CollectionsSender ("OVERDUE");
collectionsSender.sendNotification('this is a test collections notification.');

/*
- so when we start to notice a pattern like that where we have multiple classes with a lot of the same code 
- then only a little bit of a difference or some difference at all like the calculate discount and calculate fee 
- we can extract that common code into a parent class 
- then inherit that into our children classes 
- that provides us the ability to put the code in one place 
    - we only have to change it in one place which makes maintainability a lot easier 
- see line:  142 or below

class NotificationSender{
    constructor(status){
        this.status = status;
    }
}

class NotificationSender{
    constructor(status){
        this.status = status;
    }


    // this was moved from the class PromotionSender section
    sendNotification(notification) { 
    console.log("sending: " + notification);
  }


  // this was moved from the class PromotionSender section
  findUsersWithStatus(status) {
    // we want users who meet a specific status, i.e. silver, bronze, gold, etc
    let users = getUsers(status);
    return users;
  }
}


class PromotionSender extends NotificationSender {
  constructor() {
    super(status);
  }

  calculateDiscount(status) {
    // to calculate the discount for the promotions we are sending out in the email
    if (status === "Gold") {
      return 0.3;
    } else if (status === "Silver") {
      return 0.15;
    }
    return 0;
  }
}

class CollectionsSender extends NotificationSender {
  constructor() {
    super(status);
  }

    // remove these two completely
        //   sendNotification(notification) {
        //     console.log("Sending: " + notification);
        //   }

        //   findUsersWithStatus(status) {
        //     let users = getUsers(status);
        //     return users;
        //   }

  calculateFee(status) {
    if (status === "OVERDUE") {
      return 10;
    } else if (status === "DELIQUENT") {
      return 25;
    }
    return 5;
  }
}

*/
