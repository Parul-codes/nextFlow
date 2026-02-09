import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header/>
      <Grid/>
    </div>
  );
}
