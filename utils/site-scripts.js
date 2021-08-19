import React, { useEffect, useState } from "react";
import Head from "next/head";
import parse from "html-react-parser";
import api from "../services/api";

function SiteScripts() {
  const [scripts, setScripts] = useState("");

  useEffect(() => {
    async function scriptApi() {
      const response = await api.get("acf/v3/options/options_site");
      if (response.data.acf.site_scripts) {
        setScripts(response.data.acf.site_scripts);
      }
    }
    scriptApi();
  }, []);

  return (
    <>
      <Head>
        {!!scripts &&
          parse(`
            ${scripts}
          `)}
      </Head>
    </>
  );
}

export default SiteScripts;
