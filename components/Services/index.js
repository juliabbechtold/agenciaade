import React from 'react';
import { Content } from './style';
import Image from 'next/image';

export default function Services({ tipos, servicos }) {
  return (
    <Content>
      <h2 className="-small -spacing-6 -light">
        NOSSOS <strong className="-bold">SERVIÇOS</strong>
      </h2>
      <h3 className="-medium">{servicos.servicos.descricao}</h3>
      <p>{servicos.servicos.conteudo}</p>
      <div>
        <ul>
          {tipos.map((tipo, index) => (
            <li key={index}>
              <a href={`/servicos/${tipo.slug}`}>
                <div>
                  <h2>{tipo.name}</h2>
                  <p>{tipo.description}</p>
                </div>
                <div className="galery">
                  {!!tipo.acf.modelos &&
                    tipo.acf.modelos.map((img, key) => (
                      <div key={key}>
                        <Image src={img.sizes.medium} layout="fill" />
                      </div>
                    ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a href="/portfolio" className="link-arrow -small -bold">
        Veja todos no <strong>Portfólio</strong>
        <div>
          <div className="inner" />
          <div className="inner2" />
        </div>
      </a>
    </Content>
  );
}
