import Image from "next/image";
import React from "react";

const ImageProfile = () => {
  return (
    <div>
      <Image
        src="/profile.jpg"
        alt="Profile Image"
        width={400}
        height={400}
        className="w-24 rounded-full"
      />
    </div>
  );
};

export default ImageProfile;
