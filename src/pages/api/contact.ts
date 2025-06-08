import type { APIRoute } from 'astro';

export const prerender = false;

import { contactFormSchema as ContactFormSchema } from '@/features/contact/type';
import { sendContactEmail } from '@/lib/email';
import { ui, type LanguageCode } from '@/i18n/ui';
import type {
  ContactFormTranslations,
  ContactFormApiResponse,
} from '@/features/contact/type';


export const POST: APIRoute = async ({ request }) => {
  let lang: LanguageCode = 'en'; // Default language
  let currentTranslations: ContactFormTranslations = ui[lang]
    .contactPage as ContactFormTranslations; // Default translations
  
  // Check if email service is configured
  if (!import.meta.env.RESEND_API_KEY || !import.meta.env.CONTACT_FORM_TO_EMAIL || !import.meta.env.RESEND_FROM_EMAIL) {
    return new Response(
      JSON.stringify({
        message: 'Server configuration error: Email service not properly configured.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let formDataForValidation;
  try {
    const requestBody = await request.json();
    const requestLang = requestBody.lang as LanguageCode | undefined;
    if (requestLang && ui[requestLang]) {
      lang = requestLang;
      currentTranslations = ui[lang].contactPage as ContactFormTranslations;
    }
    // Separate formData for Zod validation (without lang property)
    const { lang: _lang, ...restOfBody } = requestBody;
    formDataForValidation = restOfBody;
  } catch (error) {
    // Use default (English) translations if JSON parsing fails or lang is not available
    const errorResponse: ContactFormApiResponse = {
      status: 'error',
      message: currentTranslations.toastErrorUnexpected,
      error: 'Invalid JSON input',
    };
    return new Response(JSON.stringify(errorResponse), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const validationResult = ContactFormSchema.safeParse(formDataForValidation);

  if (!validationResult.success) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorValidationFailed,
        errors: validationResult.error.flatten().fieldErrors,
      } as ContactFormApiResponse),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { firstName, lastName, email, message } = validationResult.data;

  try {
    const data = await sendContactEmail({
      firstName,
      lastName,
      email,
      message,
    });

    return new Response(
      JSON.stringify({
        status: 'success',
        message: currentTranslations.toastSuccessMessageSent,
        data,
      } as ContactFormApiResponse),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorFailedToSend,
        error: error instanceof Error ? error.message : 'Unknown error',
      } as ContactFormApiResponse),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
