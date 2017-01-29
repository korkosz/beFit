'use strict';

module.exports = function($http) {
    let apiVersion = Number(localStorage.getItem('apiVersion'));
    let metadata = null;

    const initMetadata = function() {
        $http.get('/api/metadata/apiversion')
            .then(({data: dbApiVersion})=> {
                if(apiVersion !== dbApiVersion) {
                    return setMetadataFromDb(dbApiVersion);
                } else {
                    setMetadataFromCache();
                }
            })
            .catch(logError);
    };

    const get = function(name) {
        return metadata.find((meta)=> {
            return meta.name === name;
        }).values;
    };

    return {
        initMetadata,
        get
    };

    ///
    function logError(err) {
        console.error(err);
    }

    function setMetadataFromCache() {
        metadata = JSON.parse(localStorage.getItem('metadata'));
    }

    function setMetadataFromDb(dbApiVersion) {
        return $http.get('/api/metadata/picklist')
            .then(({data: dbMetadata})=> {
                localStorage.setItem('apiVersion', dbApiVersion);
                localStorage.setItem('metadata', JSON.stringify(dbMetadata));

                metadata = JSON.parse(dbMetadata);
            })
            .catch(logError);
    }
};