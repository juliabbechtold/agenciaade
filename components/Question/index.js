import React from 'react';
import { Content } from './style';
import { BsWhatsapp } from 'react-icons/bs';

export default function Question({ content }) {
  return (
    <Content>
      <h2 className="-bold">{content.titulo}</h2>
      <p>{content.descricao}</p>
      <a
        href="https://api.whatsapp.com/send?phone=5542988016033"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chama no zap <BsWhatsapp />
      </a>
    </Content>
  );
}
