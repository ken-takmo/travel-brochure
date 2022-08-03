import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <h1>みんなのしおり</h1>
      <nav>
        <Link to="/" className="header-link">
          ホーム
        </Link>
        <Link to="/getbrochures" className="header-link">
          しおり一覧
        </Link>
        <Link to="/postbrochure" className="header-link">
          投稿
        </Link>
      </nav>
    </header>
  );
};
