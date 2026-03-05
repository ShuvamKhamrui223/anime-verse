import { formSteps } from "@/_config/form-config";
import z from "zod";

export const onboardingFormSchema = formSteps.reduce((acc, current) => acc.extend(current.schema.shape), z.object({}));

export type OnboardingFormData = z.infer<typeof onboardingFormSchema>;