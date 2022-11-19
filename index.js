let peopleList = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
// Task 1
const convertAgeToInteger = (obj) => {
  obj.age = Number(obj.age);
  return obj;
};
peopleList = peopleList.map(convertAgeToInteger);

// Task 2 : Change John Age

let updatedArray = [];
peopleList.forEach((val) => {
  if (val.name === "john") {
    val.age = 19;
  }
  updatedArray.push(val);
});

// Task 3 : Filter Functionality

let list = document.querySelector(".list");

const displayList = (newArray) => {
  // map each element and append node
  newArray.forEach((item, index) => {
    let newNode = document.createElement("li");
    newNode.innerHTML = `${index + 1}. Name: ${
      newArray[index].name
    } Profession: ${newArray[index].profession} Age:   ${newArray[index].age}`;
    list.appendChild(newNode);
  });
};
// Display list at inital load
displayList(updatedArray);

const clearListElements = () => {
  while (list.firstChild) list.removeChild(list.firstChild);
};

const filterList = (e) => {
    e.preventDefault();
  let filterValue = document.getElementById('filterBox').value;
  let displayArray = [...updatedArray];
  clearListElements();
  //Checks for any filter applied and update the list
  if (filterValue !== "") {
    displayArray = displayArray.filter((item) => {
      return item.profession === filterValue;
    });
  }
  displayList(displayArray);

};
//reload page
const reset =()=> window.location.reload(true);