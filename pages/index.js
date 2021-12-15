import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Image from "next/image";

import { Container } from "../styles/home.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio | Julia Borato Bechtold</title>
        <meta
          name="description"
          content="Alguns dos trabalhos programados por mim."
        />
        <meta
          property="og:image"
          content={process.env.PUBLIC_URL + "/screenshot.png"}
        />
      </Head>
      <Header />
      <Container>
        <div className="row-1">
          <a target="_blank" href="https://www.amaiorchampions.com.br/">
            <Image width="auto" height="465" src="/assets/tnt.jpg" />
            <div className="text">
              <div className="bg" />
              <p>TNT | A Maior Champions</p>
            </div>
          </a>
          <a target="_blank" href="https://assodaf.com.br/">
            <Image width="auto" height="465" src="/assets/assodaf.jpg" />
            <div className="text">
              <div className="bg" />
              <p>Assodaf</p>
            </div>
          </a>
          <a target="_blank" href="https://promocoespolenghi.com.br/">
            <Image width="auto" height="465" src="/assets/polenghi.png" />
            <div className="text">
              <div className="bg" />
              <p>Promoções Polenghi</p>
            </div>
          </a>

          <a target="_blank" href="https://audienciarpc.netlify.app/">
            <Image width="auto" height="465" src="/assets/rpc.png" />
            <div className="text">
              <div className="bg" />
              <p>Audiência RPC</p>
            </div>
          </a>
        </div>
        <div className="row-2">
          <a target="_blank" href="https://gmadchamanozap.com.br/">
            <Image width="auto" height="465" src="/assets/gmad-zap.png" />
            <div className="text">
              <div className="bg" />
              <p>GMAD | Promoção Chama no Zap</p>
            </div>
          </a>
          <a target="_blank" href="https://www.perfice.com.uy/">
            <Image width="auto" height="465" src="/assets/perfice.png" />
            <div className="text">
              <div className="bg" />
              <p>Perfice</p>
            </div>
          </a>
          <a target="_blank" href="https://sementesbatavo.com.br/">
            <Image width="auto" height="465" src="/assets/sementes-batavo.png" />
            <div className="text">
              <div className="bg" />
              <p>Sementes Batavo</p>
            </div>
          </a>
          <a target="_blank" href="https://santacasapg.com/">
            <Image width="auto" height="465" src="/assets/santacasa.png" />
            <div className="text">
              <div className="bg" />
              <p>Santa Casa de Ponta Grossa</p>
            </div>
          </a>
          <a target="_blank" href="https://entremodais.kmm.com.br/">
            <Image width="auto" height="465" src="/assets/entremodais.png" />
            <div className="text">
              <div className="bg" />
              <p>Entremodais | Blog KMM</p>
            </div>
          </a>
        </div>
        <div className="row-3">
          <a target="_blank" href="https://whlog.com.br/">
            <Image width="auto" height="465" src="/assets/whlog.jpg" />
            <div className="text">
              <div className="bg" />
              <p>WHLog Transporte e Logística Ltda.</p>
            </div>
          </a>
          <a target="_blank" href="https://diadecampo.deragro.com.br/">
            <Image width="auto" height="465" src="/assets/deragro.png" />
            <div className="text">
              <div className="bg" />
              <p>Dia de Campo Virtual | Deragro</p>
            </div>
          </a>
          <a target="_blank" href="https://soiearquitetura.com.br/">
            <Image width="auto" height="465" src="/assets/soie.png" />
            <div className="text">
              <div className="bg" />
              <p>Soiê Arquitetura</p>
            </div>
          </a>
          <a target="_blank" href="https://gmaisgmad.com.br/gmadplus">
            <Image width="auto" height="465" src="/assets/gmais.png" />
            <div className="text">
              <div className="bg" />
              <p>Gmais GMAD</p>
            </div>
          </a>
          <a target="_blank" href="https://terrazzariserva.com.br/">
            <Image width="auto" height="465" src="/assets/terrazza.png" />
            <div className="text">
              <div className="bg" />
              <p>Terrazza Riserva | Miquelão</p>
            </div>
          </a>
        </div>
        <div className="row-4">
          <a target="_blank" href="http://theresortshop.com.br/">
            <Image width="auto" height="465" src="/assets/theresortshop.png" />
            <div className="text">
              <div className="bg" />
              <p>The Resort Shop</p>
            </div>
          </a>
          <a target="_blank" href="https://m3hengenharia.com/">
            <Image width="auto" height="465" src="/assets/m3h.png" />
            <div className="text">
              <div className="bg" />
              <p>M3H Engenharia</p>
            </div>
          </a>
          <a target="_blank" href="https://www.centroseg.com.br/">
            <Image width="auto" height="465" src="/assets/centroseg.png" />
            <div className="text">
              <div className="bg" />
              <p>Centroseg | Alarmes e Monitoramento</p>
            </div>
          </a>
          <a target="_blank" href="https://vilavilo.com.br/">
            <Image width="auto" height="465" src="/assets/vilavilo.png" />
            <div className="text">
              <div className="bg" />
              <p>VilaVilô | Ecommerce</p>
            </div>
          </a>
        </div>
        <div className="row-5">
          <a target="_blank" href="https://neos.construtorabaseforte.com.br/">
            <Image width="auto" height="465" src="/assets/neos.png" />
            <div className="text">
              <div className="bg" />
              <p>NEOS | Construtora Base Forte</p>
            </div>
          </a>
          <a target="_blank" href="https://homebank.vercel.app/">
            <Image width="auto" height="465" src="/assets/homebank.png" />
            <div className="text">
              <div className="bg" />
              <p>Homebank</p>
            </div>
          </a>
          <a target="_blank" href="https://deltacel.com.br/">
            <Image width="auto" height="465" src="/assets/deltacel.png" />
            <div className="text">
              <div className="bg" />
              <p>Deltacel Engenharia</p>
            </div>
          </a>
        </div>
        <div className="row-6">
          <a target="_blank" href="https://avanttengenharia.com.br/">
            <Image width="auto" height="465" src="/assets/avantt.png" />
            <div className="text">
              <div className="bg" />
              <p>Avantt Engenharia</p>
            </div>
          </a>
          <a target="_blank" href="https://diadecampo.coopagricola.com.br/">
            <Image width="auto" height="465" src="/assets/coopagricola.png" />
            <div className="text">
              <div className="bg" />
              <p>Dia de Campo Digital | Coopagricola</p>
            </div>
          </a>
          <a target="_blank" href="https://www.saltte.com.br/">
            <Image width="auto" height="465" src="/assets/saltte.png" />
            <div className="text">
              <div className="bg" />
              <p>Sallte | Burger & Pizza</p>
            </div>
          </a>
           <a target="_blank" href="https://mmmilleo.com.br/">
            <Image width="auto" height="465" src="/assets/mmmilleo.png" />
            <div className="text">
              <div className="bg" />
              <p>M.M.Milléo</p>
            </div>
          </a>
        </div>
        <div className="row-1">
          <a target="_blank" href="https://www.caneparoengenharia.com/">
            <Image width="auto" height="465" src="/assets/caneparo.png" />
            <div className="text">
              <div className="bg" />
              <p>Caneparo Engenharia</p>
            </div>
          </a>
          <a target="_blank" href="https://mirocozinhaevinho.com.br/">
            <Image width="auto" height="465" src="/assets/miro.png" />
            <div className="text">
              <div className="bg" />
              <p>Miro | Cozinha e Vinho</p>
            </div>
          </a>
          <a target="_blank" href="https://b2ai.com.br/">
            <Image width="auto" height="465" src="/assets/b2.png" />
            <div className="text">
              <div className="bg" />
              <p>B2 Automação Industrial</p>
            </div>
          </a>

          <a target="_blank" href="https://www.serp.net.br/">
            <Image width="auto" height="465" src="/assets/serp.png" />
            <div className="text">
              <div className="bg" />
              <p>Serp</p>
            </div>
          </a>
        </div>
        <div className="row-4">
          <a target="_blank" href="https://dunexa.com.br/">
            <Image width="auto" height="465" src="/assets/dunexa.png" />
            <div className="text">
              <div className="bg" />
              <p>Dunexa | Engenharia Elétrica</p>
            </div>
          </a>
          <a target="_blank" href="https://www.kirstenconsultoria.com.br/">
            <Image width="auto" height="465" src="/assets/kirsten.png" />
            <div className="text">
              <div className="bg" />
              <p>Kirsten | Consultoria em Gestão</p>
            </div>
          </a>
          <a target="_blank" href="https://construtoralegacy.com.br/">
            <Image width="auto" height="465" src="/assets/legacy.png" />
            <div className="text">
              <div className="bg" />
              <p>Construtora Legacy</p>
            </div>
          </a>
          <a target="_blank" href="https://compensadosgranada.com.br/">
            <Image width="auto" height="465" src="/assets/granada.png" />
            <div className="text">
              <div className="bg" />
              <p>Granada Compensados</p>
            </div>
          </a>
        </div>
        <div className="row-5">
          <a target="_blank" href="http://projetos.agenciaade.com.br/melkland/">
            <Image width="auto" height="465" src="/assets/melkland.png" />
            <div className="text">
              <div className="bg" />
              <p>Melkland | Ecommerce</p>
            </div>
          </a>
          <a target="_blank" href="https://vaskupien.com.br/">
            <Image width="auto" height="465" src="/assets/vaskupien.png" />
            <div className="text">
              <div className="bg" />
              <p>Vaskupien | Clínica Vascular</p>
            </div>
          </a>
          <a target="_blank" href="http://projetos.agenciaade.com.br/acheividros/">
            <Image width="auto" height="465" src="/assets/acheividros.png" />
            <div className="text">
              <div className="bg" />
              <p>Achei Vidros | Ecommerce</p>
            </div>
          </a>
        </div>
      </Container>
        <Footer />

    </>
  );
}
