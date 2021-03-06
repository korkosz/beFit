'use strict';

module.exports = {
    bindings: {
        done: '&'
    },
    templateUrl: '/modules/products/modal new/modal_new.template.html',
    controller(metadataFactory, productsFactory, auth, $timeout, $scope) {
        const vm = this;

        vm.$onInit = function() {
            vm.newProduct = {};
            vm.activeTabIdx = 0;

            vm.done = vm.done || angular.noop;

            vm.productAttrs = metadataFactory.get('productAttrs');
            vm.productCategs = metadataFactory.get('productCategories');
            vm.priceTypes = metadataFactory.get('priceTypes');

            //set default price type
            vm.newProduct.priceType = vm.priceTypes.find((_priceType)=> {
                return _priceType.label === 'szt';
            });
        };

        vm.selectPriceType = function(priceType) {
            vm.newProduct.priceType = priceType;
            vm.newProduct.netWeight = null;
        };

        vm.categoryChanged = function() {
            vm.newProduct.subcategory = null;
        };

        vm.attrToggled = function(val, label) {
            vm.newProduct.attributes = vm.newProduct.attributes || [];

            const attr = vm.productAttrs.find((_attr)=> {
                return _attr.label === label;
            });

            if(val) {
                vm.newProduct.attributes.push(attr._id);
            } else {
                vm.newProduct.attributes.splice(
                    vm.newProduct.attributes.indexOf(attr._id), 1);
            }
        };

        vm.save = function(isPrivate) {
            //set current user as the owner
            vm.newProduct.owner = auth.getUser()._id;

            if(isPrivate) {
                vm.newProduct.private = true;
            }

            productsFactory.saveNewProduct(vm.newProduct)
                .then(()=> {
                    vm.done({result: 'created'});
                })
                .catch(()=> {
                    vm.done({result: 'error'});
                });
        };

        vm.nextTab = function() {
            if(vm.activeTabIdx < 5) {
                vm.activeTabIdx++;
            }
        };

        vm.prevTab = function() {
            if(vm.activeTabIdx > 0) {
                vm.activeTabIdx--;
            }
        };

        vm.upload = function(file) {
            if(file && !file.$error) {
                vm.newProduct.image = file;
            }
        };

        vm.clearImageSelection = function() {
            vm.newProduct.image = null;
            vm.file = null;
        };
    }
};
