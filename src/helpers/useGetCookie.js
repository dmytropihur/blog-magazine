export const useGetCookie = (props) => {
  if (Array.isArray(props)) {
    const array = [];
    props.map((prop) => {
      const matches = document.cookie.match(
        new RegExp(
          "(?:^|; )" +
            prop.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
      );
      matches ? array.push(decodeURIComponent(matches[1])) : array.push(null);
    });
    return array;
  }
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        props.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
