import Header from "./Components/Header"
import Description from "./Components/Description"

require('dotenv').config();

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Description />
    </div>
  )
}
