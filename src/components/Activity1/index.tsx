import {
  Alert,
  Button,
  Collapse,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconCheck, IconRefresh, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Activity1 = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  return (
    <Stack align="center" gap="xl">
      <Title>Are 3:4 and 5:6 equivalent ratios?</Title>
      <Group gap="xl">
        {isCorrect === false ? (
          <Button color="red" size="xl" w={200} leftSection={<IconX />}>
            Yes
          </Button>
        ) : (
          <Button
            variant="default"
            disabled={isCorrect !== undefined}
            size="xl"
            w={200}
            onClick={() => setIsCorrect(false)}
          >
            Yes
          </Button>
        )}
        {isCorrect ? (
          <Button size="xl" color="green" w={200} leftSection={<IconCheck />}>
            No
          </Button>
        ) : (
          <Button
            disabled={isCorrect !== undefined}
            variant="default"
            size="xl"
            w={200}
            onClick={() => setIsCorrect(true)}
          >
            No
          </Button>
        )}
      </Group>

      <Collapse in={isCorrect === true}>
        <Alert title="Congratulations!" color="green" miw={400}>
          <Text>You are correct!</Text>
        </Alert>
      </Collapse>

      <Collapse in={isCorrect === false}>
        <Alert title="Incorrect!" color="red" miw={400}>
          <Stack>
            <Text>
              We cannot get 5:6 from 3:4 by multiplying by the same number. So
              these ratios are not equivalent
            </Text>
            <Text>Try again with these following questions</Text>
            <QuestionPractice
              question="Are 1:2 and 2:3 equivalent ratios?"
              answer={false}
              answered={isCorrect !== undefined}
            />
            <QuestionPractice
              question="Are 3:4 and 6:8 equivalent ratios?"
              answer={true}
              answered={isCorrect !== undefined}
            />
            <QuestionPractice
              question="Are 4:2 and 2:1 equivalent ratios?"
              answer={true}
              answered={isCorrect !== undefined}
            />
          </Stack>
        </Alert>
      </Collapse>

      <Collapse in={isCorrect !== undefined}>
        <Button
          variant="default"
          onClick={() => setIsCorrect(undefined)}
          leftSection={<IconRefresh />}
        >
          Reset
        </Button>
      </Collapse>
    </Stack>
  );
};

const QuestionPractice = ({
  question,
  answer,
  answered,
}: {
  question: string;
  answer: boolean;
  answered: boolean;
}) => {
  const correct = answer === true ? "Yes" : "No";
  const [choice, setChoice] = useState<"Yes" | "No" | undefined>(undefined);
  const isCorrect = choice === undefined ? undefined : choice === correct;

  useEffect(() => {
    if (answered) {
      setChoice(undefined);
    }
  }, [answered]);

  return (
    <Paper shadow="md" withBorder p="md">
      <Group justify="space-between">
        <Text fw={500}>{question}</Text>
        <Group>
          <Button
            variant={choice !== undefined ? "light" : "default"}
            color={isCorrect ? "green" : "red"}
            disabled={choice === "No"}
            w={100}
            onClick={() => setChoice("Yes")}
          >
            Yes
          </Button>
          <Button
            variant={choice !== undefined ? "light" : "default"}
            color={isCorrect ? "green" : "red"}
            disabled={choice === "Yes"}
            w={100}
            onClick={() => setChoice("No")}
          >
            No
          </Button>
        </Group>
      </Group>
    </Paper>
  );
};

export default Activity1;
