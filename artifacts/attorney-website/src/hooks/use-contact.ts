import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Mock mutation since this is a static frontend
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      // In a real app, this would be:
      // const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      // if (!res.ok) throw new Error(...)
      
      return { success: true, message: "Your enquiry has been securely transmitted." };
    },
  });
}
