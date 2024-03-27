import { Carousel } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'; // Import useHistory from React Router

export function CarouselCustomNavigation() {
  const navigate = useNavigate(); // Initialize useHistory

  // Array of image data with respective content and navigation URLs
  const images = [
    {
      src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      alt: "image 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet odio sit amet eleifend malesuada.",
      buttonLabel: "Learn More 1",
      navigateTo: "/page1",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "image 2",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      buttonLabel: "Learn More 2",
      navigateTo: "/page2",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      alt: "image 3",
      content: "Vestibulum at libero eget nibh sagittis elementum id non ex. Aliquam vitae accumsan est.",
      buttonLabel: "Learn More 3",
      navigateTo: "/page3",
    },
    {
      src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      alt: "image 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet odio sit amet eleifend malesuada.",
      buttonLabel: "Learn More 1",
      navigateTo: "/page1",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "image 2",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      buttonLabel: "Learn More 2",
      navigateTo: "/page2",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      alt: "image 3",
      content: "Vestibulum at libero eget nibh sagittis elementum id non ex. Aliquam vitae accumsan est.",
      buttonLabel: "Learn More 3",
      navigateTo: "/page3",
    },
  ];

  const handleNavigate = (url) => {
    navigate.push(url); // Navigate to the specified URL
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center py-4 px-6 z-50">
        <nav className="flex gap-14 items-center">
          <li className="text-white list-none hover:text-gray-300">Home</li>
          <li className="text-white list-none hover:text-gray-300">Activities</li>
          <li className="text-white list-none hover:text-gray-300">Donate</li>
          <li>
            <img src="" alt="Your Company Logo" className="h-8 w-8 mr-4" />
          </li>
          <li className="text-white list-none hover:text-gray-300">About Us</li>
          <li className="text-white list-none hover:text-gray-300">Contact Us</li>
        </nav>
      </div>

      <Carousel
        className="rounded-xl relative overflow-hidden"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* Render images dynamically */}
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="h-screen w-full object-cover object-center"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <p>{image.content}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleNavigate(image.navigateTo)}
              >
                {image.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
