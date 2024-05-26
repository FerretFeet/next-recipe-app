export function toTitleCase(str: string) {
  if (!str) return str; // Handle empty string

  return str
    .toLowerCase()
    .replace(
      /([^\W_]+[^\s-]*)*/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
}
