//object creator
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
};
console.log(`person is ${JSON.stringify(person)}`)
console.log(`${person.name[0]} is ${person.age} years old`);
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."


//constructor returns an object
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}

//uses the constructor to create a person calle Salva
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

//uses the constructor to create a person calle Frankie
const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."

const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
};
  
myObject.greet(); // Greetings from Madrid

//to have Person1 extend animal you would need to move animal above person1
//you would also need to add a constructor in animal and call it in person1
//I can't be fucked right now so just know it works in theory
//the sintax is just extends ___
class Person1 {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }

  const giles = new Person1("Giles");

  giles.introduceSelf(); // Hi! I'm Giles


  class Animal {
    sleep() {
      console.log("zzzzzzz");
    }
  }
  
  const spot = new Animal();
  
  spot.sleep(); // 'zzzzzzz'
