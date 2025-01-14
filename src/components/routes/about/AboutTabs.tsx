import { FC } from "react";
import { useState } from "react";
import TabImg1 from "../../../assets/images/tabs-img1.webp";
import TabImg2 from "../../../assets/images/tabs-img2.webp";
import TabImg3 from "../../../assets/images/tabs-img3.webp";
import TabImg4 from "../../../assets/images/tabs-img4.webp";
import TabImg5 from "../../../assets/images/tabs-img5.webp";
import TabImg6 from "../../../assets/images/tabs-img6.webp";
import TabImg7 from "../../../assets/images/tabs-img7.webp";
import TabImg8 from "../../../assets/images/tabs-img8.webp";
import TabImg9 from "../../../assets/images/tabs-img9.webp";
import TabImg10 from "../../../assets/images/tabs-img10.webp";
import TabImg11 from "../../../assets/images/tabs-img11.webp";

interface Item {
  id: number;
  title: string;
  img: string;
  text1: string;
  text2: string;
}

interface TabsRenderProps {
  arr: Item[];
}

const tabs: Item[] = [
  {
    id: 1,
    title: "Passionate About Every Page",
    img: TabImg1,
    text1:
      "Our journey began with a simple yet profound belief: every book has the power to transform lives. As independent booksellers for over two decades, we've witnessed countless moments of discovery, where readers found exactly what they needed, whether they knew they were looking for it or not. Our carefully curated collection reflects our commitment to diversity in literature, embracing both timeless classics and emerging voices that challenge and inspire. We take pride in our knowledgeable staff, each bringing their unique literary expertise and passion to help guide you through our shelves.",
    text2:
      "Through carefully selected titles and personalized recommendations, we've built a sanctuary where books become bridges, connecting different perspectives and experiences. Our dedication to the written word extends beyond mere transactions; it's about fostering a deeper understanding of ourselves and the world around us. Every recommendation we make comes from a place of genuine enthusiasm and deep respect for the power of storytelling.",
  },
  {
    id: 2,
    title: "Quality Meets Personal Service",
    img: TabImg2,
    text1:
      "In an age of automated recommendations and algorithmic suggestions, we stand firm in our belief that nothing can replace the human touch in connecting readers with books. Our team spends countless hours reviewing new releases, rediscovering hidden gems, and staying current with literary trends to ensure we offer more than just books – we offer guidance, insight, and understanding. Each staff member brings years of reading experience and specialized knowledge in different genres, allowing us to provide expert recommendations across all categories.",
    text2:
      "We pride ourselves on our ability to listen and understand what our customers are seeking, whether it's their next great read or a perfect gift for a loved one. Our commitment to quality extends beyond our book selection to every aspect of our service, from our carefully organized shelves to our community events and reading groups. We believe that personal attention and genuine care create an experience that online algorithms simply cannot match.",
  },
  {
    id: 3,
    title: "Books Shape Our Journey",
    img: TabImg3,
    text1:
      "Literature has the remarkable ability to shape perspectives, challenge assumptions, and open minds to new possibilities. We've witnessed this transformative power firsthand through the countless stories shared by our customers over the years. From young readers discovering the joy of reading through their first chapter book to adults finding solace or inspiration in times of need, books have been constant companions on life's journey. Our role as booksellers goes beyond simply providing access to books; we're facilitators of discovery and growth.",
    text2:
      "We understand that each book chosen represents a potential turning point, a new understanding, or a moment of pure enjoyment. Through carefully curated selections and thoughtful recommendations, we aim to be part of your literary journey, helping you find the books that will resonate with your current chapter in life while introducing you to unexpected treasures that might shape your future path.",
  },
  {
    id: 4,
    title: "Community Beyond The Shelves",
    img: TabImg4,
    text1:
      "Our bookstore has evolved into much more than a retail space; it's become a vibrant community hub where ideas are exchanged, friendships are formed, and cultural connections are strengthened. Through our regular events, book clubs, and author visits, we've created a space where literature comes alive through discussion and shared experiences. Our commitment to community extends beyond our physical walls, as we actively collaborate with local schools, libraries, and cultural organizations to promote literacy and learning. We believe that books have the power to bring people together, bridging differences and fostering understanding.",
    text2:
      "Our bookstore has evolved into much more than a retail space; it's become a vibrant community hub where ideas are exchanged, friendships are formed, and cultural connections are strengthened. Through our regular events, book clubs, and author visits, we've created a space where literature comes alive through discussion and shared experiences. Our commitment to community extends beyond our physical walls, as we actively collaborate with local schools, libraries, and cultural organizations to promote literacy and learning. We believe that books have the power to bring people together, bridging differences and fostering understanding.",
  },
  {
    id: 5,
    title: "Curating Stories Since 1991",
    img: TabImg5,
    text1:
      "For nearly three decades, we've dedicated ourselves to the art of literary curation, carefully selecting each title that graces our shelves. Our longevity in the community isn't just about selling books; it's about understanding the evolving needs and interests of our readers while maintaining our commitment to quality and diversity in literature.",
    text2:
      "We've witnessed the changing landscape of bookselling, from the rise of online retailers to the digital revolution, yet we've remained true to our core mission: providing personally selected, quality books to our community. Our experience has taught us that true curation requires more than just stocking bestsellers; it demands an understanding of both classic literature and contemporary trends, a keen eye for emerging talents, and the ability to recognize works that will resonate with our unique community.",
  },
  {
    id: 6,
    title: "Where Readers Find Home",
    img: TabImg6,
    text1:
      "We've intentionally created an environment where the love of reading is celebrated and nurtured. Our space is designed to encourage exploration, with comfortable reading nooks, thoughtfully organized sections, and displays that invite discovery. We understand that finding the right book is a deeply personal experience, which is why we've cultivated an atmosphere that welcomes browsing and reflection. Our regular customers often tell us that stepping into our store feels like coming home, and we take pride in maintaining this warm, inviting atmosphere. ",
    text2:
      "The careful arrangement of our sections, the subtle lighting, and even the gentle background music are all chosen to enhance your book-browsing experience. We believe that a bookstore should be more than just a place to purchase books; it should be a sanctuary for readers, a place where literary adventures begin.",
  },
  {
    id: 7,
    title: "Knowledge Share With Care",
    img: TabImg7,
    text1:
      "Our approach to bookselling is rooted in the belief that knowledge should be shared with enthusiasm and understanding. Each member of our team brings unique expertise and a genuine passion for helping others discover the perfect book. We invest significant time in staff training and development, ensuring that our booksellers are well-versed not only in literature but also in the art of listening and understanding customer needs. Our recommendations come from a place of genuine knowledge and experience, as we personally read and discuss many of the books we stock.",
    text2:
      "We take pride in our ability to connect readers with books that might otherwise go undiscovered, sharing our insights while respecting individual preferences and interests. This careful balance of expertise and empathy defines our approach to sharing knowledge.",
  },
  {
    id: 8,
    title: "Building Literary Connections Daily",
    img: TabImg8,
    text1:
      "Every day brings new opportunities to connect readers with stories that could change their lives. We see ourselves as bridge builders, linking people to ideas, adventures, and perspectives through carefully chosen books. These connections happen in countless ways – through our personalized recommendation service, our themed book displays, our active social media presence, and our engaging newsletter. We work diligently to understand the latest literary trends while maintaining our appreciation for timeless classics, ensuring we can connect readers across all genres and interests.",
    text2:
      "Our staff regularly participates in industry conferences and maintains relationships with publishers to stay informed about upcoming releases and emerging authors. This commitment to building and maintaining literary connections extends to our relationships with local authors and artists.",
  },
  {
    id: 9,
    title: "Your Reading Adventure Begins",
    img: TabImg9,
    text1:
      "We believe that every visit to our bookstore marks the potential beginning of a new adventure. Whether you're a seasoned reader or just starting your literary journey, we've created an environment that encourages exploration and discovery. Our carefully organized sections invite wandering, while our knowledgeable staff stands ready to guide you toward your next great read. We understand that choosing a new book is both exciting and sometimes overwhelming, which is why we've developed various ways to help you discover books that match your interests.",
    text2:
      "From our staff picks and themed displays to our personalized recommendation service, we're committed to helping you find books that will captivate and inspire you. Each section of our store is thoughtfully curated to facilitate these discoveries.",
  },
  {
    id: 10,
    title: "Growing Minds Through Books",
    img: TabImg10,
    text1:
      "Education and personal growth have always been at the heart of our mission. We believe that books are essential tools for developing critical thinking, empathy, and understanding. Our children's section is carefully curated to support young readers at every stage of their development, while our adult selections span the breadth of human knowledge and experience. We work closely with local educators and parents to ensure our inventory supports both academic needs and personal enrichment.",
    text2:
      "Our commitment to growing minds extends beyond just stocking educational materials; we actively create programs and events that foster learning and development. From early literacy initiatives to advanced discussion groups, we provide resources and opportunities for intellectual growth at every level.",
  },
  {
    id: 11,
    title: "Stories Connect Our World",
    img: TabImg11,
    text1:
      "Our belief in the universal language of storytelling drives everything we do. As cultural bridges, books have the unique ability to transport readers across time, space, and perspective, fostering understanding between diverse communities. Our selection reflects this global outlook, featuring translated works, international authors, and stories that highlight our shared human experience.",
    text2:
      "We actively seek out voices from different cultures and backgrounds, ensuring our shelves represent the rich tapestry of global literature. Through carefully chosen titles, we help readers explore different worldviews and traditions, promoting cross-cultural understanding and appreciation. Our international section has grown into a beloved destination for readers seeking to broaden their horizons, featuring both contemporary international bestsellers and classic works from around the globe. Regular cultural reading events and multilingual story times further reinforce our commitment to celebrating literary diversity and fostering global connections through the written word.",
  },
];

const TabsRender: FC<TabsRenderProps> = ({ arr }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index: number) => {
    setActiveTab(index - 1); // -1 porque el primer elemento es el index 0
  };

  return (
    <article className="grid md:grid-cols-4 gap-4" key={activeTab}>
      <div className="flex md:col-span-1 flex-col gap-4">
        {arr.map((tab) => (
          <button
            className={`btn__accent-color__hover ${
              activeTab === tab.id - 1 ? "active" : ""
            } bg-neutral-200/40 text-white px-4 py-3 text-left`}
            onClick={() => handleClick(tab.id)}
            key={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="md:col-span-3 flex flex-col gap-4 items-center">
        <img
          className="w-full"
          src={arr[activeTab].img}
          alt={`tab ${arr[activeTab].title}`}
          width="573"
          height="220"
          loading="lazy"
        />
        <div className="flex flex-col gap-4">
          <p>{arr[activeTab].text1}</p>
          <p>{arr[activeTab].text2}</p>
        </div>
      </div>
    </article>
  );
};

const AboutTabs = () => {
  return (
    <section
      className="about-tabs bg-gray-100 text-neutral-600"
      id="about-tabs"
    >
      <article className="w-11/12 mx-auto py-12" id="main-cards">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 py-6 font-thin">
          <TabsRender arr={tabs} />
        </div>
      </article>
    </section>
  );
};

export default AboutTabs;
