import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

import Input from "../../Input";
import Button from "../../Button";
import { Login } from "./style";

export default function FormLogin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email obrigatório").email("Email inválido"),
      password: yup
        .string()
        .required("Senha obrigatória")
        .matches(
          /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          "Senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial"
        ),
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
    <Login onSubmit={formik.handleSubmit}>
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
      <Button type="submit">Entrar</Button>
    </Login>
  );
}
