
# Exemplo de uso do useMemo em React

Neste exemplo, vamos explorar a utilização do hook useMemo em React para otimização de performance.

## Descrição

O hook useMemo desempenha um papel fundamental na otimização de aplicações React, permitindo a memoização de valores computados. Isso é especialmente útil em componentes que renderizam frequentemente e realizam cálculos intensivos.

## Caso de Estudo

### Utilização Correta

No exemplo correto, vamos memoizar o cálculo da soma dos elementos de um array de números. Dessa forma, garantimos que a soma seja recalculada apenas quando o array de números mudar, melhorando o desempenho da aplicação.

```jsx
import React, { useState, useMemo } from 'react';

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
```

### Utilização Incorreta

No exemplo incorreto, vamos memoizar uma função que retorna uma string estática. Isso não traz benefícios significativos de desempenho, pois a string nunca muda e não há cálculos envolvidos. Portanto, o uso do useMemo aqui é desnecessário e pode até introduzir complexidade desnecessária ao código.

```jsx
import React, { useMemo } from 'react';

const ComponenteIncorreto = () => {
  const resultado = useMemo(() => {
    return "Este é um exemplo de uso incorreto do useMemo.";
  }, []);

  return (
    <div>
      {resultado}
    </div>
  );
};

export default ComponenteIncorreto;
```

## Conclusão

O useMemo é uma ferramenta poderosa para otimizar a performance em aplicações React, desde que seja utilizado com sabedoria. Reservar seu uso para situações em que cálculos intensivos precisam ser memoizados pode melhorar significativamente a experiência do usuário e garantir que a aplicação seja executada de forma eficiente.


