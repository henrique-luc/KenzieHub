import { useFormik } from "formik";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

import Input from "../../Input";
import Button from "../../Button";
import { Register } from "./style";

export default function FormRegister() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      module: "Primeiro Módulo",
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
      selectModule: yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const passwordIsHidden = () => {
    setShowPassword(!showPassword);
  };

  const [showPassword, setShowPassword] = useState(false);

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
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span>{formik.errors.confirmPassword}</span>
        )}
      </section>
      <section>
        <label htmlFor="selectModule">Selecionar Módulo</label>
        <select
          id="selectModule"
          name="selectModule"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        >
          <option value="">Primeiro Módulo</option>
          <option value="">Segundo Módulo</option>
          <option value="">Terceiro Módulo</option>
        </select>
        {formik.touched.selectModule && formik.errors.selectModule && (
          <span>{formik.errors.selectModule}</span>
        )}
      </section>
      <Button type="submit">Cadastrar</Button>
    </Register>
  );
}
