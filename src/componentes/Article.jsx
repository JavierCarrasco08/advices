import { useState } from "react";
import api from "../utils/api";
import Button from "./Button";
import Paragraph from "./Paragraph";

export default function Content() {
  const [consejo, setConsejo] = useState("Aplicación de consejos");
  const [id, setId] = useState(-1);
  async function handlerApiConsejo() {
    let res = await api(),
      json = await res.json();
    setConsejo(json.slip.advice);
    setId(json.slip.id);
  }
  return (
    <article>
      <Paragraph consejo={consejo} id={id} />
      <Button apiClick={handlerApiConsejo} />
    </article>
  );
}
