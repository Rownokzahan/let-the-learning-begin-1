const person1 ={
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary:15000,
    getFullName:function(){
        return this.firstName+' '+this.lastName;
    },

    getBonus: function(bonus){
        console.log(this);
        this.salary= this.salary + this.salary*(bonus/100);
        return this.salary;
    }
}
// Person1.getBonus(50);
// console.log(Person1.salary)
const person2 ={
    firstName: 'Kahim',
    lastName: 'Uddin',
    salary:20000,
}

const person3 ={
    firstName: 'Rokon',
    lastName: 'Uddin',
    salary:23000,
}  

// How to use the getbonus method for another object 

/*// using bind function
const person2Bonus = person1.getBonus.bind(person2);
person2Bonus(20);    
const person3Bonus = person1.getBonus.bind(person3);
person3Bonus(20);
*/

/*//using call function
person1.getBonus.call(person3,50); // arguments are seperated by comma
console.log(person3.salary);
*/

// using apply function
person1.getBonus.apply(person2,[50]);// arguments is in a array
