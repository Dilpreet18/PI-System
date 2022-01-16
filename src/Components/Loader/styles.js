import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    display: "flex",
    alignItems: "center",
    background: "white",
    width: "fit-content",
    borderRadius: 25,
    padding: "10px 20px",
  },
  content: {
    padding: "0px 12px",
    color: "#5a69bf",
    fontSize: "20px !important",
    letterSpacing: "2px !important",
    textTransform: "uppercase",
    fontWeight: "bolder !important",
  },
  circularProgressBar: {
    color: "#5a69bf !important",
  },
});
