"use client";
import { useState } from "react";
import { Flex, Text, useColorMode, Skeleton, Button } from "@chakra-ui/react";

// Icons
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

// Stores
import repoStore from "@/store/Repos";

const Science = ({ models }: any) => {
  const { repo }: any = repoStore();
  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const { colorMode } = useColorMode();

  // Find the model in models that matches repo
  const model = models.find(
    (model: any) => model.repo === repo.repo && model.owner === repo.owner
  );

  const handleGoodAnswerClick = async () => {
    console.log("hi");
    setFeedbackGiven(true);
  };

  const handleBadAnswerClick = async () => {
    console.log("hi");
    setFeedbackGiven(true);
  };

  if (!model) return <Skeleton height="20px" />;

  if (feedbackGiven)
    return (
      <Flex
        mt={3}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        rounded="lg"
        border={
          colorMode === "light" ? "1px solid #CBD5E0" : "1px solid #1a202c"
        }
        p={5}
      >
        <Text>Thank you for your feedback</Text>
      </Flex>
    );

  return (
    <Flex
      mt={3}
      flexDirection="row"
      rounded="lg"
      border={colorMode === "light" ? "1px solid #CBD5E0" : "1px solid #1a202c"}
      p={5}
    >
      <Flex flexDirection="column" maxW='50%'>
        <Text>Passive Improvement</Text>
        <Text fontSize={14} color="gray.600">
          How did your model do on your last prompt? This is used to directly
          improve your model and it's training. This allows your model to be
          constantly learning as it's being used.
        </Text>
      </Flex>
      <Flex
        flexDirection="row"
        width="50%"
        justifyContent="center"
        alignItems="center"
      >
        <Button width="40%" onClick={handleBadAnswerClick}>
          <FaThumbsDown />
          <Text ml={2}>Poor Generation</Text>
        </Button>
        <Button
          width="40%"
          ml={2}
          color="white"
          bgGradient="linear(to-r, blue.500, teal.500)"
          onClick={handleGoodAnswerClick}
        >
          <FaThumbsUp />
          <Text ml={2}>Good Generation</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Science;

{
  /* <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Flex flexDirection="row" justifyContent="space-between" width="100%">
            <Stack>
              <Text>my latest prompt!</Text>
              <Badge alignSelf="flex-start">{model.training_method}</Badge>
              <Badge alignSelf="flex-start">
                Last Trained: {new Date(model.created_at).toDateString()} at{" "}
                {new Date(model.created_at).toTimeString().slice(0, 5)}
              </Badge>
            </Stack>
            <Stack>
              <HStack>
                <FaCrown />
                <Text>{model.owner}</Text>
              </HStack>
              <HStack>
                <MdLabel />
                <Text>{model.repo}</Text>
              </HStack>
              <HStack>
                <BiGitBranch />
                <Text>{model.branch}</Text>
              </HStack>
            </Stack>
            <Stack>
              <Text>Frequency: {model.frequency}</Text>
              <Text>Training: {model.sample_size}</Text>
              <Text>Epochs: {model.epochs}</Text>
            </Stack>
          </Flex>
          <Divider orientation="vertical" mx={10} /> */
}
{
  /* </Flex> */
}
