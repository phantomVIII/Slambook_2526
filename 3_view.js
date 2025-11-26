
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, child, get, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANICW_CepJItUDa2LQQTLcng1F3kSR9IY",
    authDomain: "slambook-2025.firebaseapp.com",
    databaseURL: "https://slambook-2025-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "slambook-2025",
    storageBucket: "slambook-2025.firebasestorage.app",
    messagingSenderId: "201293436756",
    appId: "1:201293436756:web:23f32184623af0bfaf9ac1",
    measurementId: "G-92XFJTXFYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)


function writeUserData(userID, name, email) {
    set(ref(db, 'users/' + userID), {
        name: name,
        email: email
    })
}

// Ensure this function definition exists in your script.js
function readData(ID) {
    const dbRef = ref(getDatabase());

    return get(child(dbRef, `users/${ID}`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val().email; 
        } else {
            return null; 
        }
    }).catch((error) => {
        console.error("Error fetching data inside readData:", error);
        throw error; 
    });
}

async function fetchAndAssignEmail(userID) {
    let assignedEmail = ''; // Variable to hold the final value

    try {
        // 💡 Key Change: Use 'await' to pause execution until the Promise resolves
        // This makes 'email' hold the actual value (userData.email)
        const email = await readData(userID); 
        
        if (email) {
            assignedEmail = email;
            console.log("✅ Assigned Email (via async/await):", assignedEmail);
        } else {
            assignedEmail = 'not_found';
            console.log("Data not found (via async/await).");
        }
        
    } catch (error) {
        console.error("Failed to fetch email:", error);
        assignedEmail = 'error';
    }
    
    // The variable 'assignedEmail' is now set and ready for use within this async function
    return assignedEmail;
}







// 1. Get the full URL (the location object)
const url = window.location.search;

// 2. Create a URLSearchParams object to easily parse the parameters
// window.location.search contains the query string (e.g., ?name=Imtiaz%20Ali)
const params = new URLSearchParams(url);

// 3. Get the value of the 'name' parameter
const receivedName = params.get('name'); 





console.log("Step 1 successful");
console.log(receivedName);






// Call the function to initiate the process
//fetchAndAssignEmail(2);

const emailResult = await fetchAndAssignEmail(receivedName);


console.log("Email fetched:"+ emailResult);

const imageElement = document.getElementById('profilePicture');

// Example URL (this could be a dynamic variable from your Firebase data)
const imageUrlFromData = emailResult;

// Set the image source using the .src property
imageElement.src = imageUrlFromData;

console.log("program ended");