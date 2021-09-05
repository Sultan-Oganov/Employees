import { makeAutoObservable } from "mobx";

export interface Employee {
  id: number;
  fullName: string;
  dateOfBirth: string;
  sex: string;
  position: string;
  busyness: string;
}

const addToLocalStorage = (data: Employee[]) => {
  localStorage.setItem('employees', JSON.stringify(data))
}

const getFromLocalStorage = () => {
  const data: any = localStorage.getItem('employees')
  return JSON.parse(data)
}

const removeTodo = (employees: Employee[], id: number): Employee[] => {
  let data = employees.filter((todo) => todo.id !== id);
  addToLocalStorage(data)
  return data
}

const addEmployee = (employees: Employee[], fullName: string, dateOfBirth: string, sex: string, position: string, busyness: string): Employee[] => {
  const data = [
    ...employees,
    {
      id: Math.max(0, Math.max(...employees.map(({ id }) => id))) + 1,
      fullName,
      dateOfBirth,
      sex,
      position,
      busyness,
    },
  ]
  addToLocalStorage(data)
  return data
};


class Store {
  employees: Employee[] = [];
  newFullName: string = "";
  newDateOfBirth: string = "";
  newSex: string = "";
  newPosition: string = "";
  newBusyness: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  load() {
    let data = getFromLocalStorage()
    if (data !== null && data !== undefined) {
      this.employees = data
    }
  }

  addEmployee() {
    if (this.newFullName !== "" && this.newDateOfBirth !== "" && this.newSex !== "" && this.newPosition !== "" && this.newBusyness !== "") {
      this.employees = addEmployee(this.employees, this.newFullName, this.newDateOfBirth, this.newSex, this.newPosition, this.newBusyness);
      this.newFullName = "";
      this.newDateOfBirth = "";
      this.newSex = "";
      this.newPosition = "";
      this.newBusyness = "";
    } else {
      alert('Fill in all the input fields!!!')
    }
  }

  removeTodo(id: number) {
    this.employees = removeTodo(this.employees, id)
  }

  update() {
    addToLocalStorage(this.employees)
  }
}

const store = new Store()

declare const window: any;
window.store = store;

export default store;