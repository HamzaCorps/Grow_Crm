import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const columns1 = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "user", headerName: "User", width: 140 },
  { field: "time", headerName: "Time", width: 120 },
  { field: "paymenttype", headerName: "Type", width: 120 },
  { field: "details", headerName: "Payment details", width: 250 },
  { field: "amount", headerName: "Amount In", width: 140 },
  { field: "branch", headerName: "Branch", width: 190 },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => (
      <div className="flex gap-[4px] ">
        <Tooltip placement="top" title="Delete">
          <IconButton className="hover:text-red-500">
            <DeleteOutline />
          </IconButton>
        </Tooltip>
      </div>
    ),
  },
];

const columns2 = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "user", headerName: "User", width: 140 },
  { field: "time", headerName: "Time", width: 120 },
  { field: "paymenttype", headerName: "Type", width: 120 },
  { field: "details", headerName: "Payment details", width: 250 },
  { field: "amount", headerName: "Amount Out", width: 130 },
  { field: "branch", headerName: "Branch", width: 190 },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => (
      <div className="flex gap-[4px] ">
        <Tooltip placement="top" title="Delete">
          <IconButton className="hover:text-red-500">
            <DeleteOutline />
          </IconButton>
        </Tooltip>
      </div>
    ),
  },
];

const Table = () => {
  const row1 = [
    {
      id: 1,
      user: "Snow",
      time: "Jon",
      paymenttype: "cash",
      details: "This is demo detail",
      amount: 2300,
      branch: "Cavalary Branch",
    },
    {
      id: 2,
      user: "Snow",
      time: "Jon",
      paymenttype: "cash",
      details: "This is demo detail",
      amount: 2300,
      branch: "Cavalary Branch",
    },
  ];

  const row2 = [
    {
      id: 1,
      user: "Snow",
      time: "Jon",
      paymenttype: "cash",
      details: "This is demo detail",
      amount: 1000,
      branch: "Cavalary Branch",
    },
    {
      id: 2,
      user: "Snow",
      time: "Jon",
      paymenttype: "cash",
      details: "This is demo detail",
      amount: 800,
      branch: "Cavalary Branch",
    },
  ];

  return (
    <div>
      <div className="flex justify-center text-3xl mb-4 font-Mulish text-gray-600 mt-5">
        Amounts In
      </div>
      <div className="w-full h-auto bg-white rounded-lg">
        <div className="w-full h-auto">
          <DataGrid
            rows={row1}
            columns={columns1}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>

      <div className="flex justify-center text-3xl mb-4 font-Mulish text-gray-600 mt-10">
        Amounts Out
      </div>
      <div className="w-full h-auto bg-white rounded-lg">
        <div className="w-full h-auto">
          <DataGrid
            rows={row2}
            columns={columns2}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
