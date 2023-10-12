# WILD-RESTAURANT

Consignes de l'exercice :

1. Dans MenuList, affiche un composant MenuItem pour chaque élément du tableau et transmets toutes les propriétés de l'objet en tant que props ;
2. dans MenuItem, crée un état isFavorite qui aura une valeur initiale définie sur props.isFavorite.
3. Dans MenuItem accède à chaque props pour afficher le nom, l'image, la description et le prix de l'aliment ;
4. Crée une fonction handleClickFavorite qui fera passer l'état isFavorite de vrai à faux ;
5. Dans MenuItem, à l'intérieur de la div avec l'id favorite, appelle la méthode handleClickFavorite lorsqu'un événement de clic se produit ;
6. Sur la même div, modifie conditionnellement className : "isFavorite" ou "notFavorite", en fonction de l'état isFavorite.
