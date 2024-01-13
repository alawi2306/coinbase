import Hero from "./Components/Hero"
import Header from "./Components/Header"
import landingPage from "./Components/Landing"


export default function Home() {
  return (
    <div className="flex h-100 flex-col">
      <landingPage></landingPage>
      <Header />
      <Hero />
    </div>
  )
}
