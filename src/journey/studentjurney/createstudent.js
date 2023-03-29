import React from "react";

export default function CreateStudents() {
  return <div>
    <div>Create Students Details</div>
    <form>
    <lable className="input-type">StudentName</lable>
    <input type="text" ></input><br/>
    <br />
    <lable>StudentId</lable>
    <input type="text"></input><br/>
    <br/>
    <lable className="input-type">StudentAddress</lable>
    <input type="text" ></input><br/>
    <br />
    <label>sex</label>
    <input type="radio" name="gender" value="male"/> Male
<input type="radio" name="gender" value="female"/> Female
<button>submit</button>
</form>
    </div>;
}