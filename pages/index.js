import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <div className="bg-black px-10">
      <Hero />
      <Stories />
      <Footer />
    </div>
  )
}