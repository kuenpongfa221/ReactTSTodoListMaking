import { Box, border } from "@chakra-ui/react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

import DATA from "./data.js";
import Axios from "axios";

// interface todoInter {
//   taskDesc: string;
//   priority: string;
//   owener: string;
//   department: string;
//   complete: boolean;
//   taskDeadline: string;
// }

// const listOfTodos = [
//   {
//     taskDesc: "Build a mern todoList",
//     priority: "P1",
//     owener: "Winny Wu",
//     department: "RD",
//     complete: true,
//     taskDeadline: "20231207",
//   },
// ];

const columns = [
  {
    accessorKey: "_id",
    header: "ID",
    cell: (props: any) => <p>{props.getValue().toString()}</p>,
  },
  {
    accessorKey: "taskDesc",
    header: "Task Description",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "owner",
    header: "owner",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "department",
    header: "department",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "complete",
    header: "complete",
    cell: (props: any) => <p>{props.getValue().toString()}</p>,
  },
  {
    accessorKey: "taskDeadline",
    header: "Task Deadline",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
];

// const columns = [
//   {
//     accessorKey: "task",
//     header: "Task",
//     cell: (props: any) => <p>{props.getValue()}</p>,
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: (props: any) => <p>{props.getValue()?.name}</p>,
//   },
//   {
//     accessorKey: "due",
//     header: "Due",
//     cell: (props: any) => <p>{props.getValue()?.toLocaleTimeString()}</p>,
//   },
//   {
//     accessorKey: "notes",
//     header: "Notes",
//     cell: (props: any) => <p>{props.getValue()}</p>,
//   },
// ];

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  useEffect(() => {
    Axios.get("http://localhost:3000/getTodoList").then((res: any) => {
      setData(res.data);
    });
  }, []);

  console.log(data);
  // const [listOfTodos, setListOfTodos] = useState(DATA);
  const table = useReactTable({
    // listofTodos,
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  // console.log(data);
  //console.log(table.getHeaderGroups());
  // console.log(listOfTodos);
  //console.log(table.getRowModel());
  return (
    <Box>
      <Box className="table">
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" key={header.id}>
                {/* {header.column.columnDef.header} */}
                {/* {header.column.columnDef.header} */}
              </Box>
            ))}
          </Box>
        ))}
        {/* console.log(table.getRowModel().rows) */}
        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
            {/* console.log(row.getVisibleCells()) */}
            {row.getVisibleCells().map((cell) => (
              <Box className="td" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default TaskTable;
