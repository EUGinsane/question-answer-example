import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Activity1 from "./components/Activity1";
import { useState } from "react";
import Activity2 from "./components/Activity2";

function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [activity, setActivity] = useState<"Activity1" | "Activity2">(
    "Activity1"
  );

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavLink
          label="Activity 1"
          active={activity === "Activity1"}
          onClick={() => setActivity("Activity1")}
        />
        <NavLink
          label="Activity 2"
          active={activity === "Activity2"}
          onClick={() => setActivity("Activity2")}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        {activity === "Activity1" && <Activity1 />}
        {activity === "Activity2" && <Activity2 />}
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
