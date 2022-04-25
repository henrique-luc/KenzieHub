import { Formik, useFormik } from "formik";
import * as yup from "yup";

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <section>
        <label htmlFor="name">Nome</label>
        <input
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
        <label htmlFor="email">Email</label>
        <input
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
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite aqui sua senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <span>{formik.errors.password}</span>
        )}
      </section>
      <section>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Digite novamente sua senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
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
      <button type="submit">Cadastrar</button>
    </form>
  );
}
