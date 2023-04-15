export default async function handleFetchTranslation({
  text,
  modelId,
}: {
  text: string;
  modelId: string;
}) {
  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      body: JSON.stringify({
        text,
        modelId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.error('Whoops! something went wrong', error);
  }
}
