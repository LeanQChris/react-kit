"use client"
import httpClient from "@/core/network/client";
import { Button } from "@techyatraa/react-kit"
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    const fetchData = async () => { // Call the async function
      try {
        const { data } = await httpClient.get("/todos/1");
        console.info(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the async function
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button title="Button" />
    </main>
  );
}
