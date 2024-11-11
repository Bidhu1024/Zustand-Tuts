import { Container, Typography } from "@mui/material";
import useHabitStore from "./store/store";
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';

function App() {
  const store = useHabitStore();
  console.log(store);
  return (
    <>
      <Container>
        <Typography variant="h2" component="h1">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList />
      </Container>
    </>
  );
}

export default App;
