module.exports = function($http) {

    const getProducts = function(params) {
        return $http.get('/api/products', {
            params
        }).then(({data})=> {
            return data;
        }).catch((err)=> {
            console.error(err)
        });
    };

    return {
        getProducts
    };
};