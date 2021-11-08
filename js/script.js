const networks =  {
    github : 'otleda',
    instagram : 'adtdev',
    discord : 'adtodev',
    twitter : 'adeltooliveira'
}

function getNetworks() {
    for(let a of networksLinks.children ) {
        
        const social = (a.getAttribute('class'))

        a.children[0].href = `https://${social}.com/${networks[social]}`

        alert( a.children[0].href )
    }

}

getNetworks()