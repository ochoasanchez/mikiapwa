// import icons from "../assets/images/icons.png";
import { ActionButton } from "../components/ActionButton";
// import FooterIcons from "../components/FooterIcons";
import Logo from "../components/Logo";
import { MainSubtitle } from "../components/MainSubitle";
import { MainTitle } from "../components/MainTitle";

// TODO: Video or image background

export function Menu() {
  const user = localStorage.currentUser ? JSON.parse(localStorage.currentUser) : "";
  const userName = localStorage.currentUser
    ? user.name.replace(/ .*/, "")
    : "";

  const title = `¡Es hora de la verdad${user !== "" ? `, ${userName}` : ""}!`  
  
  return (
    <main className="gap-8 px-4 sm:px-12">
      <Logo />

      <MainTitle text={title} uppercase/>
      <MainSubtitle text="¿A qué quieres enfrentarte?" />

      <div className="flex w-full flex-col gap-4">
        {/* <ActionButton url="/trivia" text="Juego de trivia" /> */}
        <ActionButton url="/memory" text="Juego de memoria" />
        <ActionButton
          url="/"
          text="Volver al Inicio"
          className="btn-alternate"
        />
      </div>

      {/* <FooterIcons clickable /> */}
    </main>
  );
}
