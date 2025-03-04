const Example = () => {
  let strOrNum: string | number = 'Hello';
  strOrNum = 123;
  console.log(strOrNum);

  let strOrNumOrBool: string | number | boolean = true;
  console.log(strOrNumOrBool);

  let helloOrNumOrBool: 'Hello' | number | boolean = false;
  console.log(helloOrNumOrBool);

  type HelloOrNum = 'Hello' | number;
  const hello: HelloOrNum = 'Hello';

  type DayOfWeek = 
   | 'Monday'
   | 'Tuesday'
};

export default Example;
