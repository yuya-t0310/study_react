const Hello = (props) => {
  //const name = "Tom";
  //props.name = "Bob"; ⇒propsは読み取り専用オブジェクトなので書き換えることはできない
  const desc = Reflect.getOwnPropertyDescriptor(props, "name");
  console.log(desc);
  console.log(props.name);
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
