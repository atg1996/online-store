const dummyFunction = async (req,res) => {
    res.json ({
        "msg": "this is itemsController"
    })
}

const addItem = async(req,res) => {
    res.json ({
        "msg": "this is itemsController addItem Function Test"
    })
}

const updateItem = async(req,res) => {
    res.json ({
        "msg": "this is itemsController updateItem Function Test",
        "param":req.params
    })
}

const deleteItem = async(req,res) => {
    res.json ({
        "msg": "this is itemsController deleteItem Function Test",
        "param":req.params
    })
}

const getItemsByCategory = async(req,res) => {
    res.json ({
        "msg": "this is itemsController getItemsByCategory Function Test",
        "param":req.params
    })
}

const searchItems = async (req,res) => {
    res.json ({
        "msg": "this is itemsController getItemsByCategory Function Test",
        "query":req.query
    })
}

module.exports = {
    dummyFunction,
    addItem,
    updateItem,
    deleteItem,
    getItemsByCategory,
    searchItems
}
