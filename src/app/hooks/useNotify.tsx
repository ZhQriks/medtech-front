import React from "react";
import { Box, useToast } from "@chakra-ui/react";

export enum NotificationStatuses {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export enum NotificationPositions {
  TOP = "top",
  TOP_RIGHT = "top-right",
  TOP_LEFT = "top-left",
  BOTTOM = "bottom",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_LEFT = "bottom-left",
}

export type NotificationStatusesType =
  | NotificationStatuses.SUCCESS
  | NotificationStatuses.ERROR
  | NotificationStatuses.WARNING
  | NotificationStatuses.INFO;

export type NotificationPositionsType =
  | NotificationPositions.TOP
  | NotificationPositions.TOP_RIGHT
  | NotificationPositions.TOP_LEFT
  | NotificationPositions.BOTTOM
  | NotificationPositions.BOTTOM_RIGHT
  | NotificationPositions.BOTTOM_LEFT;

interface INotificationArgs {
  type?: NotificationStatusesType;
  title?: string;
  message?: string;
  body?: React.ReactNode;
  position?: NotificationPositionsType;
  isClosable?: boolean;
  duration?: number;
}

export default function useNotify() {
  const toast = useToast();
  const toastIdRef = React.useRef();

  const showNotification = (notification: INotificationArgs = {}) => {
    const { type, title, message, body, position, isClosable, duration } =
      notification;

    // @ts-ignore
    toastIdRef.current =
      //   toast({
      //   position: "bottom-left",
      //   render: () => (
      //     <Box
      //       color="white"
      //       p={3}
      //       bg={
      //         type === NotificationStatuses.SUCCESS
      //           ? "orange_juice"
      //           : type === NotificationStatuses.ERROR
      //           ? "red.500"
      //           : type === NotificationStatuses.WARNING
      //           ? "yellow.500"
      //           : ""
      //       }
      //     >
      //       {title}
      //     </Box>
      //   ),
      // });
      toast({
        position: "bottom-left",
        render: () => (
          <Box
            color="white"
            p={3}
            bg={
              type === NotificationStatuses.SUCCESS
                ? "green.500"
                : type === NotificationStatuses.ERROR
                ? "red.500"
                : type === NotificationStatuses.WARNING
                ? "yellow.500"
                : "orange.400"
            }
            rounded={"md"}
          >
            {title}
          </Box>
        ),
      });
  };

  function closeAllNotifications() {
    toast.closeAll();
  }

  return {
    showNotification,
    closeAllNotifications,
  };
}
