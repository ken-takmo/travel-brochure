export const EditButton = (props) => {
  const { url, text } = props;
  return <button onClick={() => navigate(url)}>{text}</button>;
};
