import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("");

  const handleDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement("a");
    link.href = "/Sillo_resume.pdf"; // Path to PDF in public/
    link.download = "Sillo_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Display confirmation message
    setMessage("CV downloaded successfully!");
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <section className="h-full bg-primary">
      <div className="container mx-auto h-full px-4">
        {/* Main Content */}
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-12 gap-4">
          {/* Left Content */}
          <div className="text-center xl:text-left order-2 xl:order-none space-y-4">
            {/* Title and Subtitle */}
            <span className="text-xl font-medium text-accent">
              Software Developer
            </span>
            <h1 className="h1 text-white leading-tight">
              Hello I'm <br />
              <span className="text-accent">Moeketsi Junior Sillo</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80 leading-relaxed">
              I specialize in creating elegant digital experiences and have
              proficiency in a wide range of programming languages and
              technologies.
            </p>

            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
                aria-label="Download Moeketsi Junior Sillo's CV"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              {message && (
                <p className="text-green-500 text-sm mt-2">{message}</p>
              )}
              <Social
                containerStyles="flex gap-4"
                iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Content (Photo) */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;
