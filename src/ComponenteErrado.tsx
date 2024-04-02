import { useMemo } from "react";

const ComponenteErrado = () => {
  const resultado = useMemo(() => {
    return "Este é um exemplo de uso incorreto do useMemo.";
  }, []);

  return <div>{resultado}</div>;
};

export default ComponenteErrado;

/*
Caso Errado:
Neste exemplo,criei um componente que simplesmente retorna uma string, e então aplicaremos o useMemo incorretamente a essa função.
*/
