import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    parts: [
      {
        id: 1,
        partable_part_number: 413144,
        global_part_number: 175472645,
        part_name: "Chisels / Punches",
        image_url: "https://cdn.mscdirect.com/global/images/ProductImages/5242615-24.jpg",
        in_stock: true,
        description:
          "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
      },
      {
        id: 2,
        partable_part_number: 578964,
        global_part_number: 254245124,
        part_name: "Floor Jack",
        image_url: "https://m.media-amazon.com/images/I/71oEH8IPyiL._AC_SL1494_.jpg",
        in_stock: true,
        description:
          "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
      },
      {
        id: 3,
        partable_part_number: 9687458,
        global_part_number: 9686479545,
        part_name: "Vice Grips",
        image_url: "https://hw.menardc.com/main/items/media/IRWIN001/ProductLarge/LT_1402L3_VG6LN.jpg",
        in_stock: true,
        description:
          "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
      },
      {
        id: 4,
        partable_part_number: 254185,
        global_part_number: 96587487,
        part_name: "Volt Meter",
        image_url: "https://m.media-amazon.com/images/I/71XoeLBrd-L._SX342_.jpg",
        in_stock: true,
        description:
          "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
      },
      {
        id: 5,
        partable_part_number: 365847,
        global_part_number: 58718333,
        part_name: "Torx Set",
        image_url: "https://images.thdstatic.com/productImages/49bb298b-6101-4a47-ba05-8783b386f10a/svn/husky-socket-sets-hetx13pc-64_1000.jpg",
        in_stock: false,
        description:
          "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
      },
      {
        id: 6,
        partable_part_number: 858598,
        global_part_number: 22554477,
        part_name: "G-Wiring Kit",
        image_url: "https://www.ss396.com/mm5/graphics/00000001/TSP-HC7108a.jpg",
        in_stock: true,
        description:
          "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
      },
      {
        id: 7,
        partable_part_number: 474944,
        global_part_number: 55447788,
        part_name: "Air Ratchet",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yyQqL93wC15_jlKW1yxbn6RN4KP_fTjD1lBGVGFxnV3s_9Goa_T6O_64UlheNuoL36c&usqp=CAU",
        in_stock: false,
        description:
          "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
      },
      {
        id: 8,
        partable_part_number: 9857474,
        global_part_number: 99668874,
        part_name: "Fuller Screws",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxyGXAn-mir03Rwli6BQ_a7s9YZKtChEGKA&usqp=CAU",
        in_stock: true,
        description:
          "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
      },
    ],
    quote: [],
  },
  reducers: {
    addItemToQuote: (state, action) => {
      if (state.quote.length > 0) {
        state.quote.forEach((part, index) => {
          part.part_name === action.payload.part_name ? state.quote[index].quantity++ : state.quote.push(action.payload);
        });
      } else {
        state.quote.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToQuote } = appSlice.actions;

export default appSlice.reducer;
