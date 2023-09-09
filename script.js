function updateClock() {
            // Get the current time in milliseconds
            const currentTimeMillis = Date.now();
            document.querySelector('[data-testid="currentUTCTime"]').textContent = `Time: ${currentTimeMillis}`;

            // Get the current day
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDate = new Date();
            const currentDay = days[currentDate.getDay()];
            document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Day: ${currentDay}`;
        }

        // Update the clock every second
        setInterval(updateClock, 1000);

        // Initial call to set the clock
        updateClock();
