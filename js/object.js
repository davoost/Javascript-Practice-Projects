{ // this is a constructor

    function User(name, interests){
        console.log(this);
        this.name = name;
        this.interests = interests;
        this.outputStuff = function(){
            console.log("My name is " + this.name, this.interests);
        } //this way of doing functions is ok, it works
        // but it is memory intensive as creates copies of functions
        //it is better to use prototype
    }
    User.prototype.greet = function(){
        console.log("Hello " + this.name);
    };
// use this to have one method that all the objects have access to 
// in order to save on memory
    let me = new User("Caleb", ["something", "something else"]);
    let someone = new User("David", ["this", "that"]);
    console.log(me);
    console.log(someone);
    me.outputStuff();
    someone.outputStuff();
    me.greet();

    console.log(me instanceof User)
    /*
    function newUser(name, interests){
        let person = {
            name: name,
            interests: interests
        };

        return person;
        //this is a factory function
    }
    //we can use object.setPrototypeof
    //to have inheritance of functions
    */

}
//inheritance:
/*
{
    let user = {
        active: false,
        sayHello: function(){
            return this.name + " says hi!";
        }
    };

    let student = {
        name: "Peasant student",
        major: "English"
    };

    let teacher = {
        name: "Caleb",
        teaching: ["math", "science"],
        sayHello: function(){
            let message = this.name + " teaches ";
            this.teaching.forEach(function(e){
                message += e + " "
            }); //for each subject in teaching add to the message 
            return message;
        }
    };

    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);

    student.active = true;

    let newMembers = [teacher, student];

    newMembers.forEach(function(e){
        console.log(e.sayHello());
    }); //for each member of newMembers make them say hello

    console.log("Name in teacher? ", "name" in teacher);
    console.log("Name in teacher? ", teacher.name !== undefined);
    console.log("Name in teacher? ", teacher.hasOwnProperty("active"));
    //only checks object and not prototype

    let properties = []
    let properties2 = []
    for(let prop in teacher){
        if(teacher.hasOwnProperty(prop)){
            properties2.push(prop);
        }
        properties.push(prop);
    }
    console.log(properties)
    console.log(properties2)
}
*/