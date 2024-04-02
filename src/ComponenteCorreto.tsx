import { useState, useMemo } from "react";

const ComponenteCorreto = () => {
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);

  const soma = useMemo(() => {
    console.log("Calculando a soma...");
    return numeros.reduce((acc, curr) => acc + curr, 0);
  }, [numeros]);

  const adicionarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 10) + 1;
    setNumeros([...numeros, novoNumero]);
  };

  return (
    <div>
      <p>A soma dos números é: {soma}</p>
      <button onClick={adicionarNumero}>Adicionar Número</button>
    </div>
  );
};

export default ComponenteCorreto;

/*
Caso Correto:
Agora, criei um componente que calcula a soma dos elementos de um array de números, e vou utilizar o useMemo para memoizar esse cálculo, garantindo que ele seja recalculado apenas quando o array de números mudar.
*/

/*
Neste exemplo correto, o cálculo da soma só será refeito quando o array de números numeros mudar, garantindo assim uma otimização no desempenho da aplicação.
*/
