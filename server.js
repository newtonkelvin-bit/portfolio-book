const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Real data directly extracted from your Curriculum Vitae
const myData = {
    profile: "Enthusiastic skilled worker with years of experience in customer services and technical support, with a strong background in online services. Skilled communicator and listener with a knack for remedying issues, and keen organizational skills which allow for effective delivering of outstanding services. Maintain the highest level of integrity; dedicated to providing reliable and friendly services without ever compromising the reputation or competencies of the Organization. Highly motivated and outgoing individual. Competent team player who can successfully inspire fellow colleagues.",
    experience: [
        {
            title: "Managing Director",
            company: "Mapese Cyber",
            period: "2024 - 2026",
            duties: [
                "Managed daily operations, online government services, and customer inquiries.",
                "Maintained accurate data logs, processed financial transactions, and handled basic hardware/network troubleshooting.",
                "Delivered high-quality customer service, ensuring quick turnaround times for all clients."
            ]
        }
    ],
    education: [
        {
            institution: "University of Nairobi",
            period: "2025 - 2029",
            details: "Bachelor of Science in Statistics."
        },
        {
            institution: "University Of Nairobi",
            period: "January 2026-Feb 2026",
            details: "(Certificate in Data Analysis: Python, MySQL, Advanced Excel, and R)."
        },
        {
            institution: "Computer for Schools Kenya (CFSK) Institute of ICT",
            period: "2021 April - 2021 July",
            details: "Certificate in Computer Packages."
        },
        {
            institution: "St. Joseph's Mutito boys High School",
            period: "2021 - 2024",
            details: "K.C.S.E Certificate"
        },
        {
            institution: "Kangalu Primary School",
            period: "2012-2020",
            details: "K.C.P.E Certificate"
        }
    ],
    skills: [
        "Data Analysis & Database: Python, MySQL, R Programming, Database Management, and Data Cleaning.",
        "Software Proficiency: Advanced Excel, Microsoft Office Suite, Google Suite, and Cyber Café Management Systems.",
        "Operations & Customer Service: Client relations, tech handling, multitasking, and digital media support.",
        "Languages: Fluent in English and Kiswahili.",
        "Certifications: Certificate in Data Analysis (Python, MySQL, Excel, R)."
    ],
    personalInfo: {
        DOB: "August, 23rd, 2005",
        status: "Single",
        location: "P.O Box 80-80100, Mombasa, Kenya",
        email: "newtonkelvin001@gmail.com",
        phone: "+254 796 836 132"
    }
};

app.get('/', (req, res) => {
    res.render('portfolio', { data: myData });
});

app.listen(PORT, () => {
    console.log(`Portfolio book running at http://localhost:${PORT}`);
});