import "./gigList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { gigRows } from "./gigListDummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function GigList() {
  const [data, setData] = useState(gigRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "gig",
      headerName: "Gig",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="gigListItem">
            <img className="gigListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "rating", headerName: "Rating", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/gig/" + params.row.id}>
              <button className="gigListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="gigListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="gigList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
