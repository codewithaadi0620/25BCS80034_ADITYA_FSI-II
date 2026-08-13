import { createContext, createElement } from "react";

export const StudentContext = createContext({
  name: "",
  department: "",
  semester: 1,
});

export const StudentProvider = ({ children }) => {
  const student = {
    name: "Riya",
    department: "Computer Science",
    semester: 6,
  };

  return createElement(StudentContext.Provider, { value: student }, children);
};
