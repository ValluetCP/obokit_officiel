const btn = document.querySelector('.btn');
const menu = document.querySelector('.conteneurMenu');
const MenuListItem = document.querySelectorAll('.MenuListItem');
const iconeMenu = document.querySelector('.menuIcon');
let i = 0;

const TL = new TimelineMax({paused: true});

TL
.to(menu,1,{width:'684px'})
.staggerTo(MenuListItem,0.3,{opacity: 1, x: 0}, 0.2, '-=0.75');

// Fonction pour ajuster la largeur du menu en fonction de la largeur de l'écran
function adjustMenuWidth() {
    if (window.matchMedia("(max-width: 980px)").matches) {
        TL.to(menu, 1, {width: '100%'});
    } else {
        TL.to(menu, 1, {width: '684px'});
    }
}

// Appeler la fonction initiale pour définir la largeur en fonction de l'écran actuel
adjustMenuWidth();

// Surveiller les changements de la largeur de l'écran
window.addEventListener('resize', adjustMenuWidth);

btn.addEventListener('click', () => {

    if(i === 0) {
        i++;
        TL.play();
        iconeMenu.src = 'asset/image/croix_5.svg';
    } else {
        i--;
        TL.reverse();
        iconeMenu.src = 'asset/image/menu_5.svg';
    }

});

MenuListItem.forEach(item => item.addEventListener('click', () => {
    i--;
    TL.reverse();
    iconeMenu.src = 'asset/image/menu_5.svg';
}));
