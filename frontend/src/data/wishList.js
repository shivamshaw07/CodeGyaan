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

const wishList = [
    {
        title: "UI/UX Design Essentials",
        instructor: "Olivia Garcia",
        start_date: "3 Sep 2024",
        img: uiux,
        mode:"video",
        features: ["Design thinking", "Prototyping tools"],
        description:
          "Master the essentials of UI/UX design, from design thinking to using prototyping tools. Create user-centric designs and craft intuitive interfaces.",
        price: {
          original_price: 6499.0,
          discounted_price: 5499.0,
          discount_percentage: "15%",
        },
        tags: ["UI/UX Design", "Design Thinking", "Prototyping"],
      },
      {
        title: "Blockchain Technology",
        instructor: "Mark Thompson",
        start_date: "20 Oct 2024",
        img: blockchain,
        mode:"live",
        features: ["Blockchain concepts", "Smart contracts"],
        description:
          "Demystify blockchain technology, understand its concepts, and explore smart contracts. Get ready to delve into the world of decentralized systems.",
        price: {
          original_price: 7999.0,
          discounted_price: 6499.0,
          discount_percentage: "19%",
        },
        tags: ["Blockchain", "Cryptocurrency", "Smart Contracts"],
      },
      {
        title: "Cloud Computing Essentials",
        instructor: "Dr. Kevin Smith",
        start_date: "12 Nov 2024",
        img: cloud,
        mode:"video",
        features: ["Cloud platforms", "Infrastructure as a Service (IaaS)"],
        description:
          "Master the essentials of cloud computing, explore various cloud platforms, and understand Infrastructure as a Service (IaaS) concepts.",
        price: {
          original_price: 6999.0,
          discounted_price: 5499.0,
          discount_percentage: "21%",
        },
        tags: ["Cloud Computing", "IaaS", "Cloud Platforms"],
      },
      {
        title: "Game Development with Unity",
        instructor: "Michael Adams",
        start_date: "1 Dec 2024",
        img: game,
        mode:"live",
        features: ["Unity game engine", "Game design principles"],
        description:
          "Enter the world of game development using Unity. Learn the Unity game engine and game design principles to create captivating games.",
        price: {
          original_price: 7499.0,
          discounted_price: 5999.0,
          discount_percentage: "20%",
        },
        tags: ["Game Development", "Unity", "Game Design"],
      }
    
    ]
    

export default wishList