export const generatePikoHTML = (pikoArray) => {
    let pikoHTML = ''
    for (const pikomon of pikoArray) {
        pikoHTML += `
            <article class="piko-card">
                <img class="piko-img" src="${pikomon.imageUrl}">
                <div class="piko-info">
                    <h2 class="piko-name">${pikomon.name}</h2>
                    <p class="info-text">A ${pikomon.category} pikomon with ${pikomon.abilities} abilities, they are weak to ${pikomon.weakness}.</p>   
                </div>    
           </article>
        `
    }
    return pikoHTML
}