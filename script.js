var slider_img = document.querySelector('.slider-img');
// var slider_gif = document.querySelector('.slider-gif');


// on met nos 26 images de lettres dans une liste
var images = ['Aa.jpg', 'Bb.jpg', 'Cc.jpg', 'Dd.jpg', 'Ee.jpg', 'Ff.jpg', 'Gg.jpg', 
              'Hh.jpg', 'Ii.jpg', 'Jj.jpg', 'Kk.jpg', 'Ll.jpg', 'Mm.jpg', 'Nn.jpg', 
              'Oo.jpg', 'Pp.jpg', 'Qq.jpg', 'Rr.jpg', 'Ss.jpg', 'Tt.jpg', 'Uu.jpg', 
              'Vv.jpg', 'Ww.jpg', 'Xx.jpg', 'Yy.jpg', 'Zz.jpg'];


// var gifs = ['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif', '8.gif', '9.gif', '10.gif'];

// où le premier index est le 0              
var i = 0;
function setImage(){
    return slider_img.setAttribute('src', images[i]);
}

/* var j = 0;
function setGif(){
    return slider_gif.setAttribute('src', gifs[j]);
} */

// une fonction pour se déplacer à l'image d'avant de l'index i où on est
function prev(){
    if(i <= 0)
        i = images.length;
        i--;
        return setImage();
}

/* function prevG(){
    if(j <= 0)
        j = gifs.length;
        j--;
        return setGif();
} */

// une fonction pour aller à l'image d'après de l'index i où on est
function next(){
    if(i >= images.length-1)
    i = -1;
    i++;
    return setImage();
}

/* function nextG(){
    if(j >= gifs.length-1)
    j = -1;
    j++;
    return setGif();
} */

