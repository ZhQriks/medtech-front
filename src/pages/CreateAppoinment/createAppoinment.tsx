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
  FormLabel,
  CircularProgress,
  Rating,
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
import { getTokenDecode } from "../../services/token_decode";
import { useSelector } from "../../app/hooks/useSelector";
import {
  selectAuthUserToken,
  selectIsAuthenticated,
} from "../../services/auth/auth.selectors";
import { useSubmitDoctorNoteMutation } from "../../features/all.api";

export default function CreateAppoinment() {
  const { isPhone, isTablet, isDesktop } = useScreen();
  const { showNotification } = useNotify();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const Token = useSelector((state) => selectAuthUserToken(state));

  const [submitNote, { isLoading: isNoteSubmitIsLoading }] =
    useSubmitDoctorNoteMutation({
      fixedCacheKey: "submit_note",
    });

  const handleModalClickOpen = () => {
    setModalIsOpen(true);
    console.log(Token);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      yin: "",
      doctorId: getTokenDecode(Token).uin,
      date: Date.now(),
      note: "",
    },
    onSubmit: async (values: any) => {
      try {
        const res = await submitNote({
          doctorUin: values.doctorId,
          noteText: values.note,
        }).unwrap();
        if (res) {
          // for each property in the object set the value to the reSubmitForm value equeal to the value of the property
          Object.keys(res).forEach((key) => {
            reSubmitForm.setFieldValue(key, res[key]);
          });
        }

        showNotification({
          type: NotificationStatuses.SUCCESS,
          title: "Успешно!",
        });
      } catch (e) {
        showNotification({ title: "Не смогли отправить ваши ответы!" });
      }
    },
  });

  const reSubmitForm = useFormik({
    initialValues: {
      deceaseAnamnesis: "",
      lifeAnamnesis: "",
      objectiveData: "",
      testResults: "",
      userReports: "",
    },
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  const getDialogTextBox = (label: string, value: any, onChange: any) => {
    return (
      <>
        <FormLabel>
          <Typography variant="h6">{label}</Typography>
        </FormLabel>
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
          name={value}
          value={value}
          onChange={onChange}
        />
      </>
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
            mt="28px"
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
                  name="yin"
                  onChange={formik.handleChange}
                  value={formik.values.yin}
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
                    value={formik.values.date}
                    onChange={(value: any) => {
                      formik.setFieldValue("date", Date.parse(value));
                    }}
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
                  name="note"
                  onChange={formik.handleChange}
                  value={formik.values.note}
                  InputProps={{
                    rows: isDesktop ? 14 : 10,
                  }}
                  sx={{
                    [`& fieldset`]: {
                      borderRadius: "10px",
                    },
                  }}
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
        <DialogTitle>Результат форматирования. Все ли правльно?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            *Используются алгортимы исскуственного интеллекта для форматирования
            текста и его проеоброзования. Дайте оценку, и она станет еще лучше!
          </DialogContentText>
          {isNoteSubmitIsLoading ? (
            <Box display="flex" justifyContent="center" marginTop="40px">
              <CircularProgress />
            </Box>
          ) : (
            <Grid>
              <Grid marginTop="20px">
                {getDialogTextBox(
                  "Жалобы пациента",
                  reSubmitForm.values.userReports,
                  reSubmitForm.handleChange
                )}
              </Grid>
              <Grid marginTop="20px">
                {getDialogTextBox(
                  "Анамнез заболевания",
                  reSubmitForm.values.lifeAnamnesis,
                  reSubmitForm.handleChange
                )}
              </Grid>
              <Grid marginTop="20px">
                {getDialogTextBox(
                  "Результаты обследований",
                  reSubmitForm.values.testResults,
                  reSubmitForm.handleChange
                )}
              </Grid>
              <Grid marginTop="20px">
                {getDialogTextBox(
                  "Анамнез жизни",
                  reSubmitForm.values.lifeAnamnesis,
                  reSubmitForm.handleChange
                )}
              </Grid>
              <Grid marginTop="20px">
                {getDialogTextBox(
                  "Объективные данные",
                  reSubmitForm.values.objectiveData,
                  () => {}
                )}
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions
          sx={{ width: "100%", display: "flex", justifyContent: "between" }}
        >
          <Rating
            name="rating"
            defaultValue={4}
            size={isDesktop ? "large" : "medium"}
            sx={{ marginRight: isDesktop ? "120px" : "0" }}
          />
          <Button
            color="primary"
            label="Подтвердить"
            onClick={() => {
              handleModalClose();
              showNotification({
                type: NotificationStatuses.SUCCESS,
                title: "Вы улучшаете продукт!",
              });
            }}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
}
