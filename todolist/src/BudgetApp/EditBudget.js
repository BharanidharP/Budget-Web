import { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        required="required"
        className="form-control mr-3"
        value={value}
        id="name"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        SAVE
      </button>
    </>
  );
};

export default EditBudget;
