import { useNavigate } from "react-router-dom";
export const EditButton = (props) => {
  const navigate = useNavigate();
  const { url, text } = props;
  return <button onClick={() => navigate(url)}>{text}</button>;
};
