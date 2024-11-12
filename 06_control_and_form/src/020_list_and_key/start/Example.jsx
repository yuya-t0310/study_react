const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {/* {animalList} */}

        {animals.map((animal) => (
          // リストの子要素にはユニークなkeyを設定する
          <li key={animal}>Hello, {animal}</li>
        ))}
      </ul>
    </>
  );
};

// Reactは要素ツリーの差分を比較してブラウザの(Real)DOMを更新(commit)する
// keyが無い場合：Reactは全ての子React要素を変更する⇒パフォーマンス悪化
// keyがある場合：変更のある子React要素を識別可能となり、差分のみ更新する

// キーには必ず一位の値を設定する
// キーに設定した値は変更しない。
// 配列のインデックスはなるべく使わない。⇒配列変更時に更新時にkeyも変わる⇒更新対象が増え、パフォーマンス悪化

export default Example;
