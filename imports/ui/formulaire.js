import { Template } from 'meteor/templating'
import { Collection } from '../api/Collection.js'
 
import './formulaire.html'

Template.formulaire.events({
    'submit .nouvelle-atelier'(event) {
        event.preventDefault();

        const target = event.target;
        const titre = target.titre.value;
        const description = target.description.value;
        const date = target.date.value;
        const horaire = target.horaire.value;
        const duree = target.duree.value;
        const prix = target.prix.value;
        const image = target.image.value;
        const nbrDispo = target.nbrDispo.value;

        target.place.value = 0;
        const place = target.place.value;

        console.log(place);

        Collection.insert ({
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

        target.titre.value = '';
        target.description.value = '';
        target.date.value = '';
        target.horaire.value = '';
        target.duree.value = '';
        target.prix.value = '';
        target.image.value = '';
        target.nbrDispo.value = '';
    },
});
