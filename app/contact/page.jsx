"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+27) 799 9930",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sillojunior8@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Bloemfontein, South Africa",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "your_service_id"; // Replace with your EmailJS Service ID
    const templateID = "your_template_id"; // Replace with your EmailJS Template ID
    const userID = "your_user_id"; // Replace with your EmailJS User ID

    // Prepare template parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: selectedValue,
      message: formData.message,
    };

    // Send email via EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      () => {
        setMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setSelectedValue("");
        setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
      },
      (error) => {
        setMessage("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
        setTimeout(() => setMessage(""), 3000);
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col bg-gradient-to-r from-pink-600 to-pink-800 rounded-xl shadow-2xl overflow-hidden p-10 space-y-6"
            >
              <h3 className="text-center text-4xl font-extrabold text-white">
                Let's Work Together
              </h3>
              <p className="text-center text-gray-200">
                Fill out the form below to get in touch.
              </p>

              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Input
                    placeholder=""
                    className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                    type="text"
                    required
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <Input
                    placeholder=""
                    className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                    type="text"
                    required
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              {/* Email */}
              <div className="relative">
                <Input
                  placeholder=""
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  type="email"
                  required
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
              {/* Phone */}
              <div className="relative">
                <Input
                  placeholder=""
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  type="text"
                  required
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                  htmlFor="phone"
                >
                  Phone
                </label>
              </div>
              <Select onValueChange={(value) => {
                setSelectedValue(value);
                setFormData((prev) => ({ ...prev, service: value }));
              }}>
                <SelectTrigger className="w-full">
                  <span className={`text-${selectedValue ? "black" : "gray-400"}`}>
                    {selectedValue || "Select a service"}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                    <SelectItem value="seo-optimization">SEO Optimization</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                id="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
              {message && (
                <p className="text-center text-green-500 text-sm mt-2">{message}</p>
              )}
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gradient-to-r from-pink-600 to-pink-800 text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
