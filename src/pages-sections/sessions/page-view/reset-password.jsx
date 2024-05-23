"use client";

import { Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup"; // LOCAL CUSTOM COMPONENT
import { H5, H6 } from "components/Typography";
import { grey, primary } from "theme/theme-colors";
import BazaarTextField from "components/BazaarTextField";

const ResetPassword = () => {
  // FORM FIELD INITIAL VALUE
  const initialValues = {
    email: "",
  }; // FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Correo electronico es requerido"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <Fragment>
      <H5 color={primary[600]} textAlign="center" fontSize="20px" mb={2.2}>
        Recuperar contraseña
      </H5>
      <H6 mb={3}>
        Ingresa tu correo electrónico y te enviaremos instrucciones para recuperar tu contraseña.
      </H6>
      {/* FORM AREA */}
      <Box
        onSubmit={handleSubmit}
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <BazaarTextField
          mb={1.5}
          backgroundColor={grey[101]}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Correo electrónico*"
          placeholder="contacto@agromerca2.com"
          helperText={touched.email && errors.email}
          error={Boolean(touched.email && errors.email)}
        />
        <Button
          fullWidth
          type="submit"
          sx={{
            color: "#fff",
            background: primary[901],
            fontSize: "18px",
            fontWeight: 700,
            marginBottom:'20px',
            "&:hover": {
              background: primary[901],
            },
          }}
          variant="contained"
        >
          Recuperar contraseña
        </Button>
      </Box>

      {/* BOTTOM LINK AREA */}
      {/* <FlexRowCenter mt={3} justifyContent="center" gap={1}>
        Don&apos;t have an account?
        <BoxLink title="Register" href="/register" />
      </FlexRowCenter> */}
    </Fragment>
  );
};

export default ResetPassword;
