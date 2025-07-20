'use server';

/**
 * @fileOverview AI-powered project ideation assistant for suggesting relevant services.
 *
 * - suggestServices - A function that takes a project idea description and suggests relevant services.
 * - ProjectIdeationInput - The input type for the suggestServices function.
 * - ProjectIdeationOutput - The return type for the suggestServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectIdeationInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A brief description of the client\'s project idea.'),
});
export type ProjectIdeationInput = z.infer<typeof ProjectIdeationInputSchema>;

const ProjectIdeationOutputSchema = z.object({
  suggestedServices: z
    .string()
    .describe('A list of suggested services relevant to the project idea.'),
});
export type ProjectIdeationOutput = z.infer<typeof ProjectIdeationOutputSchema>;

export async function suggestServices(input: ProjectIdeationInput): Promise<ProjectIdeationOutput> {
  return projectIdeationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectIdeationPrompt',
  input: {schema: ProjectIdeationInputSchema},
  output: {schema: ProjectIdeationOutputSchema},
  prompt: `You are an AI assistant specializing in suggesting relevant services offered by Tecture, a company that does custom software development.

  Based on the client\'s project idea, recommend a list of services that Tecture offers. Be very brief.

  Project Idea: {{{projectDescription}}}

  Services offered by Tecture: Web Development, Mobile App Development, UI/UX Design, AI Solutions, Cloud Services, Blockchain Development
  `,
});

const projectIdeationFlow = ai.defineFlow(
  {
    name: 'projectIdeationFlow',
    inputSchema: ProjectIdeationInputSchema,
    outputSchema: ProjectIdeationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
