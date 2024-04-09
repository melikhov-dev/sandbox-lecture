import ivm from 'isolated-vm';

export const isolatedVmRunner = (code) => {
    try {
        const isolate = new ivm.Isolate({ memoryLimit: 128 });
        const context = isolate.createContextSync();
        const jail = context.global;
        jail.setSync('global', jail.derefInto());

        jail.setSync('log', function(...args) {
            console.log(...args);
        });

        return context.evalSync('const console = { log }; ' + code);
    } catch(e) {
        return console.log(e.message);
    }
}

