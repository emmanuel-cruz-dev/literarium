const MainCards = () => {
  const CardArticle = () => {
    return (
      <article>
        <h3>Free Gift Wrap</h3>
        <p>Free gift wrapping on all purchases. Wrapping includes a blue box with your choice with Ribbon.</p>
        <a href="#">Read More</a>
      </article>
    )
  }

  return (
    <section className="main-cards w-11/12 mx-auto" id="main-cards">
      <div className="flex flex-col gap-4 justify-center items-center text-center py-8">
        <h2 className="uppercase font-bold text-3xl">The Book guide <span className="text-cyan-400">online</span> book store</h2>
        <p>The online Books Guide is the biggest big store and the biggest books library in the world that has a lot of the popular and the most top category books presented here. Top Authors are here just subscribe your email address and get updated with us.</p>
      </div>
      <article>
        <div className="grid grid-cols-4">
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
        </div>
      </article>
    </section>
  )
}

export default MainCards