const mongoose = require('mongoose');

const upperSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mail: String, // not neccesarily rpi mail
    gender: String, // m,f,o (male, female, others)
    majors: [String], // majors, could be more than 1
    isInternational: Boolean, // true if international student
    hometown: String, // list of states if in US (or country for international students)
    availability: { // bit array for every 30? min
        mon: [Boolean],
        tue: [Boolean],
        wed: [Boolean],
        thu: [Boolean],
        fri: [Boolean],
        sat: [Boolean],
        sun: [Boolean]
    }
});

const Upperclassman = mongoose.model('Upperclassman', upperSchema);

exports.addUpper = (obj, r) => {
    var u = new Upperclassman(obj);
    u.save((err, u) => {
        if (err) return console.error(err);
        console.log("added: " + u);
        r("added: " + u);
    });
}

const underSchema = new mongoose.Schema({
    type: Boolean, // 1 for freshman, 0 for prospective>
    firstName: String,
    lastName: String,
    mail: String, // not neccesarily rpi mail
    gender: String, // m,f,o (male, female, others)
    majors: [String], // majors, could be more than 1
    isInternational: Boolean, // true if international student
    hometown: String, // list of states if in US (or country for international students)
    availability: { // bit array for every 30? min
        mon: [Boolean],
        tue: [Boolean],
        wed: [Boolean],
        thu: [Boolean],
        fri: [Boolean],
        sat: [Boolean],
        sun: [Boolean]
    }
    // todo, var like matched_to
});

const Underclassman_unm = mongoose.model('Underclassman_unm', upperSchema);
const Underclassman = mongoose.model('Underclassman', upperSchema);

exports.addUnder = (obj, r) => { // todo, success and error callbacks
    var u = new Underclassman_unm(obj);
    u.save((err, u) => {
        if (err) return console.error(err);
        console.log("added: " + u);
        r.send("added: " + u);
    });
}

exports.match = () => {
    // TODO: rewrite this whole thing and make it not crash
    // todo: improve this function a LOT
    // todo make sure no race condition
    Underclassman_unm.find().exec((err, u) => {
        for (var i in u) {
            Upperclassman.find().where('major').equals(i.major).exec((err, p) => {
                console.log("matched " + u.firstName + "  " + u.lastName
                    + " with " + p.firstName + " " + p.lastName);
                // DO STUFF
                let matched = new Underclassman(u.toJSON());
                u.remove();
                matched.save();
            });
        }
    });
}
