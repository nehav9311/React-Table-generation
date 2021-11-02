import React, { Fragment, useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

export default function DataTable() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const [rowCount, setRowCount] = useState("");
  const [colCount, setColCount] = useState(number1 + number2);

  const total = parseFloat(number1) + parseFloat(number2);

  const [rowCountArray, setRowCountArray] = useState([]);
  const [colCountArray, setColCountArray] = useState([]);

  const [showTable, setShowTable] = useState(false);

  const CreateTable = async () => {
    setShowTable(false);
    rowCountArray.length = 0;
    colCountArray.length = 0;

    for (let i = 1; i <= rowCount; i++) {
      rowCountArray.push(i);
    }
    setRowCountArray(rowCountArray);

    for (let i = 1; i <= colCount; i++) {
      colCountArray.push(i);
    }
    setColCountArray(colCountArray);

    setShowTable(true);
  };

  const calculateTotal = () => {
    setColCount(total);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sample Count</TableCell>
            <TableCell>Appraiser and Trials</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <input
                type="text"
                id="txtrows"
                value={rowCount}
                placeholder="Sample"
                onChange={(e) => setRowCount(e.target.value)}
              />
            </TableCell>
            <TableCell component="th" scope="row">
              <input
                type="text"
                id="txt1"
                value={number1}
                placeholder="Appraiser"
                onChange={(e) => setNumber1(e.target.value)}
              />
              <input
                type="text"
                id="txt2"
                value={number2}
                placeholder="Trials"
                onChange={(e) => setNumber2(e.target.value)}
              />
              <input
                type="text"
                id="txtcols"
                value={colCount}
                placeholder="Total"
                onChange={(e) => setColCount(e.target.value)}
              />
              <button onClick={calculateTotal}>Add</button>
            </TableCell>
            <TableCell>
              <Button variant="contained" color="primary" onClick={CreateTable}>
                Create Table
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {showTable ? (
        <Table>
          <TableBody>
            {rowCountArray.map((row, index) => (
              <TableRow key={index}>
                {colCountArray.map((col, index) => (
                  <TableCell key={index}>
                    Row {row} - Col {col}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </>
  );
}
