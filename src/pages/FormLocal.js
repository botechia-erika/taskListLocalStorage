import React, { useState, useEffect } from "react";
import { Button, Heading, Input, Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  margin: 20px auto;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin: 30px;
  width: 40%;
`;

const ButtonGroup = styled(Box)`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  padding: 12px;
  margin: 0 10px;
`;

const TaskListContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const TaskItem = styled.li`
  list-style-type: none;
  margin: 10px 0;
  font-size: 18px;
`;

export function FormLocal() {
  const [inputName, setInputName] = useState("");
  const [name, setName] = useState("");
  const [inputTask, setInputTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedName = localStorage.getItem("name");
    const storedTasks = JSON.parse(localStorage.getItem("taskList"));

    if (storedName) {
      setName(storedName);
    }

    if (storedTasks) {
      setTaskList(storedTasks);
    }
  }, []);

  const storageName = () => {
    localStorage.setItem("name", inputName);
    setInputName("");
  };

  const storageTask = () => {
    const updatedTaskList = [...taskList, inputTask];
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    setInputTask("");
  };
  const deleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };

  const editTask = (index, newTask) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index] = newTask;
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };
  return (
    <Container>
      <Heading>
        <h2>Pratica #01</h2>
      </Heading>
      <Form>
        <StyledInput
          type="text"
          name="inputName"
          id="inputName"
          value={inputName}
          placeholder={"Nome do Usuario"}
          onChange={(e) => setInputName(e.target.value)}
        />
        <ButtonGroup>
          <StyledButton onClick={storageName}>SAVE DATA</StyledButton>
          <StyledButton onClick={() => setName(localStorage.getItem("name"))}>
            GET DATA
          </StyledButton>
        </ButtonGroup>
      </Form>
      <Box p={"4"}>
        <h2>{name}</h2>
      </Box>
      <Heading>
        <h2>Pratica #02</h2>
      </Heading>
      <Form>
        <StyledInput
          type="text"
          name="inputTask"
          id="inputTask"
          value={inputTask}
          placeholder={"Nome do Usuario"}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <ButtonGroup>
          <StyledButton onClick={storageTask}>SAVE Task</StyledButton>
          <StyledButton
            onClick={() => {
              const storedTasks = JSON.parse(localStorage.getItem("taskList"));
              setTaskList(storedTasks);
            }}
          >
            GET DATA
          </StyledButton>
        </ButtonGroup>
      </Form>
      <TaskListContainer>
        <Heading>
          <h2>Task List</h2>
        </Heading>
        <ul>
          {taskList.map((task, index) => (
            <TaskItem key={index}>
              {task}
              <Button
                onClick={() => deleteTask(index)}
                colorScheme="red"
                variant="outline"
                size="sm"
                ml="2"
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  const newTask = prompt("Edit task:", task);
                  if (newTask !== null) {
                    editTask(index, newTask);
                  }
                }}
                colorScheme="teal"
                variant="outline"
                size="sm"
                ml="2"
              >
                Edit
              </Button>
            </TaskItem>
          ))}
        </ul>
      </TaskListContainer>
    </Container>
  );
}
