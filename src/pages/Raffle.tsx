import { useEffect, useState } from "react";
import { getRaffleParticipants } from "../helpers/raffle.helper";
import { ActionButton } from "../components/ActionButton";
import { useParams } from "react-router-dom";
import escudoGanador from "../assets/images/escudo-ganador.gif";
import Logo from "../components/Logo";
import useWindowDimensions from "../helpers/app.helper";
import Confetti from "react-confetti";
import Loader from "../components/Loader";

export function Raffle() {
  function startRaffle() {
    if (raffleParticipants && raffleParticipants.length > 0) {
      setIsLoading(true);

      const winner =
        raffleParticipants[
          Math.floor(Math.random() * raffleParticipants.length)
        ];

      setRaffleWinner(winner);

      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }
  const [raffleParticipants, setRaffleParticipants] = useState<any>(null);
  const [raffleWinner, setRaffleWinner] = useState<any>(null);
  const [raffleWinnerName, setRaffleWinnerName] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { tipo } = useParams<{ tipo: "main" | "memory" | "trivia" }>();
  const { width, height } = useWindowDimensions();

  const getRaffleName = (tipo?: "main" | "memory" | "trivia") => {
    if (tipo === "main") return "Gran sorteo";
    if (tipo === "memory") return "Sorteo Mikia Memory Challenge";
    return "Sorteo Desafío Mental";
  };

  const getParticipants = () => {
      const participantsData = getRaffleParticipants(tipo);
      setRaffleParticipants(participantsData);
  };

  const getRaffleWinnerName = () => {
    if (raffleWinner !== null) {
      if (tipo === "main") {
        return setRaffleWinnerName(raffleWinner.name);
      }
      return setRaffleWinnerName(raffleWinner.playerName);
    }
  };

  useEffect(() => {
    getParticipants();
  }, []);

  useEffect(() => {
    getRaffleWinnerName();
  }, [raffleWinner]);

  if (isLoading) {
    return (
      <Loader roulette={true} participants={raffleParticipants} type={tipo} />
    );
  }

  if (!isLoading && raffleWinner) {
    return (
      <main className="animate-fade-in px-12">
        <Confetti
          width={width}
          height={height}
          gravity={0.05}
          numberOfPieces={840}
        />
        <Logo />
        <p className="main__subtitle mt-8 uppercase">El ganador es</p>
        <div className="mt-8 rounded-xl bg-orange-500 p-4 text-white">
          <p className="text-center text-9xl font-bold uppercase">
            {raffleWinnerName}
          </p>
        </div>
        <img src={escudoGanador} className="ml-24 w-10/12" alt="Result" />
        <ActionButton
          url="/sorteo"
          text="Volver al menu"
          className="btn-alternate"
        />
      </main>
    );
  }

  return (
    <main className="animate-fade-in gap-20 px-12">
      <Logo />
      <h1 className="main__title font-bold uppercase">{getRaffleName(tipo)}</h1>
      <p className="main__subtitle mt-8 font-bold">
        ¿Será que hoy es tu día de suerte? <br />
        Vamos a descubrirlo...
      </p>
      <div className="flex w-full flex-col gap-12">
        <ActionButton onClick={startRaffle} text="Empezar" />
      </div>
    </main>
  );
}
