import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RevisionCard } from "../../components";

export default function RevisionPage() {
  const { id } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchFlashstack();
  }, []);

  const fetchFlashstack = async () => {
    try {
      const response = await fetch(
        `https://flashstack-backend.onrender.com/card/deck/${id}`
      );
      const data = await response.json();
      console.log(data);
      setCards(data);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };

  return (
    <div>
      <h1>{id}</h1>
      <RevisionCard question={cards[0].question} answer={cards[0].answer} />
    </div>
  );
}
