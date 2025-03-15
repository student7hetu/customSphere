// import userModel from "../models/userModel.js";

// const addTocart = async (req, res) => {
//   try {
//     const { userId, itemId, size } = req.body;

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {}; // Ensure cartData exists

//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }

//     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1; // Increment quantity

//     // Update user document
//     await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

//     res.json({ success: true, message: "Added to Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// const updateCart = async (req, res) => {
//   try {
//     const { userId, itemId, size, quantity } = req.body;

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {}; // Ensure cartData exists
//     if (!cartData[itemId]) {
//       return res.json({ success: false, message: "Item not in cart" });
//     }

//     cartData[itemId][size] = quantity;

//     // Update user document
//     await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

//     res.json({ success: true, message: "Cart Updated" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// const getUserCart = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {}; // Ensure cartData exists

//     res.json({ success: true, cartData });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };


// export { addTocart, updateCart, getUserCart };


import userModel from "../models/userModel.js";

//add products to user cart
const addTocart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } 
     else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to Cart" });
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//update cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addTocart, updateCart, getUserCart };