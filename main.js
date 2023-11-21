const project = [
  {
    title: 'form validator',
    link: 'form_validator/index.html',
  },
  {
    title: 'Tic Tac Toe Game',
    link: 'tic_tac_toe/index.html',
  },
];

const cardContainer = document.querySelector('.cardContainer');

project.forEach((e, index) => {
  let div = document.createElement('div');
  div.className = 'card';

  let formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

  let p = document.createElement('p');
  p.innerHTML = `${formattedIndex}`;

  let title = document.createElement('h2');
  title.innerHTML = `${e.title}.`;

  let icon = document.createElement('a');
  icon.setAttribute('href', `${e.link}`);
  icon.setAttribute('target', `_blank`);
  icon.innerHTML = '<i id="icon" class="ri-share-forward-2-line"></i>';

  div.appendChild(p);
  div.appendChild(title);
  div.appendChild(icon);

  cardContainer.appendChild(div);
});

//end
