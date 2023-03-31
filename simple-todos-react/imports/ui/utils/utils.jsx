export const getText = (collection = [], id) => {
  if (collection.length > 0) {
    const registros = collection[0].texts;
    const response = registros.filter((text) => text.id === id);
    if (response.length > 0) {
      return response[0].text;
    }
  }
};
