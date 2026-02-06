const users = {
  appName: "Task Manager",
  version: 1.0,
  users: [
    {
      id: 1,
      name: "Amina",
      age: 25,
      isAdmin: true,
      tasks: [
        { id: 101, title: "Learn JavaScript", completed: true },
        { id: 102, title: "Practice CSS", completed: false }
      ]
    },
    {
      id: 2,
      name: "Salma",
      age: 22,
      isAdmin: false,
      tasks: [
        { id: 103, title: "Read HTML", completed: true },
        { id: 104, title: "Try Flexbox", completed: false }
      ]
    }
  ]
};
// converting js object to json 
const jsonString = JSON.stringify(users, null, 2);
console.log(jsonString);
