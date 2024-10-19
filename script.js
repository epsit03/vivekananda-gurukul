window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#333';
        header.style.color = '#fff';
    } else {
        header.style.background = '#f5f5f5';
        header.style.color = '#333';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for triggering animations
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden').forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});

// Student data with names and birthdays
const students = [
    { name: "ABDUL HANNAN ALI", birthday: "2018-12-22" },
    { name: "ABIDA BEGUM", birthday: "2016-01-28" },
    { name: "ARIBUL", birthday: "2019-01-01" },
    { name: "ARJEENA", birthday: "2018-01-01" },
    { name: "BAHARJAN", birthday: "2014-06-26" },
    { name: "BEER SINGH", birthday: "2012-01-01" },
    { name: "CHIRAG", birthday: "2024-07-20" },
    { name: "GAURAV", birthday: "2016-01-01" },
    { name: "JAHIDUL", birthday: "2012-07-29" },
    { name: "KANCHAN", birthday: "2016-01-01" },
    { name: "MAHARJAN", birthday: "2017-12-20" },
    { name: "MANMOHAN", birthday: "2019-01-01" },
    { name: "MARJEENA", birthday: "2017-01-01" },
    { name: "NEELESH", birthday: "2016-09-20" },
    { name: "NIDHI", birthday: "2011-11-25" },
    { name: "RAJAWALI", birthday: "2015-01-01" },
    { name: "RAMDEVI", birthday: "2014-01-01" },
    { name: "RANI", birthday: "2018-01-01" },
    { name: "RUPESH RAJAK", birthday: "2015-02-10" },
    { name: "SANJU", birthday: "2015-01-01" },
    { name: "SATYAM (NDRF)", birthday: "2012-01-01" },
    { name: "SEVAK RAJAK", birthday: "2013-03-24" },
    { name: "SHAHALAM", birthday: "2014-01-01" },
    { name: "SHAHIPUL", birthday: "2016-01-01" },
    { name: "SHIVANI", birthday: "2019-08-30" },
    { name: "SUHANA AKHTRA", birthday: "2017-09-28" },
    { name: "SUNNY", birthday: "2019-01-01" },
    { name: "VANSH", birthday: "1012-01-01" },
    { name: "RACHANA", birthday: "2014-01-01" },
    { name: "ARCHANA", birthday: "2017-03-19" },
    { name: "ANJALI RAJAK", birthday: "2015-01-01" },
    { name: "PRINCE RAJAK", birthday: "2017-10-30" },
];


// Function to get the next upcoming birthday within the running year
function getNextBirthday(birthdayStr) {
    const today = new Date();
    let birthday = new Date(birthdayStr);
    birthday.setFullYear(today.getFullYear()); // Set to current year

    // If the birthday has already passed this year, move to next year
    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    return birthday;
}

// Function to generate the list of upcoming birthdays
function generateBirthdayList() {
    const today = new Date();
    const birthdayListElement = document.getElementById('birthday-list');

    // Sort students by their next upcoming birthday date
    const upcomingBirthdays = students.map(student => {
        const nextBirthday = getNextBirthday(student.birthday);
        return {
            name: student.name,
            birthday: nextBirthday
        };
    }).sort((a, b) => a.birthday - b.birthday);

    // Filter out and show only the birthdays in the current month and beyond
    const currentMonth = today.getMonth(); // 0-indexed
    const filteredBirthdays = upcomingBirthdays.filter(bday => bday.birthday.getMonth() >= currentMonth);

    // Clear existing content
    birthdayListElement.innerHTML = '';

    // Create birthday elements and append to the list
    filteredBirthdays.forEach(student => {
        const birthdayItem = document.createElement('div');
        birthdayItem.classList.add('birthday-item');
        
        const birthdayDate = student.birthday.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long'
        });
        
        birthdayItem.innerHTML = `
            <h4>${student.name}</h4>
            <p>Birthday: ${birthdayDate}</p>
        `;
        
        birthdayListElement.appendChild(birthdayItem);
    });
}

// Call the function on page load to generate birthday list
generateBirthdayList();


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
