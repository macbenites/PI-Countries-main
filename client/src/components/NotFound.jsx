import notFound from "../assets/404.svg";
import { PageNotFound } from "../styles/NotFound";
import { LinkTo } from "../styles/Link";
import { Button } from "../styles/Button";

export default function NotFound() {
  return (
    <PageNotFound>
      <div>
        <h1>Página no encontrada</h1>

        <img src={notFound} alt="Page Not found" />
        <div>
          <LinkTo to="/home">
            <Button secondary>Regresar</Button>
          </LinkTo>
        </div>
      </div>
    </PageNotFound>
  );
}
