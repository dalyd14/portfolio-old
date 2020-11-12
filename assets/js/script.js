var bcWorks = $(".bc-works-display")
var persWorks = $(".pers-works-display")

var createProjHtml = function(proj, bc) {
    var workDiv = $("<div>").addClass("all-work")
    workDiv.css( "background-image", "url(" + proj.image + ")")
    var aTag = $("<a>").attr("target", "_blank")
    aTag.attr("href", proj.link)
    var divName = $("<div>").addClass("project-name")
    var projTitle = $("<div>")
    var projDesc = $("<div>")

    if (proj.big){
        workDiv.addClass("primary-work")
        projTitle.addClass("big-title")
        projDesc.addClass("big-code")
    } else {
        workDiv.addClass("other-work")
        projTitle.addClass("small-title")
        projDesc.addClass("small-code")
    }

    projTitle.text(proj.title)
    projDesc.text(proj.description)

    divName.append(projTitle, projDesc)
    aTag.append(divName)
    workDiv.append(aTag)

    if (bc) {
        bcWorks.append(workDiv)
    } else {
        persWorks.append(workDiv)
    }
}

bootcamp.forEach( function(proj) {
    createProjHtml(proj, true)
})

personal.forEach( function(proj) {
    createProjHtml(proj, false)
})

