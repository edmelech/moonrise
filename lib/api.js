export const sendContactForm = async (data) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      // Handle server errors
      throw new Error('Failed to send email');
    }

    // If response is okay, return the parsed JSON data
    return response.json();
  } catch (error) {
    // Handle network errors or other exceptions
    throw new Error('Failed to send email. Please check your network connection and try again.');
  }
};