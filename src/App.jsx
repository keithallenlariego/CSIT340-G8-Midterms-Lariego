
import Sidebar from "./components/Sidebar";
import Guide from "./components/Guide";
import StatCard from "./components/StatCard";
import Docs from "./components/Docs";


function App() {

  
  return (
    <div>
      <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
          <Sidebar/>
        <div className="flex items-end justify-between px-20 pt-10">
          <div>
            <Docs/>

            <StatCard value={Docs.read} label="Marked as read" />
            <StatCard value={Docs.bookmarks} label="Bookmarks" />

          </div>

          <Guide/>

        </div>  
      </div>
      
    </div>
  );
}

export default App;