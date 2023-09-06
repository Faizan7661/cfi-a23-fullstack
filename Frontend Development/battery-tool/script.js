
const chargeLevel = document.getElementById("charge-level");
const charge = document.getElementById("charge");
navigator.getBattery().then((battery) => {
function getBatteryLevel() {
    let batteryLevel = `${parseInt(battery.level * 100)}%`;
    charge.style.width = batteryLevel;
    chargeLevel.innerHTML = batteryLevel;
   
}
getBatteryLevel();
});








    // const battery = document.getElementById("battery");
    // const batteryPercentage = document.getElementById("battery-percentage");

    // navigator.getBattery().then((battery) => {
    //   function getBatteryPercentage() {
    //     let batteryLevel = `${parseInt(battery.level * 100)}%`;
    //     battery.style.width = batteryLevel;
    //     batteryPercentage.innerHTML = batteryLevel;
    //   }
    //   getBatteryPercentage();
    // });