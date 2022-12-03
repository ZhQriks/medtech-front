import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormLabel,
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import useScreen from "../../../app/hooks/useScreen";
import Button from "../../../components/atoms/Button";
import { login } from "../../../features/auth/actions";
import { useFormik } from "formik";
import useNotify, { NotificationStatuses } from "../../../app/hooks/useNotify";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { isPhone, isDesktop } = useScreen();
  const { showNotification } = useNotify();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      yin: "",
      password: "",
    },
    onSubmit: (values: any) => {
      dispatch(login(values.yin, values.password))
        .then((res: any) => {
          showNotification({
            type: NotificationStatuses.SUCCESS,
            title: "Успешно!",
          });
          navigate("/");
        })
        .catch((e: any) => {
          console.log(e);
          showNotification({
            type: NotificationStatuses.ERROR,
            title: "Ошибка авторизаций",
          });
        });
    },
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(/images/auth_background.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: isPhone ? "auto" : "cover",
        backgroundPositionY: "38%",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        width={isDesktop ? "35%" : "85%"}
        height={isDesktop ? "45%" : "50%"}
        bgcolor="#FFFFFF"
        boxShadow="0px 4px 15px rgba(14, 159, 124, 0.3)"
        borderRadius="20px"
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold" }}
          mt="40px"
          mb="30px"
        >
          Логин
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          px="46px"
        >
          <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <TextField
                  name="yin"
                  onChange={formik.handleChange}
                  value={formik.values.yin}
                  label="ИИН"
                  variant="outlined"
                  fullWidth={true}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "12px",
                    },
                    mt: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Пароль"
                  type="password"
                  variant="outlined"
                  fullWidth={true}
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "12px",
                    },
                    mt: 2,
                  }}
                />
              </Grid>
            </Grid>
            <Box
              mt="18px"
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button label="Логин" color="primary" submit={true} />
            </Box>

            {/*Here ends the form*/}
          </form>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          mt={isDesktop ? "50px" : "14px"}
        >
          <img
            src="/images/logo_damumed.svg"
            alt="damumed"
            width={60}
            height={60}
          />
          <Typography
            variant="h6"
            color="primary"
            sx={{ my: 2, fontWeight: 600, fontSize: "28px" }}
          >
            Damumed
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
