import { MantineProvider, Stack } from "@mantine/core";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import "@mantine/core/styles.css";

export const Route = createRootRoute({
  component: () => (
    <MantineProvider
      theme={{
        fontFamily: "Roboto, sans-serif",
        headings: {
          fontFamily: "Roboto, sans-serif",
        },
      }}
    >
      <Stack h="100vh" justify="center" align="center">
        <Outlet />
      </Stack>
    </MantineProvider>
  ),
});
