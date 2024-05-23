"use client";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import * as yup from "yup"; // LOCAL CUSTOM COMPONENTS
import EyeToggleButton from "../components/eye-toggle-button"; // LOCAL CUSTOM HOOK

import usePasswordVisible from "../use-password-visible"; // GLOBAL CUSTOM COMPONENTS

import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import BazaarTextField from "components/BazaarTextField";
import { H5, Span } from "components/Typography";
import { FlexBox } from "components/flex-box";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dark, primary } from "theme/theme-colors";
import { ErrorFalse, ErrorTrue } from "../styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPageView = () => {
  const notify = () => toast("Wow so easy!");
  const [cpData, setCpData] = useState(null);
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible(); // COMMON INPUT PROPS FOR TEXT FIELD

  const [isShow, setIsShow] = useState(false);
  const [isSelect, setIsSelect] = useState([]);

  const inputProps = {
    endAdornment: (
      <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
    ),
  };

  const initialValues = {
    names: "",
    tname: "",
    email: "",
    password: "",
    re_password: "",
    postal: "",
    street: "",
    colong: "",
    municipality: cpData?.length > 0 ? cpData[0]?.response?.municipio : "",
    state: cpData?.length > 0 ? cpData[0]?.response?.estado : "",
    agreement: false,
  };

  const validationSchema = yup.object().shape({
    names: yup.string().required("Se requiere el nombre"),
    tname: yup.string().required("Nombre es requerido"),
    email: yup
      .string()
      .email("Email inválido")
      .required("Correo electronico es requerido"),
    password: yup
      .string()
      .required("Se requiere contraseña")
      .test(
        "password",
        "Contraseña inválida. Debe contener al menos 8 caracteres, 1 letra mayúscula y 1 número",
        (value) => {
          return (
            !!value &&
            value.length >= 8 &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value)
          );
        }
      ),
    re_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "!!! Las contraseñas no coinciden")
      .required("Por favor vuelva a escribir la contraseña"),
    agreement: yup
      .bool()
      .test(
        "agreement",
        "¡Tienes que aceptar nuestros Términos y Condiciones!",
        (value) => value === true
      )
      .required("You have to agree with our Terms and Conditions!"),
    postal: yup.string().min(0).max(5).required("Se requiere código postal"),
    street: yup.string().required("Se requiere calle"),
    colong: yup.string().required("Se requiere colon"),
    municipality: yup.string(),
    state: yup.string(),
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const postalValue = values?.postal;
  console.log("watch", postalValue);
  const handleStepper = () => {
    setIsShow(true);
  };

  const handleChanged = async () => {
    if (postalValue.length === 0) {
      setValues({
        ...values,
        municipality: "",
        state: "",
      });
      return;
    }
    const data = await fetch(
      `https://api.copomex.com/query/info_cp/${postalValue}?token=db779ce1-4426-44be-8fba-d01d86b99830`,
      {
        method: "GET",
      }
    );
    const res = await data.json();
    setCpData(res);
  };
  useEffect(() => {
    if (postalValue?.length === 5) {
      handleChanged();
      coloniaChanged();
    }
   
  }, [postalValue]);

  useEffect(() => {
    if (cpData?.length > 0) {
      setValues({
        ...values,
        municipality: cpData[0]?.response?.municipio,
        state: cpData[0]?.response?.estado,
      });
    }
  }, [cpData]);

  // colonia api 
  
  const coloniaChanged = async () => {
    try{ 
      const response = await fetch(
        `https://api.copomex.com/query/get_colonia_por_cp/${postalValue}?token=db779ce1-4426-44be-8fba-d01d86b99830`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setIsSelect(data.response.colonia)
    }
    catch(error){
      console.log(error)
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        margin="15px 0 18px"
        alignItems="center"
      >
        <H5 color={dark.auth} fontSize="16px">
          ¿Ya estás registrado?
        </H5>
        <Link
          href="/login"
          style={{
            color: `${dark.auth}`,
            fontSize: "16px",
            fontWeight: "700",
            borderBottom: "4px solid #111111",
            padding: "3px 6px",
          }}
        >
          Iniciar sesión
        </Link>
      </Box>
      <form onSubmit={handleSubmit}>
        {isShow ? (
          <>
            <BazaarTextField
              mb={1.5}
              fullWidth
              name="postal"
              size="small"
              label="Código Postal"
              variant="outlined"
              onBlur={handleBlur}
              value={values.postal}
              onChange={handleChange}
              placeholder="00500"
              error={!!touched.postal && !!errors.postal}
              helperText={touched.postal && errors.postal}
            />

            <BazaarTextField
              mb={1.5}
              fullWidth
              name="street"
              size="small"
              label="Calle y número"
              variant="outlined"
              onBlur={handleBlur}
              value={values.street}
              onChange={handleChange}
              placeholder="Av. José Domingo 123"
              error={!!touched.street && !!errors.street}
              helperText={touched.street && errors.street}
            />

            <Box mb={1.5}>
              <InputLabel sx={{
                fontSize: "17px",
                fontWeight: 600,
                marginBottom:" 8px",
                color: "#111111",
              }}>Colonia</InputLabel>
              <FormControl fullWidth>
                <Select labelId="demo-simple-select-label" onChange={handleChange} sx={{borderRadius:"8px"}}>
                  {
                    isSelect?.map((item, i)=>(
                      <MenuItem value={item} key={i.toString()}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Box>

            <BazaarTextField
              mb={1.5}
              fullWidth
              name="municipality"
              value={values.municipality}
              size="small"
              label="Municipio"
              variant="outlined"
              disabled
              sx={{
                ".MuiInputBase-input.Mui-disabled":{
                  WebkitTextFillColor:'#000'
                }
              }}
            />

            <BazaarTextField
              mb={1.5}
              fullWidth
              name="state"
              size="small"
              label="Estado"
              variant="outlined"
              value={values.state}
              disabled
              sx={{
                ".MuiInputBase-input.Mui-disabled":{
                  WebkitTextFillColor:'#000'
                }
              }}
            />

            <FormControlLabel
              name="agreement"
              className="agreement"
              onChange={handleChange}
              style={{ alignItems: "flex-start" }}
              control={
                <Checkbox
                  size="small"
                  color="secondary"
                  checked={values.agreement || false}
                  style={{ padding: "0px 10px 0 9px" }}
                />
              }
              label={
                <FlexBox
                  flexWrap="wrap"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  gap="7px"
                  lineHeight="0.9"
                >
                  <Span
                    display={{
                      sm: "inline-block",
                      xs: "none",
                    }}
                  >
                    Aceptar
                  </Span>
                  <Link
                    href="#"
                    style={{
                      color: "#A16CE6",
                      color: "#A16CE6",
                      fontWeight: 500,
                    }}
                  >
                    Política de privacidad y cookies
                  </Link>
                  <Span
                    display={{
                      sm: "inline-block",
                      xs: "none",
                    }}
                  >
                    y nuestros
                  </Span>
                  <Link
                    href="#"
                    style={{
                      color: "#A16CE6",
                      color: "#A16CE6",
                      fontWeight: 500,
                    }}
                  >
                    Términos y condiciones.
                  </Link>
                </FlexBox>
              }
            />

            <Button
              fullWidth
              type="submit"
              sx={{
                color: "#fff",
                background: primary[901],
                fontSize: "18px",
                fontWeight: 700,
                "&:hover": {
                  background: primary[901],
                },
              }}
              variant="contained"
              size="large"
              onClick={handleStepper}
            >
              Registrarse
            </Button>
          </>
        ) : (
          <>
            <BazaarTextField
              mb={1.5}
              fullWidth
              name="names"
              size="small"
              label="Nombre completo"
              variant="outlined"
              onBlur={handleBlur}
              value={values.names}
              onChange={handleChange}
              placeholder="Daniel de la Cruz Maldonado"
              error={!!touched.names && !!errors.names}
              helperText={touched.names && errors.names}
            />

            <BazaarTextField
              mb={1.5}
              fullWidth
              name="tname"
              size="small"
              label="Nombre comercial"
              variant="outlined"
              onBlur={handleBlur}
              value={values.tname}
              onChange={handleChange}
              placeholder="Cárnicos del Sureste S.A."
              error={!!touched.tname && !!errors.tname}
              helperText={touched.tname && errors.tname}
            />

            <BazaarTextField
              mb={1.5}
              fullWidth
              name="email"
              size="small"
              type="email"
              variant="outlined"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              label="Correo electrónico"
              placeholder="carnicos@carne.com"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />

            <BazaarTextField
              mb={1.5}
              fullWidth
              size="small"
              name="password"
              label="Contraseña"
              variant="outlined"
              autoComplete="on"
              placeholder="Debe contener al menos 6 caracteres"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              type={visiblePassword ? "text" : "password"}
              error={!!touched.password && !!errors.password}
              helperText={
                !!touched.password && errors.password ? (
                  <span>
                    {values.password.length >= 8 ? (
                      <ErrorTrue>
                        <DoneIcon />
                        Debe contener al menos 8 caracteres,
                      </ErrorTrue>
                    ) : (
                      <ErrorFalse>
                        <CloseIcon />
                        Debe contener al menos 8 caracteres
                      </ErrorFalse>
                    )}
                    {/[A-Z]/.test(values.password) ? (
                      <ErrorTrue>
                        <DoneIcon />1 letra mayúscula y
                      </ErrorTrue>
                    ) : (
                      <ErrorFalse>
                        <CloseIcon />1 letra mayúscula y
                      </ErrorFalse>
                    )}
                    {/[0-9]/.test(values.password) ? (
                      <ErrorTrue>
                        <DoneIcon />1 número
                      </ErrorTrue>
                    ) : (
                      <ErrorFalse>
                        <CloseIcon />1 número
                      </ErrorFalse>
                    )}
                  </span>
                ) : (
                  ""
                )
              }
              InputProps={inputProps}
            />

            <BazaarTextField
              mb={1.5}
              fullWidth
              size="small"
              autoComplete="on"
              name="re_password"
              variant="outlined"
              label="Repetir contraseña"
              placeholder="Repetir contraseña"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.re_password}
              type={visiblePassword ? "text" : "password"}
              error={!!touched.re_password && !!errors.re_password}
              helperText={touched.re_password && errors.re_password}
              InputProps={inputProps}
            />

            <Button
              fullWidth
              sx={{
                color: "#fff",
                marginTop: "15px",
                background: primary[901],
                fontSize: "18px",
                fontWeight: 700,
                "&:hover": {
                  background: primary[901],
                },
              }}
              variant="contained"
              size="large"
              onClick={handleStepper}
            >
              Continuar
            </Button>
          </>
        )}
      </form>
    </>
  );
};

export default RegisterPageView;
