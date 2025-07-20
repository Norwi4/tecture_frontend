'use server';

import { suggestServices as suggestServicesFlow, ProjectIdeationInput } from '@/ai/flows/project-ideation';

export async function suggestServices(input: ProjectIdeationInput) {
  try {
    const result = await suggestServicesFlow(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("AI service suggestion failed:", error);
    return { success: false, error: 'Failed to get suggestions. Please try again later.' };
  }
}
