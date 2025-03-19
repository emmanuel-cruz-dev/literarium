import PagesHero from "../../PagesHero";
import Content from "../Content/Content";
import { BlogContext } from "../../../context/BlogContext";
import useBlog from "../../../hooks/useBlog";

function Blog() {
  const { isVisible, handleClick } = useBlog();

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
