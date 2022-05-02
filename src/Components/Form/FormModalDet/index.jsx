import { useFormik } from "formik";
import * as yup from "yup";
import api from "../../../Services/api";
import { toast } from "react-toastify";

import Input from "../../Input";
import Button from "../../Button";
import { Form } from "./style";

export default function FormModalDet({ techId, setTechnology }) {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token") || "");
  const user = JSON.parse(localStorage.getItem("@KenzieHub:user") || "");

  console.log(techId);

  const formik = useFormik({
    initialValues: {
      title: "",
      status: "",
    },
    validationSchema: yup.object({
      title: yup.string(),
      status: yup.string(),
    }),
    onSubmit: ({ status }) => {
      api
        .put(
          `/users/techs/${techId}`,
          { status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((_) => {
          toast.success("Tecnologia alterada");
          api
            .get(`/users/${user.id}`)
            .then((response) => {
              setTechnology(response.data.techs);
            })
            .catch((err) => {
              toast.error("Ops! Algo deu errado");
            });
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
      <Button type="submit">Salvar Alterações</Button>
      <Button type="submit">Excluir</Button>
    </Form>
  );
}
