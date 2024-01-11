import Hero from "./Components/Hero";
import BlogSection from "./Components/BlogSection";
import ManipulateBlog from "./Components/ManipulateBlog";
import { useContext, useEffect } from "react";
import { ComponentContext } from "../../context/index";

const Home = () => {
  const { manipulatebox } = useContext(ComponentContext);
  return (
    <main>
     { manipulatebox&&<ManipulateBlog/>}
      <Hero />
      <BlogSection/>
    </main>
  );
};

export default Home;
