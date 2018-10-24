import './body.html'
import './navbar.js'
import './jumbotron.js'
import './atelier.js'
import './formulaire.js'

import { Template } from 'meteor/templating';
import { Collection } from '../api/Collection.js';

Template.body.helpers({
    Ateliers() {
        return Collection.find({});
    },
});


Template.body.events({
    'submit .edition-atelier'(event) {
        event.preventDefault();

        const target = event.target;

        const ModalEdtTitre = target.edtTitre.value;
        const ModalEdtDescription = target.edtDescription.value;
        const ModalEdtDate = target.edtDate.value;
        const ModalEdtHoraire = target.edtHoraire.value;
        const ModalEdtDuree = target.edtDuree.value;
        const ModalEdtPrix = target.edtPrix.value;
        const ModalEdtImage = target.edtImage.value;
        const ModalEdtNbrDispo = target.edtNbrDispo.value;

        const ModalId = target.edtId.value;

        Collection.update(ModalId, {
            $set: {
                titre: ModalEdtTitre,
                description: ModalEdtDescription,
                date: ModalEdtDate,
                horaire: ModalEdtHoraire,
                duree: ModalEdtDuree,
                prix: ModalEdtPrix,
                image: ModalEdtImage,
                nbrDispo: ModalEdtNbrDispo,
            },
        });

        $('#Modal').modal('hide')
    },
});
