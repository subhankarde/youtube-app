import React, {useState} from "react";

const SearchBar = ({ onFormSubmit }) =>{

  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //Disabling the default behaviour this is to take the behaviour from DOM to React
    onFormSubmit(term); //Pass the value to the App component
  };

    return (
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              className="field"
              type="text"
              value={term}
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
    );


};


export default SearchBar;
