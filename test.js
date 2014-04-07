{
    "name": "project1",
    "type": "proj",
    "match": "/Users/rehorn/Documents/Code/node/livepool/test/examples/",
    "id": 1,
    "checked": true,
    "handler": [{
        "match": "find.qq.com/index.html",
        "action": "./__index.html",
        "leaf": true,
        "id": 3,
        "checked": true
    }, {
        "match": "find.qq.com/js/find.all.js",
        "action": "./tools/find.all.qzmin",
        "leaf": true,
        "id": 4,
        "checked": true
    }, {
        "match": "find.qq.com/js/find.combo.js",
        "action": "./js/jquery.js|./js/main.js",
        "leaf": true,
        "id": 5,
        "checked": true
    }, {
        "match": "find.qq.com/css/comp.css",
        "action": "./css/main.css|./css/sub1.css",
        "leaf": true,
        "id": 6,
        "checked": true
    }, {
        "match": "find.qq.com/js/catalog.js",
        "action": "http://pub.idqqimg.com/qqfind/js/groupcatalog.js",
        "leaf": true,
        "id": 7,
        "checked": true
    }, {
        "match": "find.qq.com/|*.idqqimg.com/qqfind/",
        "action": "./",
        "leaf": true,
        "id": 8,
        "checked": true
    }],
    "router": [{
        "match": "find.qq.com/cgi-bin/|cgi.find.qq.com",
        "action": "-",
        "leaf": true,
        "id": 13,
        "checked": true
    }, {
        "match": "find.qq.com|idqqimg.com/qqfind/",
        "action": "172.23.136.84",
        "leaf": true,
        "id": 14,
        "checked": true
    }]
}
