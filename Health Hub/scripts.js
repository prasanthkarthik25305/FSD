// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var btn = document.getElementById("getStartedBtn");

// Get close button
var span = document.getElementsByClassName("close")[0];

// Listen for open click
btn.onclick = function() {
    modal.style.display = "block";
}

// Listen for close click
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal if outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form validation
document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var bp = document.getElementById('bloodPressure').value.split('/');
    var systolic = parseInt(bp[0]);
    var diastolic = parseInt(bp[1]);

    if (systolic > 120 || diastolic > 80) {
        alert('BP patient');
    } else {
        alert('Form submitted successfully');
    }
    
    modal.style.display = "none";
});
