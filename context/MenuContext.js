import React, {createContext, useState} from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({children}) => {
    const [menuItems, setMenuItems] = useState([
        {id: 1, name: 'Lobster Bisque', course: 'Starters', price: $12},
        {id: 2, name: 'Soup', course: 'Starters', price: $7},
        {id: 3, name: 'Salad', course: 'Starters', price: $8},
        {id: 4, name: 'Appetizers', course: 'Starters', price: $10},

        {id: 1, name: 'Grilled Meat', course: 'Main', price: $25},
        {id: 2, name: 'Pasta', course: 'Main', price: $20},
        {id: 3, name: 'Vegeterian', course: 'Main', price: $16},
        {id: 4, name: 'Seafood', course: 'Main', price: $27},

        {id: 1, name: 'Cake', course: 'Dessert', price: $9 },
        {id: 2, name: 'Pudding', course: 'Dessert', price: $8 },
        {id: 3, name: 'Affogato', course: 'Dessert', price: $9},
    ]);

    return (
        <MenuContext.Provider value={{ menuItems, setMenuItems }}>
          {children}
        </MenuContext.Provider>
      );
    };