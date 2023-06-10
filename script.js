const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const githubRepoUrl = document.querySelector('#github-repo').value;

  const requestData = {
    email: email,
    githubRepoUrl: githubRepoUrl
  };
  console.log("requestdata-->",requestData)

  try {
    const response = await fetch('https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });

    if (response.ok) {
      console.log('Form submitted successfully!',response);
     

    } else {
      console.log('Form submission failed!',response);
     
    }
  } catch (error) {
    console.log('An error occurred:', error);
  }
});