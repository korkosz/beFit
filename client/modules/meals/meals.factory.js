module.exports = function($http, metadataFactory) {
    const getMeals = function(params) {
        return $http.get('/api/meals', {
            params
        }).then(({data})=> {
            return populateTime(formatImages(populateAttrs(populateType(data))));
        }).catch((err)=> {
            console.error(err);
        });
    };

    const deleteMeal = function(id) {
        return $http.delete(`/api/meals/${id}`)
            .catch((err)=> {
                console.error(err);
            });
    };

    return {
        deleteMeal,
        getMeals
    };

    ///
    function populateAttrs(meals) {
        const meta = metadataFactory.get('mealAttrs');

        for(let meal of meals) {
            if(Array.isArray(meal.attributes)) {
                meal.attributes = meal.attributes.map((attrId)=> {
                    var attribute = meta.find((attr)=> {
                        return attr._id === attrId;
                    });

                    return attribute && attribute.label;
                });
            }
        }
        return meals;
    }

    function populateType(meals) {
        const meta = metadataFactory.get('mealTypes');

        for(let meal of meals) {
            let type = meta.find((attr)=> {
                return attr._id === meal.type;
            });
            meal.type = type && type.label;
        }
        return meals;
    }

    function populateTime(meals) {
        const meta = metadataFactory.get('cookingTimes');

        for(let meal of meals) {
            let time = meta.find((_time)=> {
                return _time._id === meal.time;
            });
            meal.time = time && time.label;
        }
        return meals;
    }

    function formatImages(products) {
        return products.map((prod)=> {
            if(prod.image) {
                prod.image = URL.createObjectURL(b64toBlob(prod.image, 'image/jpeg'));
            } else {
                prod.image = 'assets/images/noImage.jpg';
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