module.exports = {

    routes: {
        /*
            Route example

            name_of_route: {
                path: '/path_to_hbs_view',
                title: 'Route Title',
                scripts: [
                    '/route_controller.js',
                    '/another_route_controller.js'
                ]
            },
        */

        index: {
            path: '/',
            title: 'Index',
            scripts: [
                '/index.js'
            ],
        },

        dashboard: {
            path: '/dashboard',
            title: 'Dashboard',
            scripts: [
                '/dashboard.js'
            ],
        },

        /* 
            Nested routes example
                "/parent/child_1"
                "/parent/child_2"

            parent: {
                path: '/parent',
                title: 'Parent',
                scripts: [
                    '/parent.js'
                ],
                children: {
                    child_1: {
                        path: /parent/child_1,
                        title: 'Child 1',
                        scripts: [
                            '/parent/child_1.js'
                        ]
                    },

                    child_2: {
                        path: /parent/child_2,
                        title: 'Child 2',
                        scripts: [
                            '/parent/child_2.js'
                        ]
                    }
                }
            }
        */

        error: {
            path: '/error',
            title: 'Uh Oh!',
            scripts: [ ],
        },
    }
}