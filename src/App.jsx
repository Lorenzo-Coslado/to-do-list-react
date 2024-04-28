import { useState } from "react";
import "./styles.css";

export default function App() {
  //state
  const [taches, setTaches] = useState([
    { id: 1, nom: "Manger", isChecked: false },
    { id: 2, nom: "Lire", isChecked: false },
    { id: 3, nom: "Dormir", isChecked: false },
  ]);

  const [nouvelleTache, setNouvelleTache] = useState("");

  //event
  const handleDelete = (id) => {
    const copyTaches = [...taches];

    const newTaches = copyTaches.filter((tache) => tache.id !== id);

    setTaches(newTaches);
  };

  const handleAdd = (nouvelleTache) => {
    const tachesCopy = [...taches];
    tachesCopy.push({
      id: taches.length + 1,
      nom: nouvelleTache,
      isChecked: false,
    });
    setTaches(tachesCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(nouvelleTache);
  };

  const handleChange = (event) => {
    setNouvelleTache(event.target.value);
  };

  const handleCheckboxChange = (id) => {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, isChecked: !tache.isChecked } : tache
      )
    );
  };

  //render
  return (
    <div id="bigContainer">
      <h1>Liste des taches</h1>
      <div id="tasksContainer">
        {taches.map((tache) => (
          <div
            id="tacheContainer"
            key={tache.id}
            className={`checkbox-container ${
              tache.isChecked ? "grayed-out" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={tache.isChecked}
              onChange={() => handleCheckboxChange(tache.id)}
            />
            {""} {tache.nom} {""}
            <button onClick={() => handleDelete(tache.id)}>❌</button>
          </div>
        ))}
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre nouvelle tache..."
          onChange={handleChange}
        />
        <button type="submit">Créer</button>
      </form>
    </div>
  );
}
