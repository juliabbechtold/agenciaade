import React from 'react';
import { Content } from './style';

export default function Certification({ data }) {
  return (
    <Content className="container">
      <h2 className="-small -white -bold -spacing-6">
        PREMIAÇÕES E CERTIFICADOS
      </h2>
      <div>
        {data.map((certificate, index) => (
          <div key={index}>
            <h3>{certificate.title.rendered}</h3>
            <p className="-bold">{certificate.acf.descricao}</p>
          </div>
        ))}
      </div>
    </Content>
  );
}
