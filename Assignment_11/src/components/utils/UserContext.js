import { createContext } from "react";

const UserContext = createContext({
  user: { username: "sameer sheikh", email: "dumy@gmail.com" },
});

export default UserContext;
