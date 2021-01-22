import React from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";

const SocialProfile = (props) => {
  const { link, image } = props.SocialProfile;

  return (
    <span>
      <a
        href={link}
        style={{ display: "table-cell" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={image}
          alt="slika2"
          style={{ margin: 10, width: 35, height: 35 }}
        />
      </a>
    </span>
  );
};

const SocialProfiles = (props) => {
  return (
    <div>
      <h2>Connect with me</h2>
      <div>
        {SOCIAL_PROFILES.map((profile) => {
          return <SocialProfile key={profile.id} SocialProfile={profile} />;
        })}
      </div>
    </div>
  );
};

export default SocialProfiles;
