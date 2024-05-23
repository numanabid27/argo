"use client";
import styled from "@mui/material/styles/styled";

export const ViewMoreRow = styled("div")({
    display:'flex',
    justifyContent:"space-between",
    "h4":{
        fontSize:'25px',
        "@media screen and (max-width:767px)":{
            fontSize:'18px',
        }
    },
    "a":{
        fontSize:'25px',
        "@media screen and (max-width:767px)":{
            fontSize:'16px',
        }
    }
});

export const Row = styled('div')({
    margin:'0 auto',
    maxWidth:"1020px",
    padding:"0px 15px",
});

export const ProductBox = styled('div')({
    background:'#06CB5B',
    maxWidth: '791px',
    margin:'29px auto 30px',
    borderRadius:'16px',
    padding:"31px 40px",
    ".col-1":{
        "img":{
            borderRadius: '50%',
            maxWidth: '140px',
            minHeight: '140px',
            "@media screen and (max-width:767px)":{
                maxWidth: '92px',
                minHeight: '92px',
            }
        }
    },
    ".col-2":{
        "h6":{
            color:"#fff",
            fontSize: '18px',
            fontWeight:500,
            "@media screen and (max-width:767px)":{
                fontSize: '16px',
            }
        },
        "h2":{
            color:"#fff",
            fontSize: '26px',
            "@media screen and (max-width:767px)":{
                fontSize: '20px',
            }
        }
    },
    "@media screen and (max-width:767px)":{
        border: "1px solid",
        padding:"18px 13px",
    }
});

export const LocDate = styled('div')({
    display:'flex',
    gap:'25px',
    marginTop:'15px',
    "@media screen and (max-width:767px)":{
        marginTop:'4px',
    },
    "svg":{
        color:"#fff"
    },
    "span":{
        color:"#fff",
        fontSize:'18px',
        "@media screen and (max-width:767px)":{
            fontSize:'16px',
        },
    }
});

export const IconCircle = styled('div')({
    border: '1px solid #fff',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    display: 'flex',
    "svg":{
      color:"#fff",
      margin: 'auto'
    }
  })