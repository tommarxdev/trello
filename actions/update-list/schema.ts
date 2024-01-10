import { z } from "zod";

export const UpdateList = z.object({
    title: z.string({
        required_error: "List is required",
        invalid_type_error: "List is required",
    }).min(3, {
        message: "List is too short!"
    }),
    id: z.string(),
    boardId: z.string(),
});