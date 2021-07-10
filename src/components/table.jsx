import React from "react";
import TableHead from "./tablehead";
import TableBody from "./tablebody"

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHead columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;

