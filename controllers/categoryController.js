const dummyFunction = async (req,res) => {
    res.json ({
        "msg": "this is categoryController"
    })
}

const addCategory = async(req,res) => {
    res.json ({
        "msg": "this is categoryController addCategory Function Test"
    })
}

const updateCategory = async(req,res) => {
    res.json ({
        "msg": "this is categoryController updateCategory Function Test",
        "param":req.params
    })
}

const deleteCategory = async(req,res) => {
    res.json ({
        "msg": "this is categoryController deleteCategory Function Test",
        "param":req.params
    })
}

module.exports = {
    dummyFunction,
    addCategory,
    updateCategory,
    deleteCategory
}
