import './body.html'
import './navbar.js'
import './jumbotron.js'
import './atelier.js'
import './formulaire.js'
import './reservation.html'

import { Template } from 'meteor/templating';
import { Collection } from '../api/Collection.js';
import { Reservation } from '../api/Collection.js';
import { ReactiveVar } from 'meteor/reactive-var';























Template.body.helpers({
    Ateliers() {
        return Collection.find({});
    },
    Places() {
        return Reservation.find({});
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

    'submit .reservation'(event) {
        event.preventDefault();

        const target = event.target;
        
        const idContact = target.getAttribute("data-id");
        const Atelier = Collection.findOne({ _id: idContact });

        const Titre = target.contactTitre.value;
        const Nom = target.contactNom.value;
        const Prenom = target.contactPrenom.value;
        const NumTel = target.contactNumTel.value;
        const Mail = target.contactMail.value;

        Reservation.insert ({
            Titre,
            Nom,
            Prenom,
            NumTel,
            Mail,
            createdAt: new Date(),
        });

        target.contactTitre.value ='';
        target.contactNom.value = '';
        target.contactPrenom.value = '';
        target.contactNumTel.value = '';
        target.contactMail.value = '';
    },

    'click .deleteInscription'() {
        Reservation.remove(this._id);
    },
});
