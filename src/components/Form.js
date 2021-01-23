import React from "react";

export default function Form() {
  return (
    <div>
     
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
