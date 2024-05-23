import styled from "@mui/material/styles/styled";

export const Overlay = styled('div')({
    background:"#0000008c",
    position: 'fixed',
    bottom: '0',
    top: '0',
    left:'0',
    right:'0',
    width: '100%',
    height:'100%',
    zIndex:9999
})

export const Model = styled('div')({
    background:"#fff", 
    border:'1px solid #00401A',
    position: 'fixed',
    top: '0',
    zIndex:' 99',
    bottom: '0',
    margin: 'auto',
    height: 'fit-content',
    left: '0',
    right:'0',
    width: '65%',
    padding: '38px 46px',
    ".button":{
        background:"#118F31",
        color: '#fff',
        padding: '7px 45px',
        borderRadius:' 28px',
        fontSize: '16px',
    },
    ".button2":{
        background:"#A6A6A6",
        color: '#262626',
        padding: '7px 45px',
        borderRadius:' 28px',
        fontSize: '16px',
    }
});
