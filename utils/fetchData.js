const formErrorText = document.querySelector(".form__error-text");

const fetchData = async (apiEndpoint, value) => {
  try {
    const response = await fetch(`${apiEndpoint}${value}`);
    if (!response.ok) {
      formErrorText.textContent = "No results";
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
  }
};

export default fetchData;
