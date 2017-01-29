module.exports = function($http) {
    const getMeals = function() {
        return $http.get('/api/meals')
            .then(({data})=> {
                return data;
            })
            .catch((err)=> {
                console.error((err));
            });
    };

    return {
        getMeals
    };
};