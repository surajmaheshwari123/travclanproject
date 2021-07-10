import _ from "lodash";
import React, { Component } from "react";
const TableBody=(props)=>{
 const rendercell = (d, column) => {
    if (column.content) {
      return column.content(d);
    }
    return _.get(d, column.path);
  };
  const createKey = (d, column) => {
    return d._id + (column.path || column.key);
  };
    const { data, columns } =  props;
    return (
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            {columns.map((column) => (
              <td key={ createKey(d, column)}>
                { rendercell(d, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }


export default TableBody;
