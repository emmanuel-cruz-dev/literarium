import PersonalImg from "../assets/images/package1.webp";
import ProfessionalImg from "../assets/images/package2.webp";
import BusinessImg from "../assets/images/package3.webp";

const pricePlans = [
  {
    id: 1,
    title: "Personal",
    image: PersonalImg,
    price: 77,
    eBooks: 250,
    comics: 10,
    books: 5,
    magazines: 36,
  },
  {
    id: 2,
    title: "Professional",
    image: ProfessionalImg,
    price: 149,
    eBooks: 350,
    comics: 20,
    books: 15,
    magazines: 50,
  },
  {
    id: 3,
    title: "Business",
    image: BusinessImg,
    price: 199,
    eBooks: 500,
    comics: 30,
    books: 25,
    magazines: 68,
  },
];

export default pricePlans;
