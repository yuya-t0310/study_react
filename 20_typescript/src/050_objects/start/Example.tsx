const Example = () => {
  const arry1: number[] = [1,2,3];
  const arry2: string[] = ['hello','bye'];
  const arry3: Array<number> = [1,2,3];
  const arry4: (string | number)[] = [1,2, 'Hello'];
  const arry5: Array<string | number> = [1,2, 'Hello'];

  type Person = {name: string, age?:number}
  // ?をつけるとageがあってもなくてもいいこととなる
  const obj1: Person = {name: 'Taro', age:18}; 

  const users: Person[] = [
    {name: 'Taro'},
    {name: 'Hanako', age:30},
  ]
};

export default Example;
