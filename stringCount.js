const characterCount = (string) => {
    if (string.length >= 1 && string.length <= 10) return string.length;
    throw new Error('Error');
  };
  export default characterCount;