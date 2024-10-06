import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Form } from "./pages/Form";
import { Trivia } from "./pages/Trivia";
import { Memory } from "./pages/MemoryLegacy";
import { Participate } from "./pages/Participate";
import { RaffleMenu } from "./pages/RaffleMenu";
import { Raffle } from "./pages/Raffle";
import { MemoryScoreboard } from "./pages/MemoryScoreboard";
import { TriviaScoreboard } from "./pages/TriviaScoreboard";
import { Clear } from "./pages/Clear";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/form/:player" element={<Form />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/trivia" element={<Trivia />} />
      <Route path="/memory" element={<Memory />} />
      <Route path="/participate" element={<Participate />} />
      <Route path="/sorteo" element={<RaffleMenu />} />
      <Route path="/sorteo/:tipo" element={<Raffle />} />
      <Route path="/memory/scoreboard" element={<MemoryScoreboard />} />
      <Route path="/trivia/scoreboard" element={<TriviaScoreboard />} />
      <Route path="/clear" element={<Clear />} />
    </Routes>
  );
}

export default App;
