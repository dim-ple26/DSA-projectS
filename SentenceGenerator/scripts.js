// // 

// // let grammarRules = {};

// // fetch("data/grammar.json")
// //     .then(response => response.json())
// //     .then(data => grammarRules = data)
// //     .catch(error => console.error("Error loading grammar:", error));


//     const grammarRules = {
//         noun: ["cat", "dog", "mouse", "elephant", "tiger"],
//         verb: ["chased", "saw", "loved", "ignored"],
//         adjective: ["small", "big", "angry", "happy"]
//     };
    
//     function generateSentence(template) {
//         const regex = /\[([a-z]+)\]/g;
//         const placeholders = template.match(regex);
    
//         if (!placeholders) return template;
    
//         placeholders.forEach((placeholder) => {
//             const key = placeholder.replace(/\[|\]/g, "");
//             if (grammarRules[key]) {
//                 const randomWord = grammarRules[key][Math.floor(Math.random() * grammarRules[key].length)];
//                 template = template.replace(placeholder, randomWord);
//             }
//         });
    
//         return generateSentence(template);
//     }
    
//     // Update live preview while typing
//     function updatePreview() {
//         const inputTemplate = document.getElementById("inputTemplate").value;
//         document.getElementById("livePreview").innerText = generateSentence(inputTemplate);
//     }
    
//     // Generate final output on button click
//     function generate() {
//         const inputTemplate = document.getElementById("inputTemplate").value;
//         const outputSentence = generateSentence(inputTemplate);
//         document.getElementById("output").innerText = outputSentence;
//     }
    
//     // Dark mode toggle
//     document.getElementById("toggleMode").addEventListener("click", function() {
//         document.body.classList.toggle("dark-mode");
//         this.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
//     });
    

// document.addEventListener("DOMContentLoaded", function () {
//     console.log("JS Loaded ✅"); // ✅ Debugging step

//     document.getElementById("generateBtn").addEventListener("click", generate);
//     document.getElementById("toggleMode").addEventListener("click", toggleDarkMode);
// });

// const grammarRules = {
//     noun: ["cat", "dog", "mouse", "elephant", "tiger"],
//     verb: ["chased", "saw", "loved", "ignored"],
//     adjective: ["small", "big", "angry", "happy"]
// };

// function generateSentence(template) {
//     const regex = /\[([a-z]+)\]/g;
//     return template.replace(regex, (match, key) => {
//         if (grammarRules[key]) {
//             return grammarRules[key][Math.floor(Math.random() * grammarRules[key].length)];
//         }
//         return match;
//     });
// }

// function generate() {
//     console.log("Generate button clicked! 🚀"); // ✅ Debugging step

//     const inputTemplate = document.getElementById("inputTemplate").value;
//     const outputSentence = generateSentence(inputTemplate);
//     document.getElementById("output").innerText = outputSentence;
// }

// function toggleDarkMode() {
//     document.body.classList.toggle("dark-mode");
// }

document.addEventListener("DOMContentLoaded", function () {
    console.log("JS Loaded ✅"); // Debugging step

    // Attach event listeners AFTER the page loads
    document.getElementById("generateBtn").addEventListener("click", generate);
    document.getElementById("toggleMode").addEventListener("click", toggleDarkMode);
});

const grammarRules = {
    noun: ["cat", "dog", "mouse", "elephant", "tiger"],
    verb: ["chased", "saw", "loved", "ignored"],
    adjective: ["small", "big", "angry", "happy"]
};

function generateSentence(template) {
    return template.replace(/\[([a-z]+)\]/g, (match, key) => {
        return grammarRules[key] ? grammarRules[key][Math.floor(Math.random() * grammarRules[key].length)] : match;
    });
}

function generate() {
    console.log("Generate button clicked! 🚀"); // Debugging step
    const inputTemplate = document.getElementById("inputTemplate").value;
    const outputSentence = generateSentence(inputTemplate);
    document.getElementById("output").innerText = outputSentence;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
