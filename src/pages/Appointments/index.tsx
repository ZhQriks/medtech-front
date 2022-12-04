import clsx from "clsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useScreen from "../../app/hooks/useScreen";
import PermanentDrawerLeft from "../../components/layout/SideBar/SideBar";
import { Container, Box, Typography } from '@mui/material';
import styled from '@emotion/styled'

export default function Appointments() {
  const { isPhone, isTablet, isDesktop } = useScreen();
    //надо потом интерфейс создать и под это переделать
    const Appointments = {
        id: 0o201551133,
        name: "Ернар",
        surname: "Анарбек",
        patientBirthDate: "01.02.2000",
        complaints: "на стул до 3 раз в сутки, полуоформленный,сильные позывы в утреннее время, требующие незамедлительной дефекации, периодическое урчание и вздутие живота, тяжесть в эпигастрии"
    }

    const Doctor = {
        id: 1,
        name: "Ильяс",
        surname: "Шаяхмет",
        specializationTypes: "Доктор"
    }

  const dispatch = useAppDispatch();

  const PaddingBox = styled.div`
    width: 80vw;
    height: 100vh;
    padding: 30px;
  `
  const Number = styled.div`
    display: flex;
    justify-content: space-between;
    alignItems: center;
    margin-top: 30px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px; 
    width: 300px;
    height: 50px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
  `

  return (
    <Container maxWidth="sm" disableGutters={true}>
        <Box sx={{background: `url(${background})`,	backgroundRepeat: "no-repeat", backgroundSize: "100vw, 100vh", width: "100vw", height: "100vh"}}>
            <PaddingBox>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: ''}}>
                <Typography 
                  color="white"
                  sx={{ fontWeight: 600, fontSize: "24px" }}
                >Медицинская запись</Typography>
                <Typography
                  color="white"
                  sx={{ fontWeight: 600, fontSize: "24px" }}
                >{Doctor.specializationTypes} {Doctor.name} {Doctor.surname}
                </Typography>
            </Box>
            <Box sx={{ mt: 11, display: 'flex', alignItems: "center", flexDirection: "column"}}>
                <Typography
                  color="white"
                  sx={{ fontWeight: 600, fontSize: "36px" }}
                >Запись пациента {Appointments.name} {Appointments.surname}
                </Typography>
                <Number>
                <Typography
                  color="white"
                  sx={{ fontWeight: 400, fontSize: "20px" }}
                >{Appointments.id}
                </Typography>
                <Typography
                  color="white"
                  sx={{ fontWeight: 400, fontSize: "20px" }}
                >{Appointments.patientBirthDate}
                </Typography>
                </Number>
            </Box>
            </PaddingBox>
        </Box>

    </Container>
  )
  
}
