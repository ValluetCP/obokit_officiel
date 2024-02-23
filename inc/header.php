<!DOCTYPE html>
<html lang="fr-FR">

<head>
    <meta charset="UTF-8">
    <title>Obokit - Notre carte</title>
    <meta name="description" content="Une phrase d’environ 170 caractères">
    <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <!-- <link rel="stylesheet" href="../menu_test/menu.css"> -->
    <link rel="stylesheet" href="./asset/css/style.css">
    <link rel="stylesheet" href="lightbox.css" />
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/lightbox.js"></script>
    <script type="text/javascript" src="./site.js"></script>
    <script type="text/javascript" src="./accordeon.js"></script>

</head>
<body>

    <!-- MODAL CARTE -->
    <div id="modal">
        <div class="modal-content">
            <a class="modal-close" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
            <div class="affiche_carte">
                <img src="./asset/image/menu_modal.jpg" alt="">
            </div>
        </div>
    </div>

    <!-- LA CARTE -->
    <p class="carte_fixe boxAnim"><a href="#modal">Afficher la carte</a></p>

    <!-- NAV -->
    <nav>
        <a href="#" class="btn">
            <img src="./asset/image/menu_5.svg" alt="menu icone" class="menuIcon">
        </a>
        <p class="home"><a href="http://localhost/obokit_officiel/">o'bokit</a></p>
    </nav>
    

    <!-- MENU DEROULANT -->
    <div class="conteneurMenu">

        <ul class="listeMenu">

            <li class="MenuListItem">
                <a class="itemListe" href="#histoire">notre histoire <br><span>atif saade raconte son chemin jusqu’à vos assiettes</span></a>
            </li>

            <li class="MenuListItem">
                <a class="itemListe" href="#concept">le concept <br><span>de la street food afro-caribéenne cuisiné avec amour</span></a>
            </li>

            <li class="MenuListItem">
                <a class="itemListe" href="#carte">notre carte <br><span>retrouvez toutes nos spécialités</span></a>
            </li>

            <li class="MenuListItem">
                <a class="itemListe" href="#localiser">nous localiser<br><span>suivez nos déplacements  //  lieux et horaires</span></a>
            </li>

            <li class="MenuListItem">
                <a class="itemListe" href="#services">nos prestations & services<br><span>o’bokit prend place à vos événements  et facilite vos commandes</span></a>
            </li>

            <li class="MenuListItem">
                <a class="itemListe" href="#contact">nous contacter<br><span>joignez-nous et restez connecté</span></a>
            </li>
            
        </ul>

    </div>
    
    <!-- NAV COLOR -->
    <div class="navColor"></div>

    