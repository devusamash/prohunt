import React from "react";
import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userRows } from "./userListDummyData";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "User Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="/" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 350 },
    {
      field: "status",
      headerName: "Status",
      type: "text",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>;
            </Link>
            <HighlightOffIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}
