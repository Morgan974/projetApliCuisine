import './atelier.html'
import './reservation.html'
import { Template } from 'meteor/templating';
import { Collection } from '../api/Collection.js';
import { Reservation } from '../api/Collection.js';
import { Meteor } from 'meteor/meteor'

Template.atelier.events({
    'click .toggle-checked'() {
        const checkID = this._id;
        Meteor.call('Ateliers.setChecked', this._id, !this.checked);
    },

    'click .delete'() {
        Meteor.call('Ateliers.remove', this._id);
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
    'click .btn-collapse'(event) {
        const target = event.target;
        const idCollapse = target.getAttribute("data-id");
    },

    'click .btn-contact'(event) {
        const target = event.target;
        
        const idAtelier = target.getAttribute("data-id");
        const atelier = Collection.findOne({ _id: idAtelier });

        const contactAtelier = document.querySelector('#contact-de-id');
        const contactTitre = document.querySelector('#contact-titre');
        const contactPlace = document.querySelector('#contact-place');

        contactAtelier.value = atelier._id;
        contactTitre.value = atelier.titre;
        contactPlace.value = atelier.place;
    },
    
});

// Test

//Template.atelier.onCreated(function decrementation() {
//    this.counter = new ReactiveVar(0);
//});
//
//Template.atelier.helpers({
//    counter() {
//        return Template.instance().counter.get();
//    },
//});
//
//Template.atelier.events({
//    'click .btn-clicker'(event, instance) {
//        const target = event.target;
//
//        console.log("cilbe : " + target);
//
//        instance.counter.set(instance.counter.get() + 1);
//
//        const counter = instance.counter.get();
//
//        console.log("conteur ctuelle : " + counter);
//    },
//});