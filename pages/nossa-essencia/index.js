import React, { useRef, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Services from '../../components/Services';
import Question from '../../components/Question';
import Image from 'next/image';
import { Container, Banner, Culture, Visao } from '../../styles/nossa-essencia';
import { MdArrowRightAlt } from 'react-icons/md';
import api from '../../services/api';
import { Carousel } from 'antd';

export async function getStaticProps() {
  // Fetch data from external API
  const res_cert = await api.get('/wp/v2/certificados?_fields=title,acf');
  const res = await api.get('/wp/v2/pages?slug=nossa-essencia&_fields=acf');
  const res_adeptos = await api.get('/wp/v2/adepto?order=asc');
  const res_tipos = await api.get('/wp/v2/tipo');

  // Pass data to the page via props
  return {
    props: {
      certificates: res_cert.data,
      data: res.data[0].acf,
      adeptos: res_adeptos.data,
      tipos: res_tipos.data,
    },
    revalidate: 5,
  };
}

export default function Essencia({ certificates, data, adeptos, tipos }) {
  const banner = useRef(null);
  let [indexBanners, setIndexBanners] = useState(1);

  const settingsBanner = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  console.log(tipos);

  return (
    <>
      <Header />
      <Container>
        <Banner>
          <div className="container text">
            <h2 className="-small -spacing-6 -white -light">
              NOSSA <strong className="-bold">ESSÊNCIA</strong>
            </h2>
            <h3 className="-medium">{data.nossa_essencia}</h3>
          </div>
          <div className="container">
            <div className="arrow-btn">
              <div>
                <MdArrowRightAlt />
              </div>
              Role a página
            </div>
          </div>
        </Banner>
        <Culture>
          <div className="container text">
            <h2 className="-small -spacing-6 -white -light">
              NOSSA <strong className="-bold">CULTURA</strong>
            </h2>
            <h3 className="-medium">{data.nossa_cultura}</h3>
          </div>
          <div className="adeptos">
            <div>
              {adeptos.map((adepto, index) => (
                <div key={index}>
                  <div className="img">
                    <Image
                      src={adepto.acf.caricatura.sizes.large}
                      width={adepto.acf.caricatura.sizes['large-width']}
                      height={adepto.acf.caricatura.sizes['large-height']}
                    />
                    <div className="bg" />
                  </div>
                  <p className="nome -small">{adepto.title.rendered}</p>
                  <p className="arroba -small">{adepto.acf['@']}</p>
                  <p className="cargo">{adepto.acf.cargo}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="arrow-btn">
              <div>Arraste</div>
            </div>
          </div>
        </Culture>
        <Visao>
          <div className="container text">
            <h2 className="-small -spacing-6 -light">
              PEGA <strong className="-bold">VISÃO</strong>
            </h2>
            <h3 className="-medium">{data.visao}</h3>
          </div>
          <div className="galeria">
            <h2 className="-small -spacing-6 -light">
              NOSSA <strong className="-bold">COLEÇÃO INESQUECÍVEL</strong>
            </h2>
            <div className="carousel">
              <button
                onClick={() => banner.current.prev()}
                className="arrow-btn prev-btn"
              >
                <div>
                  <MdArrowRightAlt />
                </div>
              </button>
              <Carousel
                afterChange={(current) => setIndexBanners(current + 1)}
                ref={banner}
                {...settingsBanner}
                effect="fade"
              >
                {data.colecao.map((img, index) => (
                  <div className="slide" key={index}>
                    <Image src={img.sizes.large} layout="fill" />
                  </div>
                ))}
              </Carousel>
              <button
                onClick={() => banner.current.next()}
                className="arrow-btn"
              >
                <div>
                  <MdArrowRightAlt />
                </div>
              </button>
            </div>
            <p className="index -spacing-6 -light">
              {indexBanners} de{' '}
              <strong className="-bold">{data.colecao.length}</strong>
            </p>
          </div>
        </Visao>
        <Services tipos={tipos} servicos={data} />
        <Question content={data.pergunta} />
      </Container>
      <Footer certificates={certificates} />
    </>
  );
}
