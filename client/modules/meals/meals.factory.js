module.exports = function($http, metadataFactory) {
    const getMeals = function() {
        return $http.get('/api/meals')
            .then(({data})=> {
                return populateType(populateAttrs(data));
            })
            .catch((err)=> {
                console.error((err));
            });
    };

    return {
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
};