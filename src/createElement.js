function component(html) {
  const element = document.createElement("div");

  // use your function!
  element.innerHTML = html;
  return element;
}

export default component;
