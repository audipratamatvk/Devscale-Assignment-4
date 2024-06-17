"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Form = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleCreateData() {
    if (title.trim() === "" || content.trim() === "") {
      alert("Both fields are required");
      return;
    }

    await fetch("https://v1.appbackend.io/v1/rows/F07f9bj18V00", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ title, content }]),
    });

    router.refresh();
    setTitle("");
    setContent("");
  }

  return (
    <div className="flex justify-center">
      <div className="space-y-4 flex flex-col w-4/5 max-w-lg ">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2 w-full border-2 rounded border-black"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="p-2 border rounded w-full h-20 border-2 rounded border-black"
        ></textarea>
        <div className="flex justify-start">
          <button
            onClick={handleCreateData}
            className="p-2 border bg-black text-white rounded hover:bg-slate-600"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
