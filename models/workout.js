const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    exercises:[
        {      
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name"
            },
            type: {
                type: String,
                trim: true,
                required: "Enter exercise type"
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
)
workoutSchema.set("toJSON", {
    virtuals: true
})
workoutSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((acc, cur) => {
      return acc + cur.duration;
    }, 0);
  
    return duration;
  });

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;