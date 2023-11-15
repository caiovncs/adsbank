const accordionList = document.querySelectorAll(['[data-anime="accordion"] dt']);

function toggleAccordion(item) {
  item.nextElementSibling.classList.toggle('ativo');
  item.classList.toggle('ativo');
}

function addDtEvent() {
  accordionList.forEach((item) => {
    item.addEventListener('click', () => toggleAccordion(item));
  });
}

function init() {
  if (accordionList.length) {
    toggleAccordion(accordionList[0]);
    addDtEvent();
  }
  return this;
}

init();