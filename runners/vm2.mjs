import {VM} from 'vm2';
export const vm2Runner = (code) => {
    try {    
        const context = {
            console
        };

        const vm = new VM({
            sandbox: context,
        });

        return vm.run(code);
        
    } catch (e) {
        return e.message;
    }
}

