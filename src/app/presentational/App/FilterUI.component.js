import React from 'react';

const FilterUI = ({filterValue,clearFilter,applyFilter}) => (
    <div>
        <form>
            <input type="text" value={filterValue} onChange={(e)=> applyFilter(e.target.value)} className="form-control" />
            <input type="button" value="Clear" onClick={clearFilter} className="btn btn-default" />
        </form>
    </div>
) ;

export default FilterUI;