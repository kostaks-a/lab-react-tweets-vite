import React from 'react'


function ProfileImage(props) {
 // console.log(typeof props.image)
 // console.log(props.image)
  return (
    <div>
      <img src={props.image} className="whatever" alt="profile"/>
    </div>
)
}

export default ProfileImage;