import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';
import api from '../../services/api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Question from '../../components/Question';
import { Pagination } from 'antd';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Container } from '../../styles/blog';

export async function getStaticProps() {
  // Fetch data from external API
  const res_cert = await api.get('/wp/v2/certificados?_fields=title,acf');

  // Pass data to the page via props
  return {
    props: {
      certificates: res_cert.data,
    },
    revalidate: 5,
  };
}

export default function Blog({ certificates }) {
  const [posts, setPosts] = useState();
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  const topRef = useRef();

  useEffect(() => {
    async function getPosts() {
      await api.get(`wp/v2/posts?page=${page}&per_page=8`).then((response) => {
        setPosts(response.data);
        setTotal(Number(response.headers['x-wp-total']));
      });
    }
    getPosts();
  }, [page]);

  const handleChangePage = (e) => {
    setPage(e);
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const questionContent = {
    titulo: 'Pronto para dar o próximo passo da sua empresa?',
    descricao:
      'Estratégia, tecnologia e design são os pilares do desenvolvimento experiências do usuário que atendem às suas necessidades e fortalecem o seu negócio. Conte com a gente!',
  };

  return (
    <>
      <Head>
        <title>Blog | Agência Ade!</title>
      </Head>
      <Header />
      <Container ref={topRef}>
        <div>
          {!!posts &&
            posts.map((post, index) => {
              const date = format(new Date(post.date), 'dd MMM yyyy', {
                locale: ptBR,
              });

              const expand_date = date.split(' ');

              return (
                <a href={`/blog/${post.slug}`} key={index}>
                  <p className="-small -dark -spacing-6">
                    {expand_date[0]} <strong>{expand_date[1]}</strong>{' '}
                    {expand_date[2]}
                  </p>
                  <h3 className="-dark -bold">
                    {ReactHtmlParser(post.title.rendered)}
                  </h3>
                </a>
              );
            })}
        </div>
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={!!total && total}
          pageSize={8}
          defaultPageSize={8}
        />
      </Container>
      <Question content={questionContent} />
      <Footer certificates={certificates} />
    </>
  );
}
