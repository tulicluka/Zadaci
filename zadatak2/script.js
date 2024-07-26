const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  try {
    let isValid = false;

    const nameValid = validateName();
    const lastNameValid = validateLastName();
    const addressValid = validateAddress();
    const cityValid = validateCity();
    const birthDayValid = validateBirthDay();
    const checkBoxValid = validateCheckbox();
    const checkGender = validateGender();

    // Aggregate validation results
    isValid =
      nameValid &&
      lastNameValid &&
      addressValid &&
      cityValid &&
      birthDayValid &&
      checkBoxValid &&
      checkGender;

    if (isValid) {
      const name = document.querySelector("#name").value;
      const lastName = document.querySelector("#last-name").value;
      const gender = document.querySelector("#gender").value;
      const birth = document.querySelector("#birth").value;
      const address = document.querySelector("#address").value;
      const city = document.querySelector("#city").value;
      const query = document.querySelector("#query").value;

      const dataToSend = {
        name: name,
        lastName: lastName,
        gender: gender,
        birth: birth,
        address: address,
        city: city,
        query: query,
      };

      // Ovo je alzni AJAX, zato sto u zadatku nisam dobio URL koji treba da gadjam, pa sam hardkodovao da funkcija uvek vraca true
      const response = await sendAjax(dataToSend);
      if (response) {
        form.style.display = "none";

        document.getElementById("formId").insertAdjacentHTML(
          "afterend",
          `
                    <div class="info">
                      <h3> Podaci sa forme: </h3>
                      <ul>
                        <li>Ime: <span style="font-weight: bold;">${dataToSend.name}</span></li>
                        <li>Prezime: <span style="font-weight: bold;">${dataToSend.lastName}</span></li>
                        <li>Pol: <span style="font-weight: bold;">${dataToSend.gender}</span></li>
                        <li>Godina rodjenja: <span style="font-weight: bold;">${dataToSend.birth}</span></li>
                        <li>Grad: <span style="font-weight: bold;">${dataToSend.city}</span></li>
                        <li>Adresa: <span style="font-weight: bold;">${dataToSend.address}</span></li>
                        <li>Dodatne informacije: <span style="font-weight: bold;">${dataToSend.query}</span></li>
                      </ul>
                    </div>
                    `
        );
      }
    }
  } catch (err) {
    console.eror("Error: ", err);
  }
});

function containsOnlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function containsOnlyLettersAndNumbers(str) {
  return /^[a-zA-Z0-9\s]+$/.test(str);
}

function containsOnlyNumbers(num) {
  return /^[0-9]+$/.test(num);
}

function validateName() {
  const name = document.querySelector("#name").value;
  const nameError = document.querySelector("#name-error");

  let isValidName = containsOnlyLetters(name);
  if (!isValidName) {
    nameError.textContent = "Molimo Vas da unesete validno ime";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateLastName() {
  const lastName = document.querySelector("#last-name").value;
  const lastNameError = document.querySelector("#last--name-error");

  let isValidLastName = containsOnlyLetters(lastName);
  if (!isValidLastName) {
    lastNameError.textContent = "Molimo Vas da unesete validno prezime";
    return false;
  } else {
    lastNameError.textContent = "";
    return true;
  }
}

function validateAddress() {
  const address = document.querySelector("#address").value;
  const addressError = document.querySelector("#address-error");

  let isValidAddress = containsOnlyLettersAndNumbers(address);
  if (!isValidAddress) {
    addressError.textContent = "Molimo Vas da unesete validnu adresu";
    return false;
  } else {
    addressError.textContent = "";
    return true;
  }
}

function validateCity() {
  const city = document.querySelector("#city").value;
  const cityError = document.querySelector("#city-error");

  let isValidCity = containsOnlyLetters(city);
  if (!isValidCity) {
    cityError.textContent = "Molimo Vas da unesete validno ime grada";
    return false;
  } else {
    cityError.textContent = "";
    return true;
  }
}

function validateBirthDay() {
  const birth = document.querySelector("#birth").value;
  const birthError = document.querySelector("#birth-error");

  let isValidBirth = containsOnlyNumbers(birth);
  if (!isValidBirth) {
    birthError.textContent = "Molimo Vas da unesete validnu godinu rodjenja";
    return false;
  } else {
    birthError.textContent = "";
    return true;
  }
}

function validateCheckbox() {
  const checkbox = document.querySelector("#checkbox").checked;
  const checkboxError = document.querySelector("#checkbox-error");

  if (!checkbox) {
    checkboxError.textContent = "Molimo vas da se slozite sa informacijama";
    return false;
  } else {
    checkboxError.textContent = "";
    return true;
  }
}

function validateGender() {
  const gender = document.querySelector("#gender").value;
  const genderError = document.querySelector("#gender-error");

  if (gender === "") {
    genderError.textContent = "Molimo Vas da izaberete pol";
    return false;
  } else {
    genderError.textContent = "";
    return true;
  }
}

async function sendAjax(data) {
  // OVO JE ZAKOMENTARISANO JER NEMAM URL KOJI GADJAM, PA DA NE BI BACAO GRESKU

  // const response = await fetch("https://nepostojeciURL.com", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });

  // if (response.status === 201) {
  //   const content = await response.json();
  //   return true;
  // } else {
  //   throw new Error("Bad response");
  // }

  return true;
}
