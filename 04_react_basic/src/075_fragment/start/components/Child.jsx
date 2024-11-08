import "./Child.css";
//import React from "react";

//console.log(React);
const Child = () => {
  return (
    //Fragmentは<>で代用可能　この場合はimportも不要となる
    //Fragmentは基本的に属性を付けられない key属性のみ可能（keyを付ける場合はFragmentを省略不可
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi
        debitis odit sit dolore neque explicabo error eveniet pariatur quas
        laboriosam eum dignissimos maiores quaerat optio, fuga nobis modi
        consequuntur?
      </p>
    </>
  );
};

export default Child;
