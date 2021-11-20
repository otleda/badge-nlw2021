const networks =  {
    github : 'otleda',
    instagram : 'adtodev',
    discord : 'channels/adtodev',
    twitter : 'adeltodesigner'
}

function getNetworks() {
    for(let li of networksLinks.children ) {
        
        const socialName = (li.getAttribute('class'))

        li.children[0].href = `https://${socialName}.com/${networks[socialName]}`

    }

}
getNetworks()

function getGithubProfileInfos() {

    const url = `https://api.github.com/users/${networks.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data)

        myAvatar.src = data.avatar_url
        myName.textContent = data.name
        myLink.href = data.html_url
        mylogin.textContent = data.login
        myBio.textContent = data.bio
    })
}

getGithubProfileInfos()