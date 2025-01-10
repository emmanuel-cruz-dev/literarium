import { useState } from "react";
import PagesHero from "../PagesHero";
import BlogContent from "./BlogContent";
import { BlogContext } from "./BlogContext";

const BlogPage = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BlogContext.Provider value={{ isVisible, handleClick }}>
        <PagesHero title="Blog" />
        <BlogContent />
      </BlogContext.Provider>
    </>
  );
};

export default BlogPage;
