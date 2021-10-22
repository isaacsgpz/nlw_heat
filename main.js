const LinksSocialMedia = {
  github: 'eoisaac',
  linkedin: 'eoisaac',
  portfolio: 'eoisaac',
  instagram: '_eoisaac',
  twitter: '_eoisaac',
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    if(social === 'linkedin') {
      li.children[0].href = `https://${social}.com/in/${LinksSocialMedia[social]}`;

    }else if(social === 'portfolio') {
      li.children[0].href = `https://${LinksSocialMedia[social]}.github.io`;

    }else {
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
    }

  }
}

changeSocialMediaLinks();

const favIcon = document.querySelector('#favIcon');

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      UserImage.src = data.avatar_url;
      userLogin.textContent = data.login;
      
      // favIcon.setAttribute('href', `${data.avater_url}`) ;
      document.title = `${data.name} | NLW Heat 2021`;
    })
}

getGitHubProfileInfos();
