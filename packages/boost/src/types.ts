import { z } from 'zod'

const CompletedBoostSchema = z.object({
    task_id: z.string().uuid(),
    task_type: z.string(),
    quest_id: z.string(),
    quest_start_time: z.string().datetime(),
    updated_at: z.string().datetime(),
})

export const CompletedBoostResponseSchema = z.array(CompletedBoostSchema)
export type CompletedBoostResponse = z.infer<typeof CompletedBoostResponseSchema>