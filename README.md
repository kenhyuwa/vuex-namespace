# vuex-namespace

Simple packages for vuex management state with module

# Getting started

1. Install the plugin:

```
npm install --save vuex-namespace
```

2. Add the plugin into module vuex:

```javascript
import namespace from 'vuex-namespace'

//Templates Module example
export const chatting = namespace('chatting', {
    getters: [
        'messages'
    ],
    actions: [
        'putMessage',
        'fetchMessages',
        'oldMessages',
    ],
    mutations: [
        'PUT_MESSAGE',
        'FETCH_MESSAGES_SUCCESS',
        'FETCH_MESSAGES_FAILURE',
        'PUSH_OLD_MESSAGES'
    ]
});

export const receiver = namespace('receiver', {
    getters: [
        'user',
        'users'
    ],
    actions: [
        'setUser',
        'fetchUsers',
    ],
    mutations: [
        'SET_USER',
        'FETCH_USERS',
        'FETCH_USERS_SUCCESS',
        'FETCH_USERS_FAILURE',
    ]
});
```