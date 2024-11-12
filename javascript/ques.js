
window.onload = function() {
    for (let i = 1; i <= 20; i++) {
        const savedResponse = localStorage.getItem(`q${i}`);
        if (savedResponse) {
            const radios = document.querySelectorAll(`input[name="q${i}"]`);
            radios.forEach(radio => {
                if (radio.value === savedResponse) {
                    radio.checked = true;
                }
            });
        }
    }
};

function showNext(current) {
    const currentContainer = document.getElementById(`question${current}`);
    const nextContainer = document.getElementById(`question${current + 1}`);
    if (nextContainer) {
        const radios = currentContainer.querySelectorAll('input[type="radio"]');
        const answered = Array.from(radios).some(radio => radio.checked);
        if (answered) {
            const selected = Array.from(radios).find(radio => radio.checked);
            localStorage.setItem(`q${current}`, selected.value);

            currentContainer.classList.remove('active');
            nextContainer.classList.add('active');
        } else {
            alert('Please answer the question before proceeding.');
        }
    }
}

function showPrev(current) {
    const currentContainer = document.getElementById(`question${current}`);
    const prevContainer = document.getElementById(`question${current - 1}`);
    if (prevContainer) {
        currentContainer.classList.remove('active');
        prevContainer.classList.add('active');
        const savedResponse = localStorage.getItem(`q${current - 1}`);
        if (savedResponse) {
            const radios = prevContainer.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
                if (radio.value === savedResponse) {
                    radio.checked = true;
                }
            });
        }
    }
}

function submitQuiz() {
    let responses = {};
    for (let i = 1; i <= 20; i++) {
        const response = localStorage.getItem(`q${i}`);
        responses[`q${i}`] = response ? response : null; 
    }

    console.log(responses); 
    let recommendedSport = "";
    if (responses.q1 === 'Love' && responses.q2 === 'Very high' && responses.q16 === 'Love it') {
        recommendedSport = "Running";
    } else if (responses.q6 === 'Outdoor' && responses.q11 === 'Yes, very comfortable' && responses.q15 === 'Yes, love it') {
        recommendedSport = "Football";
    } else if (responses.q3 === 'Very agile' && responses.q19 === 'Yes, very much' && responses.q20 === 'Yes, very much') {
        recommendedSport = "Badminton";
    } else if (responses.q7 === 'Team' && responses.q12 === 'Very important' && responses.q18 === 'Team sports') {
        recommendedSport = "Volleyball";
    } else if (responses.q8 === 'Strength' && responses.q14 === 'Power' && responses.q17 === 'Very comfortable') {
        recommendedSport = "Boxing";
    } else if (responses.q4 === 'Fast-paced' && responses.q10 === 'Love them' && responses.q13 === 'Very well') {
        recommendedSport = "Swimming";
    } else if (responses.q5 === 'Very strong' && responses.q9 === 'Very important' && responses.q16 === 'Dislike it') {
        recommendedSport = "Archery";
    } else if (responses.q1 === 'Like' && responses.q2 === 'High' && responses.q15 === 'Yes, sometimes') {
        recommendedSport = "Tennis";
    } else if (responses.q6 === 'Indoor' && responses.q11 === 'Somewhat comfortable' && responses.q18 === 'Individual sports') {
        recommendedSport = "Table Tennis";
    } else if (responses.q7 === 'Individual' && responses.q12 === 'Important' && responses.q19 === 'Yes, somewhat') {
        recommendedSport = "Squash";
    } else if (responses.q8 === 'Endurance' && responses.q14 === 'Precision' && responses.q20 === 'No preference') {
        recommendedSport = "Golf";
    } else if (responses.q3 === 'Moderately agile' && responses.q10 === 'Like them' && responses.q17 === 'Somewhat comfortable') {
        recommendedSport = "Skating";
    } else if (responses.q4 === 'Moderate-paced' && responses.q9 === 'Somewhat important' && responses.q13 === 'Well') {
        recommendedSport = "Hockey";
    } else if (responses.q5 === 'Strong' && responses.q14 === 'Neither' && responses.q18 === 'Both') {
        recommendedSport = "Shooting";
    } else if (responses.q1 === 'Neutral' && responses.q2 === 'Moderate' && responses.q15 === 'Neutral') {
        recommendedSport = "Wrestling";
    } else if (responses.q6 === 'Neither' && responses.q11 === 'Neutral' && responses.q19 === 'Neutral') {
        recommendedSport = "Javelin Throw";
    } else if (responses.q7 === 'Both' && responses.q12 === 'Not important' && responses.q20 === 'No, I prefer physical effort') {
        recommendedSport = "Discus Throw";
    } else if (responses.q8 === 'Neither' && responses.q14 === 'Both' && responses.q17 === 'Not comfortable') {
        recommendedSport = "Hammer Throw";
    } else {
        recommendedSport = "We couldn't find a perfect match for you. Please consider trying different sports and see what you enjoy the most.";
    }
    if (recommendedSport !== "") {
        alert(`Based on your responses, we recommend you try ${recommendedSport}!`);
    } else {
        alert(recommendedSport);
    }
    localStorage.clear();
}
