class Person {
    _name;
    constructor(_name) {
      this._name = _name;
    }
  
    getName() {
      return this._name;
    }
  }
  
  let person = new Person("John");
  console.log(person.getName()); // John
  console.log(person._name);    // John (không nên truy cập trực tiếp nhưng vẫn có thể)
  