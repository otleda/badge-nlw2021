const networks =  {
    github : 'otleda',
    instagram : 'adtodev',
    discord : 'channels/adtodev',
    twitter : 'adeltodesigner'
}

function getNetworks() {
    for(let li of networksLinks.children ) {
        
        const social = (li.getAttribute('class'))

     li.children[0].href = `https://${social}.com/${networks[social]}`

    }

}
getNetworks()