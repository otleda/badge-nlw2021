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