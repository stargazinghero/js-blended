//1. Создать маркированный список.
//Создать кнопки "Add" "Remove", которые будут менять состав списка
//Создать input с которого будем получать значение, которое будет в li
//* Четным li указать красный фон, нечетным -- синим
//Для выполнения задания используйте createElement

const refs = {
    container: document.querySelector('.container'),
};
const ulEl = document.createElement('ol');
const inputEl = document.createElement('input');
const buttonAdd = document.createElement('button');
const buttonRemove = document.createElement('button');

refs.container.append(inputEl, buttonAdd, buttonRemove, ulEl);

buttonAdd.textContent = 'Add';
buttonAdd.classList.add('btn-add')

buttonRemove.textContent = 'Remove'
buttonRemove.classList.add('btn-remove')

const onAddButton = (e) => {
    const liEl = document.createElement('li');
    liEl.textContent = inputEl.value ? inputEl.value : 'nothing';
    ulEl.append(liEl);

    const ulChildrenLength = ulEl.children.length;
    const isItemElEven = ulChildrenLength % 2 === 0;

    liEl.classList.add(isItemElEven ? 'even' : 'odd');
    inputEl.value = '';
};

const onButtonRemove = () => {
    if (!ulEl.hasChildNodes()) return
    ulEl.removeChild(ulEl.lastElementChild);

}


buttonAdd.addEventListener('click', onAddButton);
buttonRemove.addEventListener('click', onButtonRemove);
