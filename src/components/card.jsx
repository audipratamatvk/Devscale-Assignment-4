"use client";

import { useRouter } from "next/navigation";

export const Card = ({ item }) => {
  const router = useRouter();

  async function handleDeleteData() {
    await fetch("https://v1.appbackend.io/v1/rows/F07f9bj18V00", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });
    router.refresh();
  }

  const createdAtDate = new Date(item.createdAt);
  const formattedDate = createdAtDate.toLocaleString();

  return (
    <div className="mt-1 mb-1">
      <div
        key={item.id}
        className="p-4 bg-white border-black rounded border-2 mb-3"
      >
        <p className="text-l font-bold mt-2 text-black mb-1">{formattedDate}</p>
        <p className="text-2xl font-bold text-black">{item.title}</p>
        <h3 className="text-lg text-black mb-3">{item.content}</h3>
        <button
          className="bg-black text-white p-2 border bg-red-500 rounded hover:bg-red-300"
          onClick={handleDeleteData}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
