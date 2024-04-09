
import { getQuickJS } from "quickjs-emscripten"
export const quickjsRunner = async (code) => {
    try {
        const QuickJS = await getQuickJS()
        const vm = QuickJS.newContext()
        
        // `console.log`
        const logHandle = vm.newFunction("log", (...args) => {
        const nativeArgs = args.map(vm.dump)
        console.log("QuickJS:", ...nativeArgs)
        })

        // Partially implement `console` object
        const consoleHandle = vm.newObject()
        
        vm.setProp(consoleHandle, "log", logHandle)
        vm.setProp(vm.global, "console", consoleHandle)
        consoleHandle.dispose()
        logHandle.dispose()
        
        const result = vm.unwrapResult(vm.evalCode(code))
        const returnValue = vm.getString(result);

        result.dispose()
        return returnValue;
    } catch(e) {
        return e.message;
    }
}