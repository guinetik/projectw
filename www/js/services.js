/**
 * Created by guinetik on 6/11/14.
 */
app.service('auth', ['$location', 'localStorageService', function ($location, localStorageService) {
    this.checkUserCredentials = function (redirectIfLogged) {
        var user_id = localStorageService.get('USER_PHONE_NUMBER');
        if (user_id == null) {
            console.log("user_id não existe");
            $location.path("app/login");
            return false;
        } else {
            console.log("user_id existe");
            if (redirectIfLogged) {
                $location.path("app/chats");
            }
            return true;
        }
    };
    this.login = function (user) {
        localStorageService.set('USER_NAME', user.name);
        localStorageService.set('USER_PHONE_NUMBER', user.phone);
        localStorageService.set('USER_EMAIL_NUMBER', user.email);
        this.checkUserCredentials(true);
    };
}]);

app.service('chats_service', ['$location', 'localStorageService', function ($location, localStorageService) {
    this.getLatestChats = function (callback) {
        var chats = [
            {
                user: {
                    name: "Vekman",
                    avatar: "venkman.jpg"
                },
                message: "Back off, man. I'm a scientist.",
                id: "6fdbd6ee-f1f4-11e3-a4bc-b2227cce2b54"
            },
            {
                user: {
                    name: "Egon",
                    avatar: "spengler.jpg"
                },
                message: "We're gonna go full stream.",
                id: "776ffee4-f1f4-11e3-a4bc-b2227cce2b54"
            },
            {
                user: {
                    name: "Ray",
                    avatar: "stantz.jpg"
                },
                message: "Ugly little spud, isn't he?",
                id: "7b42d168-f1f4-11e3-a4bc-b2227cce2b54"
            },
            {
                user: {
                    name: "Winston",
                    avatar: "winston.jpg"
                },
                message: "That's a big Twinkie.",
                id: "7b42d73a-f1f4-11e3-a4bc-b2227cce2b54"
            },
            {
                user: {
                    name: "Tully",
                    avatar: "tully.jpg"
                },
                message: "Okay, who brought the dog?",
                id: "7b42cd44-f1f4-11e3-a4bc-b2227cce2b54"
            },
            {
                user: {
                    name: "Dana",
                    avatar: "barrett.jpg"
                },
                message: "I am The Gatekeeper!",
                id: "87f09dd2-f1f4-11e3-a4bc-b2227cce2b54"
            },
            {
                user: {
                    name: "Slimer",
                    avatar: "slimer.jpg"
                },
                message: "Boo!",
                id: "8ec833fe-f1f4-11e3-a4bc-b2227cce2b54"
            }
        ];
        callback(chats);
    };

    var messageOptions = [
        { content: '<p>Wow, this is really something huh?</p>', sent: true },
        { content: '<p>Yea, it\'s pretty sweet</p>' },
        { content: '<p>I think I like Ionic more than I like ice cream!</p>' },
        { content: '<p>Gee wiz, this is something special.</p>', sent: true },
        { content: '<img src="https://scontent-a.xx.fbcdn.net/hphotos-xpf1/t1.0-9/10303786_641248799300032_8759105671475852791_n.jpg" alt=""/>', sent: true },
        { content: '<p>Is this magic?</p>' },
        { content: '<p>Am I dreaming?</p>', sent: true},
        { content: '<img src="data:image/jpeg;base64,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" alt=""/>'},
        { content: '<p>Am I dreaming?</p>', sent: true },
        { content: '<p>Yea, it\'s pretty sweet</p>' },
        { content: '<p>I think I like Ionic more than I like ice cream!</p>' }
    ];

    this.getChatMessages = function (id_chat, callback) {
        callback(messageOptions.slice(0, messageOptions.length));
    };

    this.sendMessage = function (id_chat, message, callback) {
        var msg = { content: '<p>' + message + '</p>', sent: true };
        callback(msg);
    }
}]);