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
import {
  IconCheck,
  IconChevronRight,
  IconRefresh,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { questions } from "./questions";
import { useNavigate } from "@tanstack/react-router";

const Activity1 = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  return (
    <Stack align="center" gap="xl">
      <Title>Are 3 : 4 and 5 : 6 equivalent ratios?</Title>
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
              We cannot get 5 : 6 from 3 : 4 by multiplying by the same number.
              So these ratios are not equivalent
            </Text>
            <Text>Try again with these following questions</Text>
            {questions.map((question, index) => (
              <QuestionPractice
                question={question.question}
                answer={question.answer}
                answered={isCorrect !== undefined}
                index={index}
              />
            ))}
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
  // answer,
  // answered,
  index,
}: {
  question: string;
  answer: boolean;
  answered: boolean;
  index: number;
}) => {
  const navigate = useNavigate();
  // const correct = answer === true ? "Yes" : "No";
  // const [choice, setChoice] = useState<"Yes" | "No" | undefined>(undefined);
  // const isCorrect = choice === undefined ? undefined : choice === correct;

  // useEffect(() => {
  //   if (answered) {
  //     setChoice(undefined);
  //   }
  // }, [answered]);

  return (
    <Paper shadow="md" withBorder p="md">
      <Group justify="space-between">
        <Text
          td="underline"
          c="blue"
          style={{ cursor: "pointer" }}
          fw={500}
          onClick={() => {
            navigate({
              to: "/activity-1/$id",
              params: { id: index.toString() },
            });
          }}
        >
          {question}
        </Text>
        <Button
          variant="default"
          rightSection={<IconChevronRight size={16} />}
          onClick={() =>
            navigate({
              to: "/activity-1/$id",
              params: { id: index.toString() },
            })
          }
        >
          Go to Question
        </Button>
        {/* <Group>
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
        </Group> */}
      </Group>
    </Paper>
  );
};

export default Activity1;
