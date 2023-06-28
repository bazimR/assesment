import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { setNotDeleted, setTotal } from "../../redux/formSlice";
import { useEffect, forwardRef } from "react";

const DisplayDetails = forwardRef(() => {
  const dispatch = useDispatch();
  const headerDetails = useSelector((state) => state.form.headerDetails);
  const detailsTable = useSelector((state) => state.form.detailsTable);
  const AC_AMT = useSelector((state) => state.form.total);

  const handleDelete = (item_code) => {
    const confirmed = window.confirm(
      `Deleting item with item_code: ${item_code}`
    );
    if (confirmed) {
      const data = detailsTable.filter((doc) => doc.item_code !== item_code);
      dispatch(setNotDeleted(data));
    }
  };
  useEffect(() => {
    const sum = detailsTable.reduce((acc, curr) => {
      const multpliedValue = parseInt(curr.qty) * parseInt(curr.rate);
      return acc + multpliedValue;
    }, 0);
    dispatch(setTotal(sum));
  }, [detailsTable, dispatch]);
  return (
    <>
      <Typography variant="h6" sx={{textAlign:'center'}} color="initial">Sale Details</Typography>
    <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>AC Name</TableCell>
            <TableCell align="right">VR NO</TableCell>
            <TableCell align="right">VR DATE</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">AC AMT</TableCell>

            <TableCell align="right"></TableCell>
          </TableRow>
          {headerDetails && (
            <TableRow sx={{ background: "rgba(0,0,0,0.05)" }}>
              <TableCell sx={{ fontWeight: 400 }}>
                {headerDetails.ac_name}
              </TableCell>
              <TableCell sx={{ fontWeight: 400 }} align="right">
                {headerDetails.vr_no}
              </TableCell>
              <TableCell sx={{ fontWeight: 400 }} align="right">
                {headerDetails.vr_date}
              </TableCell>
              <TableCell sx={{ fontWeight: 400 }} align="right">
                {headerDetails.status}
              </TableCell>
              <TableCell sx={{ fontWeight: 400 }} align="right">
                {AC_AMT}
              </TableCell>
              <TableCell sx={{ fontWeight: 400 }} align="right"></TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableCell>SR_NO</TableCell>
            <TableCell align="right">ITEM_CODE</TableCell>
            <TableCell align="right">ITEM_NAME</TableCell>
            <TableCell align="right">QTY</TableCell>
            <TableCell align="right">RATE</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {detailsTable.length
            ? detailsTable.map((row) => (
                <TableRow
                  key={row.sr_no}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    background: "rgba(0,0,0,0.05)",
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.sr_no}
                  </TableCell>
                  <TableCell align="right">{row.item_code}</TableCell>
                  <TableCell align="right">{row.item_name}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.rate}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => handleDelete(row.item_code)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            : ""}
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">{AC_AMT}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
      </>
  );
});
DisplayDetails.displayName = "DisplayDetails";
export default DisplayDetails;
