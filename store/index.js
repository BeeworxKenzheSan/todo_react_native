import { create } from "zustand";

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (id) =>
    set({ todos: state.todos.filter((item) => item.id !== id) }),
  removeAllTodos: () => set({ todos: [] }),
  updateTodo: (id, updateTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        return todo.id === id ? { ...todo, ...updateTodo } : todo;
      }),
    })),
  toggleCompliteTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    })),
}));

export default useStore;
