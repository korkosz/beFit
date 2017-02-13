'use strict';

module.exports = {
    bindings: {
        modalStatus: '='
    },
    templateUrl: '/modules/products/modal new/modal_new.template.html',
    controller(metadataFactory, productsFactory, auth, $timeout, $scope) {
        const vm = this;

        vm.$onInit = function() {
            vm.activeTabIdx = 0;
            vm.newProduct = {};

            vm.productAttrs = metadataFactory.get('productAttrs');
            vm.productCategs = metadataFactory.get('productCategories');

            vm.modalStatus = 0;
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
                    vm.modalStatus = 201;
                    $timeout(()=> {
                        $('#newProductModal').modal('hide');
                    }, 0);
                })
                .catch(()=> {
                    vm.modalStatus = 400;
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

        $scope.$watch(function() {
            return vm.file;
        }, function() {
            vm.upload(vm.file);
        });

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
