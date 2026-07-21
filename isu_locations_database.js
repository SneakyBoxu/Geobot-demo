// ISU Echague Campus Locations Database
// Updated with accurate Google Maps coordinates

const ISU_LOCATIONS = {
    // Academic Buildings
    buildings: [
        {
            id: 1,
            name: "High School",
            category: "Academic",
            coordinates: [16.721473, 121.693671],
            description: "ISU Laboratory High School offering secondary education programs.",
            facilities: ["Classrooms", "Science Labs", "Computer Room", "Library"]
        },
        {
            id: 2,
            name: "College of Engineering",
            category: "Academic",
            coordinates: [16.721597, 121.692909],
            description: "Offers engineering programs including Civil, Electrical, Mechanical, and Agricultural Engineering.",
            facilities: ["Engineering Labs", "Computer-Aided Design Room", "Workshops", "Classrooms"]
        },
        {
            id: 3,
            name: "College of Teacher Education",
            category: "Academic",
            coordinates: [16.722665, 121.693167],
            description: "Main building for teacher education programs training future educators.",
            facilities: ["Classrooms", "Teaching Simulation Lab", "Faculty Offices", "Demonstration Rooms"]
        },
        {
            id: 9,
            name: "School of Veterinary Medicine",
            category: "Academic",
            coordinates: [16.724844, 121.69087],
            description: "Veterinary medicine program with animal clinics and research laboratories.",
            facilities: ["Veterinary Clinic", "Surgery Room", "Animal Labs", "Diagnostic Center"]
        },
        {
            id: 10,
            name: "College of Agriculture",
            category: "Academic",
            coordinates: [16.723241, 121.69087],
            description: "Agricultural science programs including crop science, soil science, and agricultural technology.",
            facilities: ["Classrooms", "Farm Laboratory", "Greenhouse", "Research Plots"]
        },
        {
            id: 16,
            name: "Department of Science and Technology - Isabela Provincial Office",
            category: "Academic",
            coordinates: [16.720086, 121.692512],
            description: "DOST provincial office providing science and technology services and research support.",
            facilities: ["Offices", "Conference Room", "Resource Center"]
        },
        {
            id: 18,
            name: "CAS Building",
            category: "Academic",
            coordinates: [16.718411, 121.689293],
            description: "College of Arts and Sciences. Programs in Mathematics, Biology, Chemistry, Physics, English, and Social Sciences.",
            facilities: ["Classrooms", "Science Laboratories", "Computer Room", "Faculty Rooms"]
        },
        {
            id: 19,
            name: "IT Building",
            category: "Academic",
            coordinates: [16.718688, 121.688456],
            description: "Information Technology building for IT and Computer Science programs.",
            facilities: ["Computer Labs", "Server Room", "Programming Labs", "Multimedia Room"]
        },
        {
            id: 20,
            name: "IT Centrum Building",
            category: "Academic",
            coordinates: [16.718205, 121.688316],
            description: "Additional computer laboratory facility for IT and Computer Science students.",
            facilities: ["Computer Labs", "Study Areas", "Technical Support Office"]
        },
        {
            id: 25,
            name: "Science Building",
            category: "Academic",
            coordinates: [16.717224, 121.68897],
            description: "Science facility with laboratories for chemistry, physics, and biology.",
            facilities: ["Chemistry Lab", "Physics Lab", "Biology Lab", "Research Areas"]
        }
    ],

    // Facilities
    facilities: [
        {
            id: 4,
            name: "College of Teacher Education - Extension Building",
            category: "Facility",
            coordinates: [16.724608, 121.693489],
            description: "Extension building with additional classrooms and offices for College of Teacher Education.",
            facilities: ["Additional Classrooms", "Faculty Offices", "Meeting Rooms"]
        },
        {
            id: 5,
            name: "University Extension and Training Services",
            category: "Facility",
            coordinates: [16.725543, 121.693671],
            description: "Manages community extension programs, training workshops, and outreach activities.",
            services: ["Training Programs", "Community Outreach", "Skills Development"]
        },
        {
            id: 8,
            name: "Cagayan Valley Cacao Development Center",
            category: "Facility",
            coordinates: [16.725892, 121.691257],
            description: "Regional center for cacao research, development, and training.",
            services: ["Cacao Research", "Farmer Training", "Processing Demos", "Seedling Production"]
        },
        {
            id: 12,
            name: "Oval",
            category: "Facility",
            coordinates: [16.719736, 121.69395],
            description: "Athletic oval with track and field facility for sports training and physical education.",
            services: ["Running Track", "Field Events", "Sports Training", "PE Classes"]
        },
        {
            id: 13,
            name: "Amphitheater",
            category: "Facility",
            coordinates: [16.718719, 121.692244],
            description: "Outdoor venue for cultural performances, programs, and university events.",
            services: ["Cultural Events", "Programs", "Concerts", "Ceremonies"]
        },
        {
            id: 14,
            name: "Open Gym",
            category: "Facility",
            coordinates: [16.718935, 121.693156],
            description: "Open-air gymnasium for basketball, volleyball, and sports activities.",
            services: ["Basketball", "Volleyball", "Sports Events", "Physical Education"]
        },
        {
            id: 22,
            name: "Graduate School",
            category: "Facility",
            coordinates: [16.72283, 121.69395],
            description: "Offers master's and doctoral programs in education, agriculture, and management.",
            facilities: ["Classrooms", "Research Rooms", "Faculty Offices", "Thesis Defense Room"]
        },
        {
            id: 27,
            name: "Old Admin Building",
            category: "Facility",
            coordinates: [16.720904, 121.689705],
            description: "Historic administrative building with various university offices.",
            offices: ["Administrative Offices", "Records", "Meeting Rooms"]
        },
        {
            id: 28,
            name: "De Venencia Building",
            category: "Facility",
            coordinates: [16.725312, 121.691819],
            description: "Multi-purpose building with offices and classrooms.",
            facilities: ["Offices", "Classrooms", "Meeting Spaces"]
        },
        {
            id: 32,
            name: "Department of Military Science and Tactics (DMST)",
            category: "Facility",
            coordinates: [16.718236, 121.694337],
            description: "ROTC training facility for military science education and leadership development.",
            facilities: ["Training Rooms", "Armory", "Drill Ground", "Offices"]
        }
    ],

    // Services
    services: [
        {
            id: 11,
            name: "New Admin Building",
            category: "Service",
            coordinates: [16.72098, 121.689388],
            description: "Main administrative building. University President's office, Registrar, Admissions, Accounting, and HR.",
            offices: ["President's Office", "Registrar", "Admissions", "Accounting", "HR Office", "Planning Office"]
        },
        {
            id: 15,
            name: "Student Supreme Council",
            category: "Service",
            coordinates: [16.719408, 121.692394],
            description: "Student government office for student leadership, activities, and student concerns.",
            services: ["Student Government", "Student Activities", "Organization Coordination", "Student Advocacy"]
        },
        {
            id: 17,
            name: "COE Library",
            category: "Service",
            coordinates: [16.721011, 121.692823],
            description: "College of Engineering library with engineering references and technical journals.",
            services: ["Engineering Books", "Technical Journals", "Study Areas", "Research Materials"]
        },
        {
            id: 21,
            name: "Infirmary",
            category: "Service",
            coordinates: [16.717825, 121.688273],
            description: "Campus health clinic providing first aid, medical consultation, and health services.",
            services: ["First Aid", "Medical Consultation", "Basic Medications", "Health Records"]
        },
        {
            id: 23,
            name: "Main Library",
            category: "Service",
            coordinates: [16.719269, 121.68941],
            description: "University main library with book collections, digital resources, and study areas.",
            services: ["Books", "Digital Resources", "Study Areas", "Research Assistance", "Periodicals", "Thesis Archives"]
        },
        {
            id: 24,
            name: "2nd Canteen",
            category: "Service",
            coordinates: [16.72096, 121.690408],
            description: "Campus canteen providing meals, snacks, and beverages.",
            services: ["Meals", "Snacks", "Beverages", "Dining Area"]
        },
        {
            id: 26,
            name: "OSAS Building",
            category: "Service",
            coordinates: [16.72057, 121.688739],
            description: "Office of Student Affairs and Services. Guidance counseling, scholarships, and student welfare.",
            services: ["Guidance Counseling", "Scholarships", "Student Welfare", "Discipline Office"]
        },
        {
            id: 29,
            name: "Food Court",
            category: "Service",
            coordinates: [16.725245, 121.692683],
            description: "Main food court with multiple food stalls and dining area.",
            services: ["Multiple Food Stalls", "Variety of Cuisines", "Dining Area", "Refreshments"]
        },
        {
            id: 33,
            name: "2nd Food Court",
            category: "Service",
            coordinates: [16.720795, 121.693316],
            description: "Additional food court with more dining options and seating.",
            services: ["Food Vendors", "Snack Stalls", "Dining Spaces", "Beverages"]
        }
    ],

    // Housing
    housing: [
        {
            id: 6,
            name: "ISU Dormitory",
            category: "Housing",
            coordinates: [16.721442, 121.695635],
            description: "On-campus student dormitory providing accommodation with shared rooms and common areas.",
            services: ["Student Rooms", "Common Areas", "Study Spaces", "24/7 Security", "Shared Bathrooms"]
        },
        {
            id: 30,
            name: "Guard Office",
            category: "Housing",
            coordinates: [16.72153, 121.685574],
            description: "Security personnel quarters near the main entrance.",
            services: ["Security Staff Quarters", "Monitoring Station"]
        }
    ],

    // Entrances
    entrances: [
        {
            id: 7,
            name: "ISU Gate Entrance",
            category: "Entrance",
            coordinates: [16.721597, 121.685269],
            description: "Main entrance gate with security checkpoint for visitor registration and ID validation.",
            services: ["Security Checkpoint", "Visitor Registration", "ID Validation", "Vehicle Inspection"]
        }
    ],

    // Administration
    administration: [
        {
            id: 31,
            name: "Cyber Library Building",
            category: "Administration",
            coordinates: [16.721068, 121.685724],
            description: "Digital library with computer workstations, internet access, and online research databases.",
            services: ["Computer Workstations", "Internet Access", "E-Learning Resources", "Online Databases", "Digital Archives"]
        }
    ]
};

// Faculty Directory Database
const FACULTY_DIRECTORY = [
    {
        id: 1,
        name: "Dr. Juan dela Cruz",
        department: "College of Engineering",
        position: "Dean",
        office: "COE Building, Room 201",
        coordinates: [16.721597, 121.692909],
        email: "jdelacruz@isu.edu.ph",
        consultationHours: "Monday-Friday, 2:00 PM - 4:00 PM"
    },
    {
        id: 2,
        name: "Prof. Maria Santos",
        department: "CAS Building",
        position: "Department Chair - Mathematics",
        office: "CAS Building, Room 305",
        coordinates: [16.718411, 121.689293],
        email: "msantos@isu.edu.ph",
        consultationHours: "Tuesday-Thursday, 1:00 PM - 3:00 PM"
    },
    {
        id: 3,
        name: "Dr. Pedro Reyes",
        department: "College of Agriculture",
        position: "Dean",
        office: "Agriculture Building, Room 101",
        coordinates: [16.723241, 121.69087],
        email: "preyes@isu.edu.ph",
        consultationHours: "Monday-Wednesday-Friday, 3:00 PM - 5:00 PM"
    },
    {
        id: 4,
        name: "Prof. Ana Garcia",
        department: "College of Teacher Education",
        position: "Dean",
        office: "CTE Building, Room 202",
        coordinates: [16.722665, 121.693167],
        email: "agarcia@isu.edu.ph",
        consultationHours: "Monday-Friday, 10:00 AM - 12:00 PM"
    },
    {
        id: 5,
        name: "Dr. Roberto Gomez",
        department: "CAS Building",
        position: "Department Chair - Sciences",
        office: "CAS Building, Room 103",
        coordinates: [16.718411, 121.689293],
        email: "rgomez@isu.edu.ph",
        consultationHours: "Tuesday-Thursday, 2:00 PM - 4:00 PM"
    }
];

// Helper function to get all locations as a flat array
function getAllLocations() {
    return [
        ...ISU_LOCATIONS.buildings,
        ...ISU_LOCATIONS.facilities,
        ...ISU_LOCATIONS.services,
        ...ISU_LOCATIONS.housing,
        ...ISU_LOCATIONS.entrances,
        ...ISU_LOCATIONS.administration
    ];
}

// Helper function to search locations by name or category
function searchLocations(query) {
    const allLocations = getAllLocations();
    const lowerQuery = query.toLowerCase();
    
    return allLocations.filter(location => 
        location.name.toLowerCase().includes(lowerQuery) ||
        location.category.toLowerCase().includes(lowerQuery) ||
        location.description.toLowerCase().includes(lowerQuery)
    );
}

// Helper function to search faculty
function searchFaculty(query) {
    const lowerQuery = query.toLowerCase();
    
    return FACULTY_DIRECTORY.filter(faculty =>
        faculty.name.toLowerCase().includes(lowerQuery) ||
        faculty.department.toLowerCase().includes(lowerQuery) ||
        faculty.position.toLowerCase().includes(lowerQuery)
    );
}

// Helper function to get location by ID
function getLocationById(id) {
    const allLocations = getAllLocations();
    return allLocations.find(location => location.id === id);
}

// Helper function to get faculty by ID
function getFacultyById(id) {
    return FACULTY_DIRECTORY.find(faculty => faculty.id === id);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ISU_LOCATIONS,
        FACULTY_DIRECTORY,
        getAllLocations,
        searchLocations,
        searchFaculty,
        getLocationById,
        getFacultyById
    };
}
