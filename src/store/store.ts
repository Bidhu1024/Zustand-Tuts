import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[]; // Store dates in ISO format (string[] of "YYYY-MM-DD" or similar)
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
  removeHabit: (id: string) => void;
  toggleHabit: (id: string, date: string) => void; 
}

const useHabitStore = create<HabitState>()(
  persist(
    (set) => ({
      habits: [],
      addHabit: (name, frequency) =>
        set((state) => {
          const newHabit: Habit = {
            id: Date.now().toString(),
            name,
            frequency,
            completedDates: [],
            createdAt: new Date().toISOString(),
          };
          return {
            habits: [...state.habits, newHabit],
          };
        }),
      removeHabit: (id) =>
        set((state) => ({
          habits: state.habits.filter((habit) => habit.id !== id),
        })),
      toggleHabit: (id, date) =>
        set((state) => {
          const updatedHabits = state.habits.map((habit) => {
            if (habit.id === id) {
              const isCompleted = habit.completedDates.includes(date);
              const updatedCompletedDates = isCompleted
                ? habit.completedDates.filter((d) => d !== date)
                : [...habit.completedDates, date];
              return { ...habit, completedDates: updatedCompletedDates };
            }
            return habit;
          });
          return { habits: updatedHabits };
        }),
    }),
    {
      name: "habit-storage", // The key used for localStorage
     
    }
  )
);

export default useHabitStore;
