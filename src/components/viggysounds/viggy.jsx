import React from "react";
import { motion, px } from "framer-motion";
import { FaInstagram, FaSpotify, FaSoundcloud, FaTiktok } from "react-icons/fa";
import Slider from "react-slick";
import viggy_dubwub from "../../assets/viggysounds/dubwub_viggy_dope.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VIGGYEPK() {
  const socials = [
    { icon: <FaInstagram />, link: "https://instagram.com/viggysounds" },
    {
      icon: <FaSpotify />,
      link: "https://open.spotify.com/artist/1LGq6HsdkJncPPY1rmDB4s?si=nOkjZBUzSCCJcYFDzr9J8g",
    },
    { icon: <FaSoundcloud />, link: "https://soundcloud.com/viggysounds" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com/@viggysoundz" },
  ];

  const tracks = [
    "https://soundcloud.com/viggysounds/the-buzz-viggy-flip",
    "https://soundcloud.com/viggysounds/dieantwoord-idontcare-viggy-flip",
    "https://soundcloud.com/viggysounds/keysnkrates-dumdeedum-viggy-flip",
  ];

  const mediaItems = [
    { type: "image", src: viggy_dubwub },
    { type: "image", src: "/media/live2.jpg" },
    { type: "video", src: "/media/liveclip.mp4" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <motion.header
        className="flex flex-col items-center p-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
          {/* <img
            src={viggy_dubwub}
            alt="Artist"
            className="w-full h-full object-cover object-center"
          /> */}
        </div>
        <h1 className="text-4xl font-bold mt-4">VIGGY</h1>
        <p className="max-w-2xl mt-4 text-gray-300">Bass Music Producer</p>
        <div className="flex gap-6 mt-6">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-purple-500 transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </motion.header>

      {/* TRACK LIST */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Popular Tracks</h2>
        <div className="flex flex-col gap-6 items-center">
          {tracks.map((track, i) => (
            <iframe
              key={i}
              className="rounded-lg w-full max-w-xl"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                track
              )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
            ></iframe>
          ))}
        </div>
      </section>

      {/* MEDIA CAROUSEL */}
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Live Performances</h2>
        <Slider {...sliderSettings}>
          {mediaItems.map((item, i) => (
            <div key={i} className="flex justify-center">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Media ${i}`}
                  height="400 px"
                  width="400 px"
                  object-fit="cover"
                  className="max-h-[500px] w-full object-contain rounded-lg"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="max-h-[500px] w-full object-contain rounded-lg"
                ></video>
              )}
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
