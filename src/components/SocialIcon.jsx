import React from "react";

const SocialIcon = ({ icon: Icon, color = "text-white", url }) => {
    if (!Icon) return null;
  
    return (
      <div className="flex flex-col items-center gap-2 p-4">
        <a href={url} target="_blank" rel="noreferrer">
          <Icon
            size={50}
            className={`${color} transition-transform transform hover:scale-110 hover:opacity-80`}
          />
        </a>
      </div>
    );
  };
  
  export default SocialIcon;
