import React, { useState } from 'react';
import { string, func } from 'prop-types';

import defaultProfileImg from 'assets/profilePicture.png';

const UserImageEdit = ({ profilePicture, setNewImg }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleClick = ({ target: { files } }) => {
    let reader = new FileReader();
    if (files) {
      setNewImg(files[0]);
      // Function to show new image preview
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div>
      <label htmlFor="fileInput">
        <div className="user-profile__rounded-image-edit-container">
          <img
            className="user-profile__rounded-image"
            src={imagePreview || profilePicture || defaultProfileImg}
            alt="user"
          />
        </div>
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleClick}
        className="user-profile__rounded-image-edit-hide-btn"
        value="" // Needs to be empty to avoid upload file error
        name="newImg"
      />
    </div>
  );
};

UserImageEdit.propTypes = {
  profilePicture: string,
  setNewImg: func,
};

export default UserImageEdit;
