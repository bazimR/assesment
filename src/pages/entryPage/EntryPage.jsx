import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HeaderInput from "../../components/headerInput/HeaderInput";
import DetailsInput from "../../components/detailsInput/DetailsInput";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import DisplayDetails from "../../components/displayDetails/DisplayDetails";
import { useDispatch, useSelector } from "react-redux";
import { setDetailsToggle, setHeaderToggle } from "../../redux/formSlice";
import { Toaster } from "react-hot-toast";
import { useRef } from "react";

const EntryPage = () => {
  const componentRef = useRef();
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
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
              padding: 2,
              backgroundColor: "lightblue",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 450 }}>
              Header Table
            </Typography>
            <Button
              onClick={handleHeader}
              size="small"
              variant="text"
              sx={{ marginLeft: "auto" }}
            >
              header form
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
              padding: 2,
              backgroundColor: "lightblue",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 450 }}>
              Details Table
            </Typography>
            <ButtonGroup
              sx={{ marginLeft: "auto" }}
              variant="contained"
              disableElevation
              aria-label="outlined button group"
            >
              <Button disabled={!headerDetails} onClick={handleDetails}>
                new details
              </Button>
              <Button  disabled={!headerDetails} onClick={handlePrint}  >print</Button>
              <Button>save</Button>
            </ButtonGroup>
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
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <ReactToPrint
              content={() => componentRef.current}
            />
            <div ref={componentRef}>
              <DisplayDetails />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default EntryPage;
