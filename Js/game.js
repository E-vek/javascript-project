let wins = parseInt(localStorage.getItem('wins')) || 0;
        let losses = parseInt(localStorage.getItem('losses')) || 0;
        let ties = parseInt(localStorage.getItem('ties')) || 0;
        document.addEventListener("DOMContentLoaded", () => {
            updateStats();
        });

        function playGame(playerChoice) {
            const choices = ['rock', 'paper', 'scissors'];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            let result = '';

            if (playerChoice === computerChoice) {
                result = "It's a tie!";
                ties++;
                localStorage.setItem('ties', ties);
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`;
                wins++;
                localStorage.setItem('wins', wins);
            } else {
                result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}.`;
                losses++;
                localStorage.setItem('losses', losses);
            }

            document.getElementById('result').textContent = `Computer chose ${computerChoice}. ${result}`;
            updateStats();
        }

        function updateStats() {
            document.getElementById('stats').textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
        }

        function resetScores() {
            wins = 0;
            losses = 0;
            ties = 0;
            localStorage.setItem('wins', 0);
            localStorage.setItem('losses', 0);
            localStorage.setItem('ties', 0);
            document.getElementById('result').textContent = '';
            updateStats();
        }