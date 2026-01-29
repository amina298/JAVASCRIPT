class person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(this.name, "is walking");
  }
}
class teacher extends person {
  teach() {
    console.log(this.name, "is teaching");
  }
}
const p = new person("Amina");
const t = new teacher("Salma");



class vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    start() {
        console.log("starting");
    }
}
let bike1 = new vehicle("Suzuki", "Bmw", "1340cc");
let bike2 = new vehicle("ninja", "kawasaki", "1900cc");




class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    console.log(this.name + " logged in");
  }
}

class Admin extends User {
  constructor(name, role) {
    super(name);
    this.role = role;
  }

  login() {
    super.login();
    console.log(this.role + " access granted");
  }

  deleteUser() {
    console.log(this.name + " deleted a user");
  }
}

const admin1 = new Admin("Amina", "Admin");

admin1.login();
admin1.deleteUser();
