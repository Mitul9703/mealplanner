// Define an array of objects to store checkbox data
const checkboxes = [
    {
        id: "low-checkbox",
        value: "low",
        icon: "fad fa-",
        title: "Low 30 min"
    },
    {
        id: "med-checkbox",
        value: "med",
        icon: "fa fa-",
        title: "Medium \n1 hr"
    },
    {
        id: "high-checkbox",
        value: "high",
        icon: "fa fa-",
        title: "High 2 hr"
    },
    // ...rest of the checkboxes
    ];

    // Function to dynamically add checkboxes to the page
    function addCheckboxes() {
    const checkboxList = document.getElementById("checkbox-list");
    checkboxes.forEach(checkbox => {
        const checkboxElement = document.createElement("div");
        checkboxElement.className = "form-element";
        checkboxElement.id = checkbox.id;

        const inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.name = "platform";
        inputElement.value = checkbox.value;
        inputElement.id = checkbox.value;
        inputElement.addEventListener("change", handleCheckboxChange);

        const labelElement = document.createElement("label");
        labelElement.htmlFor = checkbox.value;

        const iconElement = document.createElement("div");
        iconElement.className = "icon";
        const icon = document.createElement("i");
        icon.className = checkbox.icon;
        iconElement.appendChild(icon);

        const titleElement = document.createElement("div");
        titleElement.className = "title";
        titleElement.textContent = checkbox.title;

        labelElement.appendChild(iconElement);
        labelElement.appendChild(titleElement);
        checkboxElement.appendChild(inputElement);
        checkboxElement.appendChild(labelElement);
        checkboxList.appendChild(checkboxElement);
    });
    }

    // Call the addCheckboxes function to initially display the checkboxes
    addCheckboxes();

    // Function to handle checkbox change event
    function handleCheckboxChange(event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox !== event.target) {
        checkbox.checked = false;
        }
    });
    }

