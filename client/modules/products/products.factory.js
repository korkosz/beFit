module.exports = function($http, metadataFactory) {

    const getProducts = function(params) {
        return $http.get('/api/products', {
            params
        }).then(({data})=> {
            return populateAttrs(data);
        }).catch((err)=> {
            console.error(err)
        });
    };
    
    const saveNewProduct = function(newProduct) {
        return $http.post('/api/products', newProduct);
    };

    return {
        getProducts,
        saveNewProduct
    };

    ///
    function populateAttrs(products) {
        const meta = metadataFactory.get('productAttrs');

        for(let prod of products) {
            if(Array.isArray(prod.attributes)) {
                prod.attributes = prod.attributes.map((attrId)=> {
                    var attribute = meta.find((attr)=> {
                        return attr._id === attrId;
                    });

                    return attribute && attribute.label;
                });
            }
        }
        return products;
    }
};
