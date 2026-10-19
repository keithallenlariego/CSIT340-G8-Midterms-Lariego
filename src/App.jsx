import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Docs from "./components/Docs";
import StatCard from "./components/StatCard";


function App() {

  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  return (
    <div>
      <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
          <Sidebar/>
        <div className="flex items-end justify-between px-20 pt-10">
          
          <div>
            <Docs read={read} bookmarks={bookmarks} setRead={setRead} setBookmarks={setBookmarks} q/>
          </div>
            <StatCard value={read} label="Marked as read" />
            <StatCard value={bookmarks} label="Bookmarks" />
        </div>
      </div>

      <main className="px-20 pt-4">
        <section className="border-t border-[#C9996B] py-3">
          <h3 className="text-2xl font-bold">Create</h3>
          <p className="mt-1 text-xl">Creates an empty Git repository in the current folder.</p>
          <code className="mt-3 block rounded-lg bg-[#5C766D] px-6 py-2 font-mono text-xl text-[#EDE9E6]">
            git init
          </code>
        </section>
        <section className="border-t border-[#C9996B] py-3">
          <h3 className="text-2xl font-bold">Rename</h3>
          <p className="mt-1 text-xl">Renames the current branch to main.</p>
          <code className="mt-3 block rounded-lg bg-[#5C766D] px-6 py-2 font-mono text-xl text-[#EDE9E6]">
            git branch -M main
          </code>
        </section>
        <section className="border-t border-[#C9996B] py-3">
          <h3 className="text-2xl font-bold">Upload</h3>
          <p className="mt-1 text-xl">Sends the main branch to the remote named origin.</p>
          <code className="mt-3 block rounded-lg bg-[#5C766D] px-6 py-2 font-mono text-xl text-[#EDE9E6]">
            git push -u origin main
          </code>
        </section>
      </main>
    </div>
  );
}

export default App;