import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    width: 500,
    display: "flex",
    flexDirection: "column",
    paddingLeft: 32,
    paddingRight: 20,
  },
  label: {
    color: "#1F1F26 !important",
    fontFamily: "Poppins !important",
    fontSize: "18px !important",
    fontWeight: "600 !important",
    margin: "17px 0px 50px 0px !important",
  },
  forgotPassword: {
    color: "#5864FF",
    fontSize: 14,
    textAlign: "right",
    cursor: "pointer",
  },
  loginButton: {
    backgroundColor: "#5864FF !important",
    marginTop: "20px !important",
    height: "48px !important",
  },
  or: {
    textAlign: "center",
    margin: "20px 0px !important",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
  },
  option: {
    textAlign: "center",
    color: "#6B6E99",
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
  },
  optionLabel: {
    color: "#5864FF !important",
    cursor: "pointer",
  },
});
