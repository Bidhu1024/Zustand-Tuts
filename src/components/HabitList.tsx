import React from "react";
import useHabitStore from "../store/store";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

const HabitList = () => {
  const { habits,removeHabit,toggleHabit } = useHabitStore();
  const today = new Date().toISOString().split("T")[0];
  console.log(today);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container alignItems={"center"}>
              <Grid xs={12} sm={6}>
                <Typography variant="h5">{habit.name}</Typography>
                <Typography variant="h5">{habit.frequency}</Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
                >
                  <Button onClick={()=>toggleHabit(habit.id,today)} variant="outlined" color= {habit.completedDates.includes(today)
                      ? "success"
                      : "primary"}>
                    {habit.completedDates.includes(today)
                      ? "Completed"
                      : "Mark Completed"}
                  </Button>
                  <Button variant="outlined" color="error" onClick={()=>removeHabit(habit.id)}>
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;
