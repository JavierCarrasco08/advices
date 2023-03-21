export default async function api() {
  return await fetch("https://api.adviceslip.com/advice");
}
