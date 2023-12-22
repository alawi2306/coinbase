import Hero from "./Components/Hero"
import Header from "./Components/Header"

export default function Home() {
  return (
    <div className="flex h-100 flex-col">
      <Header />
      <Hero />
    </div>
  )
}
