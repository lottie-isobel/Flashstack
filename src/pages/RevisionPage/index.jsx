import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RevisionCard } from "../../components";
import './index.css'

export default function RevisionPage() {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardsRevised, setCardsRevised] = useState(0);
  const [currentCard, setCurrentCard] = useState({});

  useEffect(() => {
    fetchAndShuffleFlashstack();
  }, []);

  const fetchAndShuffleFlashstack = async () => {
    try {
      const response = await fetch(
        `https://flashstack-backend.onrender.com/card/deck/${id}`
      );
      const data = await response.json();
      const shuffledCards = data
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setCards(shuffledCards);
      setCurrentCard(shuffledCards[currentCardIndex]);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setCardsRevised((prevCardsRevised) => prevCardsRevised + 1);
    setCurrentCard(cards[(currentCardIndex + 1) % cards.length]);
  };

  console.log(currentCard)
  return (
    <div>
      <h1>Revise</h1>
      <h2 className="cards-revised">Cards revised: {cardsRevised}</h2>
      {currentCard ? (
        <RevisionCard
          question={currentCard.question}
          answer={currentCard.answer}
        />
      ) : (
        <p>No flashcards available for this deck.</p>
      )}
      <button onClick={nextCard}>Next card</button>
    </div>
  );
}