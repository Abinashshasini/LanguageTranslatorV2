import { NextResponse } from 'next/server';
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: '2020-10-24',
  authenticator: new IamAuthenticator({
    apikey: 'dtF8tdfnhQl2dD3a5J6HfoSLjNXnLu-3LliACAGXR68O',
  }),
  url: 'https://api.eu-gb.language-translator.watson.cloud.ibm.com/instances/e6e5b8d9-f0a0-4400-98ab-16d3e7761802',
});

// POST request for translation * //
export async function POST(request) {
  try {
    const body = await request.json();
    const { text, modelId } = body;
    const translateParams = { text, modelId };
    const translationResult = await languageTranslator.translate(
      translateParams
    );
    return new Response(
      JSON.stringify({
        status: 1,
        response: translationResult.result.translations[0].translation,
        error: '',
      })
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        status: 0,
        response: '',
        error: 'Whoops! something happend while checking your request',
      })
    );
  }
}
