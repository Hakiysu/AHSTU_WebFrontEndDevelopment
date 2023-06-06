const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();

// fetch random user and add money
async function getRandomUser() {
    //set some example data with chinese name and money
    // const res = await fetch('https://randomuser.me/api');
    // const data = await res.json();
    let nameGroup = ['张三', '李四', '王五', '赵六', '田七', '周八', '吴九', '郑十','钱康','孙世','刘顺'];
    let moneyGroup = [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000];
    const user = {
        //select a name from nameGroup,which not select before
        name: nameGroup[Math.floor(Math.random() * nameGroup.length)],
        //select money num from moneyGroup
        money: moneyGroup[Math.floor(Math.random() * moneyGroup.length)],
    };

    addData(user);
}

// double everyone money
function doubleMoney() {
    data = data.map((user) => {
        return {...user, money: user.money * 2};
    });

    updateDOM();
}

// sort users by richest
function sortByRichest() {
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}

// filter only millionaires
function showMillionaires() {
    data = data.filter((user) => user.money > 1000000);
    updateDOM();
}

//calculate wealth
function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

function addData(obj) {
    data.push(obj);
    updateDOM();
}

//update DOM
function updateDOM(providedData = data) {
    // clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}

//Format number as money
function formatMoney(number) {
    return '￥' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);