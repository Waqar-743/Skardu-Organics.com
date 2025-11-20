import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';

/**
 * @desc    Create new order
 * @route   POST /api/orders
 * @access  Private
 */
const addOrderItems = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    // --- Automatic Stock Management ---
    for (const item of orderItems) {
      const product = await Product.findById(item.product);
      if (product) {
        if (product.countInStock >= item.qty) {
          product.countInStock -= item.qty;
          await product.save();
        } else {
          res.status(400);
          throw new Error(`Not enough stock for ${product.name}`);
        }
      } else {
        res.status(404);
        throw new Error(`Product with id ${item.product} not found`);
      }
    }

    const order = new Order({
      orderItems: orderItems.map(item => ({...item, product: item.product })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
    });

    // Handle payment status based on payment method
    if (paymentMethod === 'COD') {
        order.isPaid = false; 
    } else {
        // Placeholder for online payment logic.
        // In a real scenario, you'd get a payment confirmation from a gateway webhook.
        // For now, we assume if it's not COD, it's paid.
        order.isPaid = true;
        order.paidAt = Date.now();
    }

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
};

/**
 * @desc    Get order by ID
 * @route   GET /api/orders/:id
 * @access  Private
 */
const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    // Ensure only the user who placed the order or an admin can view it
    if(order.user._id.toString() !== req.user._id.toString() && !req.user.isAdmin) {
        res.status(403);
        throw new Error('Not authorized to view this order');
    }
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
};


/**
 * @desc    Get logged in user orders
 * @route   GET /api/orders/myorders
 * @access  Private
 */
const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

/**
 * @desc    Get all orders
 * @route   GET /api/orders
 * @access  Private/Admin
 */
const getOrders = async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.json(orders);
};

/**
 * @desc    Update order status (e.g., to Shipped, Delivered)
 * @route   PUT /api/orders/:id/status
 * @access  Private/Admin
 */
const updateOrderStatus = async (req, res) => {
    const { orderStatus } = req.body;
    const order = await Order.findById(req.params.id);

    if (order) {
        order.orderStatus = orderStatus;

        if (orderStatus === 'Delivered') {
            order.isDelivered = true;
            order.deliveredAt = Date.now();
            // If payment method is COD, mark as paid upon delivery
            if(order.paymentMethod === 'COD') {
                order.isPaid = true;
                order.paidAt = Date.now();
            }
        }
        
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
};


export { addOrderItems, getOrderById, getMyOrders, getOrders, updateOrderStatus };
