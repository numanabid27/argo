import Box from "@mui/material/Box";
export default function FlexRowCenter({
  children,
  ...props
}) {
  return <Box display="flex" justifyContent="center" {...props}>
      {children}
    </Box>;
}