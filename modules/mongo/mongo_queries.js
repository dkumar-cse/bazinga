// This files is just for info ( NOT part of project )

db.counters.insert({ _id: "id", seq: 0});

db.movies.insert({_id: getNextSequence("id"), name: "Sarah C."});


db.system.js.save({
    _id: "getNextSequence",
    value : function(x) {
        var ret = db.counters.findAndModify({
            query: { _id: x },
            update: { $inc: { seq: 1 } },
            new: true
        });
        return ret.seq;
    }
});


db.loadServerScripts();
