document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "hanis123") {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials, try again.");
    }
});


const urlParams = new URLSearchParams(window.location.search);
const studentID = urlParams.get("student");

// Student data
const students = {
    "2024117905": { 
        name: "Nur Hanis Afiqah Binti Ibrahim", 
        age:"22", 
        ic:"030422-03-0894",
        program: "Bachelor of Information Systems",
        phone:"016-3639102",
        address:"PT 831 Taman Sri Aman, Kampung Endong, 17000 Pasir Mas, Kelantan",
        image: "hanis.jpg"
    },
    "2024533987": { 
        name: "Elina Aisyah Binti Ali", 
        age:"21", 
        ic:"041010-05-4321",
        program: "Bachelor of Software Engineering",
        phone:"011-5643907",
        address:"No. 10, Taman Desa Impian, 17500 Tanah Merah, Kelantan",
        image: "elina.jpg"
    },
    "2024123458": { 
        name: "Mohd Farid Bin Fahmi",
        age:"23", 
        ic:"021231-03-5678",
        program: "Bachelor of Web Content Information",
        phone:"019-3344556",
        address:"No. 35, Jalan Bukit Bunga, 18500 Machang, Kelantan",
        image: "farid.jpg"
    },
    "2024893329": { 
        name: "Siti Nur Ain Binti Fakhrul", 
        age:"22", 
        ic:"030204-03-0873",
        program: "Bachelor of Cybersecurity",
        phone:"011-5687904",
        address:"No. 15, Jalan Sultan Yahya Petra, 15050 Kota Bharu, Kelantan",
        image: "ain.jpg"
    },
    "2024822460": { 
        name: "Mohd Hafiz Bin Zainudin", 
        age:"22", 
        ic:"031105-03-06411",
        program: "Bachelor of Multimedia Computing",
        phone:"018-5566778",
        address:"No. 12, Taman Sri Bachok, 16300 Bachok, Kelantan",
        image: "hamka.jpg"
    },
    "2024256783":{
        name: "Nurul Hana Binti Rozi",
        age:"22", 
        ic:"031216-03-6561",
        program: "Bachelor of Informaton Technology",
        phone:"011-2463730",
        address:"Lot 2569, Mukim Nibong, Bukit Bunga, 17500 Tanah Merah Kelantan",
        photo: "hana.jpg" 
    },
    "20248789321":{
        name: "Nur Izzahtul Binti Faris", 
        age:"22", 
        ic:"031005-03-0053",
        program: "Bachelor of Computer science",
        phone:"013-9564201",
        address:"PT 43, Perumahan Tenaga Nasional,17600 Jeli,Kelantan",
        photo: "izzah.jpg"}
};

// Check if student exists
if (studentID && students[studentID]) {
    const student = students[studentID];
    document.getElementById("student-photo").src = student.photo;
    document.getElementById("student-name").textContent = student.name;
    document.getElementById("student-ic").textContent = student.ic;
    document.getElementById("student-age").textContent = student.age;
    document.getElementById("student-id").textContent = studentID;
    document.getElementById("student-program").textContent = student.program;
    document.getElementById("student-phone").textContent = student.phone;
    document.getElementById("student-address").textContent = student.address;
} else {
    document.querySelector(".profile-card").innerHTML = "<p>Student not found.</p>";
}
