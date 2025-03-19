import { Item } from "types/types";
import MissionImg1 from "../assets/images/mission-img1.webp";
import MissionImg2 from "../assets/images/mission-img2.webp";
import MissionImg3 from "../assets/images/mission-img3.webp";
import MissionImg4 from "../assets/images/mission-img4.webp";

const missionItems: Item[] = [
  {
    id: 1,
    title: "Info",
    img: MissionImg1,
    text: "At Literarium, we believe in the transformative power of books. Our goal is to provide access to a wide variety of titles that inspire, educate, and entertain. From classics to new releases, we offer books in physical and digital formats, as well as home delivery so that reading is always within your reach.",
  },
  {
    id: 2,
    title: "Why Us",
    img: MissionImg2,
    text: "Choosing us means trusting a bookstore committed to quality and a passion for reading. We have an expert team that carefully selects each title to ensure that you always find what you are looking for. In addition, our flexible delivery options and competitive prices set us apart in the market.",
  },
  {
    id: 3,
    title: "Involve",
    img: MissionImg3,
    text: "Join our community of passionate readers. At Literarium, we organize literary events, book clubs, and workshops to foster a love of books. We want you to be part of a network that shares stories, ideas, and experiences, helping us strengthen the bond between readers and authors.",
  },
  {
    id: 4,
    title: "Support",
    img: MissionImg4,
    text: "Your support allows us to continue promoting culture and reading. With each purchase, you help us to continue expanding our catalogue and offering literary experiences. In addition, we are committed to educational causes, allocating part of our profits to initiatives that promote access to reading for all.",
  },
];

export default missionItems;
