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
        checkId,
        setChecked) {

        check(checkId, String);
        check(setChecked, Boolean);

        Collection.update(checkId, { $set: { checked: setChecked } });

    //    Collection.update(taskId, {
    //         $set: { 
    //             checked: !this.checked 
    //        },
    //    });
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
    'Reservation.insert' (
        ID,
        Nom,
        Prenom,
        NumTel,
        Mail,
        Place) {

        Reservation.insert({
            Nom,
            Prenom,
            NumTel,
            Mail,
            createdAt: new Date()
        });

        Collection.update(ID, {
            $set: {
                place: Place,
            },
        });
    },
    'Reservation.remove'(taskId) {

        check(taskId, String);

        Reservation.remove(taskId);
    },
});

