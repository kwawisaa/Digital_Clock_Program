function clockUpdate(){
    const current = new Date();

    let hours = current.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const newHours =  hours.toString().padStart(2, 0);
    const minutes = current.getMinutes().toString().padStart(2, 0);
    const seconds = current.getSeconds().toString().padStart(2, 0);
    const buildedTime = `${newHours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = buildedTime; 
}
clockUpdate();
setInterval(clockUpdate, 1000);