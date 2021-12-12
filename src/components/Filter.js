import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { useSelector } from 'react-redux';//todo
import { FILTER_TYPE } from '../constans/FilterConstans';
import { FilterButton } from './FilterButton';



export const Filter = () => {
 
    const [filterState, setFilterState] = useState(FILTER_TYPE.DONE);
    const changeFilter = (filterType) => setFilterState(filterType);

    return (

        <ButtonGroup variant="outlined" aria-label="outlined button group">
            {
                Object.keys(FILTER_TYPE).map((filterType) => (
                    <FilterButton 
                        disabled ={filterType===filterState}
                        clickHandler={changeFilter}
                        filterType={filterType}
                        key={filterType}
                        />      
                ))
            }
        </ButtonGroup>)
}