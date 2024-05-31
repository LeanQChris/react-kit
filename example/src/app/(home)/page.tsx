"use client"

import { Suspense, useEffect } from "react";
import { Button, Timer } from "@techyatraa/react-kit"

import { fetchEventDataBySlug, fetchTodoById } from "./data/api";
import { ImageUpload } from "@techyatraa/react-kit";

export default function Home() {

  useEffect(() => {
    fetchEventDataBySlug("fifa-world-cup-2026");
  }, []);

  let deadline = new Date("2024-6-12");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button title="Button"
        onClick={() => alert("asd")}
      />
      <ImageUpload
        onChange={(file: File) => {
          console.info(file)
        }}
        label="Choose image"
        placeholderImage="https://img.freepik.com/premium-vector/add-icon-add-post-video-photo-vector-images_292645-294.jpg"
      />

      <Suspense>
        <Timer deadline={deadline} />
      </Suspense>

    </main>
  );
}
