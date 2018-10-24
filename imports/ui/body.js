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