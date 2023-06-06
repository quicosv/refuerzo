import React, { useState } from 'react';

// Definimos la interfaz para el par de miembros
interface Pair {
  member1: string;
  member2: string;
}

const Actividad1: React.FC = () => {
  // Estados para almacenar los miembros de cada grupo y las parejas generadas
  const [group1, setGroup1] = useState<string[]>([]);
  const [group2, setGroup2] = useState<string[]>([]);
  const [pairs, setPairs] = useState<Pair[]>([]);

  // Manejador para agregar miembros a los grupos
  const handleAddMember = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const member1Input = event.currentTarget.elements.namedItem('member1') as HTMLInputElement;
    const member2Input = event.currentTarget.elements.namedItem('member2') as HTMLInputElement;

    const member1 = member1Input.value.trim();
    const member2 = member2Input.value.trim();

    if (member1 !== '' && member2 !== '') {
      setGroup1(prevGroup1 => [...prevGroup1, member1]);
      setGroup2(prevGroup2 => [...prevGroup2, member2]);
      member1Input.value = '';
      member2Input.value = '';
    }
  };

  // Manejador para formar las parejas
  const handleFormPairs = () => {
    const shuffledGroup1 = shuffleArray(group1);
    const shuffledGroup2 = shuffleArray(group2);
    const pairs: Pair[] = [];

    for (let i = 0; i < shuffledGroup1.length; i++) {
      const pair: Pair = {
        member1: shuffledGroup1[i],
        member2: shuffledGroup2[i],
      };
      pairs.push(pair);
    }

    setPairs(pairs);
  };

  // Función para barajar un array
  const shuffleArray = (array: string[]): string[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div>
      <form onSubmit={handleAddMember}>
        <label htmlFor="member1">Miembro grupo 1:</label>
        <input type="text" id="member1" name="member1" required />

        <label htmlFor="member2">Miembro grupo 2:</label>
        <input type="text" id="member2" name="member2" required />

        <button type="submit">Agregar miembros</button>
      </form>

      <button onClick={handleFormPairs}>Formar parejas</button>

      <table>
        <thead>
          <tr>
            <th>Grupo 1</th>
            <th>Grupo 2</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderizamos las parejas generadas */}
          {pairs.map((pair, index) => (
            <tr key={index}>
              <td>{pair.member1}</td>
              <td>{pair.member2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Actividad1;
