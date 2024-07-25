import { create } from "zustand";

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  removeAllTodos: () => set({ todos: [] }),
  updateTodo: (id, updateTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        return todo.id === id ? { ...todo, ...updateTodo } : todo;
      }),
    })),
  toggleCompleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    })),
}));

export default useStore;
