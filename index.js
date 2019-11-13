const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://3c48a5dd148044be9d0753fecd6ce174@sentry.io/1818945' });

Sentry.configureScope(function(scope) {
    scope.setTag("57355120093", "Wittawat Cheawphoo");
    scope.setUser({
      email: "wittawatcheawphoo@gmail.com",
      username: 'Wittawat Cheawphoo'
    });
   });

myUndefinedFunction();

//test 
