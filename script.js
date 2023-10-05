// const fagligList = document.getElementById("fagligKompetanse");
// const personligList = document.getElementById("personligKompetanse");
// const spraakList = document.getElementById("sprakKompetanse");

// cvData.profil.kompetanse.faglig.forEach((skill) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = skill;
//   fagligList.appendChild(listItem);
// });

// cvData.profil.kompetanse.personlig.forEach((person) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = person;
//   personligList.appendChild(listItem);
// });

// cvData.profil.kompetanse.spraak.forEach((sprak) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = sprak;
//   spraakList.appendChild(listItem);
// });

function populateList(listId, data) {
  const listElement = document.getElementById(listId);
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listElement.appendChild(listItem);
  });
}

populateList("fagligKompetanse", cvData.profil.kompetanse.faglig);
populateList("personligKompetanse", cvData.profil.kompetanse.personlig);
populateList("sprakKompetanse", cvData.profil.kompetanse.spraak);

cvData.profil.utdanning.forEach((education, index) => {
  document.getElementById(`education-title-${index}`).textContent =
    education.title;
  document.getElementById(`education-start-${index}`).textContent =
    education.startDate;
  document
    .getElementById(`education-start-${index}`)
    .setAttribute("datetime", education.startDate);
  document.getElementById(`education-end-${index}`).textContent =
    education.endDate;
  document
    .getElementById(`education-end-${index}`)
    .setAttribute("datetime", education.endDate);
  document.getElementById(`education-description-${index}`).textContent =
    education.description;
});
