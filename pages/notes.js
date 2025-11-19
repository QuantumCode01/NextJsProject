import { isAuthenticated } from "../lib/auth";
import { useState } from "react";
import sanitizeHtml from "sanitize-html";

export default function Notes({ notes }) {
  const [items, setItems] = useState(notes);
  const [text, setText] = useState("");

  function addNote() {
    const clean = sanitizeHtml(text, { allowedTags: [], allowedAttributes: {} }).trim();
    if (!clean) return;
    setItems([{ id: Date.now(), text: clean }, ...items]);
    setText("");
  }

  async function logout() {
    await fetch("/api/logout");
    window.location.href = "/login";
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <button onClick={logout} className="btn btn-sm btn-error">Logout</button>
      </div>

      <div className="flex gap-2 mb-4">
        <input value={text} onChange={e => setText(e.target.value)} className="input input-bordered w-full" placeholder="Write a note..." />
        <button onClick={addNote} className="btn btn-primary">Add</button>
      </div>

      <ul className="space-y-3">
        {items.map(n => (
          <li key={n.id} className="p-3 bg-base-200 rounded-lg shadow">{n.text}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  if (!isAuthenticated(req)) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const mockNotes = [
    { id: 1, text: "Learn SSR in Next.js" },
    { id: 2, text: "Use Tailwind + DaisyUI" },
    { id: 3, text: "Prepare assignment PDF" },
  ];

  return { props: { notes: mockNotes } };
}
