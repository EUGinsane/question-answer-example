import { Alert, type AlertProps } from "@mantine/core";
import type { PropsWithChildren } from "react";

const IncorrectAlert = ({
  children,
  ...props
}: AlertProps & PropsWithChildren) => {
  return (
    <Alert bg="red.1" c="#f57e20" {...props}>
      {children}
    </Alert>
  );
};

export default IncorrectAlert;
