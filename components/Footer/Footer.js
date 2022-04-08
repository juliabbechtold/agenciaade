import React from 'react';
import { Container } from './style';
import { FiHeart } from 'react-icons/fi';
import Certification from './components/Certification';
import Contact from './components/Contact';

export default function Footer({ certificates }) {
  return (
    <Container id="contato">
      <Contact />
      <Certification data={certificates} />
      <div className="rights container">
        <p>
          ©2022 Agência Ade sempre atualizada. Todos os direitos reservados.
        </p>
        <p>
          Feito com <FiHeart /> por nós mesmos ;)
        </p>
      </div>
    </Container>
  );
}
