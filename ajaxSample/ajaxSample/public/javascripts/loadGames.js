function getGamesList() {
    $.get("/getList", {}, updateGames)
}

// function updateImages(jsonList) {
//     console.log('jsonList', jsonList)
// }