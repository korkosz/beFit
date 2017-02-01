module.exports = function($http) {

    const getProducts = function() {
        return $http.get('/api/products')
            .then(({data})=> {
                return data;
            })
            .catch((err)=> {
                console.error(err)
            });
    };

    return {
        getProducts
    };
};