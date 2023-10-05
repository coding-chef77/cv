// For header
document.getElementById("profileImage").src = cvData.header.image;
document.getElementById("profileImage").alt = cvData.header.altText;
document.getElementById("profileName").textContent = cvData.header.name;
document.getElementById("profileTitle").textContent = cvData.header.title;
document.getElementById("profileAddress").textContent =
  cvData.header.address.street;
document.getElementById(
  "profileEmail"
).href = `mailto:${cvData.header.address.email}`;
document.getElementById("profileEmail").textContent =
  cvData.header.address.email;
document.getElementById("profileLinkedIn").href =
  cvData.header.address.linkedIn;
document.getElementById("profileLinkedIn").textContent = "LinkedIn Profile";
document.getElementById(
  "profilePhone"
).href = `tel:${cvData.header.address.phone.replace(/\s/g, "")}`;
document.getElementById("profilePhone").textContent =
  cvData.header.address.phone;

// For Profil
document.getElementById("profileDescription").textContent =
  cvData.profil.profileDescription.trim();

// For Utdanning
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

// For Kompetanse
function populateList(listId, data) {
  const listElement = document.getElementById(listId);
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listElement.appendChild(listItem);
  });
}

// For Om meg
document.getElementById("omMeg").textContent = cvData.profil.omMeg.trim();

// For Referanser
document.getElementById("referanser").textContent =
  cvData.profil.referanser.trim();
referanser;

// For Erfaringer
const erfaringSection = document.getElementById("erfaringSection");
const jobTemplate = document.querySelector(".jobTemplate");

cvData.erfaring.forEach((job) => {
  const jobArticle = jobTemplate.cloneNode(true);
  jobArticle.querySelector("h4").textContent = job.title;
  const times = jobArticle.querySelectorAll("time");
  times[0].setAttribute("datetime", job.startDate.replace(".", "-"));
  times[0].textContent = job.startDate;
  times[1].setAttribute("datetime", job.endDate.replace(".", "-"));
  times[1].textContent = job.endDate;
  jobArticle.querySelector("p").textContent = job.description.trim();
  erfaringSection.appendChild(jobArticle);
});

// Remove the template article
jobTemplate.remove();
