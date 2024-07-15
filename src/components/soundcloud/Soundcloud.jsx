import React from "react";
import "./Soundcloud.css";

const Soundcloud = () => {
  return (
    <section>
      <h2>Music</h2>
      <p className="career_description">
        I have recently begun producing bass music and will start creating a lot
        more. Please give my track a listen
      </p>
      <div className="container">
        <div>
          <iframe
            title="surrender"
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1871821137%3Fsecret_token%3Ds-VFr9juShn4z&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div className="Iframe">
            <a
              className="link"
              href="https://soundcloud.com/viggybeats/vignesh_focus_1/s-VFr9juShn4z"
              title="Surrender"
              target="_blank"
              rel="noreferrer"
            >
              Surrender
            </a>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Soundcloud;
