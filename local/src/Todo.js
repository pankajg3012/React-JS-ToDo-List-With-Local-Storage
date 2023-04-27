import React, { useEffect, useState } from "react";
import "./Todo.css";

function Todo() {
  const [inputtext, setInputtext] = useState("");
  const [fieldarray, setFieldarray] = useState([]);

  const handlechange = (e) => {

    setInputtext(e.target.value);
  };



  
  const addbtn = () => {
    if (!inputtext) {
      alert("invlid");
      return;
    }
    // console.log("hit on Add button");
    const list = [...fieldarray, inputtext];
    setFieldarray(list);

    localStorage.setItem("list", JSON.stringify(list));

    setInputtext("");
  };
  const rembtn = (index) => {
    let list = fieldarray.filter((l, i) => i !== index);
    setFieldarray(list);
    localStorage.setItem("list", JSON.stringify(list));
  };

  useEffect(() => {
    console.log("jhghjf");
    const items = JSON.parse(localStorage.getItem("list"));
    setFieldarray(items ? items : []);
  }, []);

  return (
    <div>
      <h1>TO-Do Task List</h1>
      <div className="parent">
        <div className="child">
          <input
            type="text"
            id="feild"
            value={inputtext}
            onChange={handlechange}
            placeholder="Enter Your Task Here......"
          />
          <button id="click" onClick={addbtn}>
            +
          </button>
        </div>
        <div className="Additem">
          <ol>
            {fieldarray.map((listitem, index) => (
              <li key={index}>
                {listitem}
                <i
                  className="fa-sharp fa-solid fa-trash Icon"
                  onClick={() => rembtn(index)}
                ></i>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Todo;
