import { z } from "zod";

// Can be used for add and edit
export const formTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.string(),
  priority: z.string(),
});

export const taskSchema = formTaskSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export type Task = z.infer<typeof taskSchema>;

export type FormTask = z.infer<typeof formTaskSchema>;
