'use client'

import Head from 'next/head';

function Treinos() {
  const treinos = [
    { id: 1, nome: 'Treino de força' },
    { id: 2, nome: 'Treino de resistência' },
    { id: 3, nome: 'Treino de flexibilidade' },
    // ...
  ];

  return (
    <div>
      <Head>
        <title>Treinos de Academia</title>
      </Head>
      <h1>Treinos de Academia</h1>
      <ul>
        {treinos.map((treino) => (
          <li key={treino.id}>{treino.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Treinos;