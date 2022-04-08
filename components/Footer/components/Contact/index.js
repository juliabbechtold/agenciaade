import React, { useState } from 'react';
import { Content } from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { notification } from 'antd';
import Input from 'react-input-mask';
import { MdArrowRightAlt } from 'react-icons/md';

import ademail from '../../../../services/ademail';

export default function Contact() {
  const [disabledButton, setdisabledButton] = useState(false);

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    },

    validationSchema: Yup.object({
      nome: Yup.string().required('*Campo nome é obrigatório'),
      email: Yup.string()
        .email('Informe um e-mail válido')
        .required('*Campo e-mail é obrigatório'),
      telefone: Yup.string().required('*Campo telefone é obrigatório'),
      mensagem: Yup.string().required('*Campo mensagem é obrigatório'),
    }),

    onSubmit: async (values, { resetForm }) => {
      const body = `
                            <p>Nome: ${values.nome}</p>
                            <p>E-mail: ${values.email}</p>
                            <p>Telefone: ${values.telefone}</p>
                            <p>Mensagem: ${values.mensagem}</p>
                          `;

      const mail = {
        to: 'juliabbechtold@gmail.com',
        from: values.email,
        as: values.nome,
        subject: 'Novo cadastro via site - Nome do site',
        message: body,
      };

      try {
        setdisabledButton(true);
        // Sucesso ao enviar
        await ademail.post('/email', mail);

        notification.success({
          message: 'Cadastro enviado com sucesso! 🚀',
          placement: 'bottomRight',
        });

        setdisabledButton(false);
        resetForm();
      } catch (error) {
        // Erro ao enviar
        setdisabledButton(false);
        notification.error({
          message: 'Não foi possivel concluir o cadastro! 😔',
          description: 'Verfique os campos e tente novamente mais tarde...',
          placement: 'bottomRight',
        });
      }
    },
  });

  return (
    <Content className="container">
      <div>
        <a className="telefone" href="tel: +554230287790">
          <span>42</span>3028.7790
        </a>
        <a
          className="endereco"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          End.: R. Santos Dumont, 1487 Ponta Grossa - PR
          <span>Ver no mapa</span>
        </a>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <h2 className="-small -white -bold -spacing-6">CONTATO</h2>
        <div className="fields">
          <div className="field">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nome}
            />
            {formik.touched.nome && formik.errors.nome ? (
              <span className="erro">{formik.errors.nome}</span>
            ) : null}
          </div>
          <div className="field">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="erro">{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="field">
            <Input
              type="tel"
              name="telefone"
              mask={
                formik.values.telefone.length <= 14
                  ? '(99) 9999-9999?'
                  : '(99) 99999-9999'
              }
              formatChars={{ 9: '[0-9]', '?': '[0-9 ]' }}
              maskChar={null}
              placeholder="Telefone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.telefone}
            />
            {formik.touched.telefone && formik.errors.telefone ? (
              <span>{formik.errors.telefone}</span>
            ) : null}
          </div>
          <div className="-second-row">
            <div className="message field">
              <textarea
                name="mensagem"
                placeholder="Mensagem"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mensagem}
              />
              {formik.touched.mensagem && formik.errors.mensagem ? (
                <span>{formik.errors.mensagem}</span>
              ) : null}
            </div>
            <div className="btn">
              <button type="submit" className="arrow-btn">
                Enviar{' '}
                <div>
                  <MdArrowRightAlt />
                </div>
              </button>
              <div className={disabledButton ? 'disabled' : ''} />
            </div>
          </div>
        </div>
      </form>
    </Content>
  );
}
