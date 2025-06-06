function SortFilter() {
  return (
    <article className="new-arrivals__container flex flex-col gap-4">
      <h2 className="blog-content__aside__item-title">Sort by</h2>
      <select
        className="border border-slate-300 py-2 px-3 focus:outline-none bg-inherit text-neutral-600 cursor-pointer"
        name="sort"
        id="sort"
      >
        <option value="most-relevant">Most Relevant</option>
        <option value="newest">Newest</option>
        <option value="lowest-price">Lowest Price</option>
        <option value="highest-price">Highest Price</option>
      </select>
    </article>
  );
}

export default SortFilter;
