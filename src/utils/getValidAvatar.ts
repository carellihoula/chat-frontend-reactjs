export const getValidAvatar = (avatar: string | undefined) => {
  const defaultAvatar =
    "https://canobucket.s3.eu-west-3.amazonaws.com/default-image.jpg";
  return avatar && avatar.trim() !== "" ? avatar : defaultAvatar;
};
