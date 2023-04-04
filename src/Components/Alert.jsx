import React, { useContext } from "react";
import {ComponentContext} from "../context/index";
import { AlertSection } from "../styles/CommonStyles";

export default function Alert() {
  const { alertState, alertmsg, alertColor, alertType } =
    useContext(ComponentContext);
  return (
    <AlertSection color={alertColor}>
      {alertState && <div>{alertType[0].toUpperCase()+alertType.slice(1).toLowerCase() + ":" + alertmsg}</div>}
    </AlertSection>
  );
}
