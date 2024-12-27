import { FaGift, FaBook, FaTruck, FaCalculator } from 'react-icons/fa';

const cardItems = [
  {
    icon: FaGift,
    title: 'Free Gift Wrap',
    description: 'Free gift wrapping on all purchases. Wrapping includes a blue box with your choice with Ribbon.',
    link: '#'
  },
  {
    icon: FaBook,
    title: 'Best Quality',
    description: 'We provide the best quality books with the best price. We have a lot of books in our store.',
    link: '#'
  },
  {
    icon: FaTruck,
    title: 'Fast Delivery',
    description: 'We provide the best quality books with the best price. We have a lot of books in our store.',
    link: '#'
  },
  {
    icon: FaCalculator,
    title: 'Best Price',
    description: 'We provide the best quality books with the best price. We have a lot of books in our store.',
    link: '#'
  }
]

const CardArticle = () => {
    return (
      <>
        {cardItems.map((item, index) => (
          <article key={index} className="flex flex-col gap-4 items-center text-center border border-gray-300 p-6">
          
            <item.icon className="text-4xl" />
            <h3 className="font-medium text-lg">{item.title}</h3>
            <p>{item.description}</p>
            <a
              href={item.link}
              className=""
              >
              Read More
            </a>
          
        </article>
        ))}
        </>
)
  }
        {/* <FaGift className="text-4xl" />
        <h3 className="font-medium text-lg">Free Gift Wrap</h3>
        <p>Free gift wrapping on all purchases. Wrapping includes a blue box with your choice with Ribbon.</p>
        <a href="#">Read More</a> */}
    
  

const MainCards = () => {

  return (
    <section className="main-cards w-11/12 mx-auto" id="main-cards">
      <div className="flex flex-col gap-4 justify-center items-center text-center py-8">
        <h2 className="uppercase font-bold text-3xl">The Book guide <span className="text-cyan-400">online</span> book store</h2>
        <p>The online Books Guide is the biggest big store and the biggest books library in the world that has a lot of the popular and the most top category books presented here. Top Authors are here just subscribe your email address and get updated with us.</p>
      </div>
      <article>
        <div className="grid grid-cols-4">
          <CardArticle />
        </div>
      </article>
    </section>
  )
}

export default MainCards