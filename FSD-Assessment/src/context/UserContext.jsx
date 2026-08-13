import { createContext } from "react";

const defaultUser = {
  name: "Student",
  email: "student@example.com",
  program: "Web Development",
};

const UserContext = createContext(defaultUser);

export default UserContext;