import React from "react";

export const highlightWords = (text: string, wordsToHighlight: { [key: string]: string }) => {
  const parts = text.split(new RegExp(`(${Object.keys(wordsToHighlight).join('|')})`, 'gi'));
  return parts.map((part, index) =>
    wordsToHighlight[part.toLowerCase()] ? (
      <span key={index} className={`${wordsToHighlight[part.toLowerCase()]} text-medi-green-600`}>
        {part}
      </span>
    ) : (
      part
    )
  );
};