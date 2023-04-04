import { ComponentContext, GlobalContext } from "../index";
import { useState, useContext } from "react";

export default function ComponentState(props) {
  const { theme } = useContext(GlobalContext);
  const [alertState, setAlertState] = useState(false);
  const [alertmsg, setAlertmsg] = useState();
  const [alertColor, setAlertColor] = useState("");
  const [alertType, setAlertType] = useState("");
  const removeAlert = () => {
    setTimeout(() => {
      setAlertState(false);
      setAlertmsg("");
      setAlertColor("");
    }, 1000);
  };
  const showAlert = (msg, type) => {
    if (type == "success") {
      setAlertColor(theme.colors.success);
    } else {
      setAlertColor(theme.colors.error);
    }
    setAlertState(true);
    setAlertmsg(msg);
    setAlertType(type);
    removeAlert();
  };
  const initialValue = { _id:"" ,Title: "", SubTitle:"",Description: "", category: "",imgUrl:"" };
  const [blogboxValue, setBlogBoxValue] = useState(initialValue);
  const [manipulateboxtype, setManipulateboxtype] = useState();
  const [manipulatebox, setManipulatebox] = useState(false);

  //to hide manipulatebox
  const changeManipulatebox = (state, type, value) => {
    setManipulatebox(state);
    setManipulateboxtype(type);
    setBlogBoxValue(value);
  };
  return (
    <ComponentContext.Provider
      value={{
        alertState,
        alertmsg,
        alertColor,
        alertType,
        showAlert,
        initialValue,
        blogboxValue,
        setBlogBoxValue,
        setManipulateboxtype,
        manipulateboxtype,
        manipulatebox,
        setManipulatebox,
        changeManipulatebox,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
}
