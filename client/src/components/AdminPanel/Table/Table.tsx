import React, { useState } from 'react';
import MaterialTable, { Column } from 'material-table';
import './Table.css';
import { createCategory } from '../../../helpers/services';

interface Row {
  id: string;
  author: string;
  text: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

interface ITable {
  title: string;
  data: any;
}

export default function Table(props: any) {
  const columns = [
    { title: 'name', field: 'name' },
    { title: '_id', field: '_id' },
  ];

  console.log(props.data, 'categoryData');

  return (
    <div className="table">
      <MaterialTable
        title="Таблица"
        columns={columns}
        data={props.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              resolve();
              console.log(newData.name, 'newData.name');
              createCategory(newData.name);
            }),
          // onRowUpdate: (newData, oldData) =>
          //   new Promise(resolve => {
          //     setTimeout(() => {
          //       resolve();
          //       if (oldData) {
          //         setState(prevState => {
          //           const data = [...prevState.data];
          //           data[data.indexOf(oldData)] = newData;
          //           return { ...prevState, data };
          //         });
          //       }
          //     }, 600);
          //   }),
          // onRowDelete: oldData =>
          //   new Promise(resolve => {
          //     setTimeout(() => {
          //       resolve();
          //       setState(prevState => {
          //         const data = [...prevState.data];
          //         data.splice(data.indexOf(oldData), 1);
          //         return { ...prevState, data };
          //       });
          //     }, 600);
          //   }),
        }}
      />
    </div>
  );
}
