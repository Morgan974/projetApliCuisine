import './atelier.html'
import { Template } from 'meteor/templating';
import { Collection } from '../api/Collection';

Template.atelier.events({
    'click .delete'() {
        Collection.remove(this._id);
    },
});