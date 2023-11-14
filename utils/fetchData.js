const formErrorText = document.querySelector(".form__error-text");

const fetchData = async (apiEndpoint, value) => {
  try {
    const response = await fetch(`${apiEndpoint}${value}`);
    if (!response.ok) {
      formErrorText.textContent = "No results";
      return;
    }
    return await response.json();
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
    return null;
  }
};

export default fetchData;
