let missions = []
let priorities = []
let dangerLevels = []


function addMission() {
    let mission = document.getElementById("missionInput").value;
    let priority = document.getElementById("priorityInput").value;
    let danger = document.getElementById("dangerInput").value;

    missions.push(mission);
    priorities.push(priority)
    dangerLevels.push(danger)

    console.log("mission:", mission)
    console.log("priority:", priority)
    console.log("danger:", danger)

    document.getElementById("missionInput").value = "";
    document.getElementById("priorityInput").value = "";
    document.getElementById("dangerInput").value = "";

    displayMissions();
}

function displayMissions() {
    let missionList = document.getElementById("missionList");
    missionList.innerHTML = "";

    for (let i= 0; i < missions.length; i++) {
        let listItem = document.createElement("p");
        listItem.textContent = `Mission: ${missions[i]}, Priority: ${priorities[i]}, Danger Level: ${dangerLevels[i]}`;
        missionList.appendChild(listItem);
    }
}

function completeMission() {
    let completeMission = document.getElementById("completedMissionInput").value;
    let index = missions.indexOf(completeMission);

    if (index !== -1) {
        missions.splice(index, 1); 
        priorities.splice(index, 1);
        dangerLevels.splice(index, 1);

        document.getElementById("message").textContent = "Mission is complete!";
        document.getElementById("successImage").src = "https://dims.apnews.com/dims4/default/11d12e2/2147483647/strip/false/crop/2912x1941+0+0/resize/1486x990!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc1%2F19%2Fc303057a0f7b90a009876b0efd9f%2Fb483174dd2834054835b88bf040e065f"
        document.getElementById("successImage").style.display ="block";
    } else {
        document.getElementById("message").textContent = "Error: Mission not completed bruv!";
    }

    console.log(missions)
    console.log(priorities)
    console.log(dangerLevels)

    document.getElementById("completedMissionInput").value = "";

    displayMissions();
}
















