import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Collection = new Mongo.Collection('Ateliers')
export const Reservation = new Mongo.Collection('Places')

Meteor.methods({

    'Ateliers.insert'(
        titre,
        description,
        date,
        horaire,
        duree,
        prix,
        image,
        nbrDispo,
        place) {

        check(titre, String);
        check(description, String);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Collection.insert({
            titre,
            description,
            date,
            horaire,
            duree,
            prix,
            image,
            nbrDispo,
            place,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
        });
    },
    'Ateliers.remove'(taskId) {

        check(taskId, String);

        Collection.remove(taskId);
    },
    'Ateliers.setChecked'(
        taskId,
        setChecked) {

        check(taskId, String);
        check(setChecked, Boolean);

        Collection.update(taskId, {
             $set: { 
                 checked: !this.checked 
            },
        });
    },
    'Ateliers.edit'(
        ModalId,
        ModalEdtTitre,
        ModalEdtDescription,
        ModalEdtDate,
        ModalEdtHoraire,
        ModalEdtDuree,
        ModalEdtPrix,
        ModalEdtImage,
        ModalEdtNbrDispo) {
        
        check(ModalId, String);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
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
    },
});

