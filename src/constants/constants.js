export const FILE_IMAGE_SIZE = 16 * 1024;

export const SUPPORTED_IMAGE_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
];

export const dateFormat = "MMM d, yyyy";

export const PHONE_REGEXP = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

export const URL = process.env.REACT_APP_DATABASE_URL;
