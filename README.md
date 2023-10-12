# wild-restaurant

Ensuite, suis ces étapes :

dans MenuList, affiche un composant MenuItem pour chaque élément du tableau et transmets toutes les propriétés de l'objet en tant que props ;  
dans MenuItem, crée un état isFavorite qui aura une valeur initiale définie sur props.isFavorite.  
dans MenuItem accède à chaque props pour afficher le nom, l'image, la description et le prix de l'aliment ;  
crée une fonction handleClickFavorite qui fera passer l'état isFavorite de vrai à faux ;  
dans MenuItem, à l'intérieur de la div avec l'id favorite, appelle la méthode handleClickFavorite lorsqu'un événement de clic se produit ;  
sur la même div, modifie conditionnellement className : "isFavorite" ou "notFavorite", en fonction de l'état isFavorite.  
