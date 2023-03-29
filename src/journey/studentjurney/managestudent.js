import React from "react";

export default function ManageStudents() {
  return <div>
    <div>Manage Students</div>
  <lable>BatchNumber</lable><select name="example">
  <option value="A">1</option>
  <option value="B">2</option>
  <option value="C">3</option>
</select>
  <br/>
  <br/>
  <lable>studentName</lable><input type="text" ></input>
  <br/>
  <br/>
 
  <lable>StudentAddress</lable><input type="text" ></input>
  <br/>
  <br/>
  
  <label>class time</label><input type="text" ></input>
  <br/> <br/>
  <button>update</button>
  <div className="space">
  <input type="reset" value="reset"></input>
  </div>
  </div>;
}