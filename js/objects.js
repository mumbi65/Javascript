{
    const person1 = {
        firstName: "Caroline",
        lastName: "Gachara",
        age: "20",
        gender: "female"
    }
    const person2 = {
        firstName: "Alvin",
        lastName: "Mwaura",
        age: "23",
        gender: "male"

    }

    console.log(person1.firstName);
    console.log(person2["gender"]);
}

{
    const person = {
        fname: "Ruth",
        lname: "Njambi",
        Age: "40",
        fullDetails: function(){
            console.log (person.fname + " " + person.lname + " " + " age " + person.Age)
        },
        yob: 2000,
        age: function(currentYear){
            return currentYear - person.yob;
        }
    }
    person.fullDetails();
    console.log(person.age(2024))
}

{
    const Person = {
        firstname: "Caroline",
        lastname: "Mumbi",
        gender: "female",
        yob: 2000,
        age: function (currentAge){
            return currentAge - this.yob
        }
    }
    console.log(Person.age(2024))

    console.log(Person.firstname)
    console.log(Person["gender"])
}


{
    const person = {
        fname: "carol",
        lname: "mumbi",
        gender: "female",
        yob: 2000,
        age: function (currentAge){
            return currentAge - this.yob;
        }
    }
    console.log("My name is " + person.fname + " " + person["lname"] + " and my age is " + person.age(2024))
}