import BuildSomething from "@/components/home/BuildSomething";
import GlobalReach from "@/components/home/GlobalReach";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GlobalReach />
      <BuildSomething />
    </>
  );
}
