import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) => {
    // useStateで受け取った値とsetPersonで更新した値は異なるオブジェクトである。
    console.log({ ...person } === person);
    // objectのセットにはobjectを渡す必要がある
    //setPerson({ name: e.target.value, age: person.age });

    // 以下ではエラーにならないがinputの値を変更できない
    // stateは新しいオブジェクトを設定する必要がある
    // person.name = e.target.value;
    // setPerson(person);

    // スプレッド演算子を使ってみる(objectのプロパティ数が多いときに便利、変更したい値は,の後に記載)
    setPerson({ ...person, name: e.target.value });
  };
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value });
  };
  const reset = () => {
    setPerson({ name: "", age: "" });
  };
  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" value={person.name} onChange={changeName}></input>
      <input type="number" value={person.age} onChange={changeAge}></input>
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
