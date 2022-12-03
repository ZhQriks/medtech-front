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
import { register } from "../../../features/auth/actions";
import { useFormik } from "formik";
import useNotify, { NotificationStatuses } from "../../../app/hooks/useNotify";
import { useNavigate } from "react-router-dom";
import {
  useGetAllCitiesQuery,
  useGetAllClinicsQuery,
  useGetAllSpecializationsQuery,
} from "../../../features/all.api";

export default function RegisterPage() {
  const { currentData: citiesData } = useGetAllCitiesQuery();

  const { currentData: clinicsData } = useGetAllClinicsQuery();

  const { currentData: specializationsData } = useGetAllSpecializationsQuery();

  const { isPhone } = useScreen();
  const { showNotification } = useNotify();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      yin: "",
      name: "",
      surname: "",
      password: "",
      phone: "",
      location: "",
      email: "",
      clinic: "",
      specialization: "",
    },
    onSubmit: (values: any) => {
      dispatch(
        register(
          values.yin,
          values.password,
          values.name,
          values.surname,
          values.location,
          values.email,
          values.phone,
          values.clinic,
          values.specialization
        )
      )
        .then((res: any) => {
          console.log(res);
          showNotification({
            type: NotificationStatuses.SUCCESS,
            title: "Подтвердите почту",
          });
          navigate("/login");
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
        width="45%"
        height="70%"
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
          Регистрация
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
                <TextField
                  label="Имя"
                  variant="outlined"
                  fullWidth={true}
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "12px",
                    },
                    mt: 2,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Фамилия"
                  variant="outlined"
                  fullWidth={true}
                  name="surname"
                  onChange={formik.handleChange}
                  value={formik.values.surname}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "12px",
                    },
                    mt: 2,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
                <FormLabel htmlFor="location">Город</FormLabel>
                <Select
                  variant="outlined"
                  fullWidth
                  name="location"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "12px",
                    },
                  }}
                >
                  {citiesData &&
                    citiesData.map((city: any, index: any) => (
                      <MenuItem value={city.id} key={index}>
                        {city.name}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
              <Grid item xs={6} display="flex" alignItems="end">
                <TextField
                  label="Почта"
                  variant="outlined"
                  fullWidth={true}
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "12px",
                    },
                    mt: 2,
                  }}
                />
              </Grid>
              <Grid item xs={6} display="flex" alignItems="end">
                <TextField
                  label="Телефон"
                  variant="outlined"
                  fullWidth={true}
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "12px",
                    },
                    mt: 2,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormLabel htmlFor="clinic">Клиника</FormLabel>
                <Select
                  variant="outlined"
                  fullWidth
                  name="clinic"
                  onChange={formik.handleChange}
                  value={formik.values.clinic}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "12px",
                    },
                  }}
                >
                  {clinicsData &&
                    clinicsData.map((clinic: any, index: any) => (
                      <MenuItem value={clinic.id} key={index}>
                        {clinic.name}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <FormLabel htmlFor="specialization">Специализация</FormLabel>
                <Select
                  variant="outlined"
                  fullWidth
                  name="specialization"
                  onChange={formik.handleChange}
                  value={formik.values.specialization}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "12px",
                    },
                  }}
                >
                  {specializationsData &&
                    specializationsData.map(
                      (specializationsData: any, index: any) => (
                        <MenuItem value={specializationsData.id} key={index}>
                          {specializationsData.name}
                        </MenuItem>
                      )
                    )}
                </Select>
              </Grid>
            </Grid>
            <Box
              mt="18px"
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button label="Вернуться" color="primary" />
              <Button
                label="Зарегестрироваться"
                color="secondary"
                submit={true}
              />
            </Box>

            {/*Here ends the form*/}
          </form>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
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
