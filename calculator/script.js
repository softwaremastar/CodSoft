 // JavaScript Logic
            const display = document.getElementById("calc-screen");
            const buttons = document.querySelectorAll("button");

            let currentInput = ""; // Stores the current input

            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    const value = button.textContent;

                    if (value === '×') {
                      value = '*'; // Map × to *
                    }
                  
                    if (button.classList.contains("clear")) {
                        // Clear Button
                        currentInput = "";
                        display.value = "0";
                    } else if (button.classList.contains("cut")) {
                        // Cut (Backspace) Button
                        currentInput = currentInput.slice(0, -1);
                        display.value = currentInput || "0";
                    } else if (button.classList.contains("equal")) {
                        // Equal Button
                        try {
                            currentInput = eval(currentInput).toString();
                            display.value = currentInput;
                        } catch (e) {
                            display.value = "Error";
                            currentInput = "";
                        }
                    } else {
                        // Other Buttons (Numbers/Operators)
                        if (display.value === "0" && !isNaN(value)) {
                            currentInput = value;
                        } else {
                            currentInput += value;
                        }
                        display.value = currentInput;
                    }
                });
            });
