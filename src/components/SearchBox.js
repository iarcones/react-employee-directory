import React, { useContext } from "react";
import "../styles/SearchBox.css";
import DataAreaContext from "../utils/DataAreaContext";

const SearchBox = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              SEARCH
            </span>
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
export default SearchBox;
