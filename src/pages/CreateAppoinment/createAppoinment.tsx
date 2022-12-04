import React, { useState } from "react";
import {
  Box,
  Dialog,
  InputAdornment,
  TextField,
  Typography,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useAppDispatch } from "../../app/hooks";
import useScreen from "../../app/hooks/useScreen";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "../../components/atoms/Button";
import { useFormik } from "formik";
import useNotify, { NotificationStatuses } from "../../app/hooks/useNotify";

export default function CreateAppoinment() {
  const { isPhone, isTablet, isDesktop } = useScreen();
  const { showNotification } = useNotify();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleModalClickOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      yin: "",
      password: "",
    },
    onSubmit: (values: any) => {
      showNotification({
        type: NotificationStatuses.SUCCESS,
        title: "Успешно!",
      });
    },
  });

  const getDialogTextBox = (label: string, value: any, onChange: any) => {
    return (
      <TextField
        fullWidth
        multiline
        label={label}
        InputProps={{
          rows: isDesktop ? 8 : 6,
        }}
        sx={{
          [`& fieldset`]: {
            borderRadius: "10px",
          },
        }}
        value={value}
        onChange={onChange}
      />
    );
  };

  return (
    <Box
      sx={{
        background: `url(/images/backgroundAppointments.svg)`,
        backgroundRepeat: isPhone ? "repeat" : "no-repeat",
        backgroundSize: isPhone ? "auto" : "cover",
        height: "100vh",
      }}
      width={isDesktop ? "84vw" : "100vw"}
    >
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="100%"
        paddingX={isDesktop ? "180px" : isPhone ? "20px" : "50px"}
      >
        <Box
          width="100%"
          height={isDesktop ? "70%" : "88%"}
          bgcolor="#FFFFFF"
          boxShadow="0px 4px 15px rgba(14, 159, 124, 0.3)"
          borderRadius="20px"
          paddingX={isDesktop ? "20px" : "5px"}
        >
          <Typography
            variant={isDesktop ? "h4" : "h5"}
            align="center"
            fontWeight="bold"
            mt="24px"
            color="primary"
          >
            Медицинская Запись
          </Typography>
          <Box paddingX={isPhone ? "15px" : "80px"} fontSize="20px">
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h5" marginBottom="10px">
                Введите ИИН пациента:
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <TextField
                  type="number"
                  label="ИИН"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Выберите Дату"
                    value={null}
                    onChange={() => {}}
                    renderInput={(params: any) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Box
                bgcolor="#F3F3F3"
                padding="15px 20px"
                borderRadius="20px"
                marginY="20px"
              >
                <TextField
                  fullWidth
                  multiline
                  label="Запись"
                  InputProps={{
                    rows: isDesktop ? 14 : 10,
                  }}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "10px",
                    },
                  }}
                  value={null}
                  onChange={() => {}}
                />
              </Box>
              <Box display="flex" justifyContent="end">
                <Button
                  color="primary"
                  label="Отправить"
                  onClick={handleModalClickOpen}
                  submit={true}
                />
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
      <Dialog
        onClose={handleModalClose}
        open={modalIsOpen}
        maxWidth={isDesktop ? "lg" : "sm"}
        fullWidth={true}
      >
        <DialogTitle>Результат форматирования</DialogTitle>
        <DialogContent>
          <DialogContentText>
            *Используются алгортимы исскуственного интеллекта для форматирования
            текста и его проеоброзования.
          </DialogContentText>
          <Grid>
            <Grid marginTop="20px">
              {getDialogTextBox("Input1", null, () => {})}
            </Grid>
            <Grid marginTop="20px">
              {getDialogTextBox("Input2", null, () => {})}
            </Grid>
            <Grid marginTop="20px">
              {getDialogTextBox("Input3", null, () => {})}
            </Grid>
            <Grid marginTop="20px">
              {getDialogTextBox("Input4", null, () => {})}
            </Grid>
            <Grid marginTop="20px">
              {getDialogTextBox("Input5", null, () => {})}
            </Grid>
            <Grid marginTop="20px">
              {getDialogTextBox("Input6", null, () => {})}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{ width: "100%", display: "flex", justifyContent: "between" }}
        >
          <Button
            color="primary"
            label="Подтвердить"
            onClick={handleModalClose}
          />
          <Button color="secondary" label="Close" onClick={handleModalClose} />
        </DialogActions>
      </Dialog>
    </Box>
  );
}
