let userRole = "employee";
let accessLevel;
if (userRole === "employee") {
    accessLevel = "Full access granted";
} else if (userRole === "enrolled member") {
    accessLevel = "Full access granted and interaction with a dietician";
} else if (userRole === "subscriber") {
    accessLevel = "Partial access granted";
} else {
    accessLevel = "No access granted";
}

let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "employee") {
        userMessage = "Welcome, Employee!";
    } else if (userRole === "enrolled member") {
        userMessage = "Welcome, Enrolled Member!";
    } else if (userRole === "subscriber") {
        userMessage = "Welcome, Subscriber!";
} else {
    userMessage = "Please enroll or subscribe to access the system.";
}
}

let userType = "subscriber";
let userCategory;
switch (userType) {
    case "employee":
        userCategory = "Employee";
        break;
    case "enrolled member":
        userCategory = "Enrolled Member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

let isSubscribed = true;
let authenticationStatus = isSubscribed ? "Subscribed" : "Not subscribed";