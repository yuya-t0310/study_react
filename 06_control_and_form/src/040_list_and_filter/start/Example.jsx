import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");

  console.log(animals.filter((animal) => animal.indexOf("0")));
  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => {
          setFilterVal(e.target.value);
        }}
      />
      <ul>
        {animals
          .filter((animal) => animal.indexOf(filterVal) !== -1) //falseなら-1となりリストに格納されない
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
