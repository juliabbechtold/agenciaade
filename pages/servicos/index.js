import React from 'react';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services';
import Header from '../../components/Header/Header';
import Question from '../../components/Question';
import { Container } from '../../styles/servicos';
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
        <Services tipos={tipos} servicos={servicos} />
        <Question content={data.pergunta} />
      </Container>
      <Footer certificates={certificates} />
    </>
  );
}
