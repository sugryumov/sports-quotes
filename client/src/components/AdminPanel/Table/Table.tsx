import React, { useState } from 'react';
import MaterialTable, { Column } from 'material-table';
import './Table.css';
import { createCategory, deleteCategory, updateCategory } from '../../../helpers/services';

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
  const columns = [{ title: 'name', field: 'name' }];

  return (
    <div className="table">
      <MaterialTable
        title="Таблица"
        columns={columns}
        data={props.data}
        editable={{
          onRowAdd: newData =>
            createCategory(newData.name)
              .then(res => {
                props.setData((prevState: any) => prevState.concat(res.data));
              })
              .catch(err => console.log(err)),

          onRowUpdate: (newData, oldData) => {
            if (oldData) {
              return updateCategory(newData._id, newData.name)
                .then(() =>
                  props.setData((prevState: any) => {
                    return prevState.map((item: any) => {
                      return item._id === newData._id ? newData : item;
                    });
                  })
                )
                .catch(err => console.log(err));
            } else {
              return new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                }, 0);
              });
            }
          },

          onRowDelete: oldData =>
            deleteCategory(oldData._id)
              .then(() =>
                props.setData((prevState: any) => {
                  return prevState.filter((item: any) => item._id !== oldData._id);
                })
              )
              .catch(err => console.log(err)),
        }}
      />
    </div>
  );
}
