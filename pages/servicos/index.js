import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Question from '../../components/Question';
import Image from 'next/image';
import { Container, Services } from './style';
import api from '../../services/api';

export async function getStaticProps() {
  // Fetch data from external API
  const res_cert = await api.get('/wp/v2/certificados?_fields=title,acf');
  const res = await api.get('/wp/v2/pages?slug=servicos&_fields=acf');
  const res_essencia = await api.get(
    '/wp/v2/pages?slug=nossa-essencia&_fields=acf'
  );
  const res_tipos = await api.get('/wp/v2/tipo');

  // Pass data to the page via props
  return {
    props: {
      certificates: res_cert.data,
      data: res.data[0].acf,
      servicos: res_essencia.data[0].acf,
      tipos: res_tipos.data,
    },
    revalidate: 5,
  };
}

export default function Essencia({ certificates, data, servicos, tipos }) {
  return (
    <>
      <Header />
      <Container>
        <Services>
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
        </Services>
        <Question content={data.pergunta} />
      </Container>
      <Footer certificates={certificates} />
    </>
  );
}
