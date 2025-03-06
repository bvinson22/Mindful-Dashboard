document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Random image selection for the picture widget
    const desnImages = [
        "https://www.nerdwallet.com/tachyon/2023/05/01-LR_0912-HDR-scaled-1.jpg?resize=350%2C350",
        "https://www.usatoday.com/gcdn/presto/2019/11/13/PBRE/27a48e8d-819f-454e-91f2-988dc8c1c7a5-1106ZR_0379DR.jpg?crop=2699,1519,x0,y137&width=2699&height=1519&format=pjpg&auto=webp",
        "https://lp-cms-production.imgix.net/2022-02/United%20States%20Orlando%20Atlantide%20Phototravel%20GettyImages-541417008%20RFE.jpg"
    ];
    const randImage = desnImages[Math.floor(Math.random() * desnImages.length)];
    const displayImage = document.querySelector('.display-image');
    if (displayImage) displayImage.src = randImage;

    // Create floating background circles
    function createBackgroundCircles() {
        const background = document.querySelector('.animated-background');
        if (!background) return;

        for (let i = 0; i < 20; i++) {
            const circle = document.createElement('div');
            circle.className = 'floating-circle';
            circle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 200 + 50}px;
                height: ${Math.random() * 200 + 50}px;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                filter: blur(16px);
                animation: float ${Math.random() * 10 + 5}s infinite ease-in-out;
            `;
            background.appendChild(circle);
        }
    }

    // Update date and time
    function updateDateTime() {
        const timeElement = document.querySelector('.time');
        const dateElement = document.querySelector('.date');  // Ensure you have an element with the 'date' class

        if (timeElement) {
            const now = new Date();
            timeElement.textContent = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }

        if (dateElement) {
            const now = new Date();
            dateElement.textContent = now.toLocaleDateString('en-US', {
                weekday: 'long',  // e.g., "Monday"
                month: 'long',    // e.g., "January"
                day: 'numeric',   // e.g., "1"
                year: 'numeric'   // e.g., "2025"
            });
        }
    }

    // Calculate and update study streak
    function updateStudyStreak() {
        const streakElement = document.querySelector('.stats-widget .stat-value');
        if (streakElement) {
            const startDate = new Date('2024-01-01');
            const now = new Date();
            const daysSinceStart = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
            streakElement.textContent = daysSinceStart;
        }
    }

    // Focus Timer functionality
    function initFocusTimer() {
        let timeLeft = 45 * 60; // 45 minutes in seconds
        const timerElement = document.querySelector('.timer');
        if (!timerElement) return;

        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            if (timeLeft > 0) timeLeft--;
        }

        setInterval(updateTimer, 1000);
    }

    // Calculate and update days until Disneyland trip
    function updateDaysUntilTrip() {
        const tripDate = new Date("2025-04-24");
        const today = new Date();
        const timeDiff = tripDate - today;
        const daysUntilTrip = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        // Update the text content of the #days-until-trip span
        const daysElement = document.getElementById("countdown-days");
        if (daysElement) {
            daysElement.textContent = daysUntilTrip; // Update days
        }
    }

    // Initialize all features
    createBackgroundCircles();
    updateDateTime();
    setInterval(updateDateTime, 1000);  // Update both time and date every second
    updateStudyStreak();
    initFocusTimer();
    updateDaysUntilTrip(); // Call the function to display days until trip on load

    // Optional: Update the countdown every 24 hours
    setInterval(updateDaysUntilTrip, 86400000); // 86400000 ms = 24 hours
});
