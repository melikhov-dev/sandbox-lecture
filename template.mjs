export const template = ({result,code,sandboxType}) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sandbox</title>
</head>
<body>
    <form action="http://localhost:3000/" method="post" id="sandbox-form">
        <label for="code">Code:</label><br>
        <textarea id="code" name="code" rows="10" cols="50">${code}</textarea><br>

        
        <input type="radio" id="sadbox-eval" name="sadbox" value="eval" ${sandboxType === 'eval' ? 'checked' : ''}>
        <label for="sadbox-eval">eval</label><br>

        
        <input type="radio" id="sadbox-vm" name="sadbox" value="vm" ${sandboxType === 'vm' ? 'checked' : ''}>
        <label for="sadbox-vm">vm</label><br>

        
        <input type="radio" id="sadbox-vm2" name="sadbox" value="vm2" ${sandboxType === 'vm2' ? 'checked' : ''}>
        <label for="sadbox-vm2">vm2</label><br>

        
        <input type="radio" id="sadbox-isolated-vm" name="sadbox" value="isolated-vm" ${sandboxType === 'isolated-vm' ? 'checked' : ''}>
        <label for="sadbox-isolated-vm">isolated-vm</label><br>

        
        <input type="radio" id="sadbox-quickjs-emscripten" name="sadbox" value="quickjs-emscripten" ${sandboxType === 'quickjs-emscripten' ? 'checked' : ''}>
        <label for="sadbox-quickjs-emscripten">quickjs-emscripten</label><br>

        <input type="submit" value="Run">
    </form>
    ${result}
</body>
</html>`;
















