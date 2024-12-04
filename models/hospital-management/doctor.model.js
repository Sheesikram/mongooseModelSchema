import mongoose from 'mongoose';
const hospitalNumber = new mongoose.Schema({
  HospitalId: {
    type: mongoose.Schema.TypeObjectId,
    ref: 'Hospital',
  },
  howMany: {
    type: Number,
    default: 0,
  },
});
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experincedInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: {
      type: mongoose.Schema.TypeObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);
export const Doctor = mongoose.model('Doctor', doctorSchema);
