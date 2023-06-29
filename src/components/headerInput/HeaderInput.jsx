import {
  Grid,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeader, setHeaderToggle } from "../../redux/formSlice";
import { headerDetailsValidation } from "../../helper/validate";
const HeaderInput = () => {
  const headerDetails = useSelector((state) => state.form.headerDetails);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  const formik = useFormik({
    initialValues: {
      ac_name: `${headerDetails ? headerDetails.ac_name : ""}`,
      vr_no: `${headerDetails ? headerDetails.vr_no : ""}`,
      vr_date: `${headerDetails ? headerDetails.vr_date : ""}`,
      status: `${headerDetails ? headerDetails.status : ""}`,
    },
    validate: headerDetailsValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      dispatch(setHeader(values));
      dispatch(setHeaderToggle(false));
    },
  });
  useEffect(() => {
    formik.setValues((prevValues) => ({
      ...prevValues,
      status: status,
    }));
  }, [status, formik]);
  return (
    <Grid item>
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
              alignItems: "end",
              padding: 2,
            }}
          >
            <TextField
              {...formik.getFieldProps("ac_name")}
              id="ac_name"
              variant="outlined"
              size="small"
              placeholder="ac_name"
              fullWidth
              inputProps={{
                style: {
                  height: "1.5em",
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
                {...formik.getFieldProps("vr_no")}
                placeholder="vr_no"
                id="vr_no"
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
                {...formik.getFieldProps("vr_date")}
                placeholder="Date"
                id="vr_date"
                variant="outlined"
                size="small"
                type="date"
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
                alignItems: "center",
                padding: 2,
              }}
            >
              <FormControl>
                <InputLabel id="status" sx={{ my: -1 }}>
                  status
                </InputLabel>
                <Select
                  {...formik.getFieldProps("status")}
                  sx={{ height: "2.6em", width: "9.5em" }}
                  variant="outlined"
                  id="status"
                  value={status}
                  label="status"
                  onChange={handleChange}
                >
                  <MenuItem value={"A"}>Active</MenuItem>
                  <MenuItem value={"I"}>Inactive</MenuItem>
                </Select>
              </FormControl>
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
                onClick={() => {
                  formik.handleSubmit();
                }}
                variant="contained"
                disableElevation
                sx={{ width: "10em" }}
              >
                {headerDetails ? "EDIT" : "SAVE"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default HeaderInput;
