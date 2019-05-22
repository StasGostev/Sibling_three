const ulList = document.querySelector(".tree");

function coverInSpan(list) {
  const ulChildrensLi = list.querySelectorAll("li");

  ulChildrensLi.forEach(i => {
    const span = document.createElement("span");
    i.insertBefore(span, i.firstChild);
    span.appendChild(span.nextSibling);
  });
}

coverInSpan(ulList);

ulList.addEventListener("click", sibling);

function sibling(ev) {
  const target = ev.target;
  const hideElement = i => (i.hidden = !i.hidden);

  if (target.tagName !== "SPAN") {
    return;
  }
  let targetUls = target.parentNode.querySelectorAll("ul");

  targetUls.forEach(hideElement);
}
