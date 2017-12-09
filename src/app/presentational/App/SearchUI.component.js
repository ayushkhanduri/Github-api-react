import React from 'react';

const SearchUI =({submitForm,valueChanged,searchValue,clearData}) => (
    <div id="searchUI">
        <form onSubmit={submitForm}> 
            <input type="text" onChange={(e) => valueChanged(e.target.value)} value= {searchValue} className="form-control" />
            <input type="submit" value="GO" className="btn btn-primary"/>
            <input type="button" value="Clear" onClick={clearData} className="btn btn-default"/>
        </form>
    </div>
);

export default SearchUI;