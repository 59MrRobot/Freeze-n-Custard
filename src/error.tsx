import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import './error.scss';

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div id="error-page" className="error">
      <h1>Oops!</h1>

      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to="/">Go back to home page</Link>
    </div>
  );
}