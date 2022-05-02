import { useFormik } from "formik";
import * as yup from "yup";
import api from "../../../Services/api";
import { toast } from "react-toastify";

import Input from "../../Input";
import Button from "../../Button";
import { Form } from "./style";

export default function FormModalReg() {
  const formik = useFormik({
    initialValues: {
      title: "",
      status: "Iniciante",
    },
    validationSchema: yup.object({
      title: yup.string(),
      status: yup.string(),
    }),
    onSubmit: ({ title, status }) => {
      const newTec = { title, status };
      api
        .post("/users/techs", newTec)
        .then((_) => {
          toast.success("Nova tecnologia adicionada");
        })
        .catch((err) => {
          toast.error("Ops! Algo deu errado");
        });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <section>
        <Input
          label="Nome"
          type="text"
          id="title"
          name="title"
          placeholder="Nova tecnologia"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
      </section>
      <section>
        <label htmlFor="status">Selecionar status</label>
        <select
          id="status"
          name="status"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.status}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </section>
      <Button type="submit">Cadastrar Tecnologia</Button>
    </Form>
  );
}
