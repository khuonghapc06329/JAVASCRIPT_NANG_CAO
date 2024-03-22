class Person {
    #age;
  
    constructor(age) {
      this.#age = age;
    }
  
    getAge() {
      return this.#age;
    }
  }
  
  let person = new Person(25);
  console.log(person.getAge()); // 25
//   console.log(person.#age);     // Lỗi - không thể truy cập trực tiếp từ bên ngoài
