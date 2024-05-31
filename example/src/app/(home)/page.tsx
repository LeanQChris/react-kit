"use client"

import { Suspense, useEffect } from "react";
import { Button, Timer } from "@techyatraa/react-kit"

import { fetchTodoById } from "./data/api";

export default function Home() {

  useEffect(() => {
    fetchTodoById(1);
  }, []);

  let deadline = new Date("2024-6-12");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button title="Button"
        onClick={() => alert("asd")}
      />

      <Suspense>
        <Timer deadline={deadline} />
      </Suspense>

    </main>
  );
}
