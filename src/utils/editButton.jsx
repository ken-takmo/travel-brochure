export const editButton = (url, text) => {
  return <button onClick={() => navigate(url)}>{text}</button>;
};
