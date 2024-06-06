"use client";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <section className="flex h-full flex-row">
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  );
}
