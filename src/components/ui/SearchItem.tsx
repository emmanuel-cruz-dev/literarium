import { FaSearch } from "react-icons/fa";

function SearchItem() {
  return (
    <article className="flex flex-col gap-4">
      <h2 className="blog-content__aside__item-title">Search</h2>
      <div className="flex items-center border border-slate-300 py-2 px-3 text-inherit">
        <input
          name="search"
          id="search"
          className="focus:outline-none w-11/12 bg-inherit"
          type="text"
          placeholder="Enter Keyword"
        />
        <a className="w-1/12" href="#">
          <FaSearch />
        </a>
      </div>
    </article>
  );
}

export default SearchItem;
