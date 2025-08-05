import { Button, Collapse, Group, Stack, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { questions } from "../components/Activity1/questions";
import { useState } from "react";
import { IconCheck, IconRefresh, IconX } from "@tabler/icons-react";

export const Route = createFileRoute("/activity-1/$id")({
  loader: ({ params: { id } }) => {
    return questions[Number(id)];
  },
  component: RouteComponent,
});

function RouteComponent() {
  const question = Route.useLoaderData();
  const correct = question.answer === true ? "Yes" : "No";
  const [choice, setChoice] = useState<"Yes" | "No" | undefined>(undefined);
  const isCorrect = choice === undefined ? undefined : choice === correct;

  return (
    <Stack align="center" gap="xl">
      <Title>{question.question}</Title>
      <Group gap="xl">
        <Button
          variant={choice !== undefined ? "light" : "default"}
          color={isCorrect ? "green" : "red"}
          leftSection={
            choice !== "Yes" ? undefined : isCorrect ? <IconCheck /> : <IconX />
          }
          disabled={choice === "No"}
          size="xl"
          w={200}
          onClick={() => setChoice("Yes")}
        >
          Yes
        </Button>
        <Button
          variant={choice !== undefined ? "light" : "default"}
          color={isCorrect ? "green" : "red"}
          leftSection={
            choice !== "No" ? undefined : isCorrect ? <IconCheck /> : <IconX />
          }
          disabled={choice === "Yes"}
          size="xl"
          w={200}
          onClick={() => setChoice("No")}
        >
          No
        </Button>
      </Group>

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
}
