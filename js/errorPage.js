
const div = document.createElement('div'),
      divChild = document.createElement('div'),
      h2 = document.createElement('h2')
      img = document.createElement('img'),
      p = document.createElement('p'),
      span = document.createElement('span');

/* Template of 404 page */
function page404 (page){  
    page.appendChild(div);
    div.classList.add('container');
    div.setAttribute('id','error-404');
    div.appendChild(divChild);
    divChild.classList.add('row', 'no-gutters', 'align-items-center', 'flex-column');
    divChild.appendChild(h2);
    h2.classList.add('text-muted', 'text-center');
    h2.innerHTML = "404 - Page non trouvée <br>";
    h2.appendChild(span);
    span.classList.add('h6', 'font-weight-normal');
    span.innerHTML = "La page que vous avez demandé est actuellement en cours de livraison";
    divChild.appendChild(img);
    img.classList.add('col-3');
    img.setAttribute('src','assets/img/coursier.gif');
    img.setAttribute('alt', "Animation d'un homme à vélo");
    divChild.appendChild(p);
    p.classList.add('text-center');
    p.innerHTML = " N'allez pas très loin, trop longtemps, vous aurez bientôt l'occasion de découvrir une nouvelle fois notre Univers !";
}