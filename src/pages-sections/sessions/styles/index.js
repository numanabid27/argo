import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
const fbStyle = {
  background: "#3B5998",
  color: "white"
};
const googleStyle = {
  background: "#4285F4",
  color: "white"
};
export const Wrapper = styled(Card)(({
  theme
}) => ({
  width: 415,
  margin:'0px auto',
  border:"1px solid #8A8A8A",
  padding: "2rem 2rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  },
  ".facebookButton": {
    marginBottom: 10,
    ...fbStyle,
    "&:hover": fbStyle
  },
  ".googleButton": { ...googleStyle,
    "&:hover": googleStyle
  },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24
  }
}));

export const ErrorTrue = styled('div')({
  color: "#118F31",
  display:"flex",
  alignItems:'center',
  "svg":{
    fontSize:'18px'
  }
});
export const ErrorFalse = styled('div')({
  color: "red",
  display:"flex",
  alignItems:'center',
  "svg":{
    fontSize:'18px'
  }
})