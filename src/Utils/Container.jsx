export default function Container({ title, children }) {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}