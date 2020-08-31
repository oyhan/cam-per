module.exports = [
    'configuration',
    '$scope',
    function (configuration, $scope) {
        // create a new tasklistApp
        $scope.appVendor = configuration.getAppVendor();
        $scope.appName = configuration.getAppName();
    }
]  