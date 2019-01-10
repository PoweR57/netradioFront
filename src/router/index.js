import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio('http://localhost:4113');

Vue.use(VueSocketIO, SocketInstance)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
