import PagesHero from "../../PagesHero";
import BlogContent from "../Content/BlogContent";
import { BlogContext } from "../../../context/BlogContext";
import useBlog from "../../../hooks/useBlog";

function Blog() {
  const { isVisible, handleClick } = useBlog();

  return (
    <>
      <BlogContext.Provider value={{ isVisible, handleClick }}>
        <PagesHero title="Blog" />
        <BlogContent />
      </BlogContext.Provider>
    </>
  );
}

export default Blog;
