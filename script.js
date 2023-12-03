document.addEventListener('DOMContentLoaded', function () {
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    const selectedCourseInput = document.getElementById('selectedCourse');

    enrollButtons.forEach(button => {
        button.addEventListener('click', function () {
            const courseName = button.getAttribute('data-course');
            selectedCourseInput.value = courseName;
            document.getElementById('enrollment-form').style.display = 'block';
        });
    });

    // Handle form submission
    const enrollForm = document.getElementById('enrollForm');
    enrollForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userName = document.getElementById('name').value;
        const selectedCourse = document.getElementById('selectedCourse').value;
        
    });
});