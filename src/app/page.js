import NavBar from "./components/navBar"
import Layout1 from "./layout1/page"
import Layout2 from "./layout2/page"
import Layout3 from "./layout3/page"
import Layout4 from "./layout4/page"

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar/>
      <div className="flex flex-col sm:flex-col md:flex-row">
        <Layout1/>
        <Layout2/>
        <Layout3/>
      </div>
      <Layout4/>
    </div>
  );
}
