$("menuHome").show()
$("#portoGo").hide()
$("#mPorto").hide()
$("#bloGo").hide()
$("#ext").hide()
$("#mHome").show()
$("#mVisit").hide()
$("#mPart").hide()
$("#mSocmed").hide()
$("#partGo").hide()


$(document).ready(function(){

    $('#titleHome').click(function(){
        event.preventDefault()
        $("#menuHome").show()
        $("#portoGo").hide()
        $("#mPorto").hide()
        $("#bloGo").hide()
        $("#ext").hide()
        $("#mHome").show()
        $("#mVisit").hide()
        $("#mPart").hide()
        $("#mSocmed").hide()
        $("#partGo").hide()
    })

    $('#titlePorto, #menuPorto').click(function(){
        event.preventDefault()
        $("#menuHome").hide()
        $("#portoGo").show()
        $("#mPorto").show()
        $("#bloGo").hide()
        $("#ext").hide()
        $("#mHome").hide()
        $("#mVisit").hide()
        $("#mPart").hide()
        $("#mSocmed").hide()
        $("#partGo").hide()
    })

    $('#titleBlog, #menuBlog').click(function(){
        event.preventDefault()
        $("#menuHome").hide()
        $("#mPorto").hide()
        $("#portoGo").hide()
        $("#bloGo").show()
        $("#ext").hide()
        $("#mHome").hide()
        $("#mVisit").show()
        $("#mPart").hide()
        $("#mSocmed").hide()
        $("#partGo").hide()
    })

    $('#titleExt, #menuExt, #contaxt').click(function(){
        event.preventDefault()
        $("#menuHome").hide()
        $("#portoGo").hide()
        $("#bloGo").hide()
        $("#ext").show()
        $("#mHome").hide()
        $("#mVisit").hide()
        $("#mPart").hide()
        $("#mSocmed").show()
        $("#partGo").hide()
    })

    $('#titlePart, #menuPart').click(function(){
        event.preventDefault()
        $("#menuHome").hide()
        $("#portoGo").hide()
        $("#bloGo").hide()
        $("#ext").hide()
        $("#mHome").hide()
        $("#mVisit").hide()
        $("#mPart").show()
        $("#mSocmed").hide()
        $("#partGo").show()
    })
})