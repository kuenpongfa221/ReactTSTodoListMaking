import { Box, border } from "@chakra-ui/react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

import Axios from "axios";

const columns = [
  {
    accessorKey: "task description",
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
    accessorKey: "Department",
    header: "department",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Complete",
    header: "complete",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "task deadline",
    header: "Task Deadline",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
];

const TaskTable = () => {
  const [listOfTodos, setListOfTodos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/getTodoList").then((res: any) => {
      setListOfTodos(res.data);
    });
  }, []);

  const [data, setData] = useState(listOfTodos);
  const table = useReactTable({
    listOfTodos,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  //console.log(table.getHeaderGroups());
  console.log(listOfTodos);
  //console.log(table.getRowModel());
  return (
    <Box>
      <Box className="table">
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" key={header.id}>
                {/* {header.column.columnDef.header} */}
                {header.column.columnDef.header}
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
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
