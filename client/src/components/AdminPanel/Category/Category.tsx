import React, { ReactElement } from 'react';
import Table from '../Table/Table';

interface Props {}

function Category(props: any): ReactElement {
  return <Table data={props.data} setData={props.setData} label={props.label} />;
}

export default Category;
