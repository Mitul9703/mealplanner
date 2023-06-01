
// Define an array of objects to store checkbox data
const checkboxes = [
    {
    id: "instagram-checkbox",
    value: "instagram",
    icon: "fad fa-",
    title: "chicken"
    },
    {
    id: "twitch-checkbox",
    value: "twitch",
    icon: "fa fa-",
    title: "Fish"
    },
    {
    id: "slack-checkbox",
    value: "slack",
    icon: "fa fa-",
    title: "Carrot"
    },
    {
    id: "twitter-checkbox",
    value: "twitter",
    icon: "fa fa-",
    title: "Egg"
    },
    {
    id: "pinterest-checkbox",
    value: "pinterest",
    icon: "fa fa-",
    title: "Onion"
    },
    {
    id: "dribbble-checkbox",
    value: "dribbble",
    icon: "fa fa-",
    title: "Beans"
    },
    {
    id: "codepen-checkbox",
    value: "codepen",
    icon: "fa fa-",
    title: "Olive Oil"
    },
    {
    id: "github-checkbox",
    value: "github",
    icon: "fa fa-",
    title: "Tomato"
    }
];

// Function to dynamically add checkboxes to the page
function addCheckboxes() {
    const checkboxList = document.getElementById("checkbox-list");
    checkboxes.forEach(checkbox => {
    const checkboxElement = `
        <div class="form-element" id="${checkbox.id}">
        <input type="checkbox" name="platform" value="${checkbox.value}" id="${checkbox.value}">
        <label for="${checkbox.value}">
            <div class="icon">
            <i class="${checkbox.icon}"></i>
            </div>
            <div class="title">
            ${checkbox.title}
            </div>
        </label>
        </div>
    `;
    checkboxList.insertAdjacentHTML("beforeend", checkboxElement);
    });
}

// Call the addCheckboxes function to initially display the checkboxes
addCheckboxes();

// Function to filter checkboxes based on search query
function searchPlatforms() {
    const searchQuery = document.getElementById("platform-search").value.toLowerCase();
    checkboxes.forEach(checkbox => {
    const checkboxElement = document.getElementById(checkbox.id);
    if (checkbox.title.toLowerCase().includes(searchQuery)) {
        checkboxElement.style.display = "block";
    } else {
        checkboxElement.style.display = "none";
    }
    });
}

// Function to display all checkboxes
function displayAll() {
    checkboxes.forEach(checkbox => {
    const checkboxElement = document.getElementById(checkbox.id);
    checkboxElement.style.display = "block";
    });
}