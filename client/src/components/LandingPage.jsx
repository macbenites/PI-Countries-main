import React from "react";
import { LinkTo } from "../styles/Link";

import { LandingSec, Content, Title, Reference, Btn } from "../styles/Landing";

export default function LandingPage() {
  return (
    <LandingSec>
      <Content>
        <Title>
          <h2>Henry PI</h2>
          <h1>Countries App</h1>
          <p>
            Countries App es una SPA (Single Page Application) con la temática
            de países, que fue desarrollada durante el Bootcamp de Herny. Toda
            la información que se mostrará a lo largo de la aplicación esté
            siendo consumida desde la API
            <Reference
              href="https://restcountries.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              RESTCountries
            </Reference>
            .
          </p>
        </Title>
        <LinkTo to="/home">
          <Btn primary>Empezar</Btn>
        </LinkTo>
      </Content>
    </LandingSec>
  );
}
