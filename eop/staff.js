'use strict';

function createElemWithClass(type, className) {
    var elem = document.createElement(type);
    elem.className = className;
    return elem;
}

var elems =
`<div class="card">
    <img class="card-img-top" data-src="holder.js/100%x180/" alt="Card image cap">
    <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Button</a>
    </div>
</div>`;


function createCard(item) {
    var card = createElemWithClass('div', 'card');
    var imgElem = createElemWithClass('img', 'card-img-top'); imgElem.src = item.img;
    var cardBlock = createElemWithClass('div', 'card-block');
    // cardBlock.appendChild(item.name);
    // cardBlock.appendChild(item.title);
    // cardBlock.appendChild(item.quote);
    var cardFooter = createElemWithClass('div', 'card-footer');
    cardFooter.innerHTML = '<a href="" class="btn btn-primary">Email</a>';
    card.appendChild(cardFooter);
    return card;
}


function createRow(items) {
    var row = createElemWithClass('div', 'card-deck');
    var cards = [];
    for (var i = 0; i < items.length; i++) {
        var card = createCard(items[i]);
        row.appendChild(card);
    }
    return row;
}


function render(users, numberPerRow) {
    var rootElem = document.getElementById('root');
    var len = users.length;
    var i;

    for (i = numberPerRow; i < len; i += numberPerRow) {
        rootElem.appendChild(createRow(users.slice(i - numberPerRow, i)));
    }

    if (Math.abs(len - i) > 0) { // tail case
        rootElem.appendChild(createRow(users.slice(i - numberPerRow, len)));
    }
}

var staff = `
{
  "data": [
    {
      "email": "byburton@berkeley.edu",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/554924eee4b09d7ca9dab4f6/1430856943910/?format=750w",
      "name": "Yuki Burton",
      "quote": "Be kind to yourself, always. Learn to trust the process.",
      "title": "EOP Assistant Director/Academic Counselor"
    },
    {
      "email": "elias_canedo@berkeley.edu ",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/554927cee4b0c741dfca8b89/1431117435024/?format=750w",
      "name": "Ruben Canedo",
      "quote": "Sometimes you just gotta believe.",
      "title": "CE3 Research and Mobilization Coordinator"
    },
    {
      "email": "liglesias@berkeley.edu",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/55492750e4b03d6d83ac94ce/1430857554353/?format=750w",
      "name": "Liliana Iglesias",
      "quote": "The expert in anything was once a beginner. - Helen Hayes",
      "title": "Undocumented Student Program Academic Counselor"
    },
    {
      "email": "mitzi@berkeley.edu",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/554924b2e4b051a907961577/1430856891341/newmitzi.jpg?format=500w",
      "name": "Mitzi Iniguez",
      "quote": "Grades do not define you, your actions do.",
      "title": "EOP Assistant Director/Academic Counselor"
    },
    {
      "email": "jledesma@berkeley.edu",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/589bc293414fb513e701e45b/1486602907301/newju.jpg?format=500w",
      "name": "Julian Ledesma",
      "quote": "Make this University yours! Take advantage of the resources and professionals available to you!",
      "title": "CE3 Executive Director"
    },
    {
      "email": "fmejia@berkeley.edu",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/51206da3e4b08a761590a7f1/1361079715776/newfab.jpg?format=750w",
      "name": "Fabrizio Mejia",
      "quote": "Do not look where you fell, but where you slipped. - African proverb",
      "title": "Assistant Vice Chancellor: Student Equity and Success"
    },
    {
      "email": "quame@berkeley.edu",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/5581d82de4b043c4b9885fa3/1434572866659/?format=750w",
      "name": "Quame",
      "quote": "Making comparisons can spoil your happiness.",
      "title": "EOP Academic Counselor"
    },
    {
      "email": "macramos@berkeley.edu",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/51206d59e4b03a5603c47af2/1361079642433/newmarcos.jpg?format=1000w",
      "name": "Marcos Ramos",
      "quote": "A major component to academic success is seeking support and becoming part of a student community.",
      "title": "EOP Academic Counselor"
    },
    {
      "email": "someng@berkeley.edu",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/51206de1e4b08a761590a82e/1361079781363/newmeng.jpg?format=1000w",
      "name": "Meng So",
      "quote": "We must become the change we wish to see. - Ghandi",
      "title": "Undocumented Student Program Director/Academic Counselor"
    },
    {
      "email": "bwright32@berkeley.edu",
      "img": "https://static1.squarespace.com/static/51095940e4b093a50121aa90/t/56de2592a3360c71cf2ba3dc/1457399202225/?format=750w",
      "name": "Brieanna Wright",
      "quote": "Trust yourself. You know more than you think. - Benjamin Spock",
      "title": "EOP Academic Counselor"
    }
  ]
}`;

(function() {
    render(JSON.parse(staff).data, 4);
})();