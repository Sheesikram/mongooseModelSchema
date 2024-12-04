import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['M', 'F'],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);
export const Patient = mongoose.model('Patient', patientSchema);
