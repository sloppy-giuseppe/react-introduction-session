import React from "react";

const Profile = ({image, name}) => {
  return (
    <div>
      <img src={image}/>
      <p>{name}</p>
    </div>
  )
};

export default Profile;
