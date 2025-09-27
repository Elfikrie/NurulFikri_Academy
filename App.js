// import controllers
let { index, store, view, destroy } = require('./controllers');

const main = () => {
    index();
    store("al", 12, "gelumbang","al@gmail.com");
    view(2);
    destroy(5);
};

main();