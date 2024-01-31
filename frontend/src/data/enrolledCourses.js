
import java from '../assets/courseListBanner/Java-Programming-Training-For-Beginners.png'
import python from '../assets/courseListBanner/python-programing-banner.png'
import web from '../assets/courseListBanner/website-development-banner_33099-1687.png'
import game from '../assets/courseListBanner/gameDevelopment.png'
import app from '../assets/courseListBanner/image.png'
import cyberSecurity from '../assets/courseListBanner/cyberSecurity.png'
import machineLearning from '../assets/courseListBanner/machine-lerning1-min-2048x695-1.png'
import uiux from '../assets/courseListBanner/202308021690977891.png'
import blockchain from '../assets/courseListBanner/blockchain-course.png'
import cloud from '../assets/courseListBanner/cloud-computing (1).png'

const enrolledCourse = [
    {
    title: "Java Programming Masterclass",
    instructor: "Sophia Lee",
    start_date: "15 Mar 2024",
    img: java,
    mode:"live",
    features: ["24/7 live support", "interactive coding exercises"],
    description:
      "Embark on a comprehensive journey through Java programming. From basics to advanced topics, master the language and develop versatile applications. With live support and hands-on exercises, become a Java expert!",
    price: {
      original_price: 6999.0,
      discounted_price: 5499.0,
      discount_percentage: "20%",
    },
    tags: ["Java", "Programming", "Coding", "Software Development"],
  },
  {
    title: "Python for Data Science",
    instructor: "Dr. Alex Carter",
    start_date: "10 Apr 2024",
    img: python,
    mode:"live",
    features: ["personalized mentorship", "real-world projects"],
    description:
      "Dive into the realm of Python for data science. Learn from industry experts, work on real projects, and get personalized mentorship. Acquire the skills to tackle complex data challenges.",
    price: {
      original_price: 8499.0,
      discounted_price: 6999.0,
      discount_percentage: "18%",
    },
    tags: ["Python", "Data Science", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Web Development Bootcamp",
    instructor: "Emily Johnson",
    start_date: "5 May 2024",
    img: web,
    mode:"video",
    features: ["HTML/CSS", "JavaScript", "Project-based learning"],
    description:
      "Become a proficient web developer with this intensive bootcamp. Master front-end technologies like HTML, CSS, and JavaScript through hands-on projects and expert guidance.",
    price: {
      original_price: 5999.0,
      discounted_price: 4999.0,
      discount_percentage: "17%",
    },
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "iOS App Development",
    instructor: "David Miller",
    start_date: "20 Jun 2024",
    img: app,
    mode:"video",
    features: ["Swift programming", "App deployment"],
    description:
      "Learn to build iOS apps from scratch using Swift. Dive into app deployment and unleash your creativity in the iOS development world.",
    price: {
      original_price: 7499.0,
      discounted_price: 6499.0,
      discount_percentage: "13%",
    },
    tags: ["iOS Development", "Swift", "App Development"],
  },
  {
    title: "Cybersecurity Fundamentals",
    instructor: "Dr. Sarah Williams",
    start_date: "8 Jul 2024",
    img: cyberSecurity,
    mode:"live",
    features: ["Ethical hacking", "Security protocols"],
    description:
      "Discover the basics of cybersecurity, including ethical hacking techniques and security protocols. Start your journey to protect digital systems.",
    price: {
      original_price: 6999.0,
      discounted_price: 5999.0,
      discount_percentage: "14%",
    },
    tags: ["Cybersecurity", "Ethical Hacking", "Security"],
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Andrew Clark",
    start_date: "15 Aug 2024",
    img: machineLearning,
    mode:"live",
    features: ["Algorithms", "Model training"],
    description:
      "Explore the fundamentals of machine learning, covering algorithms and model training. Dive into the world of AI and data-driven decision-making.",
    price: {
      original_price: 7999.0,
      discounted_price: 6999.0,
      discount_percentage: "12%",
    },
    tags: ["Machine Learning", "AI", "Algorithms"],
  }
]

export default enrolledCourse