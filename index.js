const phrases = [
    "A Nerd", "A Web Developer", "A Youtube Viewer", "A Netizen", "A Student", "A Starting Up NFT Artist", "A Starting Up Freelancer"
];
const el = document.querySelector('.st');
const fx = new TextScramble(el);
let counter = 0;

const next = () => {
fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1000);
});
counter = (counter + 1) % phrases.length;
};

next();

function data(){
    return{
        start : true,
    }
}