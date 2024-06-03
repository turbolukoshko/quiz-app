export const decodeHtmlEntities = (jsonString: string = ""): string => {
  return jsonString.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
};
