import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ErrorSection } from "./styles";

export default function ErrorPage() {
  return (
    <ErrorSection>
      <div className="ErrorTextBox">
        <h1>
          <span>
            <BiError /> 404&nbsp;
          </span>
          Sorry, The page you have entered does not exists.
        </h1>
        <p>
          <Link to="/">Click here</Link> visit Home page
        </p>
      </div>
    </ErrorSection>
  );
}
