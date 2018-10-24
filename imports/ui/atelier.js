import './atelier.html'
import { Template } from 'meteor/templating';
import { Collection } from '../api/Collection';

Template.atelier.events({
    'click .delete'() {
        Collection.remove(this._id);
    },

    /*
    Permet l'affichage de données dans le modal
    Les données sont extraite des cartes (voir atelier.html)
    On les recupere et on les envoies dans le modal (Fin du body.html)    
    */

    'click .btn-edit'(event) {
        const target = event.target;
        const idAtelier = target.getAttribute("data-id");

        const atelier = Collection.findOne({ _id: idAtelier });

        const modalTitre = document.querySelector('#edt-titre');
        const modalDescription = document.querySelector('#edt-description');
        const modalDate = document.querySelector('#edt-date');
        const modalHoraire = document.querySelector('#edt-horaire');
        const modalDuree = document.querySelector('#edt-duree');
        const modalPrix = document.querySelector('#edt-prix');
        const modalImage = document.querySelector('#edt-image');
        const modalNbrDispo = document.querySelector('#edt-nbrDispo');
        const modalId = document.querySelector('#edt-id');

        modalTitre.value = atelier.titre;
        modalDescription.value = atelier.description;
        modalDate.value = atelier.date;
        modalHoraire.value = atelier.horaire;
        modalDuree.value = atelier.duree;
        modalPrix.value = atelier.prix;
        modalImage.value = atelier.image;
        modalNbrDispo.value = atelier.nbrDispo;
        modalId.value = idAtelier;
    },
});