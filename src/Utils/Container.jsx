import { ContainerCss } from './Style';


export default function Container({ title, children }) {
  return (
    <ContainerCss>
      {title && <h1>{title}</h1>}
      {children}
    </ContainerCss>
  );
}