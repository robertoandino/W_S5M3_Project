function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here

    let nav = document.createElement('nav');
    links.forEach((link) => {
      let a = document.createElement('a');
      a.textContent = link.textContent;
      a.href = link.href;
      a.title = link.title;

      nav.appendChild(a);
    })

    return nav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    

    let div = document.createElement('div');
    div.classList = "learner-card"

    let fullName = document.createElement('p');
    fullName.textContent = learner.fullName;
    div.appendChild(fullName)

    let id = document.createElement('p');
    id.textContent = "Learner ID: " + learner.id;
    div.appendChild(id)

    let dob = document.createElement('p');
    dob.textContent = "Date of Birth: " + learner.dateOfBirth;
    div.appendChild(dob)

    languages.forEach((language) => {
      let favLanguage = document.createElement('p');
      if(learner.favLanguage === language.id){
        favLanguage.textContent = "Favorite Language: " + language.name
        div.appendChild(favLanguage);
      } 
    })
   

    div.addEventListener('click', () => {
      div.classList.toggle('active');
    })

    return div;
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    let section = document.createElement('section')

    learners.forEach((learner) => {
      section.appendChild(buildLearnerCard(learner, languages))
    })

    document.body.appendChild(section);

  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    let footer = document.createElement('footer');
    
    let div1 = document.createElement('div')
    div1.classList = "company-info"

    let p1 = document.createElement('p');
    p1.classList = "company-name"
    p1.textContent = footerData.companyName;
    div1.appendChild(p1)

    let p2 = document.createElement('p');
    p2.classList = "address"
    p2.textContent = footerData.address;
    div1.appendChild(p2)

    let a = document.createElement('a')
    a.href = footerData.contactEmail;
    a.textContent = footerData.contactEmail

    let p3 = document.createElement('p');
    p3.classList = "contact-email"
    p3.textContent = "email: ";
    p3.appendChild(a);
    div1.appendChild(p3)

    footer.appendChild(div1);
    


    return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
