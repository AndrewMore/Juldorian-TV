import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ changeVideoList }) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={changeVideoList} />
    <button type="button" className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search" />
    </button>
  </div>
);

Search.propTypes = {
  changeVideoList: PropTypes.func.isRequired,
};

export default Search;
