console.log('1');
setTimeout(() => {console.log('2'), 0});
console.log(global.DTRACE_NET_SERVER_CONNECTION);