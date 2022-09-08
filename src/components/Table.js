import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

// const rows = [];

export default function CustomTable(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [index, setIndex] = React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event, idx) => {
    console.log(idx)
    setAnchorEl(event.currentTarget);
    setIndex(idx)
  };
  const handleClose = () => {
    props.deleteMake(index);
    setAnchorEl(null);
  }
    return (
      <div>
        <h2>COUNT:{props.makes.length}</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Make</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.makes.map((row, idx) => (
                <TableRow
                  key={row.MakeId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.MakeId}</TableCell>
                  <TableCell align="right">{row.MakeName}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={(e) => handleClick(e, idx)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </div>
    );
  };

