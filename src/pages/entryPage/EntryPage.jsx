import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HeaderInput from "../../components/headerInput/HeaderInput";
import DetailsInput from "../../components/detailsInput/DetailsInput";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import DisplayDetails from "../../components/displayDetails/DisplayDetails";
import { useDispatch, useSelector } from "react-redux";
import { setDetailsToggle, setHeaderToggle } from "../../redux/formSlice";
import { Toaster, toast } from "react-hot-toast";
import { useRef } from "react";
import { saveDetails } from "../../helper/helper";

const EntryPage = () => {
  const componentRef = useRef();
  const isToggle = useSelector((state) => state.form.headerToggle);
  const headerDetails = useSelector((state) => state.form.headerDetails);
  const isDetailsToggle = useSelector((state) => state.form.detailToggle);
  const detailsTable = useSelector((state) => state.form.detailsTable);
  const AC_AMT = useSelector((state) => state.form.total);

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

  const handleSave = () => {
    if (detailsTable.length > 0) {
      const headerTable = { ...headerDetails, ac_amt: AC_AMT };
      const data = {
        header_table: headerTable,
        detail_table: detailsTable,
      };
      saveDetails(JSON.stringify(data)).catch(() => {
      toast.error("saving failed, please try again");
        
      })
    } else {
      toast.error("please fill details table");
    }
  };
  return (
    <Grid
      sx={{
        width: "100vw",
        height: "100%",
        overflow:'auto',
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        
      }}
    >
      <Toaster position="top-center" />

      <Box sx={{ padding: 10 }}>
        <Grid container direction={"column"} sx={{ backgroundColor: "white" }}>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 2,
              backgroundColor: "#74b9ff",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 450 }}>
              Header Table
            </Typography>
            <Button
              onClick={handleHeader}
              size="small"
              disableElevation
              variant="contained"
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
              backgroundColor: "#74b9ff",
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
                insert
              </Button>
              <Button disabled={!headerDetails} onClick={handlePrint}>
                print
              </Button>
              <Button onClick={handleSave}>save</Button>
            </ButtonGroup>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              borderColor: "#c9c9c9",
            }}
          >
            {isDetailsToggle && <DetailsInput />}
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
            }}
          >
            <ReactToPrint content={() => componentRef.current} />
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
