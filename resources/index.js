let aboutTarget = document.getElementById('about');

let projectTarget = document.getElementById('project');

let contactTarget = document.getElementById('contact');

resetAbout = () => {
    aboutTarget.innerHTML = 'Hello,';
}

resetProject = () => {
    projectTarget.innerHTML = "I'm";
}

resetContact = () => {
    contactTarget.innerHTML = "Xavier";
}

let changeAboutText = () => {
    aboutTarget.innerHTML = 'About Me';
    projectTarget.addEventListener('mouseover', resetAbout);
   
}

let changeProjectText = () => {
    projectTarget.innerHTML = 'Projects';
    aboutTarget.addEventListener('mouseover', resetProject);
    contactTarget.addEventListener('mouseover', resetProject);
}

let changeContactText = () => {
    contactTarget.innerHTML = 'Contact';
    aboutTarget.addEventListener('mouseover', resetContact);
    projectTarget.addEventListener('mouseover', resetContact);
}

aboutTarget.addEventListener('mousemove', changeAboutText);
projectTarget.addEventListener('mouseover', changeProjectText);
contactTarget.addEventListener('mouseover', changeContactText);

