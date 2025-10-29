import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaSpotify,
  FaSoundcloud,
  FaTiktok,
  FaPlay,
} from "react-icons/fa";

//shows
import viggy_dubwub from "../../assets/viggysounds/dubwub_viggy_dope.png";
import dubwub_viggy_iii_cover from "../../assets/viggysounds/dubwub_iii_cover.jpeg";
import dubwub_viggy_ii_cover from "../../assets/viggysounds/viggy_dubwub_ii.jpeg";
import vibes from "../../assets/viggysounds/vibes.jpeg";

import viggy_logo from "../../assets/viggysounds/viggy_logo.svg"; // Add this import
import headshot from "../../assets/viggysounds/headshot_viggy.png";
import "./viggy.css";

//import cover art
import coherence from "../../assets/viggysounds/coverArt/coherence.jpeg"; // Add this import
import buzz_cover from "../../assets/viggysounds/coverArt/buzz.png";
import idontcare_cover from "../../assets/viggysounds/coverArt/idontcare.png";
import dumdeedum_cover from "../../assets/viggysounds/coverArt/dum_dee_dum.png";
import ilikethat_cover from "../../assets/viggysounds/coverArt/I_like_that.png";
import getyouhigh_cover from "../../assets/viggysounds/coverArt/get_you_high.png";
import experience_cover from "../../assets/viggysounds/coverArt/experience.png";

export default function VIGGYEPK() {
  const socials = [
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/viggysounds",
      name: "Instagram",
    },
    {
      icon: <FaSpotify />,
      link: "https://open.spotify.com/artist/1LGq6HsdkJncPPY1rmDB4s?si=nOkjZBUzSCCJcYFDzr9J8g",
      name: "Spotify",
    },
    {
      icon: <FaSoundcloud />,
      link: "https://soundcloud.com/viggysounds",
      name: "SoundCloud",
    },
    {
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@viggysoundz",
      name: "TikTok",
    },
  ];

  const tracks = [
    {
      title: "Hermitude - The Buzz (VIGGY Flip)",
      soundcloudUrl: "https://soundcloud.com/viggysounds/the-buzz-viggy-flip",
      coverArt: buzz_cover,
    },
    {
      title: "Die Antwoord - I Don't Care (VIGGY Flip)",
      soundcloudUrl:
        "https://soundcloud.com/viggysounds/dieantwoord-idontcare-viggy-flip",
      coverArt: idontcare_cover,
    },
    {
      title: "Keys N Krates - Dum Dee Dum (VIGGY Flip)",
      soundcloudUrl:
        "https://soundcloud.com/viggysounds/keysnkrates-dumdeedum-viggy-flip",
      coverArt: dumdeedum_cover,
    },
    {
      title: "COHERNECE",
      soundcloudUrl:
        "https://soundcloud.com/viggysounds/coherence?si=b74d438637364478ba938bb5121c5ab6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      spotifyUrl:
        "https://open.spotify.com/track/5Df4HkiGshTf4XhaDqhRmt?si=1f9b5bf970d6403c",
      coverArt: coherence,
    },
    {
      title: "I LIKE that.",
      soundcloudUrl:
        "https://soundcloud.com/viggysounds/i-like-that-viggy?si=79f4c0c3f73a4186bfb6003ccb2c9db8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      spotifyUrl:
        "https://open.spotify.com/track/2WcLzt5KrKxnEV5UffJ4us?si=667f9843de6b4633",
      coverArt: ilikethat_cover,
    },
    {
      title: "Get You High",
      soundcloudUrl:
        "https://soundcloud.com/viggysounds/getyouhigh?si=c9c90b98264f403d9af94df0015ef2a0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      spotifyUrl:
        "https://open.spotify.com/track/4dEoahugDtvbClnbjscnOx?si=5f23a8a957604757",
      coverArt: getyouhigh_cover,
    },
    {
      title: "Ludovico Einaudi - Experience (VIGGY FLIP)",
      soundcloudUrl:
        "https://soundcloud.com/viggysounds/experience?si=fd3fabe44d9e45a8958075ef24e8f627&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      coverArt: experience_cover,
    },
  ];

  const galleryMedia = [
    { src: viggy_dubwub, alt: "Viggy DJ Set", type: "image" },
    { src: dubwub_viggy_iii_cover, alt: "Live Performance", type: "image" },
    { src: dubwub_viggy_ii_cover, alt: "Studio Session", type: "image" },
    { src: vibes, alt: "Studio Session", type: "image" },
    // Add videos like this:
    // { src: "path/to/video.mp4", alt: "Live Performance Video", type: "video" },
    // { src: "https://youtube.com/embed/VIDEO_ID", alt: "YouTube Video", type: "video", isYouTube: true },
  ];

  return (
    <div className="viggy-epk">
      {/* HERO SECTION */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <div className="artist-image">
            <img src={headshot} alt="Viggy" />
          </div>
          <img src={viggy_logo} alt="Viggy Logo" />{" "}
          {/* Replace with your logo */}
          <p className="artist-tagline">Dubstep & Experimental Bass</p>
          <div className="social-links">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* MUSIC SECTION */}
      <section className="music-section">
        <div className="container">
          <h2 className="section-title">IDs:</h2>
          <div className="tracks-grid">
            {tracks.map((track, index) => (
              <div key={index} className="track-card">
                <div className="track-cover">
                  <img src={track.coverArt} alt={`${track.title} cover art`} />
                </div>
                <div className="track-info">
                  <h3 className="track-title">{track.title}</h3>
                  <div className="track-links">
                    <a
                      href={track.soundcloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="track-link soundcloud"
                    >
                      <FaSoundcloud /> Listen on SoundCloud
                    </a>
                    {track.spotifyUrl && track.spotifyUrl !== "#" && (
                      <a
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="track-link spotify"
                      >
                        <FaSpotify /> Listen on Spotify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Live Performances</h2>
          <div className="gallery-grid">
            {galleryMedia.map((media, index) => (
              <div key={index} className="gallery-item">
                {media.type === "video" ? (
                  media.isYouTube ? (
                    <iframe
                      src={media.src}
                      title={media.alt}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <video
                      src={media.src}
                      alt={media.alt}
                      controls
                      preload="metadata"
                      loading="lazy"
                    />
                  )
                ) : (
                  <img src={media.src} alt={media.alt} loading="lazy" />
                )}
              </div>
            ))}
          </div>
          <div className="centered-text">More content coming!!</div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Bookings & Contact</h2>
          <div className="contact-info">
            <p>For bookings and collaborations:</p>
            <a href="mailto:viggysounds@gmail.com" className="contact-email">
              viggysounds@gmail.com
            </a>
            <div className="contact-socials">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
