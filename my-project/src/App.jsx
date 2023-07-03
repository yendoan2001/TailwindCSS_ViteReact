import "./App.css";
import Nav from "../src/components/Nav";
import AuthButton from "./components/AuthButton";
import Header from "./components/Header";
import Trending from "./components/Trending";
import CardMovie from "./components/CardMovie";


export default function App() {
  return (
    <div className="grid md:grid-cols-5">   
      <Nav />
      <main className="md:col-span-4 bg-cyan-50 py-6 px-12">
        <AuthButton />
        <Header/>
        <Trending/>
      </main>
    </div>
  );
}
