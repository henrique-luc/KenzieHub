import { useState } from "react";
import Modal from "../Modal";
import FormModalDet from "../Form/FormModalDet";

export default function CardTech({ technology, setTechId }) {
  return technology.map((tech) => {
    return (
      <>
        <div onClick={() => setTechId(tech.id)} key={tech.id}>
          <h2>{tech.title}</h2>
          <h3>{tech.status}</h3>
        </div>
      </>
    );
  });
}
