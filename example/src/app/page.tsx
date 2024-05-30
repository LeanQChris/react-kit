"use client"
import { Button } from "@techyatraa/react-kit"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button  title="Button" onClick={() => { alert("test") }} />
    </main>
  );
}
