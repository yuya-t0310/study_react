class User {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Example = () => {
  // 練習用
  const user = { name: "Hanako", age: 21 };
  const user1 = new User("Hanako", 22);
  console.log(user1.name); //ageはprivateなのでアクセス不可
};

export default Example;
