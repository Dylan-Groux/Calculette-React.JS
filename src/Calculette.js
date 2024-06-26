import React, { useState } from 'react'; // Importation de React et du hook useState pour gérer l'état
import './Calculator.css'; // Importation du fichier CSS pour le style de la calculatrice

const Calculator = () => {
  // Déclaration des états
  const [input, setInput] = useState(""); // État pour stocker l'entrée de l'utilisateur
  const [result, setResult] = useState(""); // État pour stocker le résultat du calcul
  const [isResult, setIsResult] = useState(false); // État pour indiquer si un résultat a été calculé

  // Fonction appelée lorsqu'un bouton est cliqué
  const handleClick = (valeur) => {
    if (isResult) { // Si un résultat a été calculé
      setInput(valeur); // Remplacer l'entrée par la nouvelle valeur
      setIsResult(false); // Réinitialiser isResult à false
    } else {
      setInput(input + valeur); // Ajouter la valeur cliquée à l'entrée actuelle
    }
  }

  // Fonction pour effacer l'entrée et le résultat
  const handleClear = () => {
    setInput(""); // Réinitialiser l'entrée à une chaîne vide
    setResult(""); // Réinitialiser le résultat à une chaîne vide
    setIsResult(false); // Réinitialiser isResult à false
  };

  // Fonction pour évaluer l'expression et afficher le résultat
  const handleEqual = () => {
    try {
      setResult(eval(input)); // Évaluer l'expression et mettre à jour le résultat
      setIsResult(true); // Indiquer qu'un résultat a été calculé
    } catch (error) {
      setResult("Error"); // En cas d'erreur, afficher "Error"
      setIsResult(true); // Indiquer qu'une tentative de calcul a été faite
    }
  };

  // Structure du composant de la calculatrice
  return (
    <div className="calculator"> {/* Conteneur principal de la calculatrice */}
      <div className="display"> {/* Section pour afficher l'entrée et le résultat */}
        <div className="input">{input}</div> {/* Affichage de l'entrée */}
        <div className="result">{result}</div> {/* Affichage du résultat */}
      </div>
      <div className="buttons"> {/* Section contenant les boutons de la calculatrice */}
        {/* Boutons numériques et opérateurs */}
        <button onClick={() => handleClick("1")}>1</button> 
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEqual}>=</button> {/* Bouton pour calculer le résultat */}
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={handleClear}>R</button> {/* Bouton pour réinitialiser l'entrée et le résultat */}
      </div>
    </div>
  );
};

export default Calculator; // Exportation du composant Calculator
