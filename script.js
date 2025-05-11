function generateIsraeliID() {
  let id = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));

  let sum = id.reduce((acc, digit, index) => {
    let value = index % 2 === 0 ? digit : digit * 2;
    if (value > 9) value -= 9;
    return acc + value;
  }, 0);

  let checkDigit = (10 - (sum % 10)) % 10;
  id.push(checkDigit);

  return id.join("");
}

function generateIsraeliCellNumber() {
  const countryCode = "0";
  const mobilePrefixes = ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];

  // Randomly pick a mobile prefix
  const prefix = mobilePrefixes[Math.floor(Math.random() * mobilePrefixes.length)];

  // Generate the remaining 7 digits
  let number = "";
  for (let i = 0; i < 7; i++) {
    number += Math.floor(Math.random() * 10);
  }

  return `${countryCode}${prefix}${number}`;
}

// Array of 100 Hebrew first names
let firstNames = [
  "אברהם",
  "בנימין",
  "דוד",
  "יוסף",
  "משה",
  "יצחק",
  "שלמה",
  "שמואל",
  "יונתן",
  "חיים",
  "מאיר",
  "יהודה",
  "לוי",
  "נחום",
  "ישעיהו",
  "חנוך",
  "יואל",
  "מנחם",
  "אליעזר",
  "איתן",
  "אביגדור",
  "פנחס",
  "יוסי",
  "צבי",
  "אליהו",
  "אהרן",
  "עוזי",
  "עמוס",
  "עזרא",
  "יובל",
  "נמרוד",
  "יואב",
  "אילן",
  "שאול",
  "גדעון",
  "אריה",
  "שמעון",
  "ירון",
  "רוני",
  "נחמיה",
  "ברוך",
  "בצלאל",
  "נפתלי",
  "רפאל",
  "יוספה",
  "אביגיל",
  "דבורה",
  "חנה",
  "מרים",
  "רות",
  "תמר",
  "לאה",
  "רבקה",
  "שרה",
  "יעל",
  "נעמי",
  "איילת",
  "אפרת",
  "מלכה",
  "עדי",
  "מירב",
  "רונית",
  "ציפי",
  "סיגל",
  "איריס",
  "חוה",
  "דינה",
  "אסתר",
  "גילה",
  "שושנה",
  "ליאורה",
  "דורית",
  "יעקב",
  "שמחה",
  "אפרים",
  "יצחק",
  "אדם",
  "אמיר",
  "אורי",
  "אלון",
  "ברק",
  "דן",
  "דור",
  "זוהר",
  "חיים",
  "טל",
  "יאיר",
  "ינון",
  "ליאם",
  "משה",
  "נדב",
  "נועם",
  "עומר",
  "קובי",
  "רם",
  "שחר",
  "תומר",
  "יאיר",
  "זכריה",
  "אליה",
];

// Array of 100 Hebrew last names
let lastNames = [
  "כהן",
  "לוי",
  "מזרחי",
  "פרץ",
  "ביטון",
  "דיין",
  "חזן",
  "חיים",
  "שאול",
  "גולדמן",
  "כץ",
  "שטרן",
  "פרידמן",
  "אוחנה",
  "בן דוד",
  "בן עמי",
  "חבר",
  "רוזן",
  "ברקוביץ'",
  "רבין",
  "שפירא",
  "אלון",
  "בן צבי",
  "הרצוג",
  "מילר",
  "יוסף",
  "קפלן",
  "שמיר",
  "זיו",
  "בלום",
  "רייכמן",
  "גרשון",
  "קרמר",
  "נוימן",
  "הררי",
  "וינשטיין",
  "זקס",
  "פישר",
  "הרשקוביץ",
  "לנדאו",
  "גולדשטיין",
  "רוזנברג",
  "לביא",
  "מנשה",
  "אדלר",
  "וייס",
  "קוהן",
  "הלוי",
  "אביטל",
  "בורוכוב",
  "שמיר",
  "כהנמן",
  "גפן",
  "ברוך",
  "ברזילי",
  "רוזנפלד",
  "גל",
  "שילה",
  "מנדלבוים",
  "אהרון",
  "מרום",
  "שמש",
  "רובין",
  "גורן",
  "צדוק",
  "אשכנזי",
  "פנחס",
  "פורת",
  "וילנר",
  "חובב",
  "רז",
  "שמעוני",
  "שרביט",
  "ברוש",
  "כוכבי",
  "רום",
  "אלדר",
  "הלפרין",
  "גרינברג",
  "ריבלין",
  "נוימן",
  "גלזר",
  "שוקרון",
  "בן עטר",
  "קליין",
  "בכר",
  "קופרמן",
  "ברזל",
  "יצחקי",
  "שוהם",
  "זמיר",
  "פייגלין",
  "זוהר",
  "שושני",
  "הלוי",
  "דנון",
  "קרסו",
  "בר",
  "חזקיהו",
  "גרון",
];

// Function to generate random, unique first and last names
function getRandomUniqueHebrewName() {
  if (firstNames.length === 0 || lastNames.length === 0) {
    console.log("All names have been used. Resetting the lists...");
    return null; // Or reset the list with original names
  }

  // Select and remove a random first name
  const firstNameIndex = Math.floor(Math.random() * firstNames.length);
  const firstName = firstNames[firstNameIndex];
  firstNames.splice(firstNameIndex, 1);

  // Select and remove a random last name
  const lastNameIndex = Math.floor(Math.random() * lastNames.length);
  const lastName = lastNames[lastNameIndex];
  lastNames.splice(lastNameIndex, 1);

  return `${firstName} ${lastName}`;
}

// Expanded arrays of possible usernames and domains
const usernames = [
  "user",
  "admin",
  "guest",
  "contact",
  "support",
  "info",
  "service",
  "help",
  "sales",
  "team",
  "office",
  "admin1",
  "john.doe",
  "jane.smith",
  "alex.jones",
  "michael.brown",
  "emily.white",
  "david.green",
  "linda.adams",
  "maria.garcia",
  "james.wilson",
  "susan.miller",
  "robert.martin",
  "elizabeth.thompson",
  "william.jackson",
  "lisa.taylor",
  "mark.anderson",
  "natalie.walker",
  "olivia.king",
  "benjamin.harris",
  "ava.clark",
  "charlotte.lewis",
  "lucas.young",
  "mia.hernandez",
];

const domains = [
  "example.com",
  "test.com",
  "demo.com",
  "website.com",
  "mail.com",
  "provider.com",
  "company.com",
  "business.com",
  "online.com",
  "portal.com",
  "network.com",
  "service.com",
  "mailbox.com",
  "inbox.com",
  "webmail.com",
  "mydomain.com",
  "customdomain.com",
  "email.com",
  "communications.com",
  "contactus.com",
  "supportdesk.com",
  "userportal.com",
  "infohub.com",
];

// Function to generate a random email address
function getRandomEmail() {
  // Generate random username and domain
  const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  // Generate a random number to ensure uniqueness
  const randomNumber = Math.floor(Math.random() * 10000);

  // Create the email address
  const email = `${randomUsername}${randomNumber}@${randomDomain}`;
  return email;
}

// Creates page content after user presses button
function generatePersonality() {
  let cellNumber = generateIsraeliCellNumber();
  let idNumber = generateIsraeliID();
  let fullName = getRandomUniqueHebrewName();
  let email = getRandomEmail();
  document.getElementById("cell-phone").textContent = "Generated Cell: " + cellNumber;
  document.getElementById("result").textContent = "Generated ID: " + idNumber;
  document.getElementById("full-name").textContent = "Generated Full Name: " + fullName;
  document.getElementById("email").textContent = "Generated Email: " + email;
}

// Function to copy content to clipboard
function copyToClipboard(elementId) {
  // Get the target paragraph element
  const paragraph = document.getElementById(elementId);
  const regexPattern = /^[^:]*:\s*/;
  // Create a temporary input element to select the text
  const tempInput = document.createElement("input");
  tempInput.value = paragraph.textContent.replace(regexPattern, "");
  document.body.appendChild(tempInput);
  tempInput.select();

  // Copy the text
  navigator.clipboard
    .writeText(tempInput.value)
    .then(() => console.log("Content copied to clipboard!"))
    .catch((err) => console.log(`Failed to copy text due to the following error: ${err}`));

  document.body.removeChild(tempInput);
}

// Add event listeners to all buttons
document.querySelectorAll(".copyButton").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    copyToClipboard(targetId);
  });
});
