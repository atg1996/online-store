const Item = require('../models/itemModel')

const addItem = async(req,res) => {
    try {
        const { name, images, description, category, tags, price, availableCount } = req.body;

        const item = new Item({
            name,
            images,
            description,
            category,
            tags,
            price,
            availableCount,
            seller: req.userId
        });

        const savedItem = await item.save();

        res.status(201).json({ item: savedItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

const updateItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);

        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        if (item.seller.toString() !== req.userId) {
            return res
                .status(403)
                .json({ message: "You are not authorized to update this item" });
        }

        if (req.body.name) {
            item.name = req.body.name;
        }
        if (req.body.images) {
            item.images = req.body.images;
        }
        if (req.body.description) {
            item.description = req.body.description;
        }
        if (req.body.category) {
            item.category = req.body.category;
        }
        if (req.body.tags) {
            item.tags = req.body.tags;
        }
        if (req.body.price) {
            item.price = req.body.price;
        }
        if (req.body.availableCount) {
            item.availableCount = req.body.availableCount;
        }

        const updatedItem = await item.save();
        res.json(updatedItem);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
};

const deleteItem = async(req,res) => {
    try {
        const item = await Item.findById(req.params.id);

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        // Only allow sellers who created the item to delete it
        if (item.seller.toString() !== req.userId) {
            return res.status(403).json({ message: 'You are not authorized to delete this item' });
        }

        await item.remove();

        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

const getItemsByCategory = async(req,res) => {
    try {
        const items = await Item.find({ category: req.params.category });
        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const searchItems = async (req,res) => {
    try {
        const { name, tags, description } = req.query;
        const query = {};

        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }

        if (tags) {
            query.tags = { $in: tags.split(',') };
        }

        if (description) {
            query.description = { $regex: description, $options: 'i' };
        }

        const items = await Item.find(query);

        res.json(items);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    addItem,
    updateItem,
    deleteItem,
    getItemsByCategory,
    searchItems
}
