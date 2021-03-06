angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("login route");
            
            var url = '/login';
            
            $urlRouterProvider.when(url, function($state) {
                // If the user is authenticated, redirect to home
                if (authProvider.isAuthenticated()) {
                    $state.transitionTo('root.userHome');
                    return true;
                }
                return false;
            });

            $stateProvider
                .state('root.login', {
                    url: url,
                    views: {
                        '@': {
                            templateUrl: './app/components/login/views/login.html'
                        },
                        'footer@': {
                            template: ''
                        }
                    }
                })
        });
