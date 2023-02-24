const Category = require('../models/categoryModel')
const Item = require('../models/itemModel')

const addCategory = async(req,res) => {
    const { name, description } = req.body;

    try {
        // Check if category already exists
        let category = await Category.findOne({ name });

        if (category) {
            return res.status(400).json({ msg: 'Category already exists' });
        }

        // Create new category
        category = new Category({
            name,
            description
        });

        // Save category to database
        await category.save();

        res.status(201).json(category);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const updateCategory = async(req,res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        if (req.body.name) {
            category.name = req.body.name;
        }
        if (req.body.description) {
            category.description = req.body.description;
        }
        const updatedCategory = await category.save();
        res.json(updatedCategory);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

const deleteCategory = async(req,res) => {
    try {
        // Find category by id
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Find and delete all items associated with category
        await Item.deleteMany({ category: category._id });

        // Delete category
        await category.delete();

        res.json({ message: 'Category and associated items deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    addCategory,
    updateCategory,
    deleteCategory
}
