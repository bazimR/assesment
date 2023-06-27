import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HeaderInput from "../../components/headerInput/HeaderInput";
import DetailsInput from "../../components/detailsInput/DetailsInput";

import DisplayHeader from "../../components/displayDetails/DisplayDetails";
import { useDispatch, useSelector } from "react-redux";
import { setDetailsToggle, setHeaderToggle } from "../../redux/formSlice";
import { Toaster } from "react-hot-toast";

const EntryPage = () => {
  const isToggle = useSelector((state) => state.form.headerToggle);
  const headerDetails = useSelector((state) => state.form.headerDetails);
  const isDetailsToggle = useSelector((state) => state.form.detailToggle);
  const dispatch = useDispatch();
  const handleHeader = () => {
    dispatch(setHeaderToggle(!isToggle));
  };
  const handleDetails = () => {
    dispatch(setDetailsToggle(!isDetailsToggle));
  };
  return (
    <Grid
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Toaster position="top-center" />

      <Box sx={{ padding: 10 }}>
        <Grid container direction={"column"}>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 1,
              backgroundColor: "lightblue",
            }}
          >
            <Typography>Header Table</Typography>
            <Button
              onClick={handleHeader}
              variant="contained"
              dir=""
              sx={{ marginLeft: "auto" }}
            >
              Toggle header form
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderLeft: 1,
              borderRight: 1,
              borderColor: "#c9c9c9",
            }}
          >
            {isToggle && <HeaderInput />}
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 1,
              backgroundColor: "lightblue",
            }}
          >
            <Typography>Details Table</Typography>
            <Button
              disabled={!headerDetails}
              onClick={handleDetails}
              variant="contained"
              dir=""
              sx={{ marginLeft: "auto" }}
            >
              Add details
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderLeft: 1,
              borderRight: 1,
              borderColor: "#c9c9c9",
            }}
          >
            {isDetailsToggle && <DetailsInput />}
          </Grid>
          <Grid item>
            <DisplayHeader />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default EntryPage;
