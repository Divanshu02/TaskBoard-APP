import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsCircle, BsCheck2Circle } from "react-icons/bs";
import Modal from "../components/Modal";

const Dashboard = () => {
  const [completed, setCompleted] = useState(false);
  const [inputvalue, setInputValue] = useState("");
  const [taskvalue, setTaskValue] = useState([]);
  const [modal, setModal] = useState({
    color:'blue',
    visibility:'hidden'
  });

 const handleChnageTextColor = (e) => {
    setModal((obj)=>{
       return {...obj,color:'red',visibility:'visible'}
    });
}




  useEffect(() => {
    let modalClass = document.getElementsByClassName('modal')
    
    console.log(modalClass);
  }, []);

  function addHandler() {
    if (inputvalue === "") return;
    setTaskValue((arr) => {
      return [...arr, inputvalue];
    });
    setInputValue("");
  }

  return (
    <div className="  flex gap-10 justify-center items-start flex-wrap bg-slate-400 h-screen border-2 border-red-600">
      <div className="flex flex-col gap-5  border-2 border-red-600 p-3 ">
        <h1 className=" text-xl text-white">My Tasks</h1>
        <div className="flex flex-col justify-center gap-5">
          <div className="flex">
            <AiFillPlusCircle className=" text-4xl " onClick={addHandler} />
            <input
              type="text"
              className="bg-slate-400 border-2 rounded-md border-gray-600 "
              placeholder="Add a task"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                var code = e.keyCode ? e.keyCode : e.which;
                if (code === 13) {
                  setTaskValue((arr) => {
                    return [...arr, inputvalue];
                  });
                  setInputValue("");
                }
              }}
              value={inputvalue}
            ></input>
          </div>
          {taskvalue.map((value, index) => {
            return (
              <div key={index} className=" flex gap-4">
                {completed ? (
                  <BsCheck2Circle className="text-3xl" />
                ) : (
                  <BsCircle
                    className="text-3xl"
                    onClick={() => {
                      setCompleted(true);
                    }}
                  />
                )}
                {/* delete */}
                {/* <BsCircle className="text-3xl" onClick={()=>{
                    setTaskValue((arr)=>{
                        return arr.filter((task)=>{
                           if(arr.indexOf(task)==index)
                           {
                            console.log(index)
                             return <BsCheck2Circle className="text-3xl"/>
                           }
                        })
                    })
                }} /> */}
                <h1 className="text-xl cursor-pointer" onClick={handleChnageTextColor}>
                  {value}
                </h1>
                <Modal modal={modal} taskvalue={value} />
              </div>
            );
          })}
        </div>
      </div>
     
      
    </div>
  );
};

export default Dashboard;
