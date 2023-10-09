import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


function App() {
  const [hideDone, setHideDone] =  useState(false)
  const [tasks, setTasks] = useState([
    {id: 1, content: "przejść na react'a", done: true},
    {id: 2, content: "zjeść obiad", done: false},
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
        <Header title="Lista zadań" />
        <Section 
        title="Dodaj nowe Zadanie" 
        body= {<Form />}
        />

        <Section 
        title="Lista zadań" 
        body={
          <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask}
          />
        }
        extraHeaderContent={
          <Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          />
        }
        />
     </Container> 
  );
}

export default App;
