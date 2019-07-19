import React from 'react';
import '../index.css';

const SearchUser = (props) => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <input 
        placeholder="Enter filter text..."
        className="form-control w-50 search-input"
        type="text" 
        onChange={e => props.onSearchUser(e.target.value)} 
      />
    </div>
  )
}

export default SearchUser;
