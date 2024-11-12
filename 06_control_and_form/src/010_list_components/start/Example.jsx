const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const helloAnimals = animals.map((animal) => <li>hello, {animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      {/* <ul>
        <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li>
      </ul> */}
      {helloAnimals}
    </>
  );
};

export default Example;
