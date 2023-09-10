import TwitterSvg from "./ImgSvg/TwitterSvg";
import FacebookSvg from "./ImgSvg/FacebookSvg";
import IgSvg from "./ImgSvg/IgSvg";
import WalletSvg from "./ImgSvg/WalletSvg";
import MapSvg from "./ImgSvg/MapSvg";
import Tour1 from "./ImgSvg/tour-1.jpeg";
import Tour2 from "./ImgSvg/tour-2.jpeg";
import Tour3 from "./ImgSvg/tour-3.jpeg";
import Tour4 from "./ImgSvg/tour-4.jpeg";
import Tour5 from "./ImgSvg/tour-5.jpeg";
import Tour6 from "./ImgSvg/tour-6.jpeg";
import SearchSvg from "./ImgSvg/SearchSvg";
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#featured", text: "featured" },
  { id: 5, href: "#gallery", text: "gallery" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: <TwitterSvg /> },
  { id: 2, href: "https://www.facebook.com", icon: <FacebookSvg /> },
  { id: 3, href: "https://www.instagram.com", icon: <IgSvg /> },
];

export const about = [
  {
    id: 1,
    text1: "explore the difference",
    text2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio impedit repellat odio. Doloremque pariatur sunt nesciunt, est ut recusandae reprehenderit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio impedit repellat odio. Doloremque pariatur sunt nesciunt, est ut recusandae reprehenderit.",
    href: "#home",
  },
];

export const services = [
  {
    id: 1,
    icon: <WalletSvg />,
    heading: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi corrupti velit esse cupiditate neque?",
  },
  {
    id: 2,
    icon: <WalletSvg />,
    heading: "endless biking",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi corrupti velit esse cupiditate neque?",
  },
  {
    id: 3,
    icon: <WalletSvg />,
    heading: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi corrupti velit esse cupiditate neque?",
  },
  {
    id: 4,
    icon: <WalletSvg />,
    heading: "and many more",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi corrupti velit esse cupiditate neque?",
  },
];

export const tours = [
  {
    id: 1,
    image: Tour1,
    date: "august 26th 2023",
    location: "ekiti adventure",
    days: "6 days",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi possimus, reiciendis inventore eaque error quo cumque dolore assumenda tenetur.",
    icon: <MapSvg />,
    country: "nigeria",
    price: "from #300,000",
  },
  {
    id: 2,
    image: Tour2,
    date: "october 10th 2023",
    location: "calaber adventure",
    days: "11 days",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi possimus, reiciendis inventore eaque error quo cumque dolore assumenda tenetur.",
    icon: <MapSvg />,
    country: "nigeria",
    price: "from #500,000",
  },
  {
    id: 3,
    image: Tour3,
    date: "september 15th 2023",
    location: "dubai life",
    days: "6 days",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi possimus, reiciendis inventore eaque error quo cumque dolore assumenda tenetur.",
    icon: <MapSvg />,
    country: "arab emirate",
    price: "from #300,000",
  },
];

export const pictures = [
  { id: 1, image: Tour1, href: "#footer", icon: <SearchSvg /> },
  { id: 2, image: Tour2, href: "#footer", icon: <SearchSvg /> },
  { id: 3, image: Tour3, href: "#footer", icon: <SearchSvg /> },
  { id: 4, image: Tour4, href: "#footer", icon: <SearchSvg /> },
  { id: 5, image: Tour5, href: "#footer", icon: <SearchSvg /> },
  { id: 6, image: Tour6, href: "#footer", icon: <SearchSvg /> },
  { id: 7, image: Tour1, href: "#footer", icon: <SearchSvg /> },
  { id: 8, image: Tour2, href: "#footer", icon: <SearchSvg /> },
];
