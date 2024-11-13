import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            console.log(animalStr.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            // if (animal === "Dog") {
            //   return <li key={animal}>{animal + "★"}</li>;
            // } else {
            //   <li key={animal}>{animal}</li>;
            // }
            // ↓ 三項演算子でかく
            // return (
            //   <li key={animal}>{animal === "Dog" ? animal + "★" : animal}</li>
            // );
            // ↓ &&条件でかく
            return (
              <li key={animal}>
                {/* animalがnullまたはundefinedなら */}
                {animal ?? "null,undefinedでした"}
                {animal === "Dog" && "★"}
                {/* bool値は画面に表示されない */}
                {/* {animal + (animal === "Dog" && "★")} ではfalseが表示されてしまう*/}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
