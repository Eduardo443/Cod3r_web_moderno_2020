import $ from "jquery"
import {onLoadHtmlSuccess} from '../core/includes.js'

const duration = 30

function filterByCity(city){
    $('[wm-city]').each((i,e) => {
        const isTarger = $(this).attr('wm-city') === city || city === null

        if(isTarger){
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        }else{
            $(this).parent().addClass('d-none')
            $(this).fadeOut(duration)
        }
    })
}

$.fn.cityButtons = function() {
    
    const cities = new Set 
    $('[wm-city]').each((i,e) =>{
        cities.add($(e).attr('[wm-city]'))
    })
    
    const buttons = Array.from(cities). map(city =>{
        const button = $('<button>').addClass(['button', 'btn-info']).html(city)
        
        button.click(e => filterByCity(city))
        return button
    })
    
    const buttonAll = $('<button>').addClass(['button', 'btn-info']).html('all')
    buttonAll.click(e => filterByCity(null))
    buttons.push(buttonAll)
    
    const buttonGroup = $('<div>').addClass(['button-group'])
    buttonGroup.append(buttons)
    
    $(this).html(buttonGroup)
    return this
}
onLoadHtmlSuccess(() => {
    $('[wm-city-buttons]').cityButtons()
})

