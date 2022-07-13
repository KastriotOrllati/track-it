const Models = require("../models");
const Order = Models.order;

const registerOrder = async (req, res) => {
  const userId = req.userId;

  const {
    track_id,
    name,
    description,
    size,
    weight,
    pick_up,
    drop_off,

    // special_treatment,
    // status,
  } = req.body;
  if (
    !name ||
    !description ||
    !size ||
    !weight ||
    !pick_up ||
    !drop_off
    // !special_treatment
  ) {
    return res
      .status(400)
      .json({ message: "Please check your field something is missing" });
  }

  // const orderExists = await Order.findOne({where: {}})
  const order = {
    track_id: track_id,
    name: name,
    description: description,
    size: size,
    weight: weight,
    pick_up: pick_up,
    drop_off: drop_off,
    special_treatment: "false",
    status: "Created",
    user_id: userId,
  };
  console.log(order);
  try {
    await Order.create(order);
    res.status(201).json({
      message: "Order Created!",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
  }
};

const editOrderStatus = async (req, res) => {
  const postman_id = req.body.postman_id;
  const status = "Active";
  const { id } = req.params;
  
  

  try {
    const order = await Order.findOne({ where: { id: id } });
    let selectedOrder = {
      status: status || order.status,
      postman_id: postman_id || order.postman_id
    }
    if (!order) {
      res.status(400).json({ message: "Couldn't find the order!" });
    }     
    
    await Order.update(selectedOrder, { where: { id: id } });

    res.status(200).json({ message: "Order is active "});

  } catch (err) {
    console.log(err);
  }
};

const getOrderByPostman = async (req, res) => {
  const {id} = req.params;
  try {
    const order = await Order.findAll({ where: { postman_id: id,status: 'Active' } });
    console.log(order);
    if (order) {
      res.status(200).json({ order });
    } else {
      res.status(404).json({ message: "No active orders!" });
    }
  } catch (err) {
    console.log(err);
  }
};

const getOrderByStatus = async (req, res) => {
  const { id, statusi } = req.params;

  try {
    const orderCount= await Order.count({
      where: { user_id: id, status: statusi } 
    });

    if (orderCount) 
      res.status(200).json({ orderCount });
    else 
      res.status(404).json({ message: "Order status count failed!" });

  } catch (err) {
    res.status(500).json({ message: "Internal server error! Please contact support!" });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findOne({ where: { id: id } });
    if (order) {
      res.status(200).json({ order });
    } else {
      res.status(404).json({ message: "Order not found!" });
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteOrder = async (req, res) => {
  //delete foreign key aswell
  try {
    const { id } = req.params;
    await Order.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Order Deleted." });
  } catch (error) {
    console.log(error);
  }
};

const getOrdersByUser = async (req, res) => {
  const id = req.userId;
  try {
    const orders = await Order.findAll({ where: { user_id: id } });
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404).json({ message: "Order not found!" });
    }
  } catch (error) {}
};

module.exports = {
  registerOrder,
  getAllOrders,
  getOrderById,
  deleteOrder,
  getOrdersByUser,
  editOrderStatus,
  getOrderByPostman,
  getOrderByStatus
};
