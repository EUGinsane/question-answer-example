import {
  Alert,
  Button,
  Collapse,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconCheck, IconRefresh, IconX } from "@tabler/icons-react";
import { useState } from "react";

const Activity2 = () => {
  const [choice, setChoice] = useState<
    "3:4" | "4:3" | "4:7" | "5:3" | undefined
  >(undefined);
  return (
    <Stack align="center" gap="xl">
      <Title maw={700} ta="center">
        In a class there are 20 boys and 15 girls. Find the ratio of boys to
        girls in its simplest form.
      </Title>
      <Group gap="xl">
        {choice === "3:4" ? (
          <Button color="red" size="xl" w={200} leftSection={<IconX />}>
            A) 3 : 4
          </Button>
        ) : (
          <Button
            variant="default"
            disabled={choice !== undefined}
            size="xl"
            w={200}
            onClick={() => setChoice("3:4")}
          >
            A) 3 : 4
          </Button>
        )}
        {choice === "4:3" ? (
          <Button size="xl" color="green" w={200} leftSection={<IconCheck />}>
            B) 4 : 3
          </Button>
        ) : (
          <Button
            disabled={choice !== undefined}
            variant="default"
            size="xl"
            w={200}
            onClick={() => setChoice("4:3")}
          >
            B) 4 : 3
          </Button>
        )}
        {choice === "4:7" ? (
          <Button color="red" size="xl" w={200} leftSection={<IconX />}>
            C) 4 : 7
          </Button>
        ) : (
          <Button
            variant="default"
            disabled={choice !== undefined}
            size="xl"
            w={200}
            onClick={() => setChoice("4:7")}
          >
            C) 4 : 7
          </Button>
        )}
        {choice === "5:3" ? (
          <Button color="red" size="xl" w={200} leftSection={<IconX />}>
            D) 5 : 3
          </Button>
        ) : (
          <Button
            variant="default"
            disabled={choice !== undefined}
            size="xl"
            w={200}
            onClick={() => setChoice("5:3")}
          >
            D) 5 : 3
          </Button>
        )}
      </Group>

      <Collapse in={choice === "4:3"}>
        <Alert title="Correct!" color="green" miw={400}>
          <Text>This is correct. Well done!</Text>
        </Alert>
      </Collapse>

      <Collapse in={choice !== "4:3" && choice !== undefined}>
        <Alert title="Incorrect!" color="red" miw={400}>
          {choice === "3:4" ? (
            <Text>This is incorrect because this is the ratio of girls to boys, not boys to girls.</Text>
          ) : choice === "4:7" ? (
            <Text>This is incorrect because this is the ratio of boys to the total number of children, not boys to girls.</Text>
          ) : choice === "5:3" ? (
            <Text>This is incorrect because the ratio is reduced wrongly for the boys. We should divide the ratio 20 : 15 throughout by 5</Text>
          ) : (
            <Text>Try again with these following questions.</Text>
          )}
        </Alert>
      </Collapse>

      <Collapse in={choice !== undefined}>
        <Button
          variant="default"
          onClick={() => setChoice(undefined)}
          leftSection={<IconRefresh />}
        >
          Reset
        </Button>
      </Collapse>
    </Stack>
  );
};

export default Activity2;
