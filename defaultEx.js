let text;
switch (new Date().getDay()) {
    default:
        console.log(text = "looking forward to the Weekend");
        break;
    case 6:
        console.log(text = "Today is Saturday");
        break;
    case 0:
        console.log(text = "Today is Sunday");
}