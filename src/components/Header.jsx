import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <h1>みんなのしおり</h1>
      <nav>
        <Link to="/postbrochure" className="header-link">
          投稿
        </Link>
        <Link to="/getbrochures" className="header-link">
          しおり一覧
        </Link>
      </nav>
    </header>
  );
};
