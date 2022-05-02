import { useFormik } from "formik";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import api from "../../../Services/api";
import { toast } from "react-toastify";

import Input from "../../Input";
import Button from "../../Button";
import { Register } from "./style";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";

export default function FormRegister({ authenticated }) {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      course_module: "Primeiro módulo (Introdução ao Frontend)",
    },
    validationSchema: yup.object({
      name: yup.string().required("Nome obrigatório"),
      email: yup.string().required("Email obrigatório").email("Email inválido"),
      password: yup
        .string()
        .required("Senha obrigatória")
        .matches(
          /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          "Senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial"
        ),
      confirmPassword: yup
        .string()
        .required("Confirmação obrigatória")
        .matches(
          /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          "Senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial"
        ),
      course_module: yup.string(),
    }),
    onSubmit: (data) => {
      const { email, password, name, course_module } = data;
      const newUser = {
        email,
        password,
        name,
        course_module,
        bio: " ",
        contact: " ",
      };
      api
        .post("/users", newUser)
        .then((_) => {
          toast.success("Conta criada com sucesso!");
          return history.push("/");
        })
        .catch((err) => {
          toast.error("Ops! Algo deu errado");
        });
    },
  });

  const passwordIsHidden = () => {
    setShowPassword(!showPassword);
  };

  const [showPassword, setShowPassword] = useState(false);

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Register onSubmit={formik.handleSubmit}>
      <section>
        <Input
          label="Nome"
          type="text"
          id="name"
          name="name"
          placeholder="Digite aqui seu nome"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={formik.touched.name && formik.errors.name ? "errors" : ""}
        />
        {formik.touched.name && formik.errors.name && (
          <span>{formik.errors.name}</span>
        )}
      </section>
      <section>
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Digite aqui seu email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={
            formik.touched.email && formik.errors.email ? "errors" : ""
          }
        />
        {formik.touched.email && formik.errors.email && (
          <span>{formik.errors.email}</span>
        )}
      </section>
      <section>
        <Input
          label="Senha"
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Digite aqui sua senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          icon={showPassword ? FiEye : FiEyeOff}
          onClick={() => passwordIsHidden()}
          className={
            formik.touched.password && formik.errors.password ? "errors" : ""
          }
        />
        {formik.touched.password && formik.errors.password && (
          <span>{formik.errors.password}</span>
        )}
      </section>
      <section>
        <Input
          label="Confirmar Senha"
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Digite novamente sua senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          icon={showPassword ? FiEye : FiEyeOff}
          onClick={() => passwordIsHidden()}
          className={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "errors"
              : ""
          }
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span>{formik.errors.confirmPassword}</span>
        )}
      </section>
      <section>
        <label htmlFor="course_module">Selecionar Módulo</label>
        <select
          id="course_module"
          name="course_module"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.course_module}
        >
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro Módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </select>
        {formik.touched.course_module && formik.errors.course_module && (
          <span>{formik.errors.course_module}</span>
        )}
      </section>
      <Button type="submit">Cadastrar</Button>
    </Register>
  );
}
