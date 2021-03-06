window.URL = window.URL || window.webkitURL;

module.exports = function($http, metadataFactory, Upload) {

    const getProducts = function(params) {
        return $http.get('/api/products', {
            params
        }).then(({data})=> {
            return populatePriceTypes(formatImages(populateAttrs(data)));
        }).catch((err)=> {
            console.error(err)
        });
    };

    const saveNewProduct = function(newProduct) {
        return Upload.upload({
            url: '/api/products',
            data: removeNullPropierties(newProduct)
        });
    };

    return {
        getProducts,
        saveNewProduct
    };

    ///
    function removeNullPropierties(product) {
        for(let prop in product) {
            if(product[prop] === null) {
                delete product[prop];
            }
        }
        return product;
    }

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

    function populatePriceTypes(products) {
        const meta = metadataFactory.get('priceTypes');

        for(let product of products) {
            let priceType = meta.find((_priceType)=> {
                return _priceType._id === product.priceType;
            });
            product.priceType = priceType && priceType.label;
        }
        return products;
    }

    function formatImages(products) {
        return products.map((prod)=> {
            if(prod.image) {
                prod.image = URL.createObjectURL(b64toBlob(prod.image, 'image/png'));
            } else {
                prod.image = 'assets/images/noImage.png';
            }
            return prod;
        });
    }

    function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for(var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for(var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }
};
