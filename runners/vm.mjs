import vm from 'node:vm';
export const vmRunner = (code) => {
    try {    
        const context = {
            console
        };

        vm.createContext(context);
        return vm.runInContext(code, context);
    } catch (e) {
        return e.message;
    }
}

