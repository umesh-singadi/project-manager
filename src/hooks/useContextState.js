import { useContext } from "react";
import MyContext from "../context/MyContext";

function useContextState() {
  return useContext(MyContext);
}

export default useContextState;
