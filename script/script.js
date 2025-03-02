// top current date js
document.getElementById('currentDate&Time').textContent = formatDateTime();
        function formatDateTime() {
            const date = new Date();
            const currentDate = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
            return date.toLocaleDateString('en-US', currentDate);
        }


// blog page js
document.getElementById('discover').addEventListener('click',function(){
    window.location.href="./blog.html"
})   

// change bg js
function changeBG(){
    const randomColors=['#FFCDD2', '#C8E6C9', '#BBDEFB', '#F4F7FF', '#D1C4E9', '#FFF9C4','#E0BCBC','#FFC078','#B3FF78','#78FFD6','#78FFF6','#A1E8FF','#AC96FF'];
    document.body.style.backgroundColor = randomColors[Math.floor(Math.random()*randomColors.length)];
}


// final alert
const buttons = document.querySelectorAll(".last-alert");


let clickedTime = 0;

buttons.forEach(button => {
    button.addEventListener("click", function () {
        clickedTime++;
        if (clickedTime === buttons.length) {
            alert("Congratulations!!! You have completed all the current task");
        }
    });
});




// clear history js
document.getElementById("clearHistory").addEventListener("click", function () {
    const completeNotification = document.querySelector(".complete-notification");
    completeNotification.innerHTML = '';
});





