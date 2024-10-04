import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useState } from 'react';

const HelpCenter = () => {
  const [selectedTab, setSelectedTab] = useState("FAQ");
  const [searchQuery, setSearchQuery] = useState("");
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const tabs = ["FAQ", "Contact Us", "Popular Topics", "General", "Services"];
  const faqItems = [
    { question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Why do we use it?", answer: "It is a long established fact that a reader will be distracted by the readable content of a page." },
    { question: "Where does it come from?", answer: "Contrary to popular belief, Lorem Ipsum is not simply random text." },
    { question: "Where can I get some?", answer: "There are many variations of passages of Lorem Ipsum available." }
  ];

  const handleFaqClick = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Help Center</h1>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-full pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <HiMiniMagnifyingGlass className="absolute left-4 top-3 text-gray-500" />
      </div>

      {/* Tabs */}
      <div className="flex justify-between mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`flex-1 p-3 text-center rounded-md transition ${
              selectedTab === tab ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-700"
            } mr-2 last:mr-0`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ Section */}
      {selectedTab === "FAQ" && (
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleFaqClick(index)}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span className="text-blue-500">{faqOpenIndex === index ? "-" : "+"}</span>
              </div>
              {faqOpenIndex === index && (
                <p className="mt-4 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Contact Us Section */}
      {selectedTab === "Contact Us" && (
        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="mb-4">Feel free to contact us with any inquiries or issues you might have.</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            <button type="submit" className="w-full p-3 bg-blue-700 text-white rounded-md">Send Message</button>
          </form>
        </div>
      )}

      {/* Popular Topics Section */}
      {selectedTab === "Popular Topics" && (
        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-bold mb-2">Popular Topics</h2>
          <ul className="list-disc ml-5">
            <li>Lorem Ipsum Usage</li>
            <li>Understanding Placeholder Text</li>
            <li>Common Issues with Dummy Text</li>
          </ul>
        </div>
      )}

      {/* General Section */}
      {selectedTab === "General" && (
        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-bold mb-2">General Information</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            It has survived not only five centuries but also the leap into electronic typesetting.
          </p>
        </div>
      )}

      {/* Services Section */}
      {selectedTab === "Services" && (
        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-bold mb-2">Our Services</h2>
          <ul className="list-disc ml-5">
            <li>Customer Support</li>
            <li>Guidance and Tutorials</li>
            <li>Custom Development Services</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HelpCenter;
