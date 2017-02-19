module.exports = {
    templateUrl: '/modules/meals/list/list item/list_item.template.html',
    bindings: {
        item: '<',
        refreshList: '&'
    },
    controller() {
        var vm = this;

        vm.showDeleteModal = function() {
            $('#deleteMealModal').modal('show');
        };

        vm.showIngredients = function() {
            vm.ingredientsVisible = !vm.ingredientsVisible
        };

        vm.done = function(result) {
            if(result === 'deleted') {
                $('#deleteMealModal')
                    .modal('hide')
                    .on('hidden.bs.modal', function(e) {
                        vm.refreshList();
                    });
            } else if(result === 'cancelled') {
                $('#deleteMealModal').modal('hide');
            }
        }
    }
};