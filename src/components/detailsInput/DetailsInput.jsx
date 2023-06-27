import { Grid, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setDetails, setDetailsToggle } from "../../redux/formSlice";
import { DetailsValidation } from "../../helper/validate";
const DetailsInput = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      item_name: "",
      item_code: "",
      description: "",
      sr_no: "",
      qty: "",
      rate: "",
    },
    validate: DetailsValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
      dispatch(setDetails(values));
      dispatch(setDetailsToggle(false));
    },
  });
  return (
    <Grid>
      <Box
        sx={{
          width: {
            md: 650,
            xs: 300,
          },
          backgroundColor: "white",
        }}
      >
        <Box>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            <Grid>
              <TextField
                {...formik.getFieldProps("item_name")}
                id="item_name"
                variant="outlined"
                size="small"
                placeholder="item_name"
                inputProps={{
                  style: {
                    height: "1.5em",
                    width: 270,
                  },
                }}
              />
            </Grid>
            <Grid>
              <TextField
                {...formik.getFieldProps("item_code")}
                id="item_code"
                variant="outlined"
                size="small"
                placeholder="item_code"
                fullWidth
                inputProps={{
                  style: {
                    height: "1.5em",
                    width: 270,
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              padding: 2,
            }}
          >
            <TextField
              {...formik.getFieldProps("description")}
              fullWidth
              multiline
              rows={3}
              placeholder="description"
              id="description"
              variant="outlined"
              size="small"
              inputProps={{
                style: {
                  flex: 1,
                },
              }}
            />
          </Grid>
          <Grid container>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                padding: 2,
              }}
            >
              <TextField
                {...formik.getFieldProps("sr_no")}
                placeholder="sr_no"
                id="sr_no"
                variant="outlined"
                size="small"
                inputProps={{
                  style: {
                    flex: 1,
                  },
                }}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                padding: 2,
              }}
            >
              <TextField
                {...formik.getFieldProps("qty")}
                placeholder="qty"
                id="qty"
                variant="outlined"
                size="small"
                inputProps={{
                  style: {
                    height: "1.5em",
                    width: "9em",
                  },
                }}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                padding: 2,
              }}
            >
              <TextField
                {...formik.getFieldProps("rate")}
                placeholder="rate"
                id="rate"
                variant="outlined"
                size="small"
                inputProps={{
                  style: {
                    height: "1.5em",
                    width: "7.5em",
                  },
                }}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                padding: 2,
                marginLeft: "auto",
              }}
            >
              <Button
                onClick={()=>{formik.handleSubmit()}}
                variant="contained"
                disableElevation
                sx={{ width: "10em" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default DetailsInput;
