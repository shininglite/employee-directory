import React from "react";

function Search() {
  return (
    <div>
      <h1>Search Page</h1>
      <form>
        <label for="breeds"> Choose a breed:</label>
        <select id="breed" name="breeds">
        {breeds.map(breed => <option value ={breed}>{breed}</option>)}
        </select>
      </form>
   
      <option> </option> </div>option value="" </option>
    </div>
  );
}

export default Search;