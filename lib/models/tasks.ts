import mongoose, { Schema, models, model } from "mongoose";

const TaskSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      required: true,
    },
    effort: {
      type: String,
      enum: ["SHORT", "MEDIUM", "LONG"],
      required: true,
    },
    status: {
      type: String,
      enum: ["TODO", "RUNNING", "COMPLETED"],
      default: "TODO",
    },
  },
  { timestamps: true }
);

export const Task = models.Task || model("Task", TaskSchema);
