import s from "./container.module.css";

export default function Conteiner({ children }) {
  return (
    <div className={s.container}>
      {children}
    </div>
  );
}
