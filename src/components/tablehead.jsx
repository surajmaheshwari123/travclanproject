import React from "react";
const TableHead=(props)=> {
 const  raiseSort = (path) => {
    const sortColumn = { ...props.sortColumn };
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    props.onSort(sortColumn);
  };

  const renderSortIcon = (column) => {
    const { sortColumn } = props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };
    const { columns } = props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => raiseSort(column.path)}
            >
              {column.label} {renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }


export default TableHead;
