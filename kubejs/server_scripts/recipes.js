ServerEvents.recipes(event => { //listen for the "recipes" server event.
    // You can replace `event` with any name you like, as 
    // long as you change it inside the callback too!
    
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
    event.remove({ id: 'energizedpower:crafting/wooden_hammer' })
    event.remove({ id: 'energizedpower:crafting/stone_hammer' })
    event.remove({ id: 'energizedpower:crafting/iron_hammer' })
    event.remove({ id: 'energizedpower:crafting/golden_hammer' })
    event.remove({ id: 'energizedpower:crafting/diamond_hammer' })
  })