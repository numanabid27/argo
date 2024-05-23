"use client";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup"; // LOCAL CUSTOM COMPONENTS

import EyeToggleButton from "../components/eye-toggle-button"; // LOCAL CUSTOM HOOK

import usePasswordVisible from "../use-password-visible"; // GLOBAL CUSTOM COMPONENTS

import BazaarTextField from "components/BazaarTextField"; // ==============================================================
import { dark, grey, primary } from "theme/theme-colors";
import { H5, Span } from "components/Typography";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { FlexBox } from "components/flex-box";
import Link from "next/link";

// ==============================================================
const LoginPageView = ({ closeDialog }) => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible(); // LOGIN FORM FIELDS INITIAL VALUES

  const initialValues = {
    email: "",
    password: "",
    agreement: false,
  }; // LOGIN FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one numeric digit"),
    email: yup.string().email("invalid email").required("Email is required"),
    agreement: yup
      .bool()
      .test(
        "agreement",
        "You have to agree with our Terms and Conditions!",
        (value) => value === true
      )
      .required("You have to agree with our Terms and Conditions!"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
        closeDialog?.();
      },
    });
  return (
    <>
      <H5 color={primary[600]} textAlign="center" fontSize="20px" mb={2.2}>
        Iniciar sesión
      </H5>
      <form onSubmit={handleSubmit}>
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
          label="Correo electrónico"
          placeholder="Escribe tu correo electrónico"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <BazaarTextField
          mb={2}
          fullWidth
          backgroundColor={grey[101]}
          size="small"
          name="password"
          label="Contraseña"
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="Escribe tu contraseña"
          type={visiblePassword ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={visiblePassword}
                click={togglePasswordVisible}
              />
            ),
          }}
        />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <FormControlLabel
            name="agreement"
            className="agreement"
            onChange={handleChange}
            control={
              <Checkbox
                size="small"
                color="secondary"
                checked={values.agreement || false}
              />
            }
            label={
              <FlexBox alignItems="center" gap={1}>
                <Span
                  display={{
                    sm: "inline-block",
                    xs: "none",
                  }}
                  fontWeight="500"
                  color={dark.auth}
                >
                  Recuérdame
                </Span>
              </FlexBox>
            }
          />
          <Link
            href="/reset-password"
            style={{
              color: "#A16CE6",
              color: "#A16CE6",
              fontWeight: 500,
              marginTop: "12px",
              marginBottom: "24px",
            }}
          >
            Olvidaste tu contraseña?
          </Link>
        </Box>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            color: "#fff",
            background: primary[901],
            fontSize: "18px",
            fontWeight: 700,
            "&:hover": {
              background: primary[901],
            },
          }}
          size="large"
        >
          Iniciar sesión
        </Button>
      </form>
    </>
  );
};

export default LoginPageView;
