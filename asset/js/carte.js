
$(document).ready(function() {

    // ------ LISTE PRINCIPALE ------ //

    // Variable pour garder une trace de l'état du lien "BOKIT"
    var bokitActive = false;


    // Fonction pour afficher uniquement les éléments requis dans la section5
    function afficherElementsSection5() {
        $('#list_menu_secondaire').find('.btnChoix').show();
        $('#list_bokit').show();
        $('#list_menu').hide();
        $('#list_bowl').hide();
        $('#list_petite_faim').hide();
        $('#list_supplement').hide();
        $('#list_dessert').hide();
        $('#list_boisson').hide();
        $('#list_menu_secondaire').find('#accompagenement').hide();
        $('.bokit-link').addClass('activeLink');
        $('#filtre #tout').find('a').addClass('linkActive');
        $('.container_asterisque').find('.note_bowl').hide();
        $('.container_asterisque').find('.note_boisson').hide();

    }

    // Appel de la fonction pour afficher les éléments requis lors du chargement de la page
    afficherElementsSection5();

    // Gérer le clic sur le lien "MENU"
    $('.menu-link').click(function(e) {
        e.preventDefault();
        $('#list_menu_secondaire').find('#crevette,#poisson,#poulet,#legume,#viande').hide();
        $('#list_menu').show();
        $('#list_bowl').hide();
        $('#list_bokit').hide();
        $('#list_petite_faim').hide();
        $('#list_supplement').hide();
        $('#list_boisson').hide();
        $('#list_dessert').hide();
        $('.container_asterisque').find('.note_bowl').hide();
        $('.container_asterisque').find('.note_boisson').hide();

        // Réinitialiser l'affichage à 'tout'
        $('#filtre li').removeClass('active'); // Supprimer la classe "active" sur tous les liens du filtre
        $('#filtre #tout').addClass('active'); // Ajouter la classe "active" sur le parent (li) du "a" cliqué 
        $('#list_menu').find('figure').show(); // Afficher toute la liste des menus

        // Retirer la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre li').find('a').removeClass('linkActive');
        // Ajouter la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre #tout').find('a').addClass('linkActive');

        // Supprimer la classe "activeLink" sur tous les liens du filtre
        $('.list_menu_principale a').removeClass('activeLink');
        // Ajouter la classe pour spécifier la couleur du texte
        $(this).addClass('activeLink');
    });

    // Gérer le clic sur le lien "BOWL"
    $('.bowl-link').click(function(e) {
        e.preventDefault();
        $('#list_menu_secondaire').find('#poisson,#poulet,#legume,#viande').show();
        $('#list_menu_secondaire').find('#crevette,#accompagenement').hide();
        $('#list_bowl').show();
        $('#list_menu').hide();
        $('#list_bokit').hide();
        $('#list_petite_faim').hide();
        $('#list_supplement').hide();
        $('#list_boisson').hide();
        $('#list_dessert').hide();
        $('.container_asterisque').find('.note_bowl').show();
        $('.container_asterisque').find('.note_boisson').hide();

        // Réinitialiser l'affichage à 'tout'
        $('#filtre li').removeClass('active'); // Supprimer la classe "active" sur tous les liens du filtre
        $('#filtre #tout').addClass('active'); // Ajouter la classe "active" sur le parent (li) du "a" cliqué
        $('#list_bowl').find('figure').show(); // Afficher toute la liste des bowls

        // Retirer la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre li').find('a').removeClass('linkActive');
        // Ajouter la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre #tout').find('a').addClass('linkActive');

        // Supprimer la classe "activeLink" sur tous les liens du filtre
        $('.list_menu_principale a').removeClass('activeLink');
        // Ajouter la classe pour spécifier la couleur du texte
        $(this).addClass('activeLink');
    });


    // Gérer le clic sur le lien "BOKIT"
    $('.bokit-link').click(function(e) {
        e.preventDefault();
        $('#list_menu_secondaire').find('.btnChoix').show();
        $('#list_menu_secondaire').find('#crevette,#accompagenement').hide();
        $('#list_bokit').show();
        $('#list_menu').hide();
        $('#list_bowl').hide();
        $('#list_petite_faim').hide();
        $('#list_supplement').hide();
        $('#list_boisson').hide();
        $('#list_dessert').hide();
        $('.container_asterisque').find('.note_bowl').hide();
        $('.container_asterisque').find('.note_boisson').hide();

        // Réinitialiser l'affichage à 'tout'
        $('#filtre li').removeClass('active'); // Supprimer la classe "active" sur tous les liens du filtre
        $('#filtre #tout').addClass('active'); // Ajouter la classe "active" sur le parent (li) du "a" cliqué
        $('#list_bokit').find('figure').show(); // Afficher toute la liste des bokits

        // Retirer la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre li').find('a').removeClass('linkActive');
        // Ajouter la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre #tout').find('a').addClass('linkActive');

        // Supprimer la classe "activeLink" sur tous les liens du filtre
        $('.list_menu_principale a').removeClass('activeLink');
        // Ajouter la classe pour spécifier la couleur du texte
        $(this).addClass('activeLink');
    });


    // Gérer le clic sur le lien "PETITE FAIM"
    $('.petiteFaim-link').click(function(e) {
        e.preventDefault();
        $('#list_menu_secondaire').find('#poisson,#viande,#accompagenement,#legume').show();
        $('#list_menu_secondaire').find('#crevette,#poulet').hide();
        $('#list_petite_faim').show();
        $('#list_menu').hide();
        $('#list_bokit').hide();
        $('#list_bowl').hide();
        $('#list_supplement').hide();
        $('#list_boisson').hide();
        $('#list_dessert').hide();
        $('.container_asterisque').find('.note_bowl').hide();
        $('.container_asterisque').find('.note_boisson').hide();

        // Réinitialiser l'affichage à 'tout'

        // Ajouter la classe "active" sur le parent (li) du "a" cliqué
        $('#filtre li').removeClass('active'); // Supprimer la classe "active" sur tous les liens du filtre
        $('#filtre #tout').addClass('active');
        // Afficher toute la liste "petite faim"
        $('#list_petite_faim').find('figure').show();

        // Retirer la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre li').find('a').removeClass('linkActive');
        // Ajouter la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre #tout').find('a').addClass('linkActive');

        // Supprimer la classe "activeLink" sur tous les liens du filtre
        $('.list_menu_principale a').removeClass('activeLink');
        // Ajouter la classe pour spécifier la couleur du texte
        $(this).addClass('activeLink');
    });

    // Gérer le clic sur le lien "SUPPLEMENT"
    $('.supplement-link').click(function(e) {
        e.preventDefault();
        $('#list_menu_secondaire').find('#viande,#accompagenement,#legume').show();
        $('#list_menu_secondaire').find('#crevette,#poulet,#poisson').hide();
        $('#list_supplement').show();
        $('#list_petite_faim').hide();
        $('#list_menu').hide();
        $('#list_bokit').hide();
        $('#list_bowl').hide();
        $('#list_boisson').hide();
        $('#list_dessert').hide();
        $('.container_asterisque').find('.note_bowl').hide();
        $('.container_asterisque').find('.note_boisson').hide();

        // Réinitialiser l'affichage à 'tout'

        // Ajouter la classe "active" sur le parent (li) du "a" cliqué
        $('#filtre li').removeClass('active'); // Supprimer la classe "active" sur tous les liens du filtre
        $('#filtre #tout').addClass('active');
        // Afficher toute la liste "supplement"
        $('#list_supplement').find('figure').show();

        // Retirer la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre li').find('a').removeClass('linkActive');
        // Ajouter la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre #tout').find('a').addClass('linkActive');

        // Supprimer la classe "activeLink" sur tous les liens du filtre
        $('.list_menu_principale a').removeClass('activeLink');
        // Ajouter la classe pour spécifier la couleur du texte
        $(this).addClass('activeLink');
    });

    // Gérer le clic sur le lien "DESSERT"
    $('.dessert-link').click(function(e) {
        e.preventDefault();
        $('#list_menu_secondaire').find('#crevette,#poulet,#poisson,#viande,#accompagenement,#legume').hide();
        $('#list_dessert').show();
        $('#list_boisson').hide();
        $('#list_supplement').hide();
        $('#list_petite_faim').hide();
        $('#list_menu').hide();
        $('#list_bokit').hide();
        $('#list_bowl').hide();
        $('.container_asterisque').find('.note_bowl').hide();
        $('.container_asterisque').find('.note_boisson').hide();

        // Réinitialiser l'affichage à 'tout'

        // Ajouter la classe "active" sur le parent (li) du "a" cliqué
        $('#filtre li').removeClass('active'); // Supprimer la classe "active" sur tous les liens du filtre
        $('#filtre #tout').addClass('active');
        // Afficher toute la liste "dessert"
        $('#list_dessert').find('figure').show();

        // Retirer la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre li').find('a').removeClass('linkActive');
        // Ajouter la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre #tout').find('a').addClass('linkActive');

        // Supprimer la classe "activeLink" sur tous les liens du filtre
        $('.list_menu_principale a').removeClass('activeLink');
        // Ajouter la classe pour spécifier la couleur du texte
        $(this).addClass('activeLink');
    });

    // Gérer le clic sur le lien "BOISSON"
    $('.boisson-link').click(function(e) {
        e.preventDefault();
        $('#list_menu_secondaire').find('#crevette,#poulet,#poisson,#viande,#accompagenement,#legume').hide();
        $('#list_boisson').show();
        $('#list_dessert').hide();
        $('#list_supplement').hide();
        $('#list_petite_faim').hide();
        $('#list_menu').hide();
        $('#list_bokit').hide();
        $('#list_bowl').hide();
        $('.container_asterisque').find('.note_bowl').hide();
        $('.container_asterisque').find('.note_boisson').show();

        // Réinitialiser l'affichage à 'tout'

        // Ajouter la classe "active" sur le parent (li) du "a" cliqué
        $('#filtre li').removeClass('active'); // Supprimer la classe "active" sur tous les liens du filtre
        $('#filtre #tout').addClass('active');
        // Afficher toute la liste "boisson"
        $('#list_boisson').find('figure').show();

        // Retirer la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre li').find('a').removeClass('linkActive');
        // Ajouter la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre #tout').find('a').addClass('linkActive');

        // Supprimer la classe "activeLink" sur tous les liens du filtre
        $('.list_menu_principale a').removeClass('activeLink');
        // Ajouter la classe pour spécifier la couleur du texte
        $(this).addClass('activeLink');
    });





    // ------ LISTE SECONDAIRE ------ //

    $('#filtre li a').click(function() { // On clique sur un filtre

        $('#filtre li').removeClass('active'); // Supprimer la classe "active" sur tous les liens du filtre
        $(this).parent().addClass('active'); // Ajouter la classe "active" sur le parent (li) du "a" cliqué

        // Ajouter la classe "linkActive" à l'élément <a> si son parent <li> a la classe "active"
        $('#filtre li').find('a').removeClass('linkActive');
        $(this).addClass('linkActive');

        var valeurFiltre = $(this).text().toLowerCase(); // On stocke dans une variable la valeur du lien cliqué, en minuscule

        $('.filtre_ingredient figure').hide(); // Cacher tous les projets


        $('figure').addClass('hide'); // Ajoutez la classe hide pour masquer avec transition
        setTimeout(function() {
            $('figure').removeClass('hide'); // Supprimez la classe hide après que la transition soit terminée
        }, 500); // Attendre 500ms pour que la transition se termine


        if (valeurFiltre == 'tout') { // On teste si le filtre appliqué est sur "tout"				
            $('.filtre_ingredient figure').show('slow'); // Alors on montre tous les projets


        } else {
            // alert('hello');
            $('.filtre_ingredient figure').each(function() { // Sinon c'est que l'on est dans une catégorie
                if (!$(this).hasClass(valeurFiltre)) { // On vérifie le "li" n'a pas la classe du filtre appliqué
                    $(this).hide('slow'); // On cache les projets qui n'ont pas cette classe
                } else {
                    $(this).show('slow'); // Sinon on les montre
                }
            });
        }

        return false; // Bloque l'action initiale du lien
    });

});