document.addEventListener("click", function(e) {
            // Create ripple element
            const ripple = document.createElement("div");
            ripple.classList.add("ripple");
            
            // Set the position of the ripple
            ripple.style.left = `${e.clientX}px`;
            ripple.style.top = `${e.clientY}px`;
            
            // Append ripple to the body
            document.body.appendChild(ripple);
            
            // Remove ripple after animation ends
            ripple.addEventListener("animationend", () => {
                ripple.remove();
            });
        });

        // For touch devices
        document.addEventListener("touchstart", function(e) {
            const touch = e.touches[0]; // Get the first touch point
            const ripple = document.createElement("div");
            ripple.classList.add("ripple");

            ripple.style.left = `${touch.clientX}px`;
            ripple.style.top = `${touch.clientY}px`;
            document.body.appendChild(ripple);

            ripple.addEventListener("animationend", () => {
                ripple.remove();
            });
        });