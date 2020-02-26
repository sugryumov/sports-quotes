import Pagination from '@material-ui/lab/Pagination';
import React, { ReactElement, useState } from 'react';
import Filter from '../Filter/Filter';
import ListQuotes from '../ListQuotes/ListQuotes';
import './PaginationControlled.css';

function PaginationControlled(props: any): ReactElement {
  const [page, setPage] = useState(1);

  const handleChange = (_event: any, value: any) => {
    setPage(value);
    props.updatePages(value);
  };

  return (
    <div className="pagination-controlled">
      <div className="pagination-controlled__wrapper">
        <ListQuotes items={props.items} />
        <Pagination count={props.count} page={page} onChange={handleChange} />
      </div>
      <Filter setPage={setPage} />
    </div>
  );
}

export default PaginationControlled;