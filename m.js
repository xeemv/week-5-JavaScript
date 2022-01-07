/* 
- we're gonna go ahead and create a menu driven app using prompts that allows us to manage teams and players on those 
teams

*/


// create a player that holds the name of the position and describe that player
class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe () {
        return `s${this.name} plays ${this.position}.`;
    }
    // print info about our player and their position using template literal
    
}

// create the team
class Team{
    constructor(name) {
        this.name = name;
       
        this.players = [];
        /* 
        - add an array to hold all the players on that team
        - when a new team is created; there will also be a blank array in a constructor
        */
    }

    /*
    - add a method ==> addPlayer(player){....}
    - this way someone can't pass a just a string/number
    - we're gonna add it to our array, therefore, we want to ensure that it is an actual player itself
        - using "instanceof"
    */
    addPlayer(player){
        if (player instanceof Player) {
            this.players.push(player)
            // this will push = method on the array
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
            // the error in this case is the exception
        }
    }


    /* 
    - add describe method
    - it will do the samething as it did in the player class
    */
    describe(){
        return `${this.name} has ${this.players.length} players.`;
    }
}

// create another class = the menu itself
    // it will drive the application & all the choices
class Menu {
    constructor(){ // no argument
        this.teams = []; 
        /* 
        - initialize our teams & leave array empty
        - can have multiple teams inside the application
        */
        this.selectedTeam = null; 
        // when we start, no teams are selected, therefore using "null"
        
    }

    start() { 
        // start() ---> almost the entry point to the application
        
        let selection = this.showMainMenuOptions();
        /*  
        - "top-down development approach" means:
            - we'll start using methods that don't exist yet to build out our menu by:
                - what we think it is going to look like
                - then implement those methods
        */


                
       while (selection != 0) {
        /*
        - a variable to get user input of what option in our menu the user has selected.
        - 0 = existing
        - creating switches will determine what the user selected and do something based off of it.
        */
            switch (selection){
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
            /*
            - we'll want to place this line code "selection = this.showMainMenuOptions();" here again while the user is still inside of the loop.
            - keep looping as long as the user does not select zero or something other than 1-4.
            */
       }
       alert('Goodbye!'); 
        /*
        - this will alert the user if they did select zero
            - they are now outside of the loop
        */
    }
    /* 
    - this is the flow of the application
    - going to show the menu options that the user is going to select.
    */


    // will implement our methods that we were going to have/show the user.
   showMainMenuOptions(){ 
       return prompt(`
       0) exist
       1) create new team
       2) view team
       3) delete team
       4) display all teams
       `);
       /* 
       - method to show prompt = a pop-up box of what the menu options (switches section) are that will ask the user for input.
       - return is the input that comes back from that prompt
       - used template literals and will not need to concatenate or use newline characters.
            - could place menu items on it and in the prompt, it will appear this way
        - based on what the user select, we will get that number back and do something
       */
   }

   displayTeams(){
       let teamString = '';
       for (let i = 0; i < this.teams.length; i++) { 
        teamString += i + ') ' + this.teams[i].name + '\n';
       }
        /*
        - what this will do is:
            - grab each team
            - get the name for that specific team
            - add a new line so that all the team names will show up w/ an index numbering them w/ their name on a different line
        */
   }
}
 // stopped at 12.42 minute mark on the video