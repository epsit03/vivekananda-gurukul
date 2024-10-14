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

// Sample student data with names and birthdays
const students = [
    { name: "Rajesh Kumar", birthday: "1990-10-15" },
    { name: "Sita Verma", birthday: "1995-10-25" },
    { name: "Mahendra Singh", birthday: "1998-11-02" },
    { name: "Praveen Singh", birthday: "2000-12-05" },
    { name: "Alok Sharma", birthday: "2001-01-17" },
    { name: "Meena Devi", birthday: "2002-11-30" },
    { name: "Rohit Yadav", birthday: "1997-12-22" }
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
