const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://e2d09f80c0b2445d84ab1fdbb54d512a@sentry.io/1814488' });

Sentry.configureScope(function(scope) {
    scope.setTag("57355120093", "wittawatcheawphoo@gmail.com");
    scope.setUser({
      email: "wittawatcheawphoo@gmail.com",
      username: 'Wittawat Cheawphoo'
    });
   });

myUndefinedFunction();

//test 
