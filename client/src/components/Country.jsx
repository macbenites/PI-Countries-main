import { CountryContainer, Details, Info } from "../styles/Country";
export default function Country({ id, name, flags, continent, population }) {
  return (
    <CountryContainer>
      <Details to={`/home/detail/${id}`}>
        <img src={flags} alt="flag" />
        <Info>
          <h2>{name}</h2>
          <p>
            <span>Continente</span> : {continent} <br />
            <span>Población</span> : {population?.toLocaleString()}
          </p>
        </Info>
      </Details>
    </CountryContainer>
  );
}
