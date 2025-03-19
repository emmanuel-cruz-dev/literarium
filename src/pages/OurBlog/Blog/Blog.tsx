import PagesHero from "../../PagesHero";
import Content from "../Content/Content";
import { BlogContext } from "../../../context/BlogContext";
import useToggleVisibility from "../../../hooks/useToggleVisibility";
import "../../../styles/pages/OurBlog/blog.css";

function Blog() {
  const { isVisible, handleClick } = useToggleVisibility();

  return (
    <>
      <BlogContext.Provider value={{ isVisible, handleClick }}>
        <PagesHero title="Blog" />
        <Content />
      </BlogContext.Provider>
    </>
  );
}

export default Blog;
