const db = require("../models");

module.exports = function(app){
    app.get('/api/workouts', function(req,res){
        db.Workout.find({})
        .then(dbWorkout =>{
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    })
    
    app.put("/api/workouts/:id", function(req,res){
        db.Workout.findByIdAndUpdate({_id: req.params.id}, { $push: {exercises: req.body} })
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            res.json(err);
        })
    })
    
    app.post("/api/workouts", function(req,res){
        db.Workout.create(req.body)
        .then(function(results){
            res.json(results);
        })
        .catch(err =>{
            res.json(err)
        })
    })
    
    app.get("/api/workouts/range", function(req,res){
        db.Workout.find({})
        .then(function(results){
            res.json(results);
        })
        .catch(err =>{
            res.json(err)
        })
    })
}
