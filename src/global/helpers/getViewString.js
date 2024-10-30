export const getViewString = (text = '') => {
    text = text.toLowerCase();
    text = text.replace(text.charAt(0), text.charAt(0).toUpperCase());
    return text;
}