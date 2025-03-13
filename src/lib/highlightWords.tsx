export const highlightWords = (text: string, wordsToHighlight: { [key: string]: string }) => {
  if (text === null || text === undefined) {
    return "";
  }
  const parts = text.split(new RegExp(`(${Object.keys(wordsToHighlight).join('|')})`, 'gi'));
  return parts.map((part, index) =>
    wordsToHighlight[part.toLowerCase()] ? (
      <span key={index} className={`${wordsToHighlight[part.toLowerCase()]}`}>
        {part}
      </span>
    ) : (
      part
    )
  );
};